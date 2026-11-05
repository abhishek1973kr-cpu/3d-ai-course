import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Clock, 
  Award, 
  AlertCircle,
  HelpCircle,
  BookOpen,
  Film,
  Box,
  Terminal,
  Zap,
  Check
} from 'lucide-react';

export default function CheckoutPage({ onNavigate, initialForm = null }) {
  const { unlockCourseForStudent, showToast, currentUser } = useCourse();

  // Student Registration Form State
  const [formData, setFormData] = useState({
    name: initialForm?.name || currentUser?.name || '',
    email: initialForm?.email || currentUser?.email || '',
    phone: initialForm?.phone || currentUser?.phone || '',
    password: initialForm?.password || '',
    city: initialForm?.city || '',
    state: initialForm?.state || ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentGatewayModal, setPaymentGatewayModal] = useState(null); // active order data
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi'); // 'upi', 'card', 'netbanking'
  const [upiId, setUpiId] = useState('');

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  // Step 1: Initiate Order Creation on Backend
  const handleInitiatePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fix the errors in the registration form.', 'warning');
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const orderResult = await res.json();

      if (!res.ok) {
        throw new Error(orderResult.error || 'Failed to create payment order.');
      }

      // If user already paid, bypass directly
      if (orderResult.alreadyEnrolled) {
        showToast('You are already enrolled! Redirecting to classroom...', 'info');
        unlockCourseForStudent(orderResult.student);
        onNavigate('learn');
        return;
      }

      // Open Payment Checkout Modal
      setPaymentGatewayModal(orderResult);
    } catch (err) {
      console.error('Order creation error:', err);
      showToast(err.message, 'warning');
    } finally {
      setIsProcessing(false);
    }
  };

  // Step 2: Complete Payment & Verify Signature on Server
  const handleConfirmPayment = async (status = 'success') => {
    if (!paymentGatewayModal) return;

    if (status === 'fail') {
      const orderId = paymentGatewayModal.orderId;
      setPaymentGatewayModal(null);
      // Navigate to failure page
      onNavigate('payment-failed', { orderId, formData });
      return;
    }

    setIsProcessing(true);

    try {
      const orderId = paymentGatewayModal.orderId;
      const paymentId = `pay_${Date.now().toString().slice(-8)}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

      // Fetch authentic HMAC signature from server endpoint
      const sigRes = await fetch('/api/payment/test-signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, paymentId })
      });
      const sigData = await sigRes.json();

      // Verify signature on backend
      const verifyRes = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          paymentId,
          signature: sigData.signature,
          studentData: {
            ...formData,
            studentId: paymentGatewayModal.studentId
          }
        })
      });

      const verifyResult = await verifyRes.json();

      if (!verifyRes.ok) {
        throw new Error(verifyResult.error || 'Payment signature verification failed.');
      }

      // Successful verification
      setPaymentGatewayModal(null);
      unlockCourseForStudent(verifyResult.student, verifyResult.receipt);

      // Redirect to celebration Success Page
      onNavigate('payment-success', {
        student: verifyResult.student,
        receipt: verifyResult.receipt
      });
    } catch (err) {
      console.error('Payment verification failed:', err);
      showToast(err.message, 'warning');
      setPaymentGatewayModal(null);
      onNavigate('payment-failed', {
        orderId: paymentGatewayModal?.orderId,
        formData,
        error: err.message
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase shadow-neon-cyan/20">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          OFFICIAL MASTERCLASS ENROLLMENT
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
          Unlock Your Complete <br />
          <span className="cyber-gradient-text">
            3D AI Video Masterclass
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300">
          Learn 3D Modeling, AI Animation and Professional AI Video Creation from Beginner to Pro.
        </p>

        {/* Pricing Ribbon */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <span className="text-sm font-mono line-through text-slate-500">Regular: ₹4,999</span>
          <span className="px-3.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            ⚡ 99.8% DISCOUNT - ONE-TIME ONLY
          </span>
        </div>
      </div>

      {/* 2. Main Checkout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (7 cols): What is Included in ₹9 */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Futuristic Feature Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-display font-black text-white">
                  Complete Curriculum Breakdown
                </h3>
                <p className="text-xs text-slate-400">Everything unlocked permanently with ₹9 payment</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-black text-cyan-400">₹9</span>
                <span className="text-[11px] text-slate-400 block font-mono">One-Time Fee</span>
              </div>
            </div>

            {/* Included Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: BookOpen,
                  title: "Complete 12 Course Modules",
                  desc: "From 3D spatial foundations to high-end Capstone project."
                },
                {
                  icon: Film,
                  title: "All 72 Video Lessons",
                  desc: "Step-by-step practical guides, Hindi explanations & English technical terms."
                },
                {
                  icon: Terminal,
                  title: "30+ Ready-to-Use AI Prompts",
                  desc: "Hollywood cinematic formulas, 3D characters, animals, and environments."
                },
                {
                  icon: Box,
                  title: "Meshy AI & Blender Workflows",
                  desc: "Learn real-world 3D model generation, texturing, staging, and rendering."
                },
                {
                  icon: Award,
                  title: "Verified Completion Certificate",
                  desc: "Official digital diploma with unique verifiable Credential ID."
                },
                {
                  icon: Zap,
                  title: "Lifetime Permanent Access",
                  desc: "No monthly subscriptions, no hidden renewals, no recurring charges."
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Zero Hidden Fees Assurance */}
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0" />
              <div className="text-xs space-y-0.5">
                <p className="font-bold text-white">100% Transparent Business Guarantee</p>
                <p className="text-slate-300">
                  Pay exactly <strong>₹9 once</strong>. We will never ask for extra course fees, subscription renewals, or surprise upsells.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials / Trust Badges */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-[#0d0d1a] border border-white/5">
              <span className="text-lg font-display font-black text-cyan-400">8,400+</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Enrolled Students</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0d0d1a] border border-white/5">
              <span className="text-lg font-display font-black text-purple-400">4.98 / 5</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Student Rating</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0d0d1a] border border-white/5">
              <span className="text-lg font-display font-black text-emerald-400">Instant</span>
              <p className="text-[11px] text-slate-400 mt-0.5">Automated Unlock</p>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Student Registration & ₹9 Pay Form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 relative">
            
            {/* Form Title */}
            <div className="space-y-1 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  STEP 1 OF 2
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  Total: ₹9 ONLY
                </span>
              </div>
              <h3 className="text-xl font-display font-black text-white">
                Student Registration
              </h3>
              <p className="text-xs text-slate-400">
                Enter your details to create your academy account and Student ID.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleInitiatePayment} className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>Full Name <span className="text-red-400">*</span></span>
                  {formErrors.name && <span className="text-[11px] text-red-400">{formErrors.name}</span>}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    formErrors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>Email Address <span className="text-red-400">*</span></span>
                  {formErrors.email && <span className="text-[11px] text-red-400">{formErrors.email}</span>}
                </label>
                <input
                  type="email"
                  placeholder="aryan@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    formErrors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>Mobile Number (WhatsApp/UPI) <span className="text-red-400">*</span></span>
                  {formErrors.phone && <span className="text-[11px] text-red-400">{formErrors.phone}</span>}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      formErrors.phone ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                    }`}
                  />
                </div>
              </div>

              {/* Create Password */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center justify-between">
                  <span>Create Password <span className="text-red-400">*</span></span>
                  {formErrors.password && <span className="text-[11px] text-red-400">{formErrors.password}</span>}
                </label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    formErrors.password ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-cyan-400'
                  }`}
                />
              </div>

              {/* Optional City & State */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-400">City (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-400">State (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi NCR"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Complete Masterclass Pass:</span>
                  <span className="font-mono text-slate-400 line-through">₹4,999</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold">Special Inaugural Discount:</span>
                  <span className="font-mono text-emerald-400">-₹4,990</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Amount Due Today:</span>
                  <div className="text-right">
                    <span className="text-xl font-display font-black text-cyan-300">₹9.00</span>
                    <span className="text-[10px] text-slate-400 block font-mono">One-Time • No recurring</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-xl font-display font-black text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {isProcessing ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Secure Payment...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-black" />
                    <span>UNLOCK FULL COURSE – PAY ₹9</span>
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="pt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> 256-Bit SSL
                </span>
                <span>•</span>
                <span>UPI / Cards / NetBanking</span>
                <span>•</span>
                <span className="text-emerald-400">Instant Access</span>
              </div>
            </form>

          </div>
        </div>

      </div>

      {/* 3. Razorpay / Secure Payment Gateway Modal */}
      {paymentGatewayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#0f0f1c] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl shadow-cyan-950/70 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-black font-display font-black text-sm">
                  3D
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    Razorpay Secure Gateway
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Order ID: {paymentGatewayModal.orderId.substring(0, 16)}...
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-mono">Amount</span>
                <span className="text-lg font-display font-black text-cyan-300">₹9.00</span>
              </div>
            </div>

            {/* Student Preview */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Enrolling Student:</span>
                <span className="font-bold text-white">{paymentGatewayModal.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Student ID:</span>
                <span className="font-mono text-cyan-300">{paymentGatewayModal.studentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Access Tier:</span>
                <span className="text-emerald-400 font-semibold">Lifetime Masterclass Pass</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Select Payment Mode (₹9 One-Time)
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'UPI / QR', icon: Smartphone, subtitle: 'GPay, PhonePe, Paytm' },
                  { id: 'card', label: 'Debit/Credit', icon: CreditCard, subtitle: 'Visa, Master, RuPay' },
                  { id: 'netbanking', label: 'Net Banking', icon: Building2, subtitle: 'All Indian Banks' }
                ].map(method => {
                  const Icon = method.icon;
                  const isSelected = selectedPaymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected 
                          ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300' 
                          : 'border-white/10 bg-white/[0.01] text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold leading-tight">{method.label}</span>
                    </button>
                  );
                })}
              </div>

              {selectedPaymentMethod === 'upi' && (
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g. mobile@upi, name@okaxis)"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">PhonePe</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Google Pay</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Paytm</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">BHIM</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => handleConfirmPayment('success')}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xl font-display font-black text-sm text-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-neon-cyan transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Verifying HMAC Signature...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>PAY ₹9.00 & UNLOCK IMMEDIATELY</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleConfirmPayment('fail')}
                disabled={isProcessing}
                className="w-full py-2 rounded-xl text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Cancel / Simulate Payment Failure
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

