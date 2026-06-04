import React from 'react';
import { Compass, ShieldCheck, Database, Car, Lock, RefreshCw, Award, Sparkles } from 'lucide-react';

export default function SocialProofReplacement() {
  const credibilityPoints = [
    {
      title: "Designed Around Canadian Driving Conditions",
      desc: "Vetted for high thermal extremes. Supercapacitor energy storage is integrated natively instead of volatile lithium chemistries to run perfectly from -35°C to 85°C.",
      icon: <Compass className="w-5 h-5 text-sky-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-sky-100/90 hover:border-sky-350",
        shadow: "shadow-[0_12px_30px_rgba(14,165,233,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(14,165,233,0.14)]",
        iconContainer: "bg-sky-50 border border-sky-150 text-sky-600 ring-4 ring-sky-500/5 group-hover:ring-sky-500/10",
        accentGradient: "bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500",
        bgSpotlight: "bg-sky-500/[0.03]",
        accentTextColor: "group-hover:text-sky-600 font-extrabold"
      }
    },
    {
      title: "Privacy-First Architecture",
      desc: "Adhering strictly to federal PIPEDA privacy constraints. Telemetry calculations are kept inside the physical device. We maintain zero cloud-streaming pipelines.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-indigo-100 hover:border-indigo-350",
        shadow: "shadow-[0_12px_30px_rgba(99,102,241,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(99,102,241,0.14)]",
        iconContainer: "bg-indigo-50 border border-indigo-150 text-indigo-600 ring-4 ring-indigo-500/5 group-hover:ring-indigo-500/10",
        accentGradient: "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",
        bgSpotlight: "bg-indigo-500/[0.03]",
        accentTextColor: "group-hover:text-indigo-600 font-extrabold"
      }
    },
    {
      title: "Local Edge Processing",
      desc: "All predictive safety HUD scans are executed recursively within 12 milliseconds using dedicated neural hardware inside the windshield casing.",
      icon: <Database className="w-5 h-5 text-amber-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-amber-100 hover:border-amber-350",
        shadow: "shadow-[0_12px_30px_rgba(245,158,11,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(245,158,11,0.14)]",
        iconContainer: "bg-amber-50 border border-amber-150 text-amber-600 ring-4 ring-amber-500/5 group-hover:ring-amber-500/10",
        accentGradient: "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500",
        bgSpotlight: "bg-amber-500/[0.03]",
        accentTextColor: "group-hover:text-amber-600 font-extrabold"
      }
    },
    {
      title: "Compatibility Validation",
      desc: "Backed by direct OBD-II testing profiles. Compatible with over 98.4% of vehicles driven throughout Canada manufactured since 2010.",
      icon: <Car className="w-5 h-5 text-emerald-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-emerald-100 hover:border-emerald-350",
        shadow: "shadow-[0_12px_30px_rgba(16,185,129,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(16,185,129,0.14)]",
        iconContainer: "bg-emerald-50 border border-emerald-150 text-emerald-600 ring-4 ring-emerald-500/5 group-hover:ring-emerald-500/10",
        accentGradient: "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500",
        bgSpotlight: "bg-emerald-500/[0.03]",
        accentTextColor: "group-hover:text-emerald-600 font-extrabold"
      }
    },
    {
      title: "Secure Hardware Design",
      desc: "Heavy electromagnetic shielding is layered across the OBD transceiver wires to guarantee passive sync without altering vehicle electronics or voiding factory warranty coverages.",
      icon: <Lock className="w-5 h-5 text-rose-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-rose-100 hover:border-rose-350",
        shadow: "shadow-[0_12px_30px_rgba(244,63,94,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(244,63,94,0.14)]",
        iconContainer: "bg-rose-50 border border-rose-150 text-rose-600 ring-4 ring-rose-500/5 group-hover:ring-rose-500/10",
        accentGradient: "bg-gradient-to-r from-rose-400 via-rose-500 to-pink-500",
        bgSpotlight: "bg-rose-500/[0.03]",
        accentTextColor: "group-hover:text-rose-600 font-extrabold"
      }
    },
    {
      title: "Future Firmware Support",
      desc: "Lifetime client security upgrades. Receive passive over-the-air firmware optimizations and model enhancements smoothly through your secure offline mobile sync portal.",
      icon: <RefreshCw className="w-5 h-5 text-violet-500" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-violet-100 hover:border-violet-350",
        shadow: "shadow-[0_12px_30px_rgba(139,92,246,0.02),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_22px_45px_rgba(139,92,246,0.14)]",
        iconContainer: "bg-violet-50 border border-violet-150 text-violet-600 ring-4 ring-violet-500/5 group-hover:ring-violet-500/10",
        accentGradient: "bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-500",
        bgSpotlight: "bg-violet-500/[0.03]",
        accentTextColor: "group-hover:text-violet-600 font-extrabold"
      }
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
              className={`bg-white border-2 ${point.theme.border} ${point.theme.shadow} rounded-2.5xl p-6 group transition-all duration-500 flex flex-col justify-between text-left relative overflow-hidden`}
            >
              {/* Top accent colorful band */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${point.theme.accentGradient} transition-transform duration-500`} />
              
              <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full ${point.theme.bgSpotlight} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                <div className={`w-10 h-10 rounded-xl ${point.theme.iconContainer} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {point.icon}
                </div>
                
                <div className="space-y-1.5">
                  <h3 className={`text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug ${point.theme.accentTextColor} transition-colors duration-300`}>
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
                    {point.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
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
