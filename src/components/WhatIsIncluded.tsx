import { Box, Smartphone, Check, ShieldCheck, HelpCircle, Eye } from 'lucide-react';

export default function WhatIsIncluded() {
  const specs = [
    {
      title: 'ASTRA-AI DriveGuard Unit',
      desc: 'Our flagship edge-processing neural CPU. Taps OBD telemetry directly with sub-12ms response intervals. Standard elegant dashboard profile.',
      icon: <Box className="w-4 h-4 text-brand-cyan" />,
    },
    {
      title: 'RoadGuard Pro Vision',
      desc: 'Compact smart camera featuring premium night vision grids. Analyzes cabin drowsiness states and lanes without sending video feeds to any cloud server.',
      icon: <Eye className="w-4 h-4 text-brand-cyan" />,
    },
    {
      title: 'OBD-II secure Sync Harness',
      desc: '30-second plug-and-play installation hook. Direct compatible wiring compatible with post-2010 models. Power over OBD guarantees zero battery drain.',
      icon: <ShieldCheck className="w-4 h-4 text-brand-cyan" />,
    },
    {
      title: 'Companion Mobile Licensing',
      desc: 'Free companion iOS and Android app licenses. Streamlined driving analytics, instant alerts, custom alerts config, and zero subscription pricing fees.',
      icon: <Smartphone className="w-4 h-4 text-brand-cyan" />,
    },
  ];

  return (
    <section id="included" className="py-20 bg-slate-900/20 border-y border-slate-800/50 relative overflow-hidden">
      
      {/* Visual background ambient line */}
      <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-brand-cyan/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-cyan font-bold block mb-3">
            In The Box
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-4">
            What’s Included in the Family Safety Bundle
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Everything you need for multi-vehicle protection in one premium set. Zero extra adapters or cloud setup required.
          </p>
        </div>

        {/* Visual Box Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Interactive Diagram Card */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="bg-slate-800/40 border border-white/10 rounded-3xl p-6 relative w-full max-w-[380px] aspect-square flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-md">
              
              {/* Box graphic SVG schema */}
              <div className="flex-1 flex items-center justify-center relative">
                
                {/* Center Core Box */}
                <div className="w-32 h-32 bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-indigo-500 rounded-2xl flex items-center justify-center relative shadow-[0_0_30px_rgba(99,102,241,0.2)] animate-pulse z-10 transition-transform hover:scale-105">
                  <Box className="w-12 h-12 text-[#22D3EE]" />
                  <span className="absolute bottom-2 font-display text-[9px] font-bold text-brand-cyan tracking-wider">
                    ASTRA CORE
                  </span>
                </div>

                {/* Satellite Module indicators */}
                <div className="absolute -top-4 left-6 bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-lg transform translate-y-2 animate-bounce">
                  <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="text-[10px] text-white font-bold">Smart Vision Camera</span>
                </div>

                <div className="absolute -bottom-2 right-6 bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-lg transform -translate-y-2 animate-bounce" style={{ animationDelay: '2s' }}>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-white font-bold">OBD Sync Connector</span>
                </div>

              </div>

              {/* Status Note */}
              <div className="border-t border-white/5 pt-4 text-center">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                  Hardware Model: F-2026-CA
                </span>
                <p className="text-[11px] text-[#00D4FF] mt-1 font-semibold">
                  Comprehensive Dual Car Kit Bundle
                </p>
              </div>

            </div>
          </div>

          {/* Right: Breakdown list specs */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, i) => (
                <div
                  key={i}
                  className="bg-slate-800/40 border border-white/10 rounded-2xl p-5 hover:border-brand-cyan/15 group transition-colors duration-300 shadow-md"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/5 border border-brand-cyan/10 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/15 group-hover:border-brand-cyan/30 transition-colors">
                    {spec.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick value checkmark overview */}
            <div className="border-t border-white/5 pt-6 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-gray-400 font-semibold">
                <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                <span>Standard compliance: OBD-II socket</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-semibold">
                <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                <span>Zero subscription fee license</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-semibold">
                <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                <span>Offline local fallback ready</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-semibold">
                <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                <span>Lifetime digital companion updates</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
