import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { Mail, MessageSquare, Send, CheckCircle2, Sparkles, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const { showToast } = useCourse();

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been dispatched to Academy Support!', 'success');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase">
          <MessageSquare className="w-4 h-4" />
          <span>STUDENT & CREATOR SUPPORT</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
          Get in Touch With Us
        </h1>

        <p className="text-sm text-slate-400">
          Have questions about the curriculum, tool credits, enterprise team licenses, or certificate verification? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Contact Information & Channels */}
        <div className="space-y-6 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800">
          <h3 className="font-display font-bold text-lg text-white">
            Academy Contact Channels
          </h3>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-200 block">Direct Email Support</span>
                <span className="text-slate-400 font-mono">support@3daistudio.academy</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-950/80 text-purple-400 border border-purple-800/40 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-200 block">Creator Community Discord</span>
                <span className="text-slate-400 font-mono">discord.gg/3dai-creators</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-200 block">Global Headquarters</span>
                <span className="text-slate-400">3D AI Studio Labs, Bangalore & San Francisco</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-purple-200 space-y-1">
            <span className="font-bold text-cyan-300 block">⚡ Average Response Time:</span>
            <p>Our instructors and technical support team respond within 4 hours during weekdays.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/20">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border-2 border-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Message Dispatched!</h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Thank you, {formName}. We have received your inquiry and will email you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-cyan-400 hover:underline pt-2 inline-block"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Question or Feedback</label>
                <textarea
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  rows={4}
                  placeholder="Ask anything about the lessons, Blender setup, or custom project coaching..."
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-display font-bold text-xs cyber-btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message to Instructors</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}

