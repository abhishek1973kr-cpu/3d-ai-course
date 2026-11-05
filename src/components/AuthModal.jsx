import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { X, ShieldCheck, User, Sparkles, CheckCircle2, RotateCcw, KeyRound } from 'lucide-react';

export default function AuthModal() {
  const { 
    isAuthOpen, 
    setIsAuthOpen, 
    currentUser, 
    setCurrentUser, 
    toggleRole, 
    showToast,
    completedCount,
    totalLessonsCount,
    progressPercent
  } = useCourse();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'switch'
  const [nameInput, setNameInput] = useState(currentUser.name);
  const [emailInput, setEmailInput] = useState(currentUser.email);

  if (!isAuthOpen) return null;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setCurrentUser(prev => ({
      ...prev,
      name: nameInput,
      email: emailInput
    }));
    showToast('Profile information updated successfully!', 'success');
    setIsAuthOpen(false);
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset your course progress for testing?")) {
      localStorage.removeItem('3dai_completed_lessons');
      localStorage.removeItem('3dai_quiz_scores');
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-md bg-[#0e0f22] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden animate-in fade-in zoom-in-95"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#141630]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-black font-bold">
              ⚡
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-100 text-sm">
                Academy Account Center
              </h3>
              <p className="text-[11px] text-slate-400">Manage identity & administrative access</p>
            </div>
          </div>
          <button 
            onClick={() => setIsAuthOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'profile'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Student Profile
          </button>
          <button
            onClick={() => setActiveTab('switch')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'switch'
                ? 'border-purple-400 text-purple-400 bg-purple-950/20'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Role Switcher (Admin / Student)
          </button>
        </div>

        {/* Tab 1: Profile View */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="p-6 space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-14 h-14 rounded-full border-2 border-cyan-400 object-cover"
              />
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                  currentUser.role === 'admin' 
                    ? 'bg-purple-900/80 text-purple-300 border border-purple-500/40' 
                    : 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                }`}>
                  {currentUser.role === 'admin' ? '🛡️ Administrator' : '🎓 Enrolled Student'}
                </span>
                <h4 className="text-sm font-bold text-slate-100 mt-1">{currentUser.name}</h4>
                <p className="text-xs text-slate-400">Joined {currentUser.joinedDate}</p>
              </div>
            </div>

            {/* Quick Stats overview */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs text-slate-400 block">Lessons Completed</span>
                <span className="text-base font-bold text-cyan-400">{completedCount} / {totalLessonsCount}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-xs text-slate-400 block">Course Progress</span>
                <span className="text-base font-bold text-purple-400">{progressPercent}%</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Student Name (On Certificate)</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl font-bold text-sm cyber-btn-primary"
              >
                Save Profile
              </button>
              <button
                type="button"
                onClick={handleResetProgress}
                title="Reset progress to test from zero"
                className="px-3 py-2.5 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-950/40 text-xs flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Live Role Switcher (Admin vs Student) */}
        {activeTab === 'switch' && (
          <div className="p-6 space-y-4">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200">
              <div className="flex items-center gap-2 font-bold text-purple-300 mb-1">
                <KeyRound className="w-4 h-4 text-cyan-400" />
                Role-Based Access Control (RBAC)
              </div>
              Toggle between regular student experience and the secure Admin Dashboard to inspect course creation and student tracking.
            </div>

            <div className="space-y-3">
              {/* Option: Student Mode */}
              <div 
                onClick={() => currentUser.role === 'admin' && toggleRole()}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  currentUser.role === 'student'
                    ? 'border-cyan-400 bg-cyan-950/30 ring-1 ring-cyan-400'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Student Mode (Active)</h4>
                      <p className="text-xs text-slate-400">Access curriculum, video player, quizzes and certificates.</p>
                    </div>
                  </div>
                  {currentUser.role === 'student' && (
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  )}
                </div>
              </div>

              {/* Option: Admin Mode */}
              <div 
                onClick={() => currentUser.role === 'student' && toggleRole()}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  currentUser.role === 'admin'
                    ? 'border-purple-400 bg-purple-950/30 ring-1 ring-purple-400'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Administrator Mode</h4>
                      <p className="text-xs text-slate-400">Edit course lessons, manage videos, inspect quizzes & students.</p>
                    </div>
                  </div>
                  {currentUser.role === 'admin' && (
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                toggleRole();
                setIsAuthOpen(false);
              }}
              className="w-full py-2.5 rounded-xl font-bold text-sm cyber-btn-primary"
            >
              Switch to {currentUser.role === 'admin' ? 'Student Mode' : 'Admin Mode'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

