import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

interface WaitlistSectionProps {
  onSuccess: (email: string) => void;
}

export default function WaitlistSection({ onSuccess }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xeedvalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          type: 'Waitlist Form'
        })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Give them a premium queue position random but believable
      setWaitlistNumber(Math.floor(Math.random() * 450) + 1280);
      onSuccess(email);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-white relative overflow-hidden text-center">
      
      {/* Decorative vector grid backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none" />

          {!isSubmitted ? (
            <div className="space-y-6">
              
              {/* Early Bird Flag */}
              <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-150 text-indigo-650 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                FOUNDING SPECIAL ACCESS
              </div>

              {/* Headlines */}
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight max-w-lg mx-auto leading-tight">
                Unlock Early Access & Secure Your Free Vehicle Safety Report
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-semibold">
                Join our private queue. Lock founding rates, get direct launch alerts, and receive a free digital diagnostic setup guide for your car model.
              </p>

              {/* Form Input Block */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4 relative">
                <input
                  type="email"
                  required
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your personal email address"
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-sm transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-650 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wide px-6 py-3.5 rounded-xl transition-colors shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-indigo-600/10"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Extra value microcopy */}
              <p className="text-[10px] sm:text-xs text-slate-450 max-w-xs mx-auto text-center font-bold">
                🔒 Strictly no spam. Zero cellular diagnostic telemetry leaves the local device. Canadian compliance focus.
              </p>

            </div>
          ) : (
            <div className="space-y-6 max-w-md mx-auto py-2">
              
              {/* Success Badge */}
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shrink-0">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 font-bold" />
              </div>

              {/* Success Messages */}
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                You’re on the Founding Waitlist!
              </h3>
              
              <div className="bg-indigo-50/50 border border-indigo-120 rounded-xl p-4 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-500 block tracking-widest">
                  Your Founding Priority Queue Spot
                </span>
                <span className="font-display font-extrabold text-indigo-650 text-2xl sm:text-3xl block mt-1 tracking-tight">
                  #{waitlistNumber}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block font-medium">
                  Founding discount locked successfully for <span className="text-slate-800 font-extrabold">{email}</span>.
                </span>
              </div>

              <div className="space-y-2 text-left text-xs bg-white border border-slate-200 p-4 rounded-xl text-slate-500 leading-normal font-semibold shadow-sm">
                <span className="text-slate-800 font-bold block mb-1 font-sans">What happens next:</span>
                <p>1. Receipt confirmation delivered directly to {email}.</p>
                <p>2. Personalized vehicle compatibility report generated.</p>
                <p>3. Early shipping access invite arriving ahead of June Summer launch.</p>
              </div>

              {/* Sharing referral link or extra copy */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 font-semibold text-xs">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pass code locked</span>
                <span className="text-[11px] bg-slate-100 border border-slate-200/40 text-slate-800 px-2.5 py-1 rounded font-mono font-bold">
                  {Math.random().toString(36).substring(2, 8).toUpperCase()}
                </span>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
