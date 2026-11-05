import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Terminal, 
  LayoutDashboard, 
  Menu, 
  X, 
  User, 
  Play, 
  Info, 
  Mail,
  Lock,
  Zap
} from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const { 
    currentUser, 
    setIsSearchOpen, 
    setIsAuthOpen, 
    completedCount,
    announcement,
    openLockModal
  } = useCourse();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'courses', label: 'Curriculum', icon: BookOpen },
    { id: 'learn', label: 'Classroom', icon: Play },
    { id: 'prompts', label: 'AI Prompts', icon: Terminal, count: '30+' },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (pageId) => {
    // If user is not paid and clicks learn or prompts, check lock
    if (!currentUser?.isPaid && (pageId === 'learn' || pageId === 'prompts')) {
      openLockModal(pageId === 'learn' ? 'Classroom & Video Lessons' : '30+ AI Prompt Library');
      setMobileMenuOpen(false);
      return;
    }
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const handleUnlockClick = () => {
    onNavigate('checkout');
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Ticker Bar */}
      {announcement && (
        <div className="bg-gradient-to-r from-purple-950 via-cyan-950 to-purple-950 border-b border-cyan-500/20 py-1.5 px-3 sm:px-4 text-center text-[10px] sm:text-[11px] font-medium text-cyan-200 overflow-hidden">
          <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="truncate">{announcement}</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#07070e]/90 backdrop-blur-xl border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 p-0.5 shadow-neon-cyan/40 group-hover:shadow-neon-cyan transition-all">
              <div className="w-full h-full bg-[#07070e] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 text-lg sm:text-xl">
                  3D
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  3D AI STUDIO
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-bold uppercase">
                  PRO
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 tracking-tight hidden sm:block">
                IMAGINE IT. CREATE IT. ANIMATE IT.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = activePage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{item.label}</span>
                  {item.count && (
                    <span className="text-[9px] font-mono px-1 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {item.count}
                    </span>
                  )}
                  {!currentUser?.isPaid && (item.id === 'learn' || item.id === 'prompts') && (
                    <Lock className="w-2.5 h-2.5 text-amber-400 opacity-80" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Center: Search, ₹9 CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger (⌘K) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-slate-200 text-xs transition-all"
              title="Search (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-black/40 border border-slate-800 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Glowing ₹9 Unlock Button or Paid Badge */}
            {!currentUser?.isPaid ? (
              <button
                onClick={handleUnlockClick}
                className="px-3 sm:px-4 py-2 rounded-xl font-display font-black text-xs sm:text-xs text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-black" />
                <span className="whitespace-nowrap">UNLOCK FULL COURSE ₹9</span>
              </button>
            ) : (
              <div 
                onClick={() => onNavigate('dashboard')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold cursor-pointer hover:bg-emerald-900/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>₹9 Lifetime Pass Active</span>
              </div>
            )}

            {/* User Profile Trigger */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              title="User Account"
            >
              <img 
                src={currentUser.avatar} 
                alt="Profile" 
                className="w-7 h-7 rounded-full object-cover border border-cyan-400"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile-First Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-purple-900/20 bg-[#07070e] px-4 pt-4 pb-8 space-y-3 animate-in slide-in-from-top duration-200">
            
            {/* Mobile Main CTA Banner if Unpaid */}
            {!currentUser?.isPaid && (
              <div 
                onClick={handleUnlockClick}
                className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950 to-purple-950 border border-cyan-500/40 flex items-center justify-between shadow-neon-cyan/20 cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">
                    ⚡ 99.8% DISCOUNT
                  </span>
                  <strong className="text-white text-sm font-display block">Unlock All 12 Modules</strong>
                  <span className="text-xs text-slate-300">Pay ₹9 Once • Lifetime Access</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-cyan-400 text-black font-display font-black text-xs shrink-0 shadow-neon-cyan">
                  PAY ₹9
                </div>
              </div>
            )}

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-1 gap-1 pt-1">
              {navItems.map(item => {
                const isActive = activePage === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {!currentUser?.isPaid && (item.id === 'learn' || item.id === 'prompts') && (
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> LOCKED
                        </span>
                      )}
                      {item.count && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 font-mono">
                          {item.count}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Search & Demo Trigger */}
            <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Search</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLockModal('Demonstration Video');
                }}
                className="py-2.5 px-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Watch Demo</span>
              </button>
            </div>

          </div>
        )}
      </header>
    </>
  );
}
