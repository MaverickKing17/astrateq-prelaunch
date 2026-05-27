import { Box, Smartphone, Check, ShieldCheck, Eye } from 'lucide-react';

const smartDashcamImg = '/src/assets/images/smart_dashcam_product_1779905537085.png';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto border-b border-slate-205/50 pb-12">
          
          {/* Left: Beautiful Hardware Product Interactive Diagram Component */}
          <div className="lg:col-span-5 relative flex flex-col items-center order-2 lg:order-1 w-full max-w-md mx-auto">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 relative w-full overflow-hidden shadow-2xl flex flex-col justify-between group">
              
              {/* Subtle top red/white/indigo decorative line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-indigo-650" />
              
              {/* Dynamic Grid Background Overlay representing advanced calibration */}
              <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              
              {/* Title Header with status */}
              <div className="flex items-center justify-between mb-4 relative z-10 border-b border-slate-900 pb-3">
                <span className="text-[10px] font-mono font-black text-slate-400 tracking-widest uppercase">
                  📦 In-the-Box Hardware Blueprint
                </span>
                <span className="text-[8px] bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
                  Premium Quality
                </span>
              </div>

              {/* Hardware showcase content */}
              <div className="relative h-64 w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/80 mb-4 flex items-center justify-center p-3">
                
                {/* Windshield Scenic background shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Genuine High-Quality Smart Dashcam Product image */}
                <img
                  src={smartDashcamImg}
                  alt="ASTRA High-Tech Dual-Lens Smart Dashcam Windshield Mount"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Scanning laser visual effect */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse opacity-70 top-1/3 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

                {/* HUD Overlay 1: Front Facing Lens */}
                <div className="absolute top-6 left-6 flex items-center gap-2 transform translate-y-2 animate-bounce">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                  </span>
                  <div className="bg-slate-950/90 border border-slate-800 rounded-lg px-2 py-1 text-left shadow-lg backdrop-blur-sm">
                    <span className="text-[9.5px] text-indigo-300 font-mono font-black tracking-widest uppercase block leading-none">Dual-Lens Optics</span>
                    <span className="text-[7.5px] text-slate-400 font-semibold leading-none">Full 1085p night vision</span>
                  </div>
                </div>

                {/* HUD Overlay 2: OBD Integration Wire */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 transform -translate-y-2 animate-bounce" style={{ animationDelay: '2.5s' }}>
                  <div className="bg-slate-950/90 border border-slate-800 rounded-lg px-2 py-1 text-right shadow-lg backdrop-blur-sm">
                    <span className="text-[9.5px] text-emerald-400 font-mono font-black tracking-widest uppercase block leading-none">OBD Connection</span>
                    <span className="text-[7.5px] text-slate-400 font-semibold leading-none">30s click-in harness</span>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>

                {/* Corner watermarks */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-950/80 border border-slate-800/80 px-2 py-0.5 rounded shadow">
                  <span className="text-[8px] font-mono tracking-widest font-black uppercase text-emerald-400">
                    PASSIVE HARDWARE UNIT
                  </span>
                </div>

              </div>

              {/* Status Note & Packaging Assurance Details */}
              <div className="border-t border-slate-900 pt-3.5 flex flex-col items-center">
                <span className="text-[9px] text-slate-400 uppercase font-black tracking-widest font-mono">
                  Hardware Model: F-2026-CA / CAN-SPEC
                </span>
                <p className="text-xs text-indigo-300 mt-1 font-bold">
                  Complete Dual-Lens In-Cabin Hardware Kit
                </p>
                
                <div className="mt-3.5 w-full bg-slate-900/50 border border-slate-900/80 rounded-xl p-3 flex items-center gap-2.5 text-left">
                  <span className="text-base">💎</span>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-black">Canadian Retail Guarantee</span>
                    <span className="text-[10px] text-slate-300 font-medium leading-normal">
                      Zero subscription fees ever. Protected by a <span className="text-rose-405 font-bold">3-Year winter-proof warranty</span> and shipped express.
                    </span>
                  </div>
                </div>

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
