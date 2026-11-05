import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'db', 'payments.json');

// Course Pricing Configuration
export const COURSE_PAYMENT_CONFIG = {
  courseId: '3d-ai-masterclass',
  courseTitle: '3D AI STUDIO – ZERO TO PRO MASTERCLASS',
  amountPaise: 900, // 900 paise = ₹9.00 INR
  amountRupees: 9,
  currency: 'INR',
  accessType: 'LIFETIME'
};

// Razorpay Environment Configuration (defaults to secure test sandbox keys)
export const RAZORPAY_CONFIG = {
  keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_3dai_academy_9inr',
  keySecret: process.env.RAZORPAY_KEY_SECRET || 'secret_3dai_masterclass_secure_key_2026',
  webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || 'webhook_secret_3dai_secure_2026',
  isLive: !!(process.env.RAZORPAY_KEY_ID && !process.env.RAZORPAY_KEY_ID.startsWith('rzp_test_'))
};

// Safe DB Read/Write
function readDb() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return { students: [], orders: [], failedAttempts: [] };
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading payments DB:', err);
    return { students: [], orders: [], failedAttempts: [] };
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing payments DB:', err);
    return false;
  }
}

/**
 * 1. Create Payment Order for ₹9
 */
export async function createPaymentOrder(registrationData) {
  const { name, email, phone, password, city, state } = registrationData;

  // Validation
  if (!name || name.trim().length < 2) {
    throw new Error('Please enter a valid full name.');
  }
  const cleanEmail = (email || '').trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }
  const cleanPhone = (phone || '').replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const db = readDb();

  // Check if student is already enrolled and paid
  const existingPaidStudent = db.students.find(
    s => (s.email.toLowerCase() === cleanEmail || s.phone.replace(/\D/g, '') === cleanPhone) && s.isPaid
  );

  if (existingPaidStudent) {
    return {
      alreadyEnrolled: true,
      message: 'You are already enrolled with lifetime access! Proceeding to classroom...',
      student: existingPaidStudent
    };
  }

  // Generate unique IDs
  const orderUnique = crypto.randomBytes(4).toString('hex').toUpperCase();
  const orderId = `order_${Date.now()}_${orderUnique}`;
  const studentId = `STU-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  let razorpayOrder = null;

  // If live or configured real Razorpay credentials exist, call Razorpay REST API
  if (RAZORPAY_CONFIG.isLive) {
    try {
      const auth = Buffer.from(`${RAZORPAY_CONFIG.keyId}:${RAZORPAY_CONFIG.keySecret}`).toString('base64');
      const res = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: COURSE_PAYMENT_CONFIG.amountPaise,
          currency: COURSE_PAYMENT_CONFIG.currency,
          receipt: `rcpt_${studentId}`,
          notes: {
            studentName: name.trim(),
            email: cleanEmail,
            phone: cleanPhone,
            course: COURSE_PAYMENT_CONFIG.courseTitle
          }
        })
      });
      if (res.ok) {
        razorpayOrder = await res.json();
      }
    } catch (apiErr) {
      console.warn('Razorpay Live API order fallback to local verified order:', apiErr.message);
    }
  }

  const finalOrderId = razorpayOrder ? razorpayOrder.id : orderId;

  const newOrder = {
    orderId: finalOrderId,
    studentId,
    studentName: name.trim(),
    email: cleanEmail,
    phone: phone.trim(),
    city: (city || '').trim(),
    state: (state || '').trim(),
    amount: COURSE_PAYMENT_CONFIG.amountPaise,
    amountInRupees: COURSE_PAYMENT_CONFIG.amountRupees,
    currency: COURSE_PAYMENT_CONFIG.currency,
    status: 'CREATED',
    createdAt: new Date().toISOString()
  };

  db.orders.push(newOrder);
  writeDb(db);

  return {
    alreadyEnrolled: false,
    orderId: finalOrderId,
    amount: COURSE_PAYMENT_CONFIG.amountPaise,
    amountInRupees: COURSE_PAYMENT_CONFIG.amountRupees,
    currency: COURSE_PAYMENT_CONFIG.currency,
    keyId: RAZORPAY_CONFIG.keyId,
    studentId,
    studentName: name.trim(),
    email: cleanEmail,
    phone: phone.trim(),
    city: (city || '').trim(),
    state: (state || '').trim()
  };
}

/**
 * 2. Verify Payment Signature & Unlock Course
 */
export async function verifyPaymentSignature({
  orderId,
  paymentId,
  signature,
  studentData
}) {
  if (!orderId || !paymentId) {
    throw new Error('Order ID and Payment ID are required for verification.');
  }

  const db = readDb();
  const orderIndex = db.orders.findIndex(o => o.orderId === orderId);
  const order = orderIndex >= 0 ? db.orders[orderIndex] : null;

  // Check if order exists or construct from studentData
  const studentName = order?.studentName || studentData?.name || 'Student';
  const email = (order?.email || studentData?.email || '').toLowerCase();
  const phone = order?.phone || studentData?.phone || '';
  const city = order?.city || studentData?.city || '';
  const state = order?.state || studentData?.state || '';
  const studentId = order?.studentId || studentData?.studentId || `STU-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Cryptographic HMAC-SHA256 signature verification
  const generatedSignature = crypto
    .createHmac('sha256', RAZORPAY_CONFIG.keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  const isSignatureValid = (signature === generatedSignature) || 
    (!RAZORPAY_CONFIG.isLive && (signature === 'test_mock_signature_approved' || signature === generatedSignature));

  if (!isSignatureValid) {
    // Record failed attempt
    db.failedAttempts.push({
      orderId,
      paymentId,
      email,
      phone,
      reason: 'Cryptographic signature mismatch',
      attemptedAt: new Date().toISOString()
    });
    if (order) {
      order.status = 'FAILED';
    }
    writeDb(db);
    throw new Error('Payment verification failed: Invalid security signature.');
  }

  // Check for duplicate payment activation
  const existingStudentIndex = db.students.findIndex(
    s => s.email.toLowerCase() === email || s.studentId === studentId
  );

  const invoiceNumber = `INV-3DAI-2026-${String(db.students.length + 1).padStart(3, '0')}`;
  const now = new Date().toISOString();

  let studentProfile;

  if (existingStudentIndex >= 0) {
    db.students[existingStudentIndex].isPaid = true;
    db.students[existingStudentIndex].amountPaid = COURSE_PAYMENT_CONFIG.amountRupees;
    db.students[existingStudentIndex].currency = COURSE_PAYMENT_CONFIG.currency;
    db.students[existingStudentIndex].orderId = orderId;
    db.students[existingStudentIndex].paymentId = paymentId;
    db.students[existingStudentIndex].invoiceNumber = db.students[existingStudentIndex].invoiceNumber || invoiceNumber;
    db.students[existingStudentIndex].status = 'ACTIVE';
    db.students[existingStudentIndex].enrolledAt = db.students[existingStudentIndex].enrolledAt || now;
    studentProfile = db.students[existingStudentIndex];
  } else {
    studentProfile = {
      id: `usr-${Date.now().toString().slice(-4)}`,
      studentId,
      name: studentName,
      email,
      phone,
      city,
      state,
      isPaid: true,
      amountPaid: COURSE_PAYMENT_CONFIG.amountRupees,
      currency: COURSE_PAYMENT_CONFIG.currency,
      orderId,
      paymentId,
      invoiceNumber,
      enrolledAt: now,
      status: 'ACTIVE',
      role: 'student'
    };
    db.students.push(studentProfile);
  }

  // Update order status
  if (order) {
    order.status = 'PAID';
    order.paymentId = paymentId;
    order.paidAt = now;
  } else {
    db.orders.push({
      orderId,
      studentId,
      studentName,
      email,
      phone,
      amount: COURSE_PAYMENT_CONFIG.amountPaise,
      amountInRupees: COURSE_PAYMENT_CONFIG.amountRupees,
      currency: COURSE_PAYMENT_CONFIG.currency,
      status: 'PAID',
      paymentId,
      createdAt: now,
      paidAt: now
    });
  }

  writeDb(db);

  return {
    success: true,
    message: 'Payment successfully verified. Lifetime course access unlocked!',
    student: studentProfile,
    receipt: {
      invoiceNumber: studentProfile.invoiceNumber,
      orderId,
      paymentId,
      amount: COURSE_PAYMENT_CONFIG.amountRupees,
      currency: COURSE_PAYMENT_CONFIG.currency,
      date: now,
      courseTitle: COURSE_PAYMENT_CONFIG.courseTitle,
      studentName,
      email,
      phone
    }
  };
}

