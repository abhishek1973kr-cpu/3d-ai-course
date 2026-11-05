import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_MODULES, COURSE_DETAILS } from '../data/courseData';
import Hero3DCanvas from '../components/Hero3DCanvas';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Box, 
  Layers, 
  Film, 
  Video, 
  Cpu, 
  ExternalLink, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Users, 
  Clock, 
  Compass, 
  Monitor, 
  BookOpen,
  Lock,
  Zap,
  Check,
  ShieldCheck,
  Terminal,
  Smartphone
} from 'lucide-react';

// Curated 3D Thumbnails for each of the 12 modules
const MODULE_THUMBNAILS = {
  1: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", // 3D Neon Abstract
  2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80", // AI Prompt Matrix
  3: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80", // 3D Character Portrait
  4: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80", // 3D Mesh Wireframe
  5: "https://images.unsplash.com/photo-1633493106185-985474662bc4?auto=format&fit=crop&w=600&q=80", // 3D Texture Shader
  6: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80", // Blender Viewport
  7: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80", // 3D Animation Motion
  8: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80", // Cinematic Atmosphere
  9: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80", // Volumetric Lighting
  10: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80", // Video Editing Timeline
  11: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80", // 9:16 Social Media Reel
  12: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"  // Final Hollywood Capstone
};

