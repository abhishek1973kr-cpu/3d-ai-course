import React from 'react';
import { 
  AlertTriangle, 
  RotateCcw, 
  ArrowLeft, 
  ShieldAlert, 
  HelpCircle,
  MessageSquare,
  Lock
} from 'lucide-react';

export default function PaymentFailedPage({ onNavigate, orderId = '', formData = null, error = '' }) {
  const handleRetry = () => {
    // Navigate back to checkout with saved formData preserved so user doesn't retype
    onNavigate('checkout', { formData });
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto space-y-8">
      
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-red-500/30 text-center relative overflow-hidden shadow-2xl shadow-red-950/40 space-y-6">
        
        {/* Warning Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-950/80 border-2 border-red-400 text-red-400">
          <AlertTriangle className="w-10 h-10" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest bg-red-950/60 px-3.5 py-1 rounded-full border border-red-500/30 inline-block">
            PAYMENT INCOMPLETE OR CANCELLED
          </span>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white">
            Course Access Not Unlocked Yet
          </h1>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            The transaction for <strong>₹9.00</strong> was cancelled, interrupted, or declined by your bank/UPI app. No money was deducted for the masterclass pass.
          </p>
        </div>

        {/* Technical Reference Box */}
        <div className="p-4 rounded-xl bg-black/50 border border-white/5 text-left text-xs space-y-2 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-400">Order Reference:</span>
            <span className="text-cyan-300">{orderId || 'order_INTERRUPTED_SESSION'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Status:</span>
            <span className="text-red-400 font-bold">UNPAID / PENDING</span>
          </div>
          {error && (
            <div className="pt-1 border-t border-white/5 text-slate-400 text-[11px]">
              Reason: <span className="text-red-300">{error}</span>
            </div>
          )}
        </div>

        {/* Course Lock Reminder */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-left">
          <Lock className="w-5 h-5 text-slate-400 shrink-0" />
          <p className="text-xs text-slate-300">
            Per academy security rules, all 12 modules remain locked until the ₹9 one-time payment is confirmed server-side.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={handleRetry}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-black text-sm text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-black" />
            <span>RETRY PAYMENT (₹9 ONLY)</span>
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-display font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>

      </div>

      {/* Support help */}
      <div className="text-center text-xs text-slate-400 space-y-1">
        <p>Did your bank deduct money but the course didn't unlock?</p>
        <p className="text-slate-300">
          Our automated webhook reconciles UPI transactions within 5 minutes. You can also contact support at{' '}
          <strong className="text-cyan-400">payments@3dstudio.academy</strong>.
        </p>
      </div>

    </div>
  );
}

