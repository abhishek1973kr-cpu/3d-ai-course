import React from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_MODULES, ALL_LESSONS } from '../data/courseData';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Play, 
  BookOpen, 
  Download, 
  ShieldCheck, 
  BarChart2, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  ExternalLink, 
  Sparkles,
  Lock,
  Zap,
  Printer
} from 'lucide-react';

export default function StudentDashboardPage({ onNavigate }) {
  const { 
    currentUser, 
    completedLessons, 
    quizScores, 
    currentLessonId, 
    setCurrentLessonId, 
    progressPercent, 
    completedCount, 
    totalLessonsCount,
    isCertificateEligible,
    setIsCertificateOpen,
    openReceiptModal,
    openLockModal,
    showToast
  } = useCourse();

  const handleContinueLearning = () => {
    if (!currentUser?.isPaid) {
      openLockModal('Classroom Learning');
      return;
    }
    setCurrentLessonId(currentLessonId || 'm1-l1');
    onNavigate('learn');
  };

  const handleOpenLesson = (lessonId) => {
    if (!currentUser?.isPaid) {
      openLockModal(`Lesson: ${lessonId}`);
      return;
    }
    setCurrentLessonId(lessonId);
    onNavigate('learn');
  };

  const handleDownloadResource = (resourceName) => {
    if (!currentUser?.isPaid) {
      openLockModal(`Resource: ${resourceName}`);
      return;
    }
    showToast(`Downloading ${resourceName}...`, 'success');
  };

  // Calculate quiz statistics
  const totalQuizzesAttempted = Object.keys(quizScores).length;
  const passedQuizzesCount = Object.values(quizScores).filter(q => q.passed).length;
  const avgQuizScore = totalQuizzesAttempted > 0 
    ? Math.round((Object.values(quizScores).reduce((acc, q) => acc + q.score, 0) / (totalQuizzesAttempted * 5)) * 100)
    : 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* 1. STUDENT PROFILE HEADER */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12142d] via-[#0d0e22] to-[#080914] border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Profile Info */}
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className="relative">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400 shadow-neon-cyan/40"
            />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-purple-900 border border-purple-400 flex items-center justify-center text-xs">
              ⚡
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase font-bold">
                {currentUser.badge}
              </span>
              {currentUser.studentId && (
                <span className="text-xs text-cyan-400 font-mono font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  STUDENT ID: {currentUser.studentId}
                </span>
              )}
              {currentUser.isPaid ? (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 font-bold">
                  ✓ ₹9 PAID (LIFETIME ACCESS)
                </span>
              ) : (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-500/40 font-bold flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> COURSE LOCKED
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
              {currentUser.name}
            </h1>
            <p className="text-xs text-slate-400">
              Enrolled: 3D AI Studio Zero to Pro Masterclass • Active since {currentUser.joinedDate}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {currentUser.isPaid ? (
            <button
              onClick={() => openReceiptModal()}
              className="px-4 py-3 rounded-xl font-display font-bold text-xs bg-white/10 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tax Invoice Receipt</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('checkout')}
              className="px-6 py-3.5 rounded-xl font-display font-black text-xs text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-black" />
              <span>Unlock for ₹9</span>
            </button>
          )}

          <button
            onClick={handleContinueLearning}
            className="px-6 py-3.5 rounded-xl font-display font-extrabold text-sm cyber-btn-primary flex items-center justify-center gap-2 shadow-neon-cyan cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Continue Learning</span>
          </button>

          <button
            onClick={() => {
              if (!currentUser?.isPaid) {
                openLockModal('Verified Course Certificate');
                return;
              }
              setIsCertificateOpen(true);
            }}
            className="px-5 py-3.5 rounded-xl font-display font-bold text-xs cyber-btn-secondary flex items-center justify-center gap-2 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Certificate</span>
          </button>
        </div>
      </div>

      {/* 2. REQUIRED STATUS BANNERS */}
      {!currentUser?.isPaid ? (
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/70 via-purple-950/60 to-cyan-950/70 border-2 border-red-500/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-2xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-red-950 border border-red-500/50 text-red-400 flex items-center justify-center shrink-0 shadow-lg">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-black text-white">
                Your Course Is Locked. Pay ₹9 Once to Unlock Everything.
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                All 12 modules, 72 video lessons, 30+ AI prompts, and verified diploma will unlock instantly upon payment.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('checkout')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-black text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4 text-black" />
            <span>PAY ₹9 & UNLOCK NOW</span>
          </button>
        </div>
      ) : (
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-teal-950/60 to-cyan-950/70 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-black text-white">
                Congratulations! Your Complete 3D AI Masterclass Is Unlocked.
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 font-mono">
                Status: ACTIVE • Lifetime Unlimited Pass • Student ID: <strong className="text-cyan-300">{currentUser.studentId}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => openReceiptModal()}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tax Invoice</span>
          </button>
        </div>
      )}

      {/* 3. STATS & PROGRESS METRICS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl glass-panel border border-cyan-500/20 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Overall Progress</span>
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-white">
            {progressPercent}%
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-cyan-400 transition-all duration-500" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl glass-panel border border-purple-500/20 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Completed Lessons</span>
            <BookOpen className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-white">
            {completedCount} <span className="text-sm font-normal text-slate-500">/ 72</span>
          </div>
          <p className="text-[11px] text-purple-300 font-mono">
            {totalLessonsCount - completedCount} lessons pending
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl glass-panel border border-blue-500/20 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Average Quiz Score</span>
            <BarChart2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-white">
            {avgQuizScore}%
          </div>
          <p className="text-[11px] text-blue-300 font-mono">
            {passedQuizzesCount} of {totalQuizzesAttempted} quizzes passed
          </p>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-2xl glass-panel border border-amber-500/20 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Verified Diploma</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-sm font-display font-extrabold text-white">
            {isCertificateEligible ? 'Eligible ✓' : `${Math.max(0, 10 - completedCount)} Lessons to Unlock`}
          </div>
          <p className="text-[11px] text-amber-400/80 font-mono">
            Official Academy Credential
          </p>
        </div>
      </div>

      {/* 4. MODULE-BY-MODULE PROGRESS BARS */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Course Module Progress Track
            </h3>
            <p className="text-xs text-slate-400">Track your completion percentage across all 12 modules</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">12 Modules Total</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_MODULES.map((mod) => {
            const modDoneCount = mod.lessons.filter(l => completedLessons.includes(l.id)).length;
            const modTotalCount = mod.lessons.length;
            const modPercent = Math.round((modDoneCount / modTotalCount) * 100);
            const isUnlocked = currentUser?.isPaid === true;

            return (
              <div 
                key={mod.id} 
                onClick={() => {
                  if (!isUnlocked) {
                    openLockModal(`Module ${mod.id}: ${mod.title}`);
                  } else {
                    handleOpenLesson(mod.lessons[0].id);
                  }
                }}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all space-y-2 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-cyan-300">MOD {mod.id}</span>
                  {isUnlocked ? (
                    <span className="text-[11px] font-mono text-slate-400">{modDoneCount}/{modTotalCount} Done ({modPercent}%)</span>
                  ) : (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" /> LOCKED
                    </span>
                  )}
                </div>

                <h4 className="text-xs font-bold text-slate-200 truncate">
                  {mod.title.split(': ')[1] || mod.title}
                </h4>

                <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-500"
                    style={{ width: `${isUnlocked ? modPercent : 0}%` }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. DOWNLOADABLE RESOURCES VAULT */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Student Resource Vault
            </h3>
            <p className="text-xs text-slate-400">Official templates, Blender scene files, and prompt sheets included with enrollment</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">Included in ₹9 Pass</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Blender 4.x Production Starter Kit", type: ".blend Scene", size: "28 MB" },
            { name: "30+ AI Masterclass Prompt Cheatsheet", type: "PDF Guide", size: "4.2 MB" },
            { name: "Cinematic Lighting Rig Presets", type: ".blend Asset", size: "12 MB" },
            { name: "Sound Effects & Audio Impacts Pack", type: "WAV Zip", size: "45 MB" }
          ].map((res, i) => (
            <div key={i} className="p-4 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-200">{res.name}</p>
                <span className="text-[10px] font-mono text-slate-500">{res.type} • {res.size}</span>
              </div>
              <button 
                onClick={() => handleDownloadResource(res.name)}
                className="p-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-500 hover:text-black border border-cyan-800 text-cyan-400 transition-colors cursor-pointer"
                title="Download Resource"
              >
                {currentUser?.isPaid ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4 text-red-400" />}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
