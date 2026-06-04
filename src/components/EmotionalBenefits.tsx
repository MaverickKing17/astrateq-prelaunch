import React from 'react';
import { Shield, Eye, Heart, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface EmotionalBenefitsProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function EmotionalBenefits({ onScrollToSection }: EmotionalBenefitsProps) {
  const cards = [
    {
      title: "Family Protection",
      desc: "Know More About Your Vehicle Before Problems Become Emergencies.",
      subText: "Always ensure your children and spouse travel in a safe vehicle. Local diagnostics monitor brake wear alerts, cooling lines, and engine systems before they cause breakdowns.",
      icon: <Heart className="w-6 h-6 text-rose-500" />
    },
    {
      title: "Privacy By Design",
      desc: "Your data stays with you—not on someone else's cloud.",
      subText: "We strictly process visual video records and OBD-II diagnostics inside the vehicle. Insurance corporations, telemetry aggregators, and tech giants have absolutely zero access to your speed or coordinates.",
      icon: <Shield className="w-6 h-6 text-indigo-650" />
    },
    {
      title: "Confidence Every Drive",
      desc: "Built to help you understand your vehicle better.",
      subText: "Demystify complex dashboard error messages instantly with clear, conversational, jargon-free explanations. Travel remote corridors with absolute certainty that your vehicle is healthy.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Designed For Canada",
      desc: "Engineered with Canadian driving conditions in mind.",
      subText: "From sub-zero Yellowknife winters to slushy mountain highways. Built passive, robust, and winter-hardened utilizing stable thermal supercapacitors (no explosive lithium packs).",
      icon: <Compass className="w-6 h-6 text-blue-650" />
    }
  ];

  return (
    <section id="why-reserve" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-y border-slate-200/80 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.16em] text-indigo-650 font-black block mb-3 font-mono">
            Safety. Ownership. Peace of Mind.
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-905 tracking-tight leading-tight mb-4">
            Why Drivers Are Reserving Early
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-medium">
            Benefits first. Technology second. We build devices that serve you—not corporate databases.
          </p>
        </div>

        {/* 2x2 Clean Grid layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border-2 border-indigo-500/30 shadow-[0_0_18px_rgba(99,102,241,0.08)] hover:border-indigo-550 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)] rounded-3xl p-6 sm:p-8 group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-105 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] text-indigo-655 font-black uppercase tracking-widest font-mono">
                    {card.title}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-700 transition-colors">
                    {card.desc}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {card.subText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA button for conversion continuity */}
        <div className="text-center mt-12">
          <button
            onClick={() => onScrollToSection('pricing')}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F172A] hover:bg-indigo-650 text-white rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer"
          >
            Lock Your Refundable Reservation
            <ArrowRight size={14} className="text-indigo-300 animate-pulse" />
          </button>
        </div>

      </div>
    </section>
  );
}
