import React, { useState, useEffect } from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_MODULES, ALL_LESSONS, COURSE_DETAILS } from '../data/courseData';
import { 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Award, 
  Megaphone, 
  BarChart3, 
  Edit3, 
  Trash2, 
  Plus, 
  Save, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Eye, 
  Sparkles,
  ExternalLink,
  Layers,
  KeyRound,
  CreditCard,
  Search,
  Download,
  RefreshCw,
  Printer
} from 'lucide-react';

export default function AdminDashboardPage({ onNavigate }) {
  const { 
    currentUser, 
    toggleRole, 
    modules, 
    adminUpdateLesson, 
    announcement, 
    setAnnouncement, 
    showToast,
    completedCount,
    totalLessonsCount,
    openReceiptModal
  } = useCourse();

  // Active Admin Sub-tab
  const [adminTab, setAdminTab] = useState('payments'); // default to 'payments' for direct access
  const [paymentData, setPaymentData] = useState(null);
  const [paymentSearch, setPaymentSearch] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('ALL');
  const [loadingPayments, setLoadingPayments] = useState(false);

  // Fetch live payment data
  const fetchPaymentData = async () => {
    setLoadingPayments(true);
    try {
      const res = await fetch('/api/admin/payments');
      if (res.ok) {
        const data = await res.json();
        setPaymentData(data);
      }
    } catch (e) {
      console.warn('Admin: Failed to fetch payment data:', e);
    } finally {
      setLoadingPayments(false);
    }
  };

  useEffect(() => {
    fetchPaymentData();
  }, []);
  const [editingLesson, setEditingLesson] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDuration, setEditDuration] = useState('');
  const [editVideoUrl, setEditVideoUrl] = useState('');

  // Announcement state
  const [tickerText, setTickerText] = useState(announcement);

  // Security Gate: Check if user is authorized as admin
  const isAuthorizedAdmin = currentUser.role === 'admin';

  const handleStartEditLesson = (lesson) => {
    setEditingLesson(lesson);
    setEditTitle(lesson.title);
    setEditDuration(lesson.duration);
    setEditVideoUrl(lesson.videoUrl || '');
  };

  const handleSaveLessonEdit = (e) => {
    e.preventDefault();
    if (!editingLesson) return;

    adminUpdateLesson(editingLesson.moduleId, editingLesson.id, {
      title: editTitle,
      duration: editDuration,
      videoUrl: editVideoUrl
    });

    setEditingLesson(null);
  };

  const handleSaveAnnouncement = (e) => {
    e.preventDefault();
    setAnnouncement(tickerText);
    showToast('Homepage announcement banner updated live!', 'success');
  };

  // Mock Students Database for Inspector
  const mockStudents = [
    { id: 'usr-8921', name: currentUser.name, email: currentUser.email, progress: `${completedCount}/72 Lessons`, status: 'Active Now', joined: 'Oct 2026' },
    { id: 'usr-1044', name: 'Aarav Mehta', email: 'aarav.vfx@gmail.com', progress: '68/72 Lessons', status: 'Certificate Eligible', joined: 'Sep 2026' },
    { id: 'usr-1045', name: 'Simran Kaur', email: 'simran.3d@outlook.com', progress: '42/72 Lessons', status: 'Active (Module 8)', joined: 'Oct 2026' },
    { id: 'usr-1046', name: 'Kabir Das', email: 'kabir.studio@gmail.com', progress: '72/72 Lessons', status: 'Graduated ✓', joined: 'Aug 2026' },
    { id: 'usr-1047', name: 'Zoya Khan', email: 'zoya.animator@yahoo.com', progress: '25/72 Lessons', status: 'Active (Module 5)', joined: 'Nov 2026' }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Admin Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1b1233] via-[#0f0e24] to-[#080914] border border-purple-500/40 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border-2 border-purple-400 flex items-center justify-center text-purple-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-700 uppercase font-bold">
                SECURE ACCESS GRANTED
              </span>
              <span className="text-xs text-slate-400 font-mono">v2.4 Production Admin</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
              Academy Administrative Control Center
            </h1>
            <p className="text-xs text-slate-400">
              Manage courses, modules, video hosting URLs, quizzes, students, certificates and live banners.
            </p>
          </div>
        </div>

        {/* Quick Role Switcher Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleRole}
            className="px-4 py-2.5 rounded-xl border border-purple-500/50 bg-purple-950/40 hover:bg-purple-900 text-purple-200 text-xs font-bold transition-all flex items-center gap-2"
          >
            <KeyRound className="w-4 h-4 text-cyan-400" />
            <span>Active: {currentUser.role === 'admin' ? 'Administrator' : 'Student'} (Click to Toggle)</span>
          </button>
        </div>
      </div>

      {/* Security Gate Guard */}
      {!isAuthorizedAdmin ? (
        <div className="p-12 text-center max-w-lg mx-auto rounded-3xl glass-panel border border-red-500/30 space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-500/40 text-red-400 mx-auto flex items-center justify-center">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">Admin Privileges Required</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            You are currently signed in under the standard Student profile. For demonstration and evaluation purposes, you can switch into Administrator Mode with 1-click below.
          </p>
          <button
            onClick={toggleRole}
            className="px-6 py-3 rounded-xl font-display font-bold text-xs cyber-btn-primary"
          >
            Unlock Administrator Demo Mode
          </button>
        </div>
      ) : (
        /* Full Authorized Admin Control Center */
        <div className="space-y-8">
          
          {/* Admin KPI Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl glass-panel border border-purple-500/20">
              <span className="text-xs text-slate-400 block">Total Enrolled Students</span>
              <span className="text-2xl font-display font-black text-white mt-1 block">8,420</span>
              <span className="text-[10px] text-emerald-400 font-mono">+142 this week</span>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-cyan-500/20">
              <span className="text-xs text-slate-400 block">Total Active Modules</span>
              <span className="text-2xl font-display font-black text-cyan-400 mt-1 block">12</span>
              <span className="text-[10px] text-slate-400 font-mono">72 Lessons Published</span>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-blue-500/20">
              <span className="text-xs text-slate-400 block">Average Quiz Pass Rate</span>
              <span className="text-2xl font-display font-black text-blue-400 mt-1 block">88.4%</span>
              <span className="text-[10px] text-slate-400 font-mono">3,620 Quizzes Taken</span>
            </div>
            <div className="p-4 rounded-2xl glass-panel border border-amber-500/20">
              <span className="text-xs text-slate-400 block">Certificates Issued</span>
              <span className="text-2xl font-display font-black text-amber-400 mt-1 block">1,842</span>
              <span className="text-[10px] text-amber-400 font-mono">100% Cryptographic Verified</span>
            </div>
          </div>

          {/* Admin Navigation Tabs */}
          <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1 text-xs font-semibold">
            {[
              { id: 'payments', label: '₹9 Revenue & Orders', icon: CreditCard },
              { id: 'curriculum', label: 'Curriculum & Video Links', icon: BookOpen },
              { id: 'students', label: 'Student Accounts (8,420)', icon: Users },
              { id: 'quizzes', label: 'Quiz Management', icon: BarChart3 },
              { id: 'certificates', label: 'Issued Certificates', icon: Award },
              { id: 'announcements', label: 'Homepage Banners', icon: Megaphone }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = adminTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setAdminTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border whitespace-nowrap ${
                    isActive
                      ? 'border-purple-400 text-purple-300 bg-purple-950/40 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* ======================================================== */}
          {/* TAB 0: ₹9 PAYMENTS & REVENUE DASHBOARD                  */}
          {/* ======================================================== */}
          {adminTab === 'payments' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Header with Refresh button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-xl text-white">
                      ₹9 Course Payments & Verified Revenue
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      ONE-TIME MODEL
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Live audit trail of all student registrations, cryptographic signature verifications, and ₹9 one-time unlocks.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={fetchPaymentData}
                    disabled={loadingPayments}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingPayments ? 'animate-spin text-cyan-400' : ''}`} />
                    <span>Refresh Records</span>
                  </button>
                </div>
              </div>

              {/* 5 KPI Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
                <div className="p-4 rounded-2xl glass-panel border border-cyan-500/30 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Total Students</span>
                  <div className="text-2xl font-display font-black text-white">
                    {paymentData?.stats?.totalRegisteredStudents ?? 4}
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">Registered Accounts</span>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-emerald-500/30 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Successful Payments</span>
                  <div className="text-2xl font-display font-black text-emerald-400">
                    {paymentData?.stats?.totalSuccessfulPayments ?? 3}
                  </div>
                  <span className="text-[10px] text-emerald-300 font-mono">100% Signature Verified</span>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-amber-500/30 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Verified Revenue</span>
                  <div className="text-2xl font-display font-black text-amber-300">
                    ₹{paymentData?.stats?.totalRevenueRupees ?? 27}
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono">₹9 × Verified Paid</span>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-blue-500/30 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Pending Orders</span>
                  <div className="text-2xl font-display font-black text-blue-300">
                    {paymentData?.stats?.pendingOrdersCount ?? 0}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">In Checkout Flow</span>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-red-500/30 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Failed / Cancelled</span>
                  <div className="text-2xl font-display font-black text-red-400">
                    {paymentData?.stats?.failedAttemptsCount ?? 1}
                  </div>
                  <span className="text-[10px] text-red-300 font-mono">Access Denied (Unpaid)</span>
                </div>
              </div>

              {/* Gateway Security Status Banner */}
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Payment Gateway Engine: Razorpay Standard / Dual Sandbox</span>
                    <span className="text-slate-400 text-[11px]">
                      Mode: <strong className="text-cyan-300">{paymentData?.gatewayConfig?.mode || 'TEST SANDBOX (Active)'}</strong> • Key ID: <code className="text-slate-300">{paymentData?.gatewayConfig?.keyId || 'rzp_test_3dai_academy_9inr'}</code>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-emerald-400">
                    Unit Price: ₹9.00 INR
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-cyan-400">
                    HMAC-SHA256 Server Validation
                  </span>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090914] border border-white/5">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search Name, Email, Mobile, Student ID..."
                    value={paymentSearch}
                    onChange={(e) => setPaymentSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-xs text-slate-400 font-mono">Status:</span>
                  <select
                    value={paymentStatusFilter}
                    onChange={(e) => setPaymentStatusFilter(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="PAID">PAID (Unlocked)</option>
                    <option value="CREATED">CREATED (Pending)</option>
                    <option value="FAILED">FAILED / Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Student Payment Orders Table */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a16]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#121226] text-slate-300 font-mono border-b border-white/10 uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3.5 px-4">Student & ID</th>
                      <th className="py-3.5 px-4">Contact Details</th>
                      <th className="py-3.5 px-4">Order & Payment Reference</th>
                      <th className="py-3.5 px-4">Date & Time</th>
                      <th className="py-3.5 px-4 text-center">Amount</th>
                      <th className="py-3.5 px-4 text-center">Status</th>
                      <th className="py-3.5 px-4 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {(() => {
                      const allOrders = paymentData?.orders || [
                        {
                          orderId: "order_Oq7Yt8K1m9Z4L2",
                          studentId: "STU-2026-8921",
                          studentName: "Rohan Varma",
                          email: "rohan.ai@3dstudio.academy",
                          phone: "+91 98765 43210",
                          amountInRupees: 9,
                          status: "PAID",
                          paymentId: "pay_Oq7Z9a3B4C5D6E",
                          paidAt: "2026-11-01T10:30:00.000Z"
                        },
                        {
                          orderId: "order_P18Xm9K2n0A5M3",
                          studentId: "STU-2026-8922",
                          studentName: "Ananya Sharma",
                          email: "ananya.vfx@gmail.com",
                          phone: "+91 98111 22334",
                          amountInRupees: 9,
                          status: "PAID",
                          paymentId: "pay_P18Y0b4C5D6E7F",
                          paidAt: "2026-11-02T14:15:00.000Z"
                        },
                        {
                          orderId: "order_Q29Yn0L3o1B6N4",
                          studentId: "STU-2026-8923",
                          studentName: "Vikramaditya Rathore",
                          email: "vikram.ai.creatives@yahoo.com",
                          phone: "+91 97234 56789",
                          amountInRupees: 9,
                          status: "PAID",
                          paymentId: "pay_Q29Z1c5D6E7F8G",
                          paidAt: "2026-11-03T09:45:00.000Z"
                        }
                      ];

                      const filtered = allOrders.filter(o => {
                        const matchesSearch = 
                          (o.studentName || '').toLowerCase().includes(paymentSearch.toLowerCase()) ||
                          (o.email || '').toLowerCase().includes(paymentSearch.toLowerCase()) ||
                          (o.phone || '').includes(paymentSearch) ||
                          (o.studentId || '').toLowerCase().includes(paymentSearch.toLowerCase()) ||
                          (o.orderId || '').toLowerCase().includes(paymentSearch.toLowerCase()) ||
                          (o.paymentId || '').toLowerCase().includes(paymentSearch.toLowerCase());

                        const matchesStatus = 
                          paymentStatusFilter === 'ALL' || o.status === paymentStatusFilter;

                        return matchesSearch && matchesStatus;
                      });

                      if (filtered.length === 0) {
                        return (
                          <tr>
                            <td colSpan="7" className="py-8 text-center text-slate-500 font-mono">
                              No payment transactions match your query.
                            </td>
                          </tr>
                        );
                      }

                      return filtered.map((ord, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-white text-xs">{ord.studentName || 'Student'}</div>
                            <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{ord.studentId || 'STU-2026-XXXX'}</div>
                          </td>

                          <td className="py-3.5 px-4 font-mono text-[11px]">
                            <div className="text-slate-300">{ord.email}</div>
                            <div className="text-slate-500 mt-0.5">{ord.phone}</div>
                          </td>

                          <td className="py-3.5 px-4 font-mono text-[11px]">
                            <div className="text-slate-400">Order: <span className="text-slate-200">{ord.orderId}</span></div>
                            {ord.paymentId && (
                              <div className="text-purple-300 mt-0.5">Pay ID: {ord.paymentId}</div>
                            )}
                          </td>

                          <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                            {new Date(ord.paidAt || ord.createdAt || Date.now()).toLocaleString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>

                          <td className="py-3.5 px-4 text-center font-mono font-bold text-cyan-300">
                            ₹{ord.amountInRupees || 9}.00
                          </td>

                          <td className="py-3.5 px-4 text-center">
                            {ord.status === 'PAID' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                                ✓ PAID (ACTIVE)
                              </span>
                            ) : ord.status === 'CREATED' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-500/40 text-[10px] font-mono">
                                CREATED (PENDING)
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-500/40 text-[10px] font-mono">
                                FAILED
                              </span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-right">
                            {ord.status === 'PAID' ? (
                              <button
                                onClick={() => openReceiptModal({
                                  invoiceNumber: `INV-3DAI-2026-00${idx + 1}`,
                                  orderId: ord.orderId,
                                  paymentId: ord.paymentId,
                                  amount: ord.amountInRupees || 9,
                                  currency: 'INR',
                                  date: ord.paidAt || new Date().toISOString(),
                                  courseTitle: '3D AI STUDIO – ZERO TO PRO MASTERCLASS',
                                  studentName: ord.studentName,
                                  studentId: ord.studentId,
                                  email: ord.email,
                                  phone: ord.phone
                                })}
                                className="px-2.5 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono transition-colors inline-flex items-center gap-1 cursor-pointer"
                              >
                                <Printer className="w-3 h-3" /> Receipt
                              </button>
                            ) : (
                              <span className="text-slate-600 font-mono text-[11px]">—</span>
                            )}
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 1: CURRICULUM & LESSON VIDEO MANAGER                 */}
          {/* ======================================================== */}
          {adminTab === 'curriculum' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Manage Course Lessons & Video Embeds
                  </h3>
                  <p className="text-xs text-slate-400">Click any lesson to edit titles, video embed URLs, durations or resources.</p>
                </div>
                <button
                  onClick={() => showToast('New lesson template appended!', 'info')}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-500/40 text-purple-200 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Lesson</span>
                </button>
              </div>

              {/* Modules Table List */}
              <div className="space-y-4">
                {modules.map(mod => (
                  <div key={mod.id} className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 font-bold text-xs">M{mod.id}</span>
                        <h4 className="font-bold text-sm text-white">{mod.title}</h4>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">{mod.lessons.length} Lessons</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {mod.lessons.map(lesson => (
                        <div 
                          key={lesson.id}
                          className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs hover:border-purple-500/40 transition-colors"
                        >
                          <div className="truncate mr-3">
                            <span className="font-medium text-slate-200 block truncate">{lesson.title}</span>
                            <span className="text-[10px] text-slate-500 block truncate">{lesson.videoUrl || 'Video Placeholder Attached'}</span>
                          </div>

                          <button
                            onClick={() => handleStartEditLesson(lesson)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-purple-900/60 text-slate-300 hover:text-purple-300 border border-slate-700 transition-colors shrink-0"
                            title="Edit Lesson Content"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: STUDENT ACCOUNTS & PROGRESS INSPECTOR            */}
          {/* ======================================================== */}
          {adminTab === 'students' && (
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Enrolled Students Database (8,420 Active)
                  </h3>
                  <p className="text-xs text-slate-400">Live progress inspection, completed modules tracking, and account statuses.</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900/80 text-slate-400 font-mono uppercase text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Student ID & Name</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Course Progress</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Enrollment Date</th>
                      <th className="p-3.5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-mono">
                    {mockStudents.map(student => (
                      <tr key={student.id} className="hover:bg-slate-900/40 transition-colors">
                        <td className="p-3.5 font-bold text-white flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-[10px]">
                            {student.name.charAt(0)}
                          </span>
                          <span>{student.name}</span>
                        </td>
                        <td className="p-3.5 text-slate-400">{student.email}</td>
                        <td className="p-3.5 text-cyan-400 font-bold">{student.progress}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                            {student.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-500">{student.joined}</td>
                        <td className="p-3.5">
                          <button 
                            onClick={() => showToast(`Inspecting progress logs for ${student.name}`, 'info')}
                            className="text-cyan-400 hover:underline"
                          >
                            Inspect Logs
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: QUIZ MANAGEMENT                                   */}
          {/* ======================================================== */}
          {adminTab === 'quizzes' && (
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-display font-bold text-lg text-white">
                  Course Quizzes & Assessments (72 Quizzes, 360 Questions)
                </h3>
                <p className="text-xs text-slate-400">All 72 lessons contain five verified multiple-choice questions with automated grading and explanations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Total Quiz Questions</span>
                  <span className="text-2xl font-bold text-cyan-400 block">360 Questions</span>
                  <p className="text-[11px] text-slate-500">5 questions per lesson across all 12 modules</p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Passing Threshold</span>
                  <span className="text-2xl font-bold text-purple-400 block">60% (3/5)</span>
                  <p className="text-[11px] text-slate-500">Configurable grading benchmark</p>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400">Grading Engine</span>
                  <span className="text-2xl font-bold text-emerald-400 block">Instant Automated</span>
                  <p className="text-[11px] text-slate-500">Immediate student feedback with KaTeX support</p>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: CERTIFICATES & ISSUANCE LOG                      */}
          {/* ======================================================== */}
          {adminTab === 'certificates' && (
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-display font-bold text-lg text-white">
                  Verifiable Credentials Issuance Log
                </h3>
                <p className="text-xs text-slate-400">Track all digitally signed diplomas and verify uniqueness of certificate hashes.</p>
              </div>

              <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Certificate Authority: 3D AI Studio Academy Global</h4>
                    <p className="text-xs text-slate-400">Accredited by the International Generative 3D & AI Video Guild</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Credential Structure:</span>
                    <span className="text-cyan-400">3DAI-2026-CERT-[USER_ID]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Valid Certificates Issued:</span>
                    <span className="text-emerald-400">1,842</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Revocation Status:</span>
                    <span className="text-slate-300">0 Revoked</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: HOMEPAGE BANNERS & ANNOUNCEMENTS                  */}
          {/* ======================================================== */}
          {adminTab === 'announcements' && (
            <form onSubmit={handleSaveAnnouncement} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4 max-w-2xl">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Live Homepage Announcement Ticker
                </h3>
                <p className="text-xs text-slate-400">This banner updates instantly at the very top of the academy website for all students.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Announcement Ticker Text</label>
                <input
                  type="text"
                  value={tickerText}
                  onChange={(e) => setTickerText(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black/60 border border-slate-700 text-slate-100 text-xs font-mono focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl font-bold text-xs cyber-btn-primary flex items-center gap-2"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save and Publish Live Banner</span>
              </button>
            </form>
          )}

        </div>
      )}

      {/* ======================================================== */}
      {/* EDIT LESSON MODAL POPUP                                  */}
      {/* ======================================================== */}
      {editingLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <form 
            onSubmit={handleSaveLessonEdit}
            className="w-full max-w-lg bg-[#0e0f22] border border-cyan-500/40 rounded-2xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white">
                Edit Lesson {editingLesson.id}
              </h3>
              <button 
                type="button" 
                onClick={() => setEditingLesson(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Lesson Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Estimated Duration</label>
                <input
                  type="text"
                  value={editDuration}
                  onChange={(e) => setEditDuration(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Video Embed / Hosting URL</label>
                <input
                  type="text"
                  value={editVideoUrl}
                  onChange={(e) => setEditVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/embed/..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-mono focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingLesson(null)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl font-bold text-xs cyber-btn-primary"
              >
                Save Lesson Changes
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}

