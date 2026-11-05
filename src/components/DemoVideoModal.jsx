import React from 'react';
import { 
  Lock, 
  Sparkles, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  Film, 
  Play, 
  CheckCircle2, 
  Zap,
  Box
} from 'lucide-react';

export default function DemoVideoModal({ isOpen, onClose, onStartLearning }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Glow effect */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0b0c19] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 overflow-hidden text-center space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D Holographic Lock & Video Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-950 via-purple-950 to-[#07070e] border-2 border-cyan-400/80 flex items-center justify-center shadow-neon-cyan animate-bounce-slow">
          <Lock className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,245,212,0.8)]" />
          <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-purple-900 border border-purple-400 flex items-center justify-center text-xs text-white">
            <Film className="w-3.5 h-3.5 text-cyan-300" />
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            DEMO LESSON & FULL COURSE ACCESS
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
            Unlock Your Complete <br />
            <span className="cyber-gradient-text">
              3D AI Masterclass for Just ₹9
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            All course video demonstrations, Blender practical workflows, and AI generation sessions are reserved for enrolled students. Unlock the entire masterclass now for a one-time fee of <strong className="text-cyan-300 font-bold font-mono">₹9 ONLY</strong>.
          </p>
        </div>

        {/* Key Inclusions Preview */}
        <div className="grid grid-cols-2 gap-2 text-left text-xs bg-black/40 border border-white/5 p-3.5 rounded-2xl">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>All 72 Video Lessons</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Meshy AI & Blender 4.x</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Runway Gen-3 Videos</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Lifetime Permanent Pass</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-3 pt-1">
          <button
            onClick={() => {
              onClose();
              onStartLearning();
            }}
            className="w-full py-4 rounded-xl font-display font-black text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <Lock className="w-4 h-4 text-black" />
            <span>UNLOCK FULL COURSE – PAY ₹9</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <p className="text-[11px] font-mono text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Instant Access • No Subscriptions • Zero Hidden Fees</span>
          </p>
        </div>

      </div>
    </div>
  );
}
