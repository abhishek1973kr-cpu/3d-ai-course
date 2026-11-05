import React from 'react';
import { Sparkles, Award, ShieldCheck, Heart, Users, Target, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-4 h-4" />
          <span>ABOUT 3D AI STUDIO</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
          Democratizing Hollywood-Grade 3D AI Production
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          We believe the next James Cameron, Pixar storyteller, or viral commercial director won't need a $200 million studio budget. They will need a laptop, imagination, and the mastery of generative 3D neural workflows.
        </p>
      </div>

      {/* The 3 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-panel border border-cyan-500/20 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">100% Practical Workflow</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            No empty theory or toy demos. We teach exact commercial pipelines: Meshy AI 3D meshes, Blender lighting, Mixamo skeletal rigging, and Runway Gen-3 video synthesis.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel border border-purple-500/20 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Hindi + English Technical Fusion</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Complex 3D math and computer graphics concepts decoded into natural Hindi explanations while preserving industry-standard English terminology for global employability.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel border border-emerald-500/20 space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Verified Certification</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our diplomas are cryptographically unique and awarded strictly after passing all curriculum milestones and hands-on capstone project assessments.
          </p>
        </div>
      </div>

      {/* Instructor & Founding Team */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12142d] to-[#070712] border border-slate-800 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-display font-black text-white text-center">
          Meet Your Master Instructor & Guild
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-black/40 border border-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
            alt="Instructor Aryan Sharma" 
            className="w-24 h-24 rounded-2xl object-cover border-2 border-cyan-400 shadow-neon-cyan/30"
          />
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white">Aryan Sharma & Global AI Video Guild</h4>
            <p className="text-xs text-cyan-400 font-mono">Senior 3D AI Director & VFX Supervisor</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              With over 9 years in computer graphics and 3 years pioneering generative diffusion video models, Aryan has directed viral commercial campaigns and trained over 8,000 creators worldwide.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('learn')}
            className="px-8 py-3.5 rounded-xl font-display font-bold text-sm cyber-btn-primary"
          >
            Start Learning with Aryan
          </button>
        </div>
      </div>

    </div>
  );
}