export default function HomePage({ onNavigate }) {
  const { 
    currentUser, 
    setCurrentLessonId, 
    openLockModal,
    completedCount,
    totalLessonsCount
  } = useCourse();

  // FAQ accordion state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0);

  // Handle module click with strict ₹9 lock
  const handleModuleClick = (module) => {
    if (!currentUser?.isPaid) {
      openLockModal(`Module ${module.id}: ${module.title}`);
      return;
    }
    // If paid, open first lesson of the module
    if (module.lessons && module.lessons.length > 0) {
      setCurrentLessonId(module.lessons[0].id);
      onNavigate('learn');
    }
  };

  const handleDemoClick = () => {
    openLockModal('Demonstration Video & Practical Workflow');
  };

  const faqs = [
    {
      q: "Course ki total fees kitni hai? Kya koi hidden charge ya monthly subscription hai?",
      a: "Course ki poori fees sirf ₹9 (Indian Rupees) ONE-TIME hai. Iske alawa koi monthly subscription, renewal fee ya hidden charges nahi hain. ₹9 pay karne par poore 12 modules, 72 lessons, 30+ AI prompts aur certificate ka lifetime access milta hai."
    },
    {
      q: "Kya is course ke liye mujhe pehle se 3D animation ya coding aana zaroori hai?",
      a: "Bilkul nahi! Yeh course specifically absolute beginners ke liye design kiya gaya hai. Hum 3D space ke X, Y, Z axes se lekar prompts, Meshy AI 3D modeling, Blender lighting aur Runway video generation sab kuch step-by-step Hindi explanation with English technical terms sikhate hain."
    },
    {
      q: "Payment ke baad course kab aur kaise unlock hota hai?",
      a: "Payment hone ke turant baad (within 2 seconds) server-side cryptographic signature verify hota hai aur aapka Student ID aur account automatically active ho jata hai. Saare 12 modules aur 72 lessons bina kisi delay ke turant unlock ho jate hain."
    },
    {
      q: "Kya mujhe lakho rupaye ka high-end gaming PC chahiye?",
      a: "Nahi! Meshy AI aur Runway jaise modern AI tools cloud servers par run hote hain. Blender basic scene layout aur lighting standard laptop par bhi smoothly execute hota hai. Aapko shuru mein kisi expensive GPU ki zaroorat nahi hai."
    },
    {
      q: "Course completion ke baad Certificate kaise milega?",
      a: "Jab aap curriculum ke modules aur quizzes complete karenge, aapka Verified Certificate with Unique Credential ID unlock ho jayega jise aap directly print ya high-res PDF mein download kar sakte hain."
    }
  ];

  const studentProjects = [
    {
      title: "Project 1: Cyber Samurai Neon Duel",
      student: "Arjun Verma (Bangalore)",
      category: "Sci-Fi Cinematic Reel",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      description: "Meshy AI se 3D mesh generate karke Blender mein 3-point cyan lighting aur Runway Gen-3 mein rain camera drift render kiya.",
      tools: ["Meshy AI", "Blender 4.x", "Runway Gen-3", "CapCut"]
    },
    {
      title: "Project 2: The Lost Titan of Solitude",
      student: "Priya Nair (Mumbai)",
      category: "Colossal World-Building",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      description: "Colossal ancient stone golem in a misty jungle. 4K widescreen 21:9 Cinemascope video trailer with thundering sub-bass impacts.",
      tools: ["Flux.1", "Blender", "Luma Dream Machine", "ElevenLabs"]
    },
    {
      title: "Project 3: Apex Titan Luxury Smartwatch Ad",
      student: "Sameer Sheikh (Delhi)",
      category: "3D Product Commercial",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      description: "Commercial 4-shot formula: Macro tourbillon gears, phantom slow-motion water splash and obsidian pedestal reveal.",
      tools: ["Meshy AI", "Runway I2V", "CapCut Pro"]
    }
  ];

  return (
    <div className="relative overflow-hidden bg-[#05050b] text-slate-100 selection:bg-cyan-500 selection:text-black pb-20 sm:pb-12">
      
      {/* ======================================================== */}
      {/* 1. CINEMATIC 3D HERO SECTION                            */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-[88vh] flex items-center justify-center pt-8 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Interactive 3D Canvas in Background */}
        <Hero3DCanvas />

        {/* Ambient Radial Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[450px] radial-glow pointer-events-none opacity-80" />

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Top Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 backdrop-blur-md shadow-neon-cyan/20 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">
              NEXT-GEN 3D AI EDUCATION PLATFORM
            </span>
          </div>

          {/* REQUIRED HERO HEADLINE */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.12] text-white">
            CREATE THE FUTURE <br />
            <span className="cyber-gradient-text">
              WITH 3D AI VIDEO
            </span>
          </h1>

          {/* REQUIRED SUBHEADLINE */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed px-2">
            Master 3D Characters, AI Animation, Cinematic Videos and Professional Visual Storytelling.
          </p>

          {/* ₹9 Special Inaugural Deal Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            <span className="text-xs sm:text-sm font-mono line-through text-slate-500">Regular: ₹4,999</span>
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-mono font-bold tracking-wider">
              ⚡ ₹9 ONLY • ONE-TIME LIFETIME ACCESS
            </span>
          </div>

          {/* REQUIRED CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md sm:max-w-none mx-auto">
            {/* Main CTA */}
            <button
              onClick={() => onNavigate('checkout')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-black text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-black" />
              <span>UNLOCK FULL COURSE – ₹9 ONLY</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('curriculum-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('courses');
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-display font-bold text-xs sm:text-sm text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>EXPLORE COURSE CURRICULUM</span>
            </button>

            {/* Watch Free Demo Button (Strictly Locked Preview) */}
            <button
              onClick={handleDemoClick}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl font-display font-semibold text-xs sm:text-sm text-slate-400 hover:text-purple-300 bg-purple-950/30 hover:bg-purple-950/60 border border-purple-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>Watch Free Demo</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-cyan-500/20">
              <span className="text-xl sm:text-3xl font-display font-black text-cyan-400 block">12</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Complete Modules</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-purple-500/20">
              <span className="text-xl sm:text-3xl font-display font-black text-purple-400 block">72</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Practical Lessons</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-blue-500/20">
              <span className="text-xl sm:text-3xl font-display font-black text-blue-400 block">30+</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Ready AI Prompts</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-emerald-500/20">
              <span className="text-xl sm:text-3xl font-display font-black text-emerald-400 block">₹9</span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">Lifetime Pass</span>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COURSE MODULES SECTION (12 MODULE CARDS WITH LOCKS)   */}
      {/* ======================================================== */}
      <section id="curriculum-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-purple-900/20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> COMPLETE 12-MODULE BLUEPRINT
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white">
            Course Curriculum & Lessons
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Click any module below. Unpaid users will see the ₹9 instant unlock modal. All lessons unlock permanently after payment!
          </p>
        </div>

        {/* 12 Modules Responsive Grid (Vertical on Mobile, 3-Col on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ALL_MODULES.map((module) => {
            const isUnlocked = currentUser?.isPaid === true;
            const thumbUrl = MODULE_THUMBNAILS[module.id] || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";

            return (
              <div
                key={module.id}
                onClick={() => handleModuleClick(module)}
                className="group relative rounded-3xl bg-[#090a18] border border-white/10 hover:border-cyan-500/40 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 cursor-pointer overflow-hidden transform hover:-translate-y-1"
              >
                {/* 3D Visual Thumbnail */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-black/60">
                  <img 
                    src={thumbUrl} 
                    alt={module.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a18] via-transparent to-black/30" />

                  {/* Module Number Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-black/75 border border-white/10 backdrop-blur-md text-[11px] font-mono font-bold text-cyan-300">
                    MODULE {String(module.id).padStart(2, '0')}
                  </div>

                  {/* Lock / Unlock Status Badge */}
                  <div className="absolute top-3 right-3">
                    {isUnlocked ? (
                      <span className="px-2.5 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> UNLOCKED
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-xl bg-red-950/80 border border-red-500/50 text-red-300 text-[10px] font-mono font-bold flex items-center gap-1 shadow-lg shadow-red-950/40">
                        <Lock className="w-3 h-3 text-red-400" /> ₹9 TO UNLOCK
                      </span>
                    )}
                  </div>

                  {/* Lesson Count overlay */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded-lg border border-white/5">
                    {module.lessons?.length || 6} Lessons
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {module.description || "Comprehensive hands-on module with Hindi tutorials, prompt formulas, and homework."}
                  </p>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    {isUnlocked ? 'Start Lessons' : 'Locked • Pay ₹9'}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-cyan-400 group-hover:text-black flex items-center justify-center transition-all">
                    {isUnlocked ? <ArrowRight className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Unlock CTA Banner Under Modules */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#0e0f26] to-cyan-950/60 border border-cyan-500/30 text-center space-y-4">
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/40 inline-block">
            ONE-TIME PAYMENT • ZERO SUBSCRIPTIONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
            Unlock All 12 Modules Today for ₹9
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get instant lifetime access to all 72 lessons, 30+ AI prompts, Blender assets, and verified completion diploma.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('checkout')}
              className="px-8 py-4 rounded-xl font-display font-black text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              <Lock className="w-4 h-4 text-black" />
              <span>UNLOCK FULL COURSE – PAY ₹9</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. FEATURED AI TOOLS WORKFLOW                           */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
            INDUSTRY TOOLS YOU WILL MASTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
            The Complete 3D AI Production Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real workflows combining open-source 3D suites and cutting-edge neural video generators.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { name: "Meshy AI", role: "3D Mesh Gen", type: "Freemium", icon: Box },
            { name: "Blender 4.x", role: "Staging & VFX", type: "100% Free", icon: Monitor },
            { name: "Runway Gen-3", role: "Video Motion", type: "Freemium", icon: Video },
            { name: "CapCut Desktop", role: "Sound & Edit", type: "100% Free", icon: Film }
          ].map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div key={i} className="p-4 sm:p-5 rounded-2xl bg-[#090a18] border border-white/5 space-y-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-sm">{tool.name}</h4>
                <p className="text-[11px] text-slate-400 font-mono">{tool.role}</p>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10 inline-block">
                  {tool.type}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. STUDENT SHOWCASE PROJECTS                            */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-purple-900/20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            PORTFOLIO OUTPUTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
            What You Can Create
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real portfolio projects built by students starting from absolute zero coordinates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentProjects.map((project, i) => (
            <div key={i} className="rounded-3xl bg-[#090a18] border border-white/10 overflow-hidden space-y-4 p-4 flex flex-col justify-between">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-black/80 text-[10px] font-mono text-cyan-300 border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-white text-sm">{project.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">{project.description}</p>
                <p className="text-[10px] font-mono text-slate-500 pt-1">By: {project.student}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1">
                {project.tools.map((t, idx) => (
                  <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FREQUENTLY ASKED QUESTIONS                           */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-purple-900/20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            TRANSPARENT ANSWERS
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl bg-[#090a18] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. MOBILE STICKY FLOATING CTA BAR (VISIBLE ON PHONES)    */}
      {/* ======================================================== */}
      {!currentUser?.isPaid && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#07070e]/95 backdrop-blur-xl border-t border-cyan-500/30 flex items-center justify-between gap-3 shadow-2xl">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block leading-none">
              ⚡ 99.8% OFF • LIFETIME
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-display font-black text-cyan-300 leading-none">₹9.00</span>
              <span className="text-[11px] font-mono text-slate-500 line-through leading-none">₹4,999</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('checkout')}
            className="px-5 py-3 rounded-xl font-display font-black text-xs text-black bg-gradient-to-r from-cyan-400 to-teal-300 shadow-neon-cyan flex items-center gap-1.5 shrink-0"
          >
            <Lock className="w-3.5 h-3.5 text-black" />
            <span>UNLOCK NOW – ₹9</span>
          </button>
        </div>
      )}

    </div>
  );
}
