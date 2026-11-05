import React from 'react';
import { useCourse } from '../context/CourseContext';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useCourse();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borders = {
    success: 'border-emerald-500/40 bg-[#0a1815]/90',
    warning: 'border-amber-500/40 bg-[#1c1507]/90',
    info: 'border-cyan-500/40 bg-[#071720]/90'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle max-w-sm">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-glass ${borders[toast.type] || borders.info}`}>
        {icons[toast.type] || icons.info}
        <p className="text-sm font-medium text-slate-100">{toast.message}</p>
      </div>
    </div>
  );
}

