import React from 'react';
import { Sparkles, Terminal, ShieldCheck, BookOpen, ExternalLink, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-purple-900/30 bg-[#05050b] text-slate-400 text-xs">
      {/* Upper Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 p-0.5 shadow-neon-cyan/30">
              <div className="w-full h-full bg-[#07070e] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 text-xl">
                  3D
                </span>
              </div>
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-wider text-white">
                3D AI STUDIO
              </span>
              <p className="text-[10px] font-mono text-cyan-400">
                ZERO TO PRO MASTERCLASS
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-sm">
            The premier international academy empowering beginners and professionals to create cinematic 3D animations, AI-generated videos, and Hollywood-grade visual effects from scratch.
          </p>

          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-900/40 max-w-sm">
            <span className="text-[10px] text-purple-400 uppercase tracking-widest font-mono block mb-0.5">
              Academy Credo
            </span>
            <p className="text-slate-200 font-display font-semibold italic text-sm">
              "Imagine It. Create It. Animate It."
            </p>
          </div>
        </div>

        {/* Column 2: Academy Curriculum */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-display font-bold uppercase tracking-wider text-xs">
            Core Curriculum
          </h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 1: Intro to 3D AI
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 2: AI Prompt Engineering
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 4: Meshy 3D Models
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 6: Blender 4.x Suite
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 8: Runway AI Video
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                Module 12: Final Capstone
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Platform & Student Hub */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-display font-bold uppercase tracking-wider text-xs">
            Student Platform
          </h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('learn')} className="hover:text-cyan-400 transition-colors">
                Interactive Classroom
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('prompts')} className="hover:text-cyan-400 transition-colors">
                Ready-to-Use Prompt Library
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('dashboard')} className="hover:text-cyan-400 transition-colors">
                Student Progress Dashboard
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('dashboard')} className="hover:text-cyan-400 transition-colors">
                Verifiable Certificates
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('checkout')} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-400 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unlock Full Course (₹9)</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Official Tools & Docs */}
        <div className="space-y-3">
          <h4 className="text-slate-200 font-display font-bold uppercase tracking-wider text-xs">
            Official Tool Docs
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="https://blender.org" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>Blender 4.x Official</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://meshy.ai" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>Meshy AI 3D Generator</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://runwayml.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>RunwayML Gen-3 Engine</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://mixamo.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>Mixamo Character Rigging</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
            <li>
              <a href="https://capcut.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <span>CapCut Desktop Suite</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-slate-900 bg-[#030307] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-500">
            © 2026 3D AI STUDIO. All Rights Reserved. Built for the Next Generation of Filmmakers.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-300">About Academy</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">Support & Contact</button>
            <span>•</span>
            <span className="text-cyan-400/80 font-mono">100% Practical Working E-Learning Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

