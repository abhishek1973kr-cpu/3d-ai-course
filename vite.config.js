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
  return {
    name: 'payment-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api/')) {
          return next();
        }

        const parseBody = () => new Promise((resolve) => {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              resolve(body ? JSON.parse(body) : {});
            } catch (e) {
              resolve({});
            }
          });
        });

        res.setHeader('Content-Type', 'application/json');

        try {
          if (req.url === '/api/payment/config' && req.method === 'GET') {
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

          if (req.url === '/api/payment/create-order' && req.method === 'POST') {
            const body = await parseBody();
            const result = await createPaymentOrder(body);
            res.end(JSON.stringify(result));
            return;
          }

          if (req.url === '/api/payment/verify' && req.method === 'POST') {
            const body = await parseBody();
            const result = await verifyPaymentSignature(body);
            res.end(JSON.stringify(result));
            return;
          }

          if (req.url === '/api/payment/test-signature' && req.method === 'POST') {
            const body = await parseBody();
            const signature = generateTestSignature(body.orderId, body.paymentId);
            res.end(JSON.stringify({ orderId: body.orderId, paymentId: body.paymentId, signature }));
            return;
          }

          if (req.url.startsWith('/api/admin/payments') && req.method === 'GET') {
            const urlObj = new URL(req.url, 'http://localhost');
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

          next();
        } catch (err) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
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
