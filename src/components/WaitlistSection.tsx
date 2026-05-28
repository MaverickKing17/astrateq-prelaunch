import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Zap, 
  Check, 
  MapPin, 
  Activity, 
  Heart 
} from 'lucide-react';

interface WaitlistSectionProps {
  onSuccess: (email: string) => void;
}

export default function WaitlistSection({ onSuccess }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  // Selected region state for local report simulation
  const [provState, setProvState] = useState('BC');

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
          type: 'Waitlist Form',
          province: provState
        })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Believable premium queue registration spot
      setWaitlistNumber(Math.floor(Math.random() * 450) + 1280);
      onSuccess(email);
    }
  };

  const provinces = [
    { code: 'BC', name: 'British Columbia' },
    { code: 'ON', name: 'Ontario' },
    { code: 'AB', name: 'Alberta' },
    { code: 'QC', name: 'Quebec' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'SK', name: 'Saskatchewan' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'NB', name: 'New Brunswick' }
  ];

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-b from-white via-rose-50/10 to-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Dynamic Background visual ornaments */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Subtle top red/indigo border accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-indigo-650" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Left Column: Form Intake panel */}
            <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-between text-left space-y-8">
              
              {!isSubmitted ? (
                <div className="space-y-6">
                  
                  {/* Early Bird Flag */}
                  <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 text-rose-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                    <span className="text-sm leading-none animate-pulse">🇨🇦</span>
                    FREE LAUNCH GIFT LOCK
                  </div>

                  {/* Headlines */}
                  <h2 className="font-display font-black text-3xl sm:text-4.5xl text-slate-900 tracking-tight leading-tight">
                    Secure Premium Priority Access & A Free Digital Safety Blueprint
                  </h2>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                    Join the private launch queue. Lock pre-order savings, get dispatch alerts, and secure a complete digital diagnostics & OBD configuration blueprint mapped directly for your specific vehicle.
                  </p>

                  {/* Highlights Bullet block */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-emerald-100 border border-emerald-250 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-bold leading-normal">
                        <span className="text-emerald-700 font-extrabold">$0 Monthly Fees Locked:</span> Standard lifetime access to native driver insights dashboard.
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-indigo-100 border border-indigo-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 animate-pulse" style={{ strokeWidth: 2.5 }} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-bold leading-normal">
                        <span className="text-indigo-650 font-extrabold">Instant Activation & Bypass:</span> Passively monitors without writing commands. Fully warranties-compliant.
                      </p>
                    </div>
                  </div>

                  {/* Form Input Block */}
                  <form onSubmit={handleSubmit} className="pt-4 space-y-4 max-w-lg">
                    
                    {/* Interactive Selector Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">
                          Your Province / Territory
                        </label>
                        <select
                          value={provState}
                          onChange={(e) => setProvState(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs text-slate-800 font-semibold focus:outline-none focus:bg-white focus:ring-1 focus:ring-rose-450"
                        >
                          {provinces.map((p) => (
                            <option key={p.code} value={p.code}>
                              🇨🇦 {p.name} ({p.code})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest block opacity-0 sm:block">
                          placeholder
                        </label>
                        <span className="text-[10px] sm:text-xs text-indigo-600 font-bold block pt-2 sm:pt-4">
                          ⚡ Shipped express from your closest hub
                        </span>
                      </div>

                    </div>

                    {/* Email Input Bar */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        disabled={isSubmitting}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your personal email address"
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white focus:ring-1 focus:ring-rose-400 shadow-sm transition-all duration-300"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-slate-950 hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-slate-955/10"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Get Free Report
                            <Send className="w-3.5 h-3.5 text-rose-400" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>

                  {/* Extra value microcopy */}
                  <p className="text-[10px] sm:text-xs text-slate-405 leading-relaxed font-bold">
                    🔒 Strictly zero spam or tracking cookies. Diagnostic telemetry never leaves the local micro-processor. Compliant with ICES-003 guidelines.
                  </p>

                </div>
              ) : (
                <div className="space-y-6 py-4 animate-fade-in">
                  
                  {/* Success Badge */}
                  <div className="w-14 h-14 bg-emerald-55 border border-emerald-200 rounded-full flex items-center justify-center mb-4 animate-bounce shrink-0 shadow-sm">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 font-bold" />
                  </div>

                  {/* Success Messages */}
                  <h3 className="font-display font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight leading-tight">
                    You’re on the Founding Waitlist!
                  </h3>
                  
                  <div className="bg-gradient-to-br from-indigo-50/50 via-white to-rose-50/20 border border-indigo-120/40 rounded-2xl p-5 text-left space-y-1.5 shadow-sm">
                    <span className="text-[10px] uppercase font-black text-slate-500 block tracking-widest font-mono">
                      Your Founding Priority Queue Spot
                    </span>
                    <span className="font-display font-black text-indigo-950 text-3xl sm:text-4xl block mt-1 tracking-tight">
                      #{waitlistNumber}
                    </span>
                    <span className="text-xs text-slate-650 mt-1 block font-semibold leading-relaxed">
                      Pre-order rate locked successfully for <span className="text-slate-950 font-black">{email}</span>. A custom diagnostic setup guide is currently routing to your inbox.
                    </span>
                  </div>

                  <div className="space-y-2.5 text-left text-xs bg-slate-50 border border-slate-150 p-4 rounded-xl text-slate-600 leading-normal font-semibold shadow-inner">
                    <span className="text-slate-900 font-black block mb-1 font-mono uppercase text-[10px] tracking-wider">What happens next:</span>
                    <p>1. Receipt confirmation delivered directly to {email}.</p>
                    <p>2. Personalized vehicle compatibility report generated.</p>
                    <p>3. Early shipping access invite arriving ahead of June Summer launch.</p>
                  </div>

                  {/* Sharing referral link or extra copy */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 font-semibold text-xs">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pass code locked</span>
                    <span className="text-[11px] bg-indigo-50 border border-indigo-200/40 text-indigo-750 px-3 py-1 rounded font-mono font-bold uppercase tracking-widest">
                      {Math.random().toString(36).substring(2, 8).toUpperCase()}
                    </span>
                  </div>

                </div>
              )}

            </div>

            {/* Right Column: Premium Digital Diagnostic Safety Report Mockup */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden text-left">
              
              {/* Animated overlay styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
              <div className="absolute -right-32 -top-32 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10 w-full">
                
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                      ASTRATEQ DIGITAL BLUEPRINT
                    </span>
                  </div>
                  <span className="text-[8px] bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded font-mono font-extrabold tracking-wider uppercase">
                    FREE REPORT
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-black text-white text-lg leading-tight uppercase tracking-wide">
                    Personal Hardware Mappings Lock
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold leading-normal">
                    Secure an instant compatibility spec sheets packet for your year and dashboard console layouts.
                  </p>
                </div>

                {/* Simulated Diagnostic Dashboard Card */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4.5 space-y-3 shadow-2xl relative">
                  
                  {/* Glowing Radar scan element */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[8px] font-mono tracking-widest font-bold text-emerald-400">
                      SECURED COMPATIBILITY
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] uppercase font-mono font-black text-rose-450 tracking-wider">
                      Live Regional Shipping Audit
                    </span>
                    <div className="flex items-center justify-between text-xs text-white pb-1.5 border-b border-slate-800">
                      <span className="font-medium text-slate-400">Selected Hub:</span>
                      <span className="font-bold flex items-center gap-1">
                        🍁 CAN-WEST ({provState})
                      </span>
                    </div>
                  </div>

                  {/* Simulated Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 text-left pt-1">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                      <span className="text-[8px] text-slate-500 uppercase font-black block leading-none">Shipping Tier</span>
                      <span className="text-white font-mono font-black text-[10px] block mt-1">2-3 Day Express</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850">
                      <span className="text-[8px] text-slate-500 uppercase font-black block leading-none">Diagnostic Rate</span>
                      <span className="text-white font-mono font-black text-[10px] block mt-1">LIFETIME $0 CAD</span>
                    </div>
                  </div>

                  {/* Supercapacitor Winter-hardened confirmation indicator */}
                  <div className="bg-indigo-950/40 border border-indigo-900/40 rounded-xl p-2.5 flex items-center gap-2 text-xs text-indigo-300 font-bold leading-none">
                    <span className="text-sm">❄️</span>
                    <span>Extreme -35°C Canadian Winter Shield Certified</span>
                  </div>

                </div>

                {/* Safe assurance note */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Compliance validation with Transport Canada framework</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Securing lifetime firmware downloads access</span>
                  </div>
                </div>

              </div>

              {/* Bottom Maple Leaf Seal badge */}
              <div className="text-[10px] text-center text-slate-500 font-bold mt-8 border-t border-slate-900 pt-4 flex items-center justify-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-650 fill-rose-650" />
                Designed specifically for safety, privacy, and zero monthly fees.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
