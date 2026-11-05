import React from 'react';
import { useCourse } from '../context/CourseContext';
import { 
  X, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Sparkles,
  Award
} from 'lucide-react';

export default function PaymentReceiptModal({ receipt, isOpen, onClose }) {
  if (!isOpen || !receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0c0c16] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#121222]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="font-display font-bold text-white text-base">
              Official Tax Invoice & Enrollment Receipt
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-sm print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-black font-display font-black text-sm">
                  3D
                </span>
                <span className="font-display font-extrabold text-lg text-white">
                  3D AI STUDIO ACADEMY
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Tax Invoice / Enrollment Acknowledgement
              </p>
              <p className="text-[11px] text-slate-500">
                GSTIN: 29AAEC38491K1Z2 • CIN: U72900KA2026PTC192834
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> PAID IN FULL
              </span>
              <p className="text-xs text-slate-300 font-mono">
                Invoice No: <strong className="text-white">{receipt.invoiceNumber || 'INV-3DAI-2026-001'}</strong>
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Date: {new Date(receipt.date || Date.now()).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Student & Course Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Billed To (Student)
              </span>
              <p className="font-bold text-white text-base">{receipt.studentName || 'Student'}</p>
              <p className="text-xs text-slate-300 font-mono">ID: {receipt.studentId || 'STU-2026-8921'}</p>
              <p className="text-xs text-slate-400">{receipt.email || 'student@3dstudio.academy'}</p>
              {receipt.phone && <p className="text-xs text-slate-400 font-mono">{receipt.phone}</p>}
            </div>

            <div className="space-y-1 sm:text-right">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Transaction Reference
              </span>
              <p className="text-xs text-slate-300 font-mono">
                Order ID: <span className="text-cyan-300">{receipt.orderId}</span>
              </p>
              <p className="text-xs text-slate-300 font-mono">
                Payment ID: <span className="text-purple-300">{receipt.paymentId}</span>
              </p>
              <p className="text-xs text-slate-400">
                Gateway: Razorpay Automated Secure Checkout
              </p>
              <p className="text-xs text-emerald-400 font-semibold">
                Access Tier: Lifetime Masterclass Pass
              </p>
            </div>
          </div>

          {/* Line Item Table */}
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#141426] text-slate-300 font-mono border-b border-white/10 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4 text-center">Qty</th>
                  <th className="py-3 px-4 text-right">Rate</th>
                  <th className="py-3 px-4 text-right">Amount (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-white text-sm">
                      {receipt.courseTitle || '3D AI STUDIO – ZERO TO PRO MASTERCLASS'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Complete 12-Module Curriculum • 72 Lessons • 30+ AI Prompts • Lifetime Access
                    </p>
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono">1</td>
                  <td className="py-3.5 px-4 text-right font-mono text-slate-400 line-through">₹4,999.00</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-cyan-300">₹7.63</td>
                </tr>
                <tr className="bg-white/[0.01]">
                  <td colSpan="3" className="py-2 px-4 text-right text-slate-400 text-[11px]">IGST @ 18%:</td>
                  <td className="py-2 px-4 text-right font-mono text-slate-300">₹1.37</td>
                </tr>
                <tr className="bg-cyan-950/20 font-bold border-t border-cyan-500/20">
                  <td colSpan="3" className="py-3 px-4 text-right text-cyan-300 text-sm">Total Paid:</td>
                  <td className="py-3 px-4 text-right font-mono text-base text-cyan-400">₹9.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Guarantee / Footer Note */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Lifetime Course Guarantee
              </span>
              <p className="text-slate-400 text-[11px]">
                No recurring fees or monthly charges. All future course additions in these 12 modules remain free.
              </p>
            </div>
            <div className="w-16 h-16 rounded-xl border border-cyan-500/30 bg-[#07070e] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] text-cyan-400">
              <span className="text-[14px]">🛡️</span>
              <span>VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0f0f1d] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Transaction Secured by 256-Bit SSL
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-bold transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

