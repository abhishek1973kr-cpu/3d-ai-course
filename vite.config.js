import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { 
  createPaymentOrder, 
  verifyPaymentSignature, 
  getAdminPaymentData, 
  generateTestSignature, 
  COURSE_PAYMENT_CONFIG, 
  RAZORPAY_CONFIG 
} from './server/paymentService.js';

function paymentApiPlugin() {
  const middleware = async (req, res, next) => {
    // Check if this is an API request
    const urlObj = new URL(req.url, 'http://127.0.0.1:5173');
    const pathname = urlObj.pathname.replace(/\/+$/, '') || '/';

    if (!pathname.startsWith('/api')) {
      return next();
    }

    // Always set JSON and CORS headers on API requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-token');
    res.setHeader('Content-Type', 'application/json');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
      return;
    }

    const parseBody = () => new Promise((resolve) => {
      if (req.body && typeof req.body === 'object') {
        return resolve(req.body);
      }
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          resolve(body ? JSON.parse(body) : {});
        } catch (e) {
          resolve({});
        }
      });
      req.on('error', () => resolve({}));
    });

    try {
      if ((pathname === '/api/payment/config' || pathname === '/api/config') && req.method === 'GET') {
        res.end(JSON.stringify({
          courseId: COURSE_PAYMENT_CONFIG.courseId,
          courseTitle: COURSE_PAYMENT_CONFIG.courseTitle,
          amountPaise: COURSE_PAYMENT_CONFIG.amountPaise,
          amountRupees: COURSE_PAYMENT_CONFIG.amountRupees,
          currency: COURSE_PAYMENT_CONFIG.currency,
          keyId: RAZORPAY_CONFIG.keyId,
          isLive: RAZORPAY_CONFIG.isLive,
          mode: RAZORPAY_CONFIG.isLive ? 'LIVE' : 'SANDBOX'
        }));
        return;
      }

      if ((pathname === '/api/payment/create-order' || pathname === '/api/create-order') && req.method === 'POST') {
        console.log('Payment API hit');
        const body = await parseBody();
        const result = await createPaymentOrder(body);
        res.end(JSON.stringify(result));
        return;
      }

      if ((pathname === '/api/payment/verify' || pathname === '/api/verify') && req.method === 'POST') {
        const body = await parseBody();
        const result = await verifyPaymentSignature(body);
        res.end(JSON.stringify(result));
        return;
      }

      if ((pathname === '/api/payment/test-signature' || pathname === '/api/test-signature') && req.method === 'POST') {
        const body = await parseBody();
        const signature = generateTestSignature(body.orderId, body.paymentId);
        res.end(JSON.stringify({ orderId: body.orderId, paymentId: body.paymentId, signature }));
        return;
      }

      if (pathname === '/api/admin/payments' && req.method === 'GET') {
        const adminToken = req.headers['x-admin-token'] || urlObj.searchParams.get('admin_token');
        const validSecret = process.env.ADMIN_SECRET_KEY || 'admin_secret_3dai_2026';

        if (adminToken !== validSecret) {
          res.statusCode = 403;
          res.end(JSON.stringify({ error: 'Access Denied: Administrator authentication token required.' }));
          return;
        }

        const data = getAdminPaymentData();
        res.end(JSON.stringify(data));
        return;
      }

      // Safe JSON 404 for unmatched /api routes (prevent falling through to HTML index.html)
      res.statusCode = 404;
      res.end(JSON.stringify({ error: `API route not found: ${pathname}` }));
    } catch (err) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: err.message || 'Payment server error' }));
    }
  };

  return {
    name: 'payment-api-plugin',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    }
  };
}

export default defineConfig({
  plugins: [react(), paymentApiPlugin()],
  server: {
    port: 5173,
    host: '127.0.0.1',
    strictPort: true
  },
  preview: {
    port: 5173,
    host: '127.0.0.1',
    strictPort: true
  }
});
