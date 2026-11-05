import React, { useState } from 'react';
import { CourseProvider, useCourse } from './context/CourseContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import AuthModal from './components/AuthModal';
import DemoVideoModal from './components/DemoVideoModal';
import LockModal from './components/LockModal';
import CertificateModal from './components/CertificateModal';
import PaymentReceiptModal from './components/PaymentReceiptModal';
import Toast from './components/Toast';

// Public Course Pages
import HomePage from './pages/HomePage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import LearnPage from './pages/LearnPage';
import PromptLibraryPage from './pages/PromptLibraryPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentFailedPage from './pages/PaymentFailedPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [pageParams, setPageParams] = useState(null);

  const { 
    isReceiptOpen, 
    setIsReceiptOpen, 
    receiptData,
    isLockModalOpen,
    setIsLockModalOpen,
    lockModalTitle
  } = useCourse();

  // Scroll to top on navigation & store optional parameters
  const navigateTo = (pageId, params = null) => {
    setActivePage(pageId);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05050b] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      {/* Active Page View */}
      <div className="flex-1">
        {activePage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {activePage === 'checkout' && (
          <CheckoutPage onNavigate={navigateTo} initialForm={pageParams?.formData} />
        )}

        {activePage === 'payment-success' && (
          <PaymentSuccessPage 
            onNavigate={navigateTo} 
            studentData={pageParams?.student} 
            receiptData={pageParams?.receipt} 
          />
        )}

        {activePage === 'payment-failed' && (
          <PaymentFailedPage 
            onNavigate={navigateTo} 
            orderId={pageParams?.orderId} 
            formData={pageParams?.formData} 
            error={pageParams?.error} 
          />
        )}

        {activePage === 'courses' && (
          <CourseDetailsPage onNavigate={navigateTo} />
        )}

        {activePage === 'learn' && (
          <LearnPage onNavigate={navigateTo} />
        )}

        {activePage === 'prompts' && (
          <PromptLibraryPage onNavigate={navigateTo} />
        )}

        {activePage === 'dashboard' && (
          <StudentDashboardPage onNavigate={navigateTo} />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {activePage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </div>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Modals & Notifications */}
      <SearchModal onNavigate={navigateTo} />
      <AuthModal />
      <DemoVideoModal 
        isOpen={useCourse().isDemoVideoOpen} 
        onClose={() => useCourse().setIsDemoVideoOpen(false)} 
        onStartLearning={() => navigateTo('checkout')} 
      />
      <LockModal 
        isOpen={isLockModalOpen}
        onClose={() => setIsLockModalOpen(false)}
        onUnlock={() => navigateTo('checkout')}
        featureTitle={lockModalTitle}
      />
      <CertificateModal />
      <PaymentReceiptModal 
        isOpen={isReceiptOpen} 
        onClose={() => setIsReceiptOpen(false)} 
        receipt={receiptData} 
      />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CourseProvider>
      <AppContent />
    </CourseProvider>
  );
}