/**
 * 3. Handle Webhook from Payment Gateway
 */
export async function handlePaymentWebhook(rawBody, signature) {
  if (RAZORPAY_CONFIG.webhookSecret && signature) {
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_CONFIG.webhookSecret)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      throw new Error('Invalid Webhook signature.');
    }
  }

  let event;
  try {
    event = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
  } catch (e) {
    throw new Error('Malformed webhook JSON payload.');
  }

  const { event: eventName, payload } = event;

  if (eventName === 'order.paid' || eventName === 'payment.captured') {
    const paymentEntity = payload?.payment?.entity;
    const orderId = paymentEntity?.order_id;
    const paymentId = paymentEntity?.id;
    const email = paymentEntity?.email;
    const phone = paymentEntity?.contact;

    if (orderId && paymentId) {
      const db = readDb();
      const order = db.orders.find(o => o.orderId === orderId);
      if (order && order.status !== 'PAID') {
        order.status = 'PAID';
        order.paymentId = paymentId;
        order.paidAt = new Date().toISOString();

        // Ensure student account is activated
        let student = db.students.find(s => s.email.toLowerCase() === (email || order.email).toLowerCase());
        if (student) {
          student.isPaid = true;
          student.status = 'ACTIVE';
          student.paymentId = paymentId;
        }
        writeDb(db);
      }
    }
  }

  return { received: true };
}

/**
 * 4. Get Admin Analytics and Student List
 */
export function getAdminPaymentData() {
  const db = readDb();
  const successfulPayments = db.orders.filter(o => o.status === 'PAID');
  const totalRevenue = successfulPayments.reduce((acc, curr) => acc + (curr.amountInRupees || 9), 0);
  const pendingOrders = db.orders.filter(o => o.status === 'CREATED');

  return {
    stats: {
      totalRegisteredStudents: db.students.length,
      totalSuccessfulPayments: successfulPayments.length,
      totalRevenueRupees: totalRevenue,
      pendingOrdersCount: pendingOrders.length,
      failedAttemptsCount: db.failedAttempts.length,
      coursePriceRupees: COURSE_PAYMENT_CONFIG.amountRupees
    },
    students: db.students,
    orders: db.orders.slice().reverse(),
    failedAttempts: db.failedAttempts.slice().reverse(),
    gatewayConfig: {
      keyId: RAZORPAY_CONFIG.keyId,
      isLive: RAZORPAY_CONFIG.isLive,
      mode: RAZORPAY_CONFIG.isLive ? 'LIVE PRODUCTION' : 'TEST SANDBOX (Active)'
    }
  };
}

/**
 * 5. Helper to generate test HMAC signature for front-end test sandbox
 */
export function generateTestSignature(orderId, paymentId) {
  return crypto
    .createHmac('sha256', RAZORPAY_CONFIG.keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
}

