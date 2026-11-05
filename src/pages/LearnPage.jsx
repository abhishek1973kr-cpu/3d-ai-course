import React, { useState, useEffect } from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_MODULES, getLessonById, getNextAndPrevLesson } from '../data/courseData';
import { 
  Play, 
  Pause,
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Terminal, 
  Award, 
  FileText, 
  Download, 
  Save, 
  Copy, 
  Check, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  Volume2, 
  Search, 
  Film,
  Compass,
  ArrowRight,
  Lock
} from 'lucide-react';

export default function LearnPage({ onNavigate }) {
  const { 
    currentLessonId, 
    setCurrentLessonId, 
    completedLessons, 
    toggleLessonCompleted, 
    quizScores, 
    submitQuizScore, 
    lessonNotes, 
    saveLessonNote, 
    showToast,
    setIsDemoVideoOpen,
    isLessonUnlocked,
    currentUser
  } = useCourse();

  // Active Lesson Object
  const currentLesson = getLessonById(currentLessonId);
  const { prevLesson, nextLesson, currentIndex, total } = getNextAndPrevLesson(currentLessonId);
  const isCompleted = completedLessons.includes(currentLesson.id);

  // Classroom Active Tab
  const [activeTab, setActiveTab] = useState('guide'); // 'guide' | 'prompts' | 'quiz' | 'script' | 'notes'

  // Student note input state
  const [noteText, setNoteText] = useState(lessonNotes[currentLesson.id] || '');

  // Copied prompt feedback
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Quiz state for current lesson
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Sidebar search & collapse
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [collapsedModules, setCollapsedModules] = useState({});
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  // Update note text when current lesson changes
  useEffect(() => {
    setNoteText(lessonNotes[currentLesson.id] || '');
    setSelectedAnswers({});
    setQuizSubmitted(false);
  }, [currentLesson.id, lessonNotes]);

  // Copy prompt helper
  const handleCopyPrompt = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    showToast('Prompt copied to clipboard!', 'success');
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  // Submit current lesson quiz
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    currentLesson.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    setQuizSubmitted(true);
    submitQuizScore(currentLesson.id, score, currentLesson.quiz.length);
  };

  // Filter modules/lessons for sidebar
  const filteredModules = ALL_MODULES.map(m => ({
    ...m,
    lessons: m.lessons.filter(l => 
      l.title.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
      m.title.toLowerCase().includes(sidebarSearch.toLowerCase())
    )
  })).filter(m => m.lessons.length > 0);

  const toggleModuleCollapse = (moduleId) => {
    setCollapsedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className="min-h-screen bg-[#07070e] flex flex-col lg:flex-row border-t border-purple-900/20">
      
      {/* ======================================================== */}
      {/* 1. LEFT SIDEBAR: ALL 12 MODULES & 72 LESSONS NAVIGATION */}
      {/* ======================================================== */}
      <aside className={`
        lg:w-80 xl:w-96 border-r border-slate-800 bg-[#090a16] flex flex-col shrink-0
        ${sidebarOpenMobile ? 'fixed inset-0 z-50' : 'hidden lg:flex'}
      `}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800 bg-[#0d0e20]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-display font-bold text-white uppercase tracking-wider">
                Course Curriculum
              </h2>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
              {completedLessons.length} / 72 Complete
            </span>
            {sidebarOpenMobile && (
              <button 
                onClick={() => setSidebarOpenMobile(false)}
                className="lg:hidden p-1 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Filter Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Search 72 lessons..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Scrollable Modules and Lessons Tree */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {filteredModules.map((mod) => {
            const isCollapsed = collapsedModules[mod.id];
            const isCurrentModule = mod.id === currentLesson.moduleId;
            const completedInModule = mod.lessons.filter(l => completedLessons.includes(l.id)).length;

            return (
              <div 
                key={mod.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isCurrentModule 
                    ? 'border-purple-500/40 bg-purple-950/10'
                    : 'border-slate-800/80 bg-slate-950/40'
                }`}
              >
                {/* Module Title Accordion Header */}
                <div 
                  onClick={() => toggleModuleCollapse(mod.id)}
                  className="p-3 flex items-center justify-between cursor-pointer select-none hover:bg-slate-900/60"
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-white/5 text-cyan-400 shrink-0">
                      M{mod.id}
                    </span>
                    <h3 className="text-xs font-bold text-slate-200 truncate">
                      {mod.title.replace(`MODULE ${mod.id}: `, '')}
                    </h3>
                  </div>

                  <span className="text-[10px] text-slate-500 shrink-0 ml-2">
                    {completedInModule}/{mod.lessons.length}
                  </span>
                </div>

                {/* Module Lesson Items */}
                {!isCollapsed && (
                  <div className="px-2 pb-2 space-y-1 border-t border-slate-800/40 pt-1">
                    {mod.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLesson.id;
                      const isDone = completedLessons.includes(lesson.id);
                      const isUnlocked = isLessonUnlocked();

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => {
                            if (!isUnlocked) {
                              onNavigate('checkout');
                              return;
                            }
                            setCurrentLessonId(lesson.id);
                            setSidebarOpenMobile(false);
                          }}
                          className={`group p-2.5 rounded-xl cursor-pointer flex items-center justify-between text-xs transition-all ${
                            isActive
                              ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold'
                              : 'hover:bg-slate-900/70 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono shrink-0 ${
                              isDone
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : isUnlocked
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-red-950/80 text-red-400 border border-red-500/40'
                            }`}>
                              {isDone ? '✓' : isUnlocked ? lesson.lessonNumber : '🔒'}
                            </span>
                            <span className="truncate text-[11px]">{lesson.title}</span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-1">
                            {!isUnlocked && (
                              <span className="text-[8px] font-mono font-bold text-red-400 bg-red-950/80 px-1 rounded border border-red-500/40 uppercase">
                                LOCKED
                              </span>
                            )}
                            <span className="text-[9px] font-mono text-slate-500">
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 2. MAIN CLASSROOM CONTENT: VIDEO & RICH LESSON SYSTEM   */}
      {/* ======================================================== */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Mobile Sidebar Trigger Bar */}
        <div className="lg:hidden p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpenMobile(true)}
            className="flex items-center gap-2 text-xs font-semibold text-cyan-400"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Syllabus Menu (72 Lessons)</span>
          </button>
          <span className="text-xs text-slate-400">{completedLessons.length} / 72 Complete</span>
        </div>

        {/* VIDEO PLAYER AREA */}
        <div className="bg-[#040409] p-4 sm:p-6 border-b border-purple-900/20">
          <div className="max-w-5xl mx-auto">
            
            {/* Player Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c0d1e] via-[#080914] to-black border border-cyan-500/20 shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />

              {/* Player Body: Locked or Unlocked */}
              {!isLessonUnlocked(currentLesson.id) ? (
                <div className="relative z-10 text-center p-6 max-w-lg space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center shadow-neon-cyan">
                    <Lock className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 font-mono uppercase tracking-wider inline-block">
                      🔒 MASTERCLASS LESSON LOCKED
                    </span>
                    <h3 className="text-base sm:text-2xl font-display font-extrabold text-white">
                      {currentLesson.title}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      This lesson, tutorial video, prompt formulas, and quiz are locked. Unlock all 12 Modules & 72 Lessons for just <strong className="text-cyan-300">₹9 ONLY</strong> (One-Time Lifetime Access).
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => onNavigate('checkout')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-display font-black text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105"
                    >
                      <Lock className="w-4 h-4 text-black" />
                      <span>UNLOCK FULL COURSE – PAY ₹9</span>
                    </button>
                    <button
                      onClick={() => onNavigate('courses')}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 cursor-pointer"
                    >
                      View 12-Module Overview
                    </button>
                  </div>
                </div>
              ) : (
                /* Animated Center Cyber Play Hub */
                <div className="relative z-10 text-center p-6 max-w-lg">
                  <div 
                    onClick={() => setIsDemoVideoOpen(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-600/30 border-2 border-cyan-400 text-cyan-300 mx-auto flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-cyan-400 hover:text-black transition-all shadow-neon-cyan mb-4 group"
                    title="Watch Demonstration Script"
                  >
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>

                  <span className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono uppercase tracking-wider inline-block mb-2">
                    {currentLesson.moduleName}
                  </span>

                  <h3 className="text-base sm:text-2xl font-display font-extrabold text-white">
                    {currentLesson.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    Interactive video lesson with full Hindi explanation, technical English terminology, 5-question quiz, and recording script.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setIsDemoVideoOpen(true)}
                      className="px-4 py-2 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Film className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Watch Recording Script Demo</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('script')}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-purple-400" />
                      <span>View Teleprompter Script</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Video Bottom Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
                    <Volume2 className="w-3.5 h-3.5" /> Hindi + Technical English
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="font-mono text-[11px]">{currentLesson.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                    Lesson {currentIndex + 1} of {total}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION BAR: PREVIOUS, NEXT & MARK COMPLETED */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl glass-panel border border-slate-800">
              
              {/* Previous Lesson Button */}
              <button
                disabled={!prevLesson}
                onClick={() => prevLesson && setCurrentLessonId(prevLesson.id)}
                className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  prevLesson 
                    ? 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white bg-slate-900/60'
                    : 'opacity-40 cursor-not-allowed border border-slate-800 text-slate-600'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Lesson</span>
              </button>

              {/* Mark as Completed Toggle Button */}
              <button
                onClick={() => toggleLessonCompleted(currentLesson.id)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-display font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  isCompleted
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'cyber-btn-primary shadow-neon-cyan'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCompleted ? 'Completed ✓ (Click to Undo)' : 'Mark as Completed'}</span>
              </button>

              {/* Next Lesson Button */}
              <button
                disabled={!nextLesson}
                onClick={() => nextLesson && setCurrentLessonId(nextLesson.id)}
                className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  nextLesson 
                    ? 'border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white bg-cyan-950/30'
                    : 'opacity-40 cursor-not-allowed border border-slate-800 text-slate-600'
                }`}
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. RICH LESSON CONTENT TABS                             */}
        {/* ======================================================== */}
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6">
          
          {!isLessonUnlocked(currentLesson.id) ? (
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 text-center space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                <Lock className="w-7 h-7" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  COMPLETE LESSON GUIDE & RESOURCES
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                  Unlock Full Access for ₹9 Only
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Step-by-step tutorial, copyable AI prompts, 5-question interactive quiz, and instructor teleprompter script are reserved for enrolled students.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('checkout')}
                  className="px-8 py-3.5 rounded-xl font-display font-black text-sm text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                >
                  <Lock className="w-4 h-4 text-black" />
                  <span>UNLOCK FULL COURSE – PAY ₹9</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Tabs Navigation Bar */}
              <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1 text-xs font-semibold">
            {[
              { id: 'guide', label: 'Lesson Guide (Hindi)', icon: BookOpen },
              { id: 'prompts', label: `Ready Prompts (${currentLesson.readyPrompts.length})`, icon: Terminal },
              { id: 'quiz', label: '5-Question Quiz', icon: HelpCircle, badge: quizScores[currentLesson.id] ? `${quizScores[currentLesson.id].score}/5` : null },
              { id: 'script', label: 'Recording Script', icon: Film },
              { id: 'notes', label: 'Resources & Notes', icon: FileText }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-t-xl transition-all flex items-center gap-2 border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-950/30 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB 1: FULL LESSON GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              
              {/* Beginner-friendly explanation in Hindi */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0e0f22] to-[#0a0b16] border border-cyan-500/20 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Beginner-Friendly Explanation in Hindi (English Terms)</span>
                </div>
                <div className="text-sm sm:text-base text-slate-200 leading-relaxed space-y-3 whitespace-pre-line">
                  {currentLesson.hindiExplanation}
                </div>
              </div>

              {/* Learning Objectives & Required Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Learning Objectives */}
                <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-display font-bold text-sm text-cyan-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Learning Objectives
                  </h4>
                  <ul className="space-y-2">
                    {currentLesson.learningObjectives.map((obj, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Tools */}
                <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
                  <h4 className="font-display font-bold text-sm text-purple-300 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-purple-400" />
                    Required Tools & Prerequisites
                  </h4>
                  <ul className="space-y-2">
                    {currentLesson.requiredTools.map((tool, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-lg text-white">
                  Step-by-Step Practical Instructions
                </h4>
                <div className="space-y-3">
                  {currentLesson.stepByStep.map((s, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-display font-bold text-xs shrink-0">
                        {s.step}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-xs sm:text-sm text-slate-200">
                          {s.title}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Example */}
              <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-2">
                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest block">
                  Practical Real-World Example
                </span>
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-mono">
                  {currentLesson.practicalExample}
                </p>
              </div>

              {/* Common Mistakes and Solutions */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  Common Mistakes & How to Fix Them
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentLesson.commonMistakes.map((cm, i) => (
                    <div key={i} className="p-4 rounded-xl bg-amber-950/10 border border-amber-900/40 space-y-2 text-xs">
                      <div className="text-red-300 font-semibold flex items-center gap-1.5">
                        <span className="text-red-400">✕ Mistake:</span> {cm.mistake}
                      </div>
                      <div className="text-emerald-300 font-semibold flex items-center gap-1.5">
                        <span className="text-emerald-400">✓ Fix:</span> {cm.fix}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homework / Practice Task */}
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                  Actionable Homework / Practice Task
                </span>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                  {currentLesson.homework}
                </p>
              </div>

              {/* Short Lesson Summary */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-cyan-400 block mb-1">Lesson Summary:</strong>
                {currentLesson.summary}
              </div>
            </div>
          )}

          {/* TAB 2: READY PROMPTS */}
          {activeTab === 'prompts' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-display font-bold text-lg text-white">
                  Ready-to-Copy AI Prompts for This Lesson
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tested and calibrated tokens for Midjourney, Meshy AI, and Runway Gen-3.
                </p>
              </div>

              <div className="space-y-4">
                {currentLesson.readyPrompts.map((p, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl glass-panel border border-cyan-500/30 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-cyan-300">
                        {p.title}
                      </h4>
                      <button
                        onClick={() => handleCopyPrompt(p.prompt, idx)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-500 hover:text-black border border-cyan-800 text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed select-all">
                      {p.prompt}
                    </div>

                    <p className="text-xs text-slate-400 italic">
                      Use Case: {p.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 5-QUESTION QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Lesson 5-Question Assessment
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Pass with at least 3/5 correct answers (60%) to earn progress towards your certificate.
                  </p>
                </div>
                {quizScores[currentLesson.id] && (
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-mono">Last Score</span>
                    <span className={`text-base font-bold font-mono ${
                      quizScores[currentLesson.id].passed ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {quizScores[currentLesson.id].score} / 5 ({quizScores[currentLesson.id].passed ? 'Passed ✓' : 'Retry'})
                    </span>
                  </div>
                )}
              </div>

              <form onSubmit={handleQuizSubmit} className="space-y-6">
                {currentLesson.quiz.map((q, qIdx) => {
                  const userAnswer = selectedAnswers[qIdx];
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect = isAnswered && userAnswer === q.correctIndex;

                  return (
                    <div 
                      key={qIdx}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect 
                            ? 'border-emerald-500/40 bg-emerald-950/10'
                            : 'border-red-500/40 bg-red-950/10'
                          : 'border-slate-800 bg-slate-900/40'
                      }`}
                    >
                      <h4 className="font-display font-bold text-sm text-slate-100 mb-3">
                        {qIdx + 1}. {q.question}
                      </h4>

                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => (
                          <label
                            key={optIdx}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                              userAnswer === optIdx
                                ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                                : 'border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`quiz-q-${qIdx}`}
                              checked={userAnswer === optIdx}
                              onChange={() => setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                              className="accent-cyan-400"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>

                      {/* Quiz Answer Feedback & Explanation */}
                      {quizSubmitted && (
                        <div className={`mt-3 p-3 rounded-xl text-xs ${
                          isCorrect ? 'bg-emerald-950/40 text-emerald-300' : 'bg-red-950/40 text-red-300'
                        }`}>
                          <span className="font-bold block mb-1">
                            {isCorrect ? '✓ Correct Answer!' : `✕ Incorrect. Correct answer: ${q.options[q.correctIndex]}`}
                          </span>
                          <p className="text-slate-300">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

                <button
                  type="submit"
                  disabled={Object.keys(selectedAnswers).length < currentLesson.quiz.length}
                  className={`w-full py-3.5 rounded-xl font-display font-bold text-sm transition-all ${
                    Object.keys(selectedAnswers).length === currentLesson.quiz.length
                      ? 'cyber-btn-primary shadow-neon-cyan'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {quizSubmitted ? 'Re-Submit Quiz Answers' : 'Submit 5-Question Quiz'}
                </button>
              </form>
            </div>
          )}

          {/* TAB 4: OFFICIAL RECORDING SCRIPT */}
          {activeTab === 'script' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
                  OFFICIAL INSTRUCTOR TELEPROMPTER & STUDIO RECORDING SCRIPT
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Lesson {currentLesson.lessonNumber}: Production Script
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
                    1. Instructor Introduction (Spoken)
                  </span>
                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    "{currentLesson.recordingScript.instructorIntro}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    2. What to Show On Screen (Visual Setup)
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentLesson.recordingScript.whatToShowOnScreen}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    3. Screen Recording Steps
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {currentLesson.recordingScript.screenRecordingSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">[{idx + 1}]</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">
                    4. Voiceover Narration in Hindi
                  </span>
                  <p className="text-xs text-purple-100 italic leading-relaxed">
                    "{currentLesson.recordingScript.voiceoverHindi}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    5. Practical Demonstration & Homework Ending
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {currentLesson.recordingScript.practicalDemo}
                  </p>
                  <p className="text-xs text-slate-200 italic">
                    "{currentLesson.recordingScript.endingAndHomework}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RESOURCES & PERSONAL STUDENT NOTEPAD */}
          {activeTab === 'notes' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Downloadable Resources */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-white">
                  Lesson Downloadable Resources & Cheatsheets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Lesson Cheatsheet & Summary (PDF)", size: "2.4 MB" },
                    { title: "Blender 4.x Starter Scene File (.blend)", size: "14.2 MB" },
                    { title: "Meshy AI 3D Model Preset (.glb)", size: "8.6 MB" },
                    { title: "Master Prompt Text Archive (.txt)", size: "120 KB" }
                  ].map((res, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between"
                    >
                      <div>
                        <h5 className="text-xs font-semibold text-slate-200">{res.title}</h5>
                        <span className="text-[10px] text-slate-500">{res.size}</span>
                      </div>
                      <button
                        onClick={() => showToast(`Downloaded: ${res.title}`, 'info')}
                        className="p-2 rounded-lg bg-cyan-950 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Student Notepad */}
              <div className="p-5 rounded-2xl glass-panel border border-purple-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-300">
                      Personal Lesson Notepad
                    </h4>
                    <p className="text-xs text-slate-400">Notes automatically save to your browser's local memory.</p>
                  </div>
                  <button
                    onClick={() => saveLessonNote(currentLesson.id, noteText)}
                    className="px-3.5 py-1.5 rounded-lg bg-purple-950 hover:bg-purple-600 border border-purple-500/50 text-purple-200 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Notes</span>
                  </button>
                </div>

                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Jot down personal ideas, camera angles, prompt tweaks or questions for this lesson..."
                  rows={6}
                  className="w-full p-3.5 rounded-xl bg-black/60 border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}
        </>
      )}

    </div>
  </main>
    </div>
  );
}

