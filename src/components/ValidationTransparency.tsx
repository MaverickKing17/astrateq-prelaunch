import React from 'react';
import { ShieldCheck, MapPin, Database, Award, HelpCircle, Lock, Cpu, Sparkles } from 'lucide-react';

export default function ValidationTransparency() {
  const badges = [
    {
      label: "Validation Phase",
      icon: <Award className="w-4 h-4 text-amber-500" />,
      desc: "Pre-production validation",
      bgStyle: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    {
      label: "Canadian Company",
      icon: <MapPin className="w-4 h-4 text-rose-500" />,
      desc: "Proudly based in BC, Canada",
      bgStyle: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    },
    {
      label: "Privacy First",
      icon: <Lock className="w-4 h-4 text-emerald-500" />,
      desc: "Secure on-device database",
      bgStyle: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    {
      label: "Local Processing",
      icon: <Cpu className="w-4 h-4 text-cyan-500" />,
      desc: "High-efficiency edge computing",
      bgStyle: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    },
    {
      label: "No Subscription Commitment",
      icon: <Database className="w-4 h-4 text-indigo-500" />,
      desc: "Permanent hardware ownership",
      bgStyle: "bg-indigo-500/10 text-indigo-550 border-indigo-500/20",
    },
  ];

  return (
    <section id="validation-transparency" className="w-full bg-[#FAFCFF] border-b border-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Soft Indigo Top Banner */}
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-650 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-indigo-700 tracking-wider">
            Active Validation Phase
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight leading-tight mb-6">
          Built in Public. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-600">Validated Before Production.</span>
        </h2>

        {/* Informational Copy */}
        <p className="text-slate-650 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-left sm:text-center">
          Astrateq Gadgets is currently in pre-launch validation. We are evaluating customer demand, supplier feasibility, and product-market fit before committing to full-scale manufacturing. Early supporters help shape the future of privacy-first vehicle intelligence designed specifically for Canadian drivers.
        </p>

        {/* Supporting Badges Display */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 mt-8 justify-center">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center p-4 bg-white border border-slate-150 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="mb-2 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                {badge.icon}
              </div>
              <span className="text-[11px] font-bold text-slate-800 tracking-tight leading-tight mb-1 text-center">
                {badge.label}
              </span>
              <span className="text-[9px] text-slate-400 font-mono text-center">
                {badge.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Small Notice at bottom */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Transparency Framework aligned with Canadian pre-order standards.</span>
        </div>

      </div>
    </section>
  );
}
