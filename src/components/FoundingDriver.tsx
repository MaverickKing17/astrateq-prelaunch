import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Trophy, Users, Shield, Zap, Flame } from 'lucide-react';

interface FoundingDriverProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FoundingDriver({ onScrollToSection }: FoundingDriverProps) {
  const [spotsRemaining, setSpotsRemaining] = useState(78);
  const [liveQueue, setLiveQueue] = useState(4912);

  // Live simulation of reservation activity
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsRemaining((prev) => {
        if (prev <= 12) return prev; // Don't let it run out or look fake
        // 5% chance of decreasing a spot
        if (Math.random() > 0.9) {
          return prev - 1;
        }
        return prev;
      });
      setLiveQueue((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 15000);

    return () => clearInterval(spotTimer);
  }, []);

  const benefits = [
    {
      title: "Priority Product Access",
      desc: "Guaranteed position in the very first manufacturing run. Skip public wait periods entirely."
    },
    {
      title: "Founding Member Pricing",
      desc: "Locked-in early adopter discount. Lifetime preservation against standard commercial MSRP rate increases."
    },
    {
      title: "Exclusive Product Updates",
      desc: "Behind-the-scenes engineering logs. Direct beta access to advanced radar and camera telemetry firmware releases."
    },
    {
      title: "Direct Feedback Access",
      desc: "Join our private Telegram/Slack channels directly with our core engineering team in Toronto."
    },
    {
      title: "Priority Shipping",
      desc: "Tracked Express shipping across all Canadian provinces is fully covered. Shipped priority from our Ontario hub."
    },
    {
      title: "Early Feature Access",
      desc: "Beta-test advanced local AI intrusion algorithms and predictive lane hazards before public rollout."
    }
  ];

  return (
    <section id="founding-driver" className="py-24 bg-[#080d16] text-white border-y border-slate-900 relative overflow-hidden">
      {/* Absolute visual premium highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/25 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            Limited Founding Driver Allocation
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
            Become a Founding Driver
          </h2>
          
          <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Join the first group of Canadian drivers helping shape the future of privacy-first vehicle intelligence.
          </p>
        </div>

        {/* Benefits Grid & Spots Urgency Counter Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Panel: Real-time Urgency & Status Console */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F172A] to-[#090D16] border-2 border-indigo-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_35px_rgba(99,102,241,0.25)] relative overflow-hidden group hover:border-indigo-400 transition-all duration-300">
            {/* Top scanning bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-indigo-500 to-emerald-500" />
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="text-[10px] uppercase font-mono font-black text-indigo-400 tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-400 animate-pulse" />
                Live Allocation Feed
              </span>
              <span className="text-[9px] bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold px-2 py-0.5 rounded font-mono uppercase tracking-wider animate-pulse">
                Canadian Registry
              </span>
            </div>

            {/* Metric Displays */}
            <div className="space-y-6">
              
              {/* Urgency Spot Counter */}
              <div className="bg-[#030712] border border-slate-850 rounded-2xl p-5 text-center relative overflow-hidden">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold block mb-1">
                  Queue Spots Remaining (Phase 1)
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black font-mono text-rose-550 tracking-tight animate-pulse">
                    {spotsRemaining}
                  </span>
                  <span className="text-slate-500 text-sm font-semibold">/ 1,000</span>
                </div>
                <div className="mt-2 text-[10.5px] text-rose-300 font-bold flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  Reserved for Canadian provinces active checkouts.
                </div>
              </div>

              {/* Verified Registry Queue */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Queue Position Pool</span>
                  <p className="text-sm font-bold text-slate-205">Adopter IDs Verified</p>
                </div>
                <span className="font-mono text-base font-black text-indigo-400">
                  #{liveQueue}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Staggered Escrow</span>
                  <p className="text-sm font-bold text-slate-205">Refund Guarantee</p>
                </div>
                <span className="text-[11px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-0.5 rounded font-bold uppercase font-mono">
                  100% Secure
                </span>
              </div>

              {/* High-Impact Interactive CTA Button */}
              <button
                onClick={() => onScrollToSection('pricing')}
                className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-650 hover:from-amber-400 hover:via-orange-400 hover:to-rose-550 text-white font-black text-xs sm:text-[13px] uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:shadow-[0_0_35px_rgba(249,115,22,0.65)] ring-2 ring-amber-400/20 hover:ring-amber-300/50 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform hover:scale-[1.025] active:scale-[0.975] relative overflow-hidden group/btn"
              >
                <span className="absolute inset-x-0 bottom-0 h-1/3 bg-white/10 animate-pulse pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-200 animate-pulse shrink-0" />
                  RESERVE YOUR FOUNDING SPOT ($49)
                  <ArrowRight size={15} style={{ strokeWidth: 3 }} className="group-hover/btn:translate-x-1 transition-transform shrink-0" />
                </span>
              </button>

              <p className="text-[10px] text-slate-450 leading-relaxed text-center font-medium">
                Locked fully refundable deposit holds your priority order and hardware pricing list position. Underwritten by Astrateq’s strict money-back safety commitment.
              </p>

            </div>
          </div>

          {/* Right Panel: Benefits Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-950/80 border-2 border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.18)] hover:border-indigo-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] rounded-2xl p-5 transition-all duration-300 flex gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-100 tracking-tight leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-normal font-semibold">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
