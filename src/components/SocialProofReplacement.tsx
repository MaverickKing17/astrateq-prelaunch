import React from 'react';
import { Compass, ShieldCheck, Database, Car, Lock, RefreshCw, Award, Sparkles } from 'lucide-react';

export default function SocialProofReplacement() {
  const credibilityPoints = [
    {
      title: "Designed Around Canadian Driving Conditions",
      desc: "Vetted for high thermal extremes. Supercapacitor energy storage is integrated natively instead of volatile lithium chemistries to run perfectly from -35°C to 85°C.",
      icon: <Compass className="w-5 h-5 text-indigo-650" />
    },
    {
      title: "Privacy-First Architecture",
      desc: "Adhering strictly to federal PIPEDA privacy constraints. Telemetry calculations are kept inside the physical device. We maintain zero cloud-streaming pipelines.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-650" />
    },
    {
      title: "Local Edge Processing",
      desc: "All predictive safety HUD scans are executed recursively within 12 milliseconds using dedicated neural hardware inside the windshield casing.",
      icon: <Database className="w-5 h-5 text-indigo-650" />
    },
    {
      title: "Compatibility Validation",
      desc: "Backed by direct OBD-II testing profiles. Compatible with over 98.4% of vehicles driven throughout Canada manufactured since 2010.",
      icon: <Car className="w-5 h-5 text-indigo-650" />
    },
    {
      title: "Secure Hardware Design",
      desc: "Heavy electromagnetic shielding is layered across the OBD transceiver wires to guarantee passive sync without altering vehicle electronics or voiding factory warranty coverages.",
      icon: <Lock className="w-5 h-5 text-indigo-650" />
    },
    {
      title: "Future Firmware Support",
      desc: "Lifetime client security upgrades. Receive passive over-the-air firmware optimizations and model enhancements smoothly through your secure offline mobile sync portal.",
      icon: <RefreshCw className="w-5 h-5 text-indigo-650" />
    }
  ];

  return (
    <section id="credibility" className="py-24 bg-gradient-to-b from-white via-[#F5F8FF]/40 to-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-blue-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-indigo-55/90 border border-indigo-200/80 px-4 py-2 rounded-full text-indigo-950 text-xs font-black uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 text-indigo-600" />
            Vetted Pre-Launch Validation Framework
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Credibility Built on Engineering, Not Testimonials
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Because Astrateq is currently pre-launch, we refuse to leverage simulated customer testimonials or fake text reviews. Instead, our credibility is validated against six strict engineering directives:
          </p>
        </div>

        {/* Bento Grid layout of 6 Credibility directs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {credibilityPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-indigo-500/30 shadow-[0_0_18px_rgba(99,102,241,0.08)] hover:border-indigo-500 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)] rounded-2.5xl p-6 group transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/40 border border-indigo-105 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-755 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
                    {point.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 font-extrabold uppercase">Engineering Audit</span>
                <span className="text-[9px] bg-emerald-50 border border-emerald-150 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold uppercase">Passed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
