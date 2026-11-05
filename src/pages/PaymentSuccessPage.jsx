import React, { useEffect } from 'react';
import { useCourse } from '../context/CourseContext';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Printer, 
  ShieldCheck, 
  BookOpen, 
  Terminal, 
  Award,
  LockOpen
} from 'lucide-react';

export default function PaymentSuccessPage({ onNavigate, studentData = null, receiptData = null }) {
  const { currentUser, openReceiptModal } = useCourse();

  const student = studentData || currentUser;
  const receipt = receiptData || {
    invoiceNumber: student?.invoiceNumber || 'INV-3DAI-2026-001',
    orderId: student?.orderId || 'order_Oq7Yt8K1m9Z4L2',
    paymentId: student?.paymentId || 'pay_Oq7Z9a3B4C5D6E',
    amount: 9,
    currency: 'INR',
    date: new Date().toISOString()
  };

  useEffect(() => {
    // Fire double celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f5d4', '#7c3aed', '#00d2ff', '#f59e0b']
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.7 },
          colors: ['#10b981', '#3b82f6', '#ec4899']
        });
      }, 400);
    } catch (e) {}
  }, []);

  const handleStartLearning = () => {
    onNavigate('learn');
  };

  const handleViewReceipt = () => {
    openReceiptModal({
      ...receipt,
      studentName: student?.name,
      studentId: student?.studentId,
      email: student?.email,
      phone: student?.phone
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* Top Celebration Card */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/40 text-center relative overflow-hidden shadow-2xl shadow-cyan-950/60 space-y-6">
        
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Check Icon */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-950/80 border-2 border-emerald-400 text-emerald-400 shadow-neon-cyan animate-bounce-slow">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Main Headline */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-500/30 inline-block">
            PAYMENT VERIFIED • LIFETIME UNLOCKED
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            CONGRATULATIONS! <br />
            <span className="cyber-gradient-text">
              YOUR COURSE IS UNLOCKED.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Welcome to 3D AI Studio Academy! Your payment of <strong>₹9.00</strong> has been verified successfully. Your account is activated with lifetime access.
          </p>
        </div>

        {/* Official Student Credentials Card */}
        <div className="max-w-xl mx-auto bg-black/50 border border-white/10 rounded-2xl p-6 text-left space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              OFFICIAL ENROLLMENT CREDENTIALS
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
              ACTIVE PASS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Student Name:</span>
              <strong className="text-white text-sm">{student?.name || 'Student'}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Unique Student ID:</span>
              <strong className="text-cyan-300 font-mono text-sm">{student?.studentId || 'STU-2026-8921'}</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Registered Email:</span>
              <span className="text-slate-200 font-mono">{student?.email || 'student@example.com'}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Registered Mobile:</span>
              <span className="text-slate-200 font-mono">{student?.phone || '+91 98765 43210'}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Payment Amount:</span>
              <strong className="text-cyan-400 text-sm">₹9.00 (One-Time)</strong>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Payment Status:</span>
              <span className="text-emerald-400 font-bold font-mono">SUCCESS (PAID)</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Course Access:</span>
              <span className="text-purple-300 font-bold">LIFETIME UNLIMITED</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px]">Invoice Number:</span>
              <span className="text-slate-300 font-mono">{receipt?.invoiceNumber || 'INV-3DAI-2026-001'}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleStartLearning}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-black text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-black" />
            <span>START LEARNING NOW</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={handleViewReceipt}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-display font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Tax Invoice Receipt</span>
          </button>
        </div>

      </div>

      {/* Unlocked Deliverables Quick Access */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div 
          onClick={() => onNavigate('learn')}
          className="p-5 rounded-2xl bg-[#0c0c18] border border-cyan-500/20 hover:border-cyan-500/50 cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <LockOpen className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-white text-sm">12 Modules Unlocked</h4>
          <p className="text-xs text-slate-400">All 72 practical lessons and video scripts are now ready.</p>
        </div>

        <div 
          onClick={() => onNavigate('prompts')}
          className="p-5 rounded-2xl bg-[#0c0c18] border border-purple-500/20 hover:border-purple-500/50 cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-white text-sm">30+ AI Prompt Library</h4>
          <p className="text-xs text-slate-400">Production-tested prompts with 1-click copy for immediate use.</p>
        </div>

        <div 
          onClick={() => onNavigate('dashboard')}
          className="p-5 rounded-2xl bg-[#0c0c18] border border-emerald-500/20 hover:border-emerald-500/50 cursor-pointer transition-all space-y-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-white text-sm">Student Dashboard</h4>
          <p className="text-xs text-slate-400">Track progress, quiz scores, homework, and claim certificate.</p>
        </div>
      </div>

    </div>
  );
}

