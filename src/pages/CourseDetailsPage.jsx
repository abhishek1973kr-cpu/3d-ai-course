import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_MODULES, COURSE_DETAILS } from '../data/courseData';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  Award, 
  Play, 
  ChevronUp, 
  ChevronDown, 
  ArrowRight,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function CourseDetailsPage({ onNavigate }) {
  const { 
    currentUser,
    completedLessons, 
    setCurrentLessonId,
    openLockModal 
  } = useCourse();

  const [expandedModuleId, setExpandedModuleId] = useState(1);

  const handleOpenLesson = (lessonId, lessonTitle) => {
    if (!currentUser?.isPaid) {
      openLockModal(`Lesson: ${lessonTitle || lessonId}`);
      return;
    }
    setCurrentLessonId(lessonId);
    onNavigate('learn');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header Hero Banner */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12142f] via-[#0d0e22] to-[#070712] border border-cyan-500/30 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Official Academy Curriculum
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            {COURSE_DETAILS.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {COURSE_DETAILS.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              12 Modules (72 Lessons)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400" />
              18+ Hours Guided Content
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              Verified Certificate Included
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Zap className="w-4 h-4" />
              Price: ₹9 Only (Lifetime)
            </span>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('checkout')}
              className="px-8 py-4 rounded-xl font-display font-black text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
            >
              <Lock className="w-4 h-4 text-black" />
              <span>UNLOCK FULL COURSE – PAY ₹9</span>
            </button>
            <button
              onClick={() => onNavigate('prompts')}
              className="px-5 py-4 rounded-xl font-display font-medium text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Browse AI Prompt Library
            </button>
          </div>
        </div>
      </div>

      {/* Course Highlights & Prerequisites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold mb-3">
            🎯
          </div>
          <h3 className="font-display font-bold text-base text-white">Who This Is For</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Absolute beginners, video creators, freelancers, graphic designers and filmmakers who want to leverage generative AI and Blender to create professional 3D animated content.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold mb-3">
            💻
          </div>
          <h3 className="font-display font-bold text-base text-white">Prerequisites</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Standard laptop or computer with internet access. No prior coding, 3D experience, or expensive GPU hardware required.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-3">
            📜
          </div>
          <h3 className="font-display font-bold text-base text-white">Verified Credential</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Students who complete the curriculum modules and pass practical quizzes receive an official, verifiable Certificate of Completion with a unique credential ID.
          </p>
        </div>
      </div>

      {/* 12 Modules Syllabus Full Breakdown */}
      <div className="space-y-6">
        <div className="border-b border-purple-900/30 pb-4">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
            Complete 12-Module Syllabus (72 Lessons)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Every lesson contains comprehensive Hindi explanations with English technical terms, step-by-step instructions, practical examples, ready AI prompts, 5-question quizzes, and full recording scripts.
          </p>
        </div>

        <div className="space-y-4">
          {ALL_MODULES.map((mod) => {
            const isExpanded = expandedModuleId === mod.id;
            return (
              <div 
                key={mod.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-cyan-500/40 bg-slate-900/80'
                    : 'border-slate-800 bg-slate-900/30 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div 
                  onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center font-display font-black text-cyan-300 text-sm shrink-0">
                      M{mod.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40 font-bold">
                          {mod.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {mod.lessons.length} Lessons • {mod.totalDuration}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-slate-400 hidden sm:block mt-0.5">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                    <span className="hidden sm:inline">{isExpanded ? 'Collapse' : 'Expand Lessons'}</span>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 space-y-4">
                    <p className="text-xs text-slate-300 bg-purple-950/20 p-3.5 rounded-xl border border-purple-900/40 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-2">
                      {mod.lessons.map((lesson) => {
                        const isDone = completedLessons.includes(lesson.id);
                        const isUnlocked = currentUser?.isPaid === true;

                        return (
                          <div 
                            key={lesson.id}
                            className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                                isDone 
                                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' 
                                  : 'bg-white/5 text-slate-400 border border-white/10'
                              }`}>
                                {isDone ? '✓' : lesson.lessonNumber}
                              </div>
                              <div>
                                <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                                  {lesson.title}
                                </h4>
                                <p className="text-[11px] text-slate-400 line-clamp-1">
                                  {lesson.summary}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => handleOpenLesson(lesson.id, lesson.title)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ml-4 cursor-pointer ${
                                isUnlocked 
                                  ? 'bg-cyan-950/60 hover:bg-cyan-500 hover:text-black border border-cyan-800/40 text-cyan-300' 
                                  : 'bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-300'
                              }`}
                            >
                              {isUnlocked ? (
                                <>
                                  <span>Learn</span>
                                  <ArrowRight className="w-3 h-3" />
                                </>
                              ) : (
                                <>
                                  <Lock className="w-3 h-3 text-red-400" />
                                  <span>Unlock ₹9</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
