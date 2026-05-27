import { Box, Smartphone, Check, ShieldCheck, Eye } from 'lucide-react';

export default function WhatIsIncluded() {
  const specs = [
    {
      title: 'ASTRA-AI DriveGuard Unit',
      desc: 'Our flagship edge-processing neural CPU. Taps OBD telemetry directly with sub-12ms response intervals. Standard elegant dashboard profile.',
      icon: <Box className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: 'RoadGuard Pro Vision',
      desc: 'Compact smart camera featuring premium night vision grids. Analyzes cabin drowsiness states and lanes without sending video feeds to any cloud server.',
      icon: <Eye className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: 'OBD-II Secure Sync Harness',
      desc: '30-second plug-and-play installation hook. Direct compatible wiring compatible with post-2010 models. Power over OBD guarantees zero battery drain.',
      icon: <ShieldCheck className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: 'Companion Mobile Licensing',
      desc: 'Free companion iOS and Android app licenses. Streamlined driving analytics, instant alerts, custom alerts config, and zero subscription pricing fees.',
      icon: <Smartphone className="w-4 h-4 text-indigo-600" />,
    },
  ];

  return (
    <section id="included" className="py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Visual background ambient line */}
      <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-indigo-150 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
            In The Box
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
            What’s Included in the Family Safety Bundle
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
            Everything you need for multi-vehicle protection in one premium set. Zero extra adapters or cloud setup required.
          </p>
        </div>

        {/* Visual Box Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Interactive Diagram Card */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 relative w-full max-w-[380px] aspect-square flex flex-col justify-between overflow-hidden shadow-xl">
              
              {/* Box graphic SVG schema */}
              <div className="flex-1 flex items-center justify-center relative">
                
                {/* Center Core Box */}
                <div className="w-32 h-32 bg-white border-2 border-indigo-600 rounded-2xl flex items-center justify-center relative shadow-lg shadow-indigo-600/5 z-10 transition-transform hover:scale-105">
                  <Box className="w-12 h-12 text-indigo-650" />
                  <span className="absolute bottom-2 font-display text-[9px] font-bold text-indigo-650 tracking-wider">
                    ASTRA CORE
                  </span>
                </div>

                {/* Satellite Module indicators */}
                <div className="absolute -top-4 left-6 bg-white border border-slate-205 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 transform translate-y-2 animate-bounce">
                  <Eye className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-[10px] text-slate-800 font-bold">Smart Vision Camera</span>
                </div>

                <div className="absolute -bottom-2 right-6 bg-white border border-slate-205 shadow-md rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 transform -translate-y-2 animate-bounce" style={{ animationDelay: '2s' }}>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] text-slate-800 font-bold">OBD Sync Connector</span>
                </div>

              </div>

              {/* Status Note */}
              <div className="border-t border-slate-100 pt-4 text-center">
                <span className="text-[10px] text-slate-450 uppercase font-bold tracking-wider">
                  Hardware Model: F-2026-CA
                </span>
                <p className="text-[11px] text-indigo-605 mt-1 font-bold">
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
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-indigo-400 group transition-all duration-300 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/60 flex items-center justify-center mb-4 group-hover:bg-indigo-100 group-hover:border-indigo-30 transition-colors">
                    {spec.icon}
                  </div>
                  <h3 className="font-sans font-bold text-sm sm:text-base text-slate-800 tracking-tight mb-2 group-hover:text-indigo-650 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick value checkmark overview */}
            <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-slate-600">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Standard compliance: OBD-II socket</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Zero subscription fee license</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Offline local fallback ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Lifetime digital companion updates</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
