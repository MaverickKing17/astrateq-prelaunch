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
import obdDongleBrightImg from '../assets/images/obd_plugin_under_dash_1780165262295.png';
import dashcamBrightImg from '../assets/images/dashcam_bright_1779908744354.png';
import activeScanningImg from '../assets/images/active_scanning_1779906877154.png';
import companionBrightImg from '../assets/images/companion_bright_1779907832283.png';

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
            Uncompromising Vehicle Intelligence & Security, Activated in 4 Simple Steps
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            No professional installation needed. Setup takes <span className="text-indigo-650 font-extrabold">under 2 minutes</span>, operates 100% offline, and costs <span className="text-emerald-600 font-extrabold">$0 in monthly fees</span>.
          </p>
        </div>

        {/* Dynamic, Illustrated Steps Grid with Sleek Timeline Connector */}
        <div className="relative max-w-6xl mx-auto mb-16">
          
          {/* Subtle Horizontal progress timeline line connecting the cards (Desktop Only) */}
          <div className="hidden lg:block absolute left-[12%] right-[12%] top-[100px] h-[2px] bg-gradient-to-r from-indigo-500/10 via-amber-400/10 to-emerald-500/10 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
            
            {/* Step 1: Connect to OBD-II Port */}
            <div className="flex flex-col bg-white border border-slate-200/85 rounded-3xl p-6 text-left relative transition-all duration-300 hover:border-indigo-500/30 group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(99,102,241,0.08)] overflow-hidden">
              
              {/* Massive subtle watermark step number */}
              <div className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-slate-50 opacity-40 select-none group-hover:text-indigo-50/70 transition-colors pointer-events-none">
                01
              </div>

              {/* Corner Badge Label */}
              <div className="absolute top-0 right-0 bg-[#0B0F19] text-indigo-300 font-mono text-[8px] tracking-[0.15em] font-extrabold px-3.5 py-1.5 rounded-bl-2xl shadow-sm uppercase z-20 border-l border-b border-slate-800/80">
                PHASE 01
              </div>

              {/* Premium Enterprise-grade Image container */}
              <div className="h-40 bg-slate-950 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-slate-800/50 group-hover:border-slate-700/60 shadow-inner">
                
                {/* Image element with required referrer policy */}
                <img
                  src={obdDongleBrightImg}
                  alt="Astrateq Gadgets OBD-II Secure Sync Harness Click Installation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-950/90 border border-slate-800/80 px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-[7.5px] text-slate-300 font-mono uppercase tracking-widest font-bold">Standard OBD Slot</span>
                </div>
                
                <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-slate-800/80 px-2 py-1 rounded-md shadow-md text-[7.5px] text-slate-200 font-mono font-bold uppercase tracking-widest leading-none z-10">
                  Safe Passive Link
                </div>
              </div>

              {/* Title & Desc Area */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-650 shrink-0 shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Plug-In OBD Power
                </h3>
              </div>

              <p className="text-[12px] text-slate-500 leading-relaxed font-semibold mb-5 flex-grow">
                Fits instantly under your steering column. Delivers safe, constant, supercapacitor-regulated power. Zero wires to splice.
              </p>

              {/* Specs Checks Sheet */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>HARNESS: ISO-15765 PASSIVE</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>STANDBY: &lt;3.5MW SLEEP MODE</span>
                </div>
              </div>
            </div>

            {/* Step 2: Edge AI Core Ready */}
            <div className="flex flex-col bg-white border border-slate-200/85 rounded-3xl p-6 text-left relative transition-all duration-300 hover:border-indigo-500/30 group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(99,102,241,0.08)] overflow-hidden">
              
              {/* Massive subtle watermark step number */}
              <div className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-slate-50 opacity-40 select-none group-hover:text-indigo-50/70 transition-colors pointer-events-none">
                02
              </div>

              {/* Corner Badge Label */}
              <div className="absolute top-0 right-0 bg-[#0B0F19] text-indigo-300 font-mono text-[8px] tracking-[0.15em] font-extrabold px-3.5 py-1.5 rounded-bl-2xl shadow-sm uppercase z-20 border-l border-b border-slate-800/80">
                PHASE 02
              </div>

              {/* Premium Enterprise-grade Image container */}
              <div className="h-40 bg-slate-950 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-slate-800/50 group-hover:border-slate-700/60 shadow-inner">
                
                <img
                  src={dashcamBrightImg}
                  alt="Astrateq Gadgets Dual-Lens Smart camera mounted cleanly on windshield"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-950/90 border border-slate-800/80 px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[7.5px] text-slate-300 font-mono uppercase tracking-widest font-bold">Windshield Mounted</span>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-slate-800/80 px-2 py-1 rounded-md shadow-md text-[7.5px] text-emerald-400 font-mono font-bold uppercase tracking-widest leading-none z-10">
                  Calibration Ready
                </div>
              </div>

              {/* Title & Desc Area */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 shadow-sm group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Edge AI Active
                </h3>
              </div>

              <p className="text-[12px] text-slate-500 leading-relaxed font-semibold mb-5 flex-grow">
                Windshield unit’s built-in neural processor activates. Calibrates road boundaries & focal alignment in seconds. Zero remote latency.
              </p>

              {/* Specs Checks Sheet */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-450" />
                  <span>NPU: DUAL-CORE IN-SITU NET</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-450" />
                  <span>SENSORS: SONY STARVIS™ OPTICS</span>
                </div>
              </div>
            </div>

            {/* Step 3: Real-Time Driver Shield */}
            <div className="flex flex-col bg-white border border-slate-200/85 rounded-3xl p-6 text-left relative transition-all duration-300 hover:border-indigo-500/30 group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(99,102,241,0.08)] overflow-hidden">
              
              {/* Massive subtle watermark step number */}
              <div className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-slate-50 opacity-40 select-none group-hover:text-indigo-50/70 transition-colors pointer-events-none">
                03
              </div>

              {/* Corner Badge Label */}
              <div className="absolute top-0 right-0 bg-[#0B0F19] text-amber-400 font-mono text-[8px] tracking-[0.15em] font-extrabold px-3.5 py-1.5 rounded-bl-2xl shadow-sm uppercase z-20 border-l border-b border-slate-800/80">
                PHASE 03
              </div>

              {/* Premium Enterprise-grade Image container */}
              <div className="h-40 bg-slate-950 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-slate-800/50 group-hover:border-slate-700/60 shadow-inner">
                
                <img
                  src={activeScanningImg}
                  alt="Astrateq Gadgets HUD visual interface tracking lanes and obstacles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-950/90 border border-slate-800/80 px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[7.5px] text-slate-300 font-mono uppercase tracking-widest font-bold">Predictive Guides</span>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-slate-800/80 px-2 py-1 rounded-md shadow-md text-[7.5px] text-amber-400 font-mono font-bold uppercase tracking-widest leading-none z-10">
                  Sub-12ms Active Alert
                </div>
              </div>

              {/* Title & Desc Area */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-650 shrink-0 shadow-sm group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors">
                  Real-Time Tracking
                </h3>
              </div>

              <p className="text-[12px] text-slate-500 leading-relaxed font-semibold mb-5 flex-grow">
                Tracks forward mountain highway hazards, winter black ice slippage, and cabin fatigue instantly. Triggers sub-12ms warning audio alerts.
              </p>

              {/* Specs Checks Sheet */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>ENGINE: SUB-12MS ADAS SCAN</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>GYRO: TRI-AXIAL IMPACT SENSOR</span>
                </div>
              </div>
            </div>

            {/* Step 4: Family App Connectivity */}
            <div className="flex flex-col bg-white border border-slate-200/85 rounded-3xl p-6 text-left relative transition-all duration-300 hover:border-indigo-500/30 group hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(99,102,241,0.08)] overflow-hidden">
              
              {/* Massive subtle watermark step number */}
              <div className="absolute -bottom-6 -right-4 font-mono font-black text-8xl text-slate-50 opacity-40 select-none group-hover:text-indigo-50/70 transition-colors pointer-events-none">
                04
              </div>

              {/* Corner Badge Label */}
              <div className="absolute top-0 right-0 bg-[#0B0F19] text-emerald-400 font-mono text-[8px] tracking-[0.15em] font-extrabold px-3.5 py-1.5 rounded-bl-2xl shadow-sm uppercase z-20 border-l border-b border-slate-800/80">
                PHASE 04
              </div>

              {/* Premium Enterprise-grade Image container */}
              <div className="h-40 bg-slate-950 rounded-2xl mb-5 relative overflow-hidden flex items-center justify-center border border-slate-800/50 group-hover:border-slate-700/60 shadow-inner">
                
                <img
                  src={companionBrightImg}
                  alt="Smartphone syncing vehicle drive log dashboard data"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-slate-950/90 border border-slate-800/80 px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[7.5px] text-slate-300 font-mono uppercase tracking-widest font-bold">iOS/Android Sync</span>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-slate-800/80 px-2 py-1 rounded-md shadow-md text-[7.5px] text-emerald-400 font-mono font-bold uppercase tracking-widest leading-none z-10">
                  Diagnostics Live
                </div>
              </div>

              {/* Title & Desc Area */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Driveguard Companion
                </h3>
              </div>

              <p className="text-[12px] text-slate-500 leading-relaxed font-semibold mb-5 flex-grow">
                Active diagnostics are pushed directly to our native smartphone app. View real-time GPS logs, vehicle health, and alerts.
              </p>

              {/* Specs Checks Sheet */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 relative z-10">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>SYNC: BLUETOOTH 5.2 LOW ENERGY</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>PRIVACY: AES-256 ZERO-CLOUD</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Trust-Affirming Pre-Order Decision Assist Banner */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0A0E1A] via-[#070912] to-[#030408] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden shadow-[0_30px_80px_-15px_rgba(11,15,25,0.65),0_0_40px_rgba(99,102,241,0.15)] border border-indigo-500/20 hover:border-indigo-500/35 transition-all duration-500 group">
          
          {/* Subtle design grid and backlight overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          {/* Social Proof Scarcity Ticker is a massive converter */}
          <div className="mb-8 pb-6 border-b border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] sm:text-xs text-slate-300 font-mono font-bold uppercase tracking-wider">
                🍁 Active Reservations Secured in Canada: <span className="text-emerald-400 font-black">14,842 Units</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-indigo-300 font-black uppercase tracking-wider bg-indigo-950/50 border border-indigo-900/40 px-2.5 py-1 rounded">
                POOL PHASE 1 • 92% RESERVED
              </span>
              <span className="text-[10px] font-mono text-rose-300 font-black uppercase tracking-wider bg-rose-950/50 border border-rose-900/40 px-2.5 py-1 rounded animate-pulse">
                ONLY 158 SPOTS LEFT
              </span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Visual reassurance side */}
            <div className="text-left space-y-3.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-400/25 text-indigo-300 font-mono text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider">
                <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
                LIMITED FOUNDING MEMBER PRE-ORDER ADVANTAGE
              </div>
              
              <h3 className="font-sans font-black text-white text-xl sm:text-3xl tracking-tight leading-none">
                Installs in Under 30 Seconds. Winter-Hardened.
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-semibold">
                Secure your Early-Bird priority shipping queue position with a fully-refundable <span className="text-rose-400 font-extrabold border-b border-rose-400/30">$49 deposit</span>. Enjoy our 3-year Canadian hardware protection plan, zero subscription overhead commitments, and express priority integration diagnostics.
              </p>
              
              {/* Check highlights */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-[10px] font-mono font-black text-slate-400 tracking-wider">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  NO MONTHLY CONTRACT OVERHEADS EVER
                </span>
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  SHIPPED FREE ACROSS CANADA FROM BC
                </span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 font-mono" />
                  100% SECURE FULLY-REFUNDABLE OPT-OUT
                </span>
              </div>
            </div>

            {/* Quick Action Decision CTAs Column */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto shrink-0 self-center">
              
              {/* Form Scan scroll button */}
              <button
                type="button"
                onClick={() => handleScroll('compatibility')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0F172A] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                Test Your Vehicle Fit
              </button>

              {/* Secure spots button */}
              <button
                type="button"
                onClick={() => handleScroll('pricing')}
                className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-650 hover:to-rose-650 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-center shadow-[0_15px_30px_rgba(225,29,72,0.25)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.4)] hover:scale-[1.03] active:scale-[0.97]"
              >
                Pre-order Now ($49 Fully Refundable)
                <ArrowRight className="w-4 h-4 text-rose-200 animate-pulse" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
