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
      icon: <Heart className="w-6 h-6 text-rose-500 font-extrabold" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-rose-100 hover:border-rose-350",
        shadow: "shadow-[0_12px_30px_rgba(244,63,94,0.03),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_45px_rgba(244,63,94,0.14)]",
        iconContainer: "bg-rose-50 border border-rose-150 text-rose-500 ring-4 ring-rose-500/5 group-hover:ring-rose-500/10",
        tagText: "text-rose-600",
        tagBg: "bg-rose-50/50 text-rose-750 border border-rose-100/80",
        hoverTextColor: "group-hover:text-rose-600/90",
        accentGradient: "bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500",
        bgSpotlight: "bg-rose-500/[0.04]",
      }
    },
    {
      title: "Privacy By Design",
      desc: "Your data stays with you—not on someone else's cloud.",
      subText: "We strictly process visual video records and OBD-II diagnostics inside the vehicle. Insurance corporations, telemetry aggregators, and tech giants have absolutely zero access to your speed or coordinates.",
      icon: <Shield className="w-6 h-6 text-indigo-600" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-indigo-100 hover:border-indigo-350",
        shadow: "shadow-[0_12px_30px_rgba(99,102,241,0.03),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_45px_rgba(99,102,241,0.14)]",
        iconContainer: "bg-indigo-50 border border-indigo-150 text-indigo-600 ring-4 ring-indigo-500/5 group-hover:ring-indigo-500/10",
        tagText: "text-indigo-600",
        tagBg: "bg-indigo-50/50 text-indigo-750 border border-indigo-100/80",
        hoverTextColor: "group-hover:text-indigo-600/90",
        accentGradient: "bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500",
        bgSpotlight: "bg-indigo-500/[0.04]",
      }
    },
    {
      title: "Confidence Every Drive",
      desc: "Built to help you understand your vehicle better.",
      subText: "Demystify complex dashboard error messages instantly with clear, conversational, jargon-free explanations. Travel remote corridors with absolute certainty that your vehicle is healthy.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-emerald-100 hover:border-emerald-350",
        shadow: "shadow-[0_12px_30px_rgba(16,185,129,0.03),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_45px_rgba(16,185,129,0.14)]",
        iconContainer: "bg-emerald-50 border border-emerald-150 text-emerald-600 ring-4 ring-emerald-500/5 group-hover:ring-emerald-500/10",
        tagText: "text-emerald-600",
        tagBg: "bg-emerald-50/50 text-emerald-750 border border-emerald-100/80",
        hoverTextColor: "group-hover:text-emerald-600/90",
        accentGradient: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500",
        bgSpotlight: "bg-emerald-500/[0.04]",
      }
    },
    {
      title: "Designed For Canada",
      desc: "Engineered with Canadian driving conditions in mind.",
      subText: "From sub-zero Yellowknife winters to slushy mountain highways. Built passive, robust, and winter-hardened utilizing stable thermal supercapacitors (no explosive lithium packs).",
      icon: <Compass className="w-6 h-6 text-blue-600" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-blue-100 hover:border-blue-350",
        shadow: "shadow-[0_12px_30px_rgba(59,130,246,0.03),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_45px_rgba(59,130,246,0.14)]",
        iconContainer: "bg-blue-50 border border-blue-150 text-blue-600 ring-4 ring-blue-500/5 group-hover:ring-blue-500/10",
        tagText: "text-blue-600",
        tagBg: "bg-blue-50/50 text-blue-750 border border-blue-100/80",
        hoverTextColor: "group-hover:text-blue-600/90",
        accentGradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500",
        bgSpotlight: "bg-blue-500/[0.04]",
      }
    }
  ];

  return (
    <section id="why-reserve" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-white border-y border-slate-200/80 relative overflow-hidden">
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
              className={`bg-white border-2 ${card.theme.border} ${card.theme.shadow} rounded-3xl p-6 sm:p-8 group transition-all duration-500 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Dynamic visual top ribbon */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${card.theme.accentGradient} transition-transform duration-500`} />
              
              {/* Internal subtle glow hotspot on hover */}
              <div className={`absolute -right-24 -top-24 w-48 h-48 rounded-full ${card.theme.bgSpotlight} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="space-y-5 text-left relative z-10">
                
                {/* Visual Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${card.theme.iconContainer} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  
                  <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full font-mono ${card.theme.tagBg}`}>
                    {card.title}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className={`text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight ${card.theme.hoverTextColor} transition-colors duration-300`}>
                    {card.desc}
                  </h3>
                  <p className="text-sm text-slate-620 leading-relaxed font-semibold">
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
