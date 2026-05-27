import React from 'react';
import { 
  Smartphone, 
  Cpu, 
  ShieldAlert, 
  HeartHandshake, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Activity, 
  Eye, 
  CheckCircle2, 
  Milestone 
} from 'lucide-react';

export default function HowItWorks() {
  const handleScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Dynamic Background visual ornaments */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Colorful, Trust-Building Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-indigo-50 border border-indigo-100/60 px-4 py-1.5 rounded-full text-indigo-950 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
            <span className="text-base select-none">🇨🇦</span>
            Engineered for Canadian Coasts & Extreme Climates
          </div>
          
          <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight mb-4 leading-tight">
            How ASTRA Protects You in 4 Steps
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            No professional installation needed. Setup takes <span className="text-indigo-650 font-extrabold">under 2 minutes</span>, operates 100% offline, and costs <span className="text-emerald-600 font-extrabold">$0 in monthly fees</span>.
          </p>
        </div>

        {/* Dynamic, Illustrated Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch max-w-6xl mx-auto mb-16">
          
          {/* Step 1: Connect to OBD-II Port */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-5 text-left relative transition-all duration-300 hover:border-red-500/30 group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-500/5 overflow-hidden">
            
            {/* Corner Badge Label */}
            <div className="absolute top-0 right-0 bg-indigo-650 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded-bl-xl shadow-sm uppercase z-20">
              Phase 01
            </div>

            {/* Premium Enterprise-grade Image container */}
            <div className="h-40 bg-slate-950 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border border-slate-800">
              
              {/* Image element with required referrer policy */}
              <img
                src="/src/assets/images/obd_plugin_1779906848052.png"
                alt="ASTRA OBD-II Secure Sync Harness Click Installation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow backdrop-blur-sm z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[8px] text-emerald-400 font-mono uppercase tracking-widest font-black">Standard OBD Slot</span>
              </div>
              
              <div className="absolute top-2.5 left-2.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow text-[7.5px] text-slate-350 font-mono font-black uppercase tracking-widest leading-none z-10">
                Safe Passive Link
              </div>
            </div>

            {/* Title & Desc Area */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-150 flex items-center justify-center text-red-650 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide text-slate-900">
                Plug-In OBD Power
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Fits instantly under your steering wheel column. Delivers safe, constant, supercapacitor-regulated power. Zero wires to splice.
            </p>
          </div>

          {/* Step 2: Edge AI Core Ready */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-5 text-left relative transition-all duration-300 hover:border-indigo-500/30 group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
            
            {/* Corner Badge Label */}
            <div className="absolute top-0 right-0 bg-indigo-650 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded-bl-xl shadow-sm uppercase z-20">
              Phase 02
            </div>

            {/* Premium Enterprise-grade Image container */}
            <div className="h-40 bg-slate-950 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border border-slate-800">
              
              <img
                src="/src/assets/images/windshield_cam_1779906863402.png"
                alt="ASTRA Dual-Lens Smart camera mounted cleanly on windshield"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow backdrop-blur-sm z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-[8px] text-indigo-300 font-mono uppercase tracking-widest font-black">Windshield Mounted</span>
              </div>

              <div className="absolute top-2.5 left-2.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow text-[7.5px] text-emerald-400 font-mono font-black uppercase tracking-widest leading-none z-10">
                Calibration Ready
              </div>
            </div>

            {/* Title & Desc Area */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-650 shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide text-slate-900">
                Edge AI Active
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Windshield unit’s built-in neural processor activates. Calibrates road boundaries & focal alignment in seconds. Zero remote latency.
            </p>
          </div>

          {/* Step 3: Real-Time Driver Shield */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-5 text-left relative transition-all duration-300 hover:border-amber-500/30 group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-amber-500/5 overflow-hidden">
            
            {/* Corner Badge Label */}
            <div className="absolute top-0 right-0 bg-amber-600 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded-bl-xl shadow-sm uppercase z-20">
              Phase 03
            </div>

            {/* Premium Enterprise-grade Image container */}
            <div className="h-40 bg-slate-950 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border border-slate-800">
              
              <img
                src="/src/assets/images/active_scanning_1779906877154.png"
                alt="ASTRA HUD visual interface tracking lanes and obstacles"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow backdrop-blur-sm z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                <span className="text-[8px] text-amber-400 font-mono uppercase tracking-widest font-black">Predictive Guides</span>
              </div>

              <div className="absolute top-2.5 left-2.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow text-[7.5px] text-amber-400 font-mono font-black uppercase tracking-widest leading-none z-10">
                Sub-12ms Active Alert
              </div>
            </div>

            {/* Title & Desc Area */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-150 flex items-center justify-center text-amber-650 shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide text-slate-900">
                Real-Time Tracking
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Tracks forward mountain highway hazards, winter black ice slippage, and cabin fatigue instantly. Triggers sub-12ms warning audio alerts.
            </p>
          </div>

          {/* Step 4: Family App Connectivity */}
          <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-5 text-left relative transition-all duration-300 hover:border-emerald-500/30 group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden">
            
            {/* Corner Badge Label */}
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-mono text-[9px] font-black px-3.5 py-1 rounded-bl-xl shadow-sm uppercase z-20">
              Phase 04
            </div>

            {/* Premium Enterprise-grade Image container */}
            <div className="h-40 bg-slate-950 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center border border-slate-800">
              
              <img
                src="/src/assets/images/companion_app_1779906891255.png"
                alt="Smartphone syncing vehicle drive log dashboard data"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow backdrop-blur-sm z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[8px] text-emerald-400 font-mono uppercase tracking-widest font-black">iOS/Android Sync</span>
              </div>

              <div className="absolute top-2.5 left-2.5 bg-slate-955 border border-slate-800 px-2 py-0.5 rounded shadow text-[7.5px] text-emerald-400 font-mono font-black uppercase tracking-widest leading-none z-10">
                Diagnostics Live
              </div>
            </div>

            {/* Title & Desc Area */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-black text-sm uppercase tracking-wide text-slate-900">
                Driveguard Companion
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Active diagnostics are pushed directly to our native smartphone app. View real-time GPS logs, vehicle health, and alerts.
            </p>
          </div>

        </div>

        {/* Dynamic Trust-Affirming Pre-Order Decision Assist Banner */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle design overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl" />
          <div className="absolute -left-32 -top-32 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Visual reassurance side */}
            <div className="text-left space-y-2.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-mono text-[9px] font-black uppercase px-2 py-1 rounded">
                <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
                FOUNDING CANADIAN MEMBER OFFER
              </div>
              
              <h3 className="font-display font-black text-white text-xl sm:text-2xl leading-tight">
                Installs in Under 30 Seconds. Winter-Hardened.
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-xs leading-relaxed font-semibold">
                Lock in early-bird savings today with your fully-refundable <span className="text-rose-400 font-black">$19 CAD deposit</span>. Enjoy complete 3-year local warranty and priority express shipment.
              </p>
              
              {/* Check highlights */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1.5 text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                <span className="flex items-center gap-1 text-emerald-400">
                  ✓ NO MONTHLY FEE EVER
                </span>
                <span className="flex items-center gap-1 text-indigo-300">
                  🍁 SHIPPED FREE FROM BC
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  ⚡ 100% REFUNDABLE DEPOSIT
                </span>
              </div>
            </div>

            {/* Quick Action Decision CTAs Column */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 self-center">
              
              {/* Form Scan scroll button */}
              <button
                type="button"
                onClick={() => handleScroll('compatibility')}
                className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                Test Your Vehicle Fit
              </button>

              {/* Secure spots button */}
              <button
                type="button"
                onClick={() => handleScroll('pricing')}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-650 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-center shadow-lg shadow-rose-950/20 active:scale-95"
              >
                Pre-order Now ($19 Fully Refundable)
                <ArrowRight className="w-4 h-4 text-rose-200 animate-pulse" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
