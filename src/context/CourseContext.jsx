import React, { createContext, useContext, useState, useEffect } from 'react';
import { ALL_MODULES, ALL_LESSONS, COURSE_DETAILS } from '../data/courseData';
import confetti from 'canvas-confetti';

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  // Current user & strict payment status (Default: isPaid = false)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('3dai_user');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      id: 'usr-guest',
      studentId: '',
      name: 'Guest Student',
      email: '',
      phone: '',
      role: 'student',
      isPaid: false, // STRICTLY LOCKED UNTIL ₹9 PAYMENT
      amountPaid: 0,
      currency: 'INR',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      joinedDate: 'November 2026',
      badge: 'Course Locked (Pay ₹9 to Unlock)',
      streakDays: 0
    };
  });

  // Completed lessons array
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('3dai_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Quiz scores
  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem('3dai_quiz_scores');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Current active lesson in classroom
  const [currentLessonId, setCurrentLessonId] = useState(() => {
    try {
      return localStorage.getItem('3dai_current_lesson') || 'm1-l1';
    } catch (e) {
      return 'm1-l1';
    }
  });

  // Custom student notes per lesson
  const [lessonNotes, setLessonNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('3dai_lesson_notes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Dynamic modules list
  const [modules, setModules] = useState(() => {
    return ALL_MODULES;
  });

  // Homepage announcement ticker
  const [announcement, setAnnouncement] = useState(() => {
    try {
      return localStorage.getItem('3dai_announcement') || "🔥 LAUNCH OFFER: Complete 12-Module 3D AI Video Masterclass for ONLY ₹9 (One-Time Lifetime Access)!";
    } catch (e) {
      return "🔥 LAUNCH OFFER: Complete 12-Module 3D AI Video Masterclass for ONLY ₹9!";
    }
  });

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Strict Lock Modal State
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);
  const [lockModalTitle, setLockModalTitle] = useState('This Masterclass Content');

  const openLockModal = (title = 'This Masterclass Content') => {
    setLockModalTitle(title);
    setIsLockModalOpen(true);
  };

  // Payment Receipt Modal State
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(() => {
    return {
      invoiceNumber: currentUser?.invoiceNumber || 'INV-3DAI-2026-001',
      orderId: currentUser?.orderId || '',
      paymentId: currentUser?.paymentId || '',
      amount: 9,
      currency: 'INR',
      date: new Date().toISOString(),
      courseTitle: COURSE_DETAILS.title,
      studentName: currentUser?.name || 'Student',
      studentId: currentUser?.studentId || 'STU-2026-8921',
      email: currentUser?.email || '',
      phone: currentUser?.phone || ''
    };
  });

  // Sync state to localStorage safely
  useEffect(() => {
    try {
      localStorage.setItem('3dai_user', JSON.stringify(currentUser));
    } catch (e) {}
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('3dai_completed_lessons', JSON.stringify(completedLessons));
    } catch (e) {}
  }, [completedLessons]);

  useEffect(() => {
    try {
      localStorage.setItem('3dai_quiz_scores', JSON.stringify(quizScores));
    } catch (e) {}
  }, [quizScores]);

  useEffect(() => {
    try {
      localStorage.setItem('3dai_current_lesson', currentLessonId);
    } catch (e) {}
  }, [currentLessonId]);

  useEffect(() => {
    try {
      localStorage.setItem('3dai_lesson_notes', JSON.stringify(lessonNotes));
    } catch (e) {}
  }, [lessonNotes]);

  // Global search shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  /**
   * Unlock course for student after verified ₹9 payment
   */
  const unlockCourseForStudent = (studentData, receipt) => {
    const updatedUser = {
      ...currentUser,
      ...studentData,
      isPaid: true,
      amountPaid: 9,
      currency: 'INR',
      status: 'ACTIVE',
      badge: 'Lifetime Masterclass Pass'
    };
    setCurrentUser(updatedUser);

    if (receipt) {
      setReceiptData(receipt);
    }

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f5d4', '#7c3aed', '#00d2ff', '#f59e0b']
      });
    } catch (e) {}

    showToast('🎉 CONGRATULATIONS! Course unlocked permanently for ₹9!', 'success');
  };

  /**
   * STRICT ₹9 PAYMENT LOCK:
   * Content is unlocked ONLY if currentUser.isPaid is true.
   * Zero exceptions!
   */
  const isLessonUnlocked = () => {
    return currentUser?.isPaid === true;
  };

  const isPromptLibraryUnlocked = () => {
    return currentUser?.isPaid === true;
  };

  // Toggle lesson completed status
  const toggleLessonCompleted = (lessonId) => {
    if (!isLessonUnlocked()) {
      openLockModal('Lesson Progress & Tracking');
      return;
    }

    const isCompleted = completedLessons.includes(lessonId);
    let updated;
    if (isCompleted) {
      updated = completedLessons.filter(id => id !== lessonId);
      showToast('Lesson marked as incomplete', 'info');
    } else {
      updated = [...completedLessons, lessonId];
      showToast('🎉 Lesson completed! Keep up the momentum!', 'success');
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#00f5d4', '#7c3aed', '#00d2ff', '#f43f5e']
        });
      } catch (e) {}
    }
    setCompletedLessons(updated);
  };

  // Record quiz score
  const submitQuizScore = (lessonId, score, total) => {
    if (!isLessonUnlocked()) {
      openLockModal('Quiz Assessment & Scoring');
      return;
    }

    const passed = (score / total) >= 0.6;
    setQuizScores(prev => ({
      ...prev,
      [lessonId]: {
        score,
        total,
        passed,
        date: new Date().toISOString().split('T')[0]
      }
    }));

    if (passed && !completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }

    if (passed) {
      showToast(`Quiz Passed! Score: ${score}/${total}`, 'success');
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f5d4', '#7c3aed', '#00d2ff']
        });
      } catch (e) {}
    } else {
      showToast(`Quiz Score: ${score}/${total}. Review lesson to improve!`, 'warning');
    }
  };

  // Save student note for lesson
  const saveLessonNote = (lessonId, noteText) => {
    if (!isLessonUnlocked()) {
      openLockModal('Personal Lesson Notepad');
      return;
    }
    setLessonNotes(prev => ({
      ...prev,
      [lessonId]: noteText
    }));
    showToast('Lesson notes saved!', 'success');
  };

  // Metrics
  const totalLessonsCount = ALL_LESSONS.length; // 72
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessonsCount) * 100);
  const isCertificateEligible = currentUser?.isPaid === true && completedCount >= 10;

  const certificateData = {
    studentName: currentUser.name,
    studentId: currentUser.studentId || 'STU-2026-8921',
    courseTitle: COURSE_DETAILS.title,
    certificateId: `3DAI-2026-CERT-${(currentUser.studentId || '8921').replace(/\D/g, '')}`,
    issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    instructorName: COURSE_DETAILS.instructor.name,
    grade: progressPercent >= 90 ? 'Mastery with Distinction' : 'Certified Professional',
    isEligible: isCertificateEligible
  };

  const openReceiptModal = (customReceipt = null) => {
    if (!currentUser?.isPaid) {
      openLockModal('Tax Invoice Receipt');
      return;
    }
    if (customReceipt) {
      setReceiptData(customReceipt);
    } else {
      setReceiptData({
        invoiceNumber: currentUser?.invoiceNumber || 'INV-3DAI-2026-001',
        orderId: currentUser?.orderId || '',
        paymentId: currentUser?.paymentId || '',
        amount: 9,
        currency: 'INR',
        date: new Date().toISOString(),
        courseTitle: COURSE_DETAILS.title,
        studentName: currentUser?.name || 'Student',
        studentId: currentUser?.studentId || 'STU-2026-8921',
        email: currentUser?.email || '',
        phone: currentUser?.phone || ''
      });
    }
    setIsReceiptOpen(true);
  };

  return (
    <CourseContext.Provider value={{
      currentUser,
      setCurrentUser,
      unlockCourseForStudent,
      isLessonUnlocked,
      isPromptLibraryUnlocked,
      modules,
      completedLessons,
      toggleLessonCompleted,
      quizScores,
      submitQuizScore,
      currentLessonId,
      setCurrentLessonId,
      lessonNotes,
      saveLessonNote,
      announcement,
      setAnnouncement,
      totalLessonsCount,
      completedCount,
      progressPercent,
      isCertificateEligible,
      certificateData,
      toast,
      showToast,
      isSearchOpen,
      setIsSearchOpen,
      isAuthOpen,
      setIsAuthOpen,
      isLockModalOpen,
      setIsLockModalOpen,
      lockModalTitle,
      openLockModal,
      isCertificateOpen,
      setIsCertificateOpen,
      isReceiptOpen,
      setIsReceiptOpen,
      receiptData,
      openReceiptModal
    }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
}
