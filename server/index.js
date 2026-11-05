import express from 'express';
import cors from 'cors';
import { 
  createPaymentOrder, 
  verifyPaymentSignature, 
  handlePaymentWebhook, 
  getAdminPaymentData, 
  generateTestSignature,
  COURSE_PAYMENT_CONFIG, 
  RAZORPAY_CONFIG 
} from './paymentService.js';

const app = express();
const PORT = process.env.PORT || 5001;

// CORS setup to allow requests from local frontend
app.use(cors({
  origin: true,
  credentials: true
}));

// Raw body parser for webhook signature verification
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf ? buf.toString() : '';
  }
}));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: '3D AI Studio Payment Server', time: new Date().toISOString() });
});

// Gateway config endpoint
app.get('/api/payment/config', (req, res) => {
  res.json({
    courseId: COURSE_PAYMENT_CONFIG.courseId,
    courseTitle: COURSE_PAYMENT_CONFIG.courseTitle,
    amountPaise: COURSE_PAYMENT_CONFIG.amountPaise,
    amountRupees: COURSE_PAYMENT_CONFIG.amountRupees,
    currency: COURSE_PAYMENT_CONFIG.currency,
    keyId: RAZORPAY_CONFIG.keyId,
    isLive: RAZORPAY_CONFIG.isLive,
    mode: RAZORPAY_CONFIG.isLive ? 'LIVE' : 'SANDBOX'
  });
});

// 1. Create Order
app.post('/api/payment/create-order', async (req, res) => {
  try {
    const result = await createPaymentOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error('API Error /create-order:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// 2. Verify Payment
app.post('/api/payment/verify', async (req, res) => {
  try {
    const { orderId, paymentId, signature, studentData } = req.body;
    const result = await verifyPaymentSignature({
      orderId,
      paymentId,
      signature,
      studentData
    });
    res.json(result);
  } catch (err) {
    console.error('API Error /verify:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// 3. Test Signature Generator (for secure client-side sandbox validation testing)
app.post('/api/payment/test-signature', (req, res) => {
  try {
    const { orderId, paymentId } = req.body;
    if (!orderId || !paymentId) {
      return res.status(400).json({ error: 'orderId and paymentId required' });
    }
    const signature = generateTestSignature(orderId, paymentId);
    res.json({ orderId, paymentId, signature });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Webhook Handler
app.post('/api/payment/webhook', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'];
    const result = await handlePaymentWebhook(req.rawBody || JSON.stringify(req.body), signature);
    res.json(result);
  } catch (err) {
    console.error('API Error /webhook:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// 5. Admin Payment Analytics & Student Records (Strictly Protected behind Authorization)
app.get('/api/admin/payments', (req, res) => {
  const adminToken = req.headers['x-admin-token'] || req.query.admin_token;
  const validSecret = process.env.ADMIN_SECRET_KEY || 'admin_secret_3dai_2026';

  if (adminToken !== validSecret) {
    return res.status(403).json({ error: 'Access Denied: Administrator authentication token required.' });
  }

  try {
    const data = getAdminPaymentData();
    res.json(data);
  } catch (err) {
    console.error('API Error /admin/payments:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`⚡ 3D AI Studio Payment Server running on http://127.0.0.1:${PORT}`);
});

export default app;

