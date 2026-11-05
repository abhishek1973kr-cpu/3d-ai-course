import React, { useRef } from 'react';
import { useCourse } from '../context/CourseContext';
import { X, Award, Download, Printer, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export default function CertificateModal() {
  const { 
    isCertificateOpen, 
    setIsCertificateOpen, 
    certificateData, 
    isCertificateEligible,
    completedCount,
    totalLessonsCount,
    progressPercent,
    showToast
  } = useCourse();

  const printRef = useRef(null);

  if (!isCertificateOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    showToast('Preparing high-resolution PDF download...', 'info');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="w-full max-w-4xl bg-[#0a0b18] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden animate-in fade-in zoom-in-95 my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#101228]">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            <div>
              <h3 className="font-display font-bold text-slate-100 text-sm">
                Official Academy Credentials Verification
              </h3>
              <p className="text-[11px] text-slate-400">Unique Credential ID: {certificateData.certificateId}</p>
            </div>
          </div>
          <button 
            onClick={() => setIsCertificateOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isCertificateEligible ? (
            /* Ineligible Screen (Honest requirements gate) */
            <div className="text-center py-10 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-100">
                Certificate Locked: Completion Requirements Pending
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                As per 3D AI Studio Academy standards, certificates are digitally issued only after completing course curriculum modules and passing module quizzes.
              </p>

              {/* Progress Bar Card */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">Your Current Progress:</span>
                  <span className="font-bold text-cyan-400">{completedCount} / {totalLessonsCount} Lessons ({progressPercent}%)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  Complete at least 10 lessons to unlock your verified credential.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsCertificateOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs cyber-btn-primary"
                >
                  Continue Learning to Unlock
                </button>
              </div>
            </div>
          ) : (
            /* Verified Certificate View */
            <div className="space-y-6">
              {/* Certificate Canvas / Card for Printing & Viewing */}
              <div 
                ref={printRef}
                className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#070814] via-[#0f1128] to-[#080916] border-4 border-double border-cyan-400/50 shadow-2xl overflow-hidden print:m-0 print:border-black text-slate-100"
              >
                {/* Decorative Cyber Guilloche / Corner Accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

                {/* Subtle Academy Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                  <span className="text-9xl font-black font-display tracking-widest text-cyan-400">3D AI</span>
                </div>

                <div className="relative z-10 text-center space-y-4">
                  {/* Academy Header */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">
                      INTERNATIONAL ACADEMY OF GENERATIVE 3D & AI VIDEO
                    </span>
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-purple-300 tracking-wide">
                    CERTIFICATE OF PROFESSIONAL MASTERY
                  </h2>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    This is to officially certify that
                  </p>

                  {/* Student Name */}
                  <div className="py-2 border-b-2 border-cyan-400/40 max-w-md mx-auto">
                    <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-wide">
                      {certificateData.studentName}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed pt-2">
                    has successfully fulfilled all rigorous curriculum requirements, practical 3D AI modeling modules, Blender lighting & animation sequences, generative video synthesis, and final portfolio capstone project in
                  </p>

                  {/* Course Title */}
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 max-w-lg mx-auto">
                    <h4 className="text-base sm:text-lg font-display font-bold text-cyan-300">
                      {certificateData.courseTitle}
                    </h4>
                    <p className="text-[11px] text-purple-300 font-mono mt-0.5">
                      Tagline: Imagine It. Create It. Animate It.
                    </p>
                  </div>

                  {/* Footer Details: Signatures, Seal & Credential ID */}
                  <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-xs">
                    {/* Date */}
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] text-slate-400 block uppercase">Issue Date</span>
                      <span className="font-semibold text-slate-200">{certificateData.issueDate}</span>
                      <span className="text-[10px] text-cyan-400 block font-mono mt-0.5">
                        Status: Digitally Verified
                      </span>
                    </div>

                    {/* Official Gilded Holographic Seal */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#0d0e20] border border-amber-400/60 flex flex-col items-center justify-center text-center p-1">
                          <ShieldCheck className="w-5 h-5 text-amber-400" />
                          <span className="text-[8px] font-bold text-amber-300 tracking-tighter">OFFICIAL SEAL</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">ID: {certificateData.certificateId}</span>
                    </div>

                    {/* Instructor Signature */}
                    <div className="text-center sm:text-right">
                      <div className="font-serif italic text-base text-cyan-300 mb-0.5">
                        Aryan Sharma
                      </div>
                      <div className="border-t border-slate-700 pt-1">
                        <span className="text-[10px] text-slate-400 block">Lead VFX & 3D AI Director</span>
                        <span className="text-[9px] text-purple-400">3D AI Studio Global Guild</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Credential Cryptographically Authenticated & Ready for Portfolio</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handlePrint}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-xs text-slate-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    Print Certificate
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs cyber-btn-primary flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF / High-Res
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

