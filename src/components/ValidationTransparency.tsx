import React from 'react';
import { ShieldCheck, MapPin, Database, Award, Lock, Cpu, Sparkles } from 'lucide-react';

export default function ValidationTransparency() {
  const badges = [
    {
      label: "Validation Phase",
      icon: <Award className="w-5 h-5 text-amber-600" />,
      desc: "Pre-production validation & market audit",
      cardStyle: "bg-gradient-to-b from-amber-50 to-amber-100/40 border-amber-200/80 hover:border-amber-400 hover:shadow-amber-600/5",
      iconBgHover: "bg-amber-100/80 border-amber-250",
      labelColor: "text-amber-950 font-black",
      descColor: "text-amber-850 font-semibold"
    },
    {
      label: "Canadian Company",
      icon: <MapPin className="w-5 h-5 text-rose-600" />,
      desc: "Proudly established, based and verified in BC",
      cardStyle: "bg-gradient-to-b from-rose-50 to-rose-100/40 border-rose-200/80 hover:border-rose-400 hover:shadow-rose-600/5",
      iconBgHover: "bg-rose-100/80 border-rose-250",
      labelColor: "text-rose-950 font-black",
      descColor: "text-rose-850 font-semibold"
    },
    {
      label: "Privacy First",
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      desc: "Secure zero-cloud, strictly local edge ledger",
      cardStyle: "bg-gradient-to-b from-emerald-50 to-emerald-100/40 border-emerald-200/80 hover:border-emerald-400 hover:shadow-emerald-600/5",
      iconBgHover: "bg-emerald-100/80 border-emerald-250",
      labelColor: "text-emerald-950 font-black",
      descColor: "text-emerald-850 font-semibold"
    },
    {
      label: "Local Processing",
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      desc: "Sub-12ms on-device active diagnostic checks",
      cardStyle: "bg-gradient-to-b from-cyan-50 to-cyan-100/40 border-cyan-200/80 hover:border-cyan-400 hover:shadow-cyan-600/5",
      iconBgHover: "bg-cyan-100/80 border-cyan-250",
      labelColor: "text-cyan-950 font-black",
      descColor: "text-cyan-850 font-semibold"
    },
    {
      label: "No Subscription",
      icon: <Database className="w-5 h-5 text-indigo-650" />,
      desc: "Lifetime physical hardware license",
      cardStyle: "bg-gradient-to-b from-indigo-50 to-indigo-100/40 border-indigo-200/80 hover:border-indigo-400 hover:shadow-indigo-600/5",
      iconBgHover: "bg-indigo-100/80 border-indigo-250",
      labelColor: "text-indigo-950 font-black",
      descColor: "text-indigo-850 font-semibold"
    }
  ];

  return (
    <section id="validation-transparency" className="w-full bg-gradient-to-b from-[#F5F8FF] via-[#FAFCFF] to-white border-b border-slate-150 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative clean radial graphics for premium touch */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Colorful Highlight Top Banner */}
        <div className="inline-flex items-center gap-2 bg-indigo-100/80 border border-indigo-200/85 shadow-sm rounded-full px-4 py-1.5 mb-8">
          <Sparkles className="w-4 h-4 text-indigo-700 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-extrabold uppercase text-indigo-805 tracking-wider font-sans">
            Canadian Transparency Framework
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4.5xl text-slate-900 font-black tracking-tight leading-none mb-6">
          Built in Public. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-600">Validated Before Production.</span>
        </h2>

        {/* Informational Copy */}
        <p className="text-slate-700 font-bold text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-12 text-left sm:text-center px-2">
          Astrateq Gadgets is currently in an active pre-launch validation phase. We are evaluating customer demand, supplier feasibility, and product-market fit before committing to full-scale manufacturing. Early supporters help shape the future of privacy-first vehicle intelligence designed specifically for Canadian drivers.
        </p>

        {/* Supporting Badges Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10 justify-center">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-between p-5 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${badge.cardStyle}`}
            >
              <div className="flex flex-col items-center w-full">
                {/* Glowing Colored Icon Ring */}
                <div className={`mb-4 p-3 border rounded-xl shadow-xs transition-colors duration-300 ${badge.iconBgHover}`}>
                  {badge.icon}
                </div>
                
                {/* Label */}
                <h3 className={`text-[13px] sm:text-[14px] leading-tight mb-2 text-center tracking-tight ${badge.labelColor}`}>
                  {badge.label}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-[11px] leading-relaxed text-center font-medium mt-1 w-full border-t border-black/5 pt-3 ${badge.descColor}`}>
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Small Notice at bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-800 font-bold bg-white/70 border border-slate-200/80 px-5 py-3 rounded-full w-fit mx-auto shadow-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-650" />
            <span>Transparency Framework compliance guaranteed</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="font-mono text-[11px] text-slate-500">Section Code: PRE-LAUNCH-CAN-2026</span>
        </div>

      </div>
    </section>
  );
}
