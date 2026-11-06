export default async function handler(req, res) {
  console.log('Payment API hit');

  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, city, state } = body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter a valid full name.' });
    }
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanPhone = (phone || '').replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_live_Twv4Gfb9EWPtlo';
    const keySecret = process.env.RAZORPAY_KEY_SECRET || 'WIk54od34mmRMFNBwZQKscwL';

    const studentId = `STU-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const receipt = `rcpt_${studentId}_${Date.now().toString().slice(-4)}`;

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const orderPayload = {
      amount: 900, // 900 paise = ₹9.00 INR
      currency: 'INR',
      receipt: receipt,
      payment_capture: 1,
      notes: {
        studentName: name.trim().slice(0, 50),
        email: cleanEmail.slice(0, 50),
        phone: cleanPhone.slice(0, 15),
        course: '3D AI Video Masterclass'
      }
    };

    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });

    const rzpData = await rzpRes.json().catch(() => ({}));

    if (!rzpRes.ok) {
      const errCode = rzpData.error?.code || `HTTP_${rzpRes.status}`;
      const errDesc = rzpData.error?.description || rzpData.error?.message || 'Razorpay order creation rejected.';
      console.error(`[Razorpay Error] ${errCode}: ${errDesc}`);
      return res.status(400).json({ error: `Razorpay Error (${errCode}): ${errDesc}` });
    }

    console.log(`[Order Created] ID: ${rzpData.id} | Amount: 900 INR`);

    return res.status(200).json({
      success: true,
      alreadyEnrolled: false,
      orderId: rzpData.id,
      amount: 900,
      amountInRupees: 9,
      currency: 'INR',
      status: rzpData.status || 'created',
      keyId: keyId,
      studentId: studentId,
      studentName: name.trim(),
      email: cleanEmail,
      phone: cleanPhone,
      city: (city || '').trim(),
      state: (state || '').trim()
    });
  } catch (err) {
    console.error('API Error /create-order:', err);
    return res.status(500).json({ error: err.message || 'Internal payment server error' });
  }
}
