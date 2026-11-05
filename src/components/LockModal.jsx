import React from 'react';
import { 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  BookOpen, 
  Film, 
  Terminal, 
  Award,
  Zap
} from 'lucide-react';

export default function LockModal({ isOpen, onClose, onUnlock, featureTitle = 'This Content' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#0b0c19] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 overflow-hidden text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D Floating Lock Graphic */}
        <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-950 via-purple-950 to-[#07070e] border-2 border-cyan-400/80 flex items-center justify-center shadow-neon-cyan animate-bounce-slow">
          <Lock className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,245,212,0.8)]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping" />
        </div>

        {/* Headlines */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            LOCKED MASTERCLASS CONTENT
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
            Unlock Your Complete <br />
            <span className="cyber-gradient-text">
              3D AI Masterclass for Just ₹9
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {featureTitle} is locked. Pay <strong className="text-cyan-300 font-bold font-mono">₹9 ONCE</strong> to get instant lifetime access to all 12 modules, 72 lessons, 30+ AI prompts, and completion certificate.
          </p>
        </div>

        {/* What You Get Highlights */}
        <div className="grid grid-cols-2 gap-2.5 text-left text-xs bg-black/40 border border-white/5 p-3.5 rounded-2xl">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>All 12 Course Modules</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>72 Guided Video Lessons</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>30+ Production Prompts</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Blender & Meshy AI Files</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Verified Certificate</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Lifetime Pass (No Sub)</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onUnlock();
            }}
            className="w-full py-4 rounded-xl font-display font-black text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <Lock className="w-4 h-4 text-black" />
            <span>UNLOCK FULL COURSE – PAY ₹9</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <p className="text-[11px] font-mono text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>One-Time ₹9 Payment • Instant Automated Unlock</span>
          </p>
        </div>

      </div>
    </div>
  );
}

