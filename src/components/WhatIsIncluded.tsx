import React from 'react';
import { ShieldCheck, Cpu, Smartphone, LayoutGrid, Layers, Milestone, HelpCircle, HardDrive, ShoppingBag, PlusCircle, Sparkles } from 'lucide-react';

import smartDashcamImg from '../assets/images/dashcam_bright_1779908744354.png';
import obdDongleImg from '../assets/images/obd_plugin_under_dash_1780165262295.png';
import activeScanningImg from '../assets/images/active_scanning_1779906877154.png';

export default function WhatIsIncluded() {
  const arrivedItems = [
    {
      title: "ASTRA-AI Dual-Lens Dash Camera",
      category: "CORE DRIVING SENTINEL",
      desc: "Our high-temperature windshield-mounted housing featuring dual Sony Starvis™ optical lenses, passive night-vision array, and real-time predictive hazard monitoring.",
      details: "High-temperature composite chassis with custom integrated camera arm.",
      icon: <Cpu className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-indigo-100/90 hover:border-indigo-400",
        shadow: "shadow-[0_15px_30px_rgba(99,102,241,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.18)]",
        tagBg: "bg-indigo-50 text-indigo-750 border border-indigo-100/50",
        iconContainer: "bg-indigo-50 border border-indigo-150 text-indigo-600 ring-4 ring-indigo-500/5 group-hover:ring-indigo-500/10",
        accentGradient: "bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500",
        bgSpotlight: "bg-indigo-500/[0.04]",
        accentTextColor: "group-hover:text-indigo-700 font-extrabold"
      }
    },
    {
      title: "OBD-II Special Transceiver Harness",
      category: "DIAGNOSTIC TELEMETRY CAPTURE",
      desc: "An extremely slim, ICES-003 passive OBD sync harness that connects directly below your steering column. Delivers constant, supercapacitor-regulated power.",
      details: "Pure copper diagnostic wires, heavy electromagnetic shielding.",
      icon: <Layers className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-emerald-100/90 hover:border-emerald-400",
        shadow: "shadow-[0_15px_30px_rgba(16,185,129,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.18)]",
        tagBg: "bg-emerald-50 text-emerald-750 border border-emerald-100/50",
        iconContainer: "bg-emerald-50 border border-emerald-150 text-emerald-600 ring-4 ring-emerald-500/5 group-hover:ring-emerald-500/10",
        accentGradient: "bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500",
        bgSpotlight: "bg-emerald-500/[0.04]",
        accentTextColor: "group-hover:text-emerald-700 font-extrabold"
      }
    },
    {
      title: "U3 Extreme Endurance Memory Card",
      category: "DURABLE LOCAL STORAGE",
      desc: "A pre-formatted 128GB high-end solid-state storage unit engineered specifically for continuous local writing cycles under severe vibrations and winter frost.",
      details: "Industrial Grade, Grade 10 High-Vibe memory cells.",
      icon: <HardDrive className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-amber-100/90 hover:border-amber-400",
        shadow: "shadow-[0_15px_30px_rgba(245,158,11,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(245,158,11,0.18)]",
        tagBg: "bg-amber-50 text-amber-750 border-amber-100/50",
        iconContainer: "bg-amber-50 border border-amber-150 text-amber-600 ring-4 ring-amber-500/5 group-hover:ring-amber-500/10",
        accentGradient: "bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500",
        bgSpotlight: "bg-amber-500/[0.04]",
        accentTextColor: "group-hover:text-amber-700 font-extrabold"
      }
    },
    {
      title: "Matte Black Magnetic Gift Packaging",
      category: "PRESTIGIOUS UNBOXING",
      desc: "Delivered in a striking, thick matte-black gift presentation box with safe high-density foam molds and clean mechanical magnetic closure seals.",
      details: "100% recyclable structural automotive grade paper stocks.",
      icon: <ShoppingBag className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-rose-100/90 hover:border-rose-400",
        shadow: "shadow-[0_15px_30px_rgba(244,63,94,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(244,63,94,0.18)]",
        tagBg: "bg-rose-50 text-rose-750 border-rose-100/50",
        iconContainer: "bg-rose-50 border border-rose-150 text-rose-600 ring-4 ring-rose-500/5 group-hover:ring-rose-500/10",
        accentGradient: "bg-gradient-to-r from-rose-500 via-rose-600 to-pink-500",
        bgSpotlight: "bg-rose-500/[0.04]",
        accentTextColor: "group-hover:text-rose-700 font-extrabold"
      }
    },
    {
      title: "Companion Mobile App License",
      category: "NATIVE COMPANION CLIENT",
      desc: "Lifetime, zero-fee direct-connection mobile app key. Synchronizes error logs, telemetry files, and road clips securely with 0 cloud streaming dependencies.",
      details: "iOS & Android offline sync software included forever.",
      icon: <Smartphone className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-sky-100/90 hover:border-sky-450",
        shadow: "shadow-[0_15px_30px_rgba(14,165,233,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.18)]",
        tagBg: "bg-sky-50 text-sky-750 border-sky-100/50",
        iconContainer: "bg-sky-50 border border-sky-150 text-sky-600 ring-4 ring-sky-500/5 group-hover:ring-sky-500/10",
        accentGradient: "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500",
        bgSpotlight: "bg-sky-500/[0.04]",
        accentTextColor: "group-hover:text-sky-700 font-extrabold"
      }
    },
    {
      title: "Canadian Install Kit & Accessories",
      category: "COMPLETE TOOLSETS INCLUDED",
      desc: "Everything you need for a premium, clean layout: clear adhesive windshield anchors, cable-routing trim tuckers, and standard adhesive cable wraps.",
      details: "Windshield mount, trim routing leverage lever, installation guide.",
      icon: <PlusCircle className="w-5 h-5" style={{ strokeWidth: 2.2 }} />,
      theme: {
        border: "border-purple-100/90 hover:border-purple-400",
        shadow: "shadow-[0_15px_30px_rgba(139,92,246,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.18)]",
        tagBg: "bg-purple-50 text-purple-750 border-purple-100/50",
        iconContainer: "bg-purple-50 border border-purple-150 text-purple-600 ring-4 ring-purple-500/5 group-hover:ring-purple-500/10",
        accentGradient: "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600",
        bgSpotlight: "bg-purple-500/[0.04]",
        accentTextColor: "group-hover:text-purple-700 font-extrabold"
      }
    }
  ];

  return (
    <section id="included" className="py-24 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-100/60 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Absolute whitespace frame grids & rich radial glowing blobs */}
      <div className="absolute inset-0 bg-transparent pointer-events-none opacity-25 select-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Large colorful ambient backdrop blurs to achieve peak professional presentation */}
      <div className="absolute top-0 left-10 w-[550px] h-[550px] bg-indigo-200/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-rose-200/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-emerald-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with majestic whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full text-slate-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            Uncompromising Presentation
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-4">
            What Arrives At Your Door
          </h2>
          
          <p className="text-slate-550 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            A premium turnkey vehicle defense package. Zero extra adapters, zero wire splicing, and absolutely zero unboxing compromise.
          </p>
        </div>

        {/* Big Visual Product Shot Container with Premium HUD Markers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto border-b border-slate-100 pb-16 mb-16">
          
          {/* Left: Main photorealistic product box display panel */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Ambient backlight */}
            <div className="absolute inset-0 -inset-y-4 bg-indigo-500/5 rounded-[40px] blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md bg-[#070b13] border border-slate-850 rounded-[2.5rem] overflow-hidden shadow-2xl p-6 group transition-all duration-300">
              
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 via-indigo-500 to-emerald-500" />
              
              {/* Product render viewport */}
              <div className="relative h-80 w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 mb-6 flex items-center justify-center p-3">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-1" />
                
                <img
                  src={smartDashcamImg}
                  alt="Astrateq Gadgets Premium Dual-Lens Windshield Dashcam System"
                  className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:scale-105 transition-transform duration-700 mix-blend-lighten z-1"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-85 top-1/2 -translate-y-1/2 shadow-[0_0_12px_#22d3ee] z-2" />

                {/* HUD Details */}
                <div className="absolute top-5 left-5 bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-1 z-2">
                  <span className="text-[8.5px] font-mono font-black text-indigo-400 tracking-widest block uppercase">MODEL: DRIVEGUARD CA</span>
                  <span className="text-[7.5px] text-slate-300 font-bold">100% Offline Edge CPU Ready</span>
                </div>

                <div className="absolute bottom-5 right-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg px-2.5 py-1 z-2 text-right">
                  <span className="text-[8.5px] font-mono font-black block uppercase tracking-widest">ices-003 test</span>
                  <span className="text-[7.5px] font-bold">WARRANTY COMPLIANT</span>
                </div>
              </div>

              {/* Box Specs Footers */}
              <div className="border-t border-slate-850 pt-4 flex flex-col items-center">
                <span className="text-[9.5px] font-mono font-black text-indigo-400 tracking-wider">ASTRATEQ VEHICLE INTEL PACKAGE</span>
                <p className="text-sm font-bold text-white mt-0.5">Dual-Device Road Defensive Sentinel</p>
                <span className="text-[10.5px] text-slate-400 mt-2 text-center font-medium">
                  Packaged in matte-black magnetic gift boards, engineered securely for all Canadian high-altitude environments.
                </span>
              </div>

            </div>
          </div>

          {/* Right: Premium minimal text descriptions showcasing "What arrives" */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            <h3 className="font-display font-black text-2xl sm:text-3.5xl text-slate-900 tracking-tight leading-tight">
              A Premium Engineering Package
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              We design premium consumer electronics built strictly to stand up to the rigorous requirements of high-class drivers. No cardboard inserts, no loose plastic bags, and no unorganized manuals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-white border-2 border-indigo-500/25 shadow-[0_8px_20px_rgba(99,102,241,0.04)] rounded-2xl transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_12px_28px_rgba(99,102,241,0.1)]">
                <span className="text-[9.5px] font-mono font-black text-indigo-600 block uppercase tracking-wider">100% REFUNDABLE</span>
                <p className="text-xs text-slate-900 font-extrabold mt-0.5">Secure Escrow Protection</p>
                <p className="text-[11px] text-slate-550 mt-1 font-semibold leading-relaxed">Cancel anytime with 1 click in your secure reservation confirmation log.</p>
              </div>

              <div className="p-5 bg-white border-2 border-emerald-500/25 shadow-[0_8px_20px_rgba(16,185,129,0.04)] rounded-2xl transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_12px_28px_rgba(16,185,129,0.1)]">
                <span className="text-[9.5px] font-mono font-black text-emerald-600 block uppercase tracking-wider">3-YEAR EXTENSION</span>
                <p className="text-xs text-slate-900 font-extrabold mt-0.5">Extreme Weather Warranty</p>
                <p className="text-[11px] text-slate-550 mt-1 font-semibold leading-relaxed">Absolute, permanent shelter against thermal cracks and logic degradation.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Minimal Grid Showing all arrived components with generous white space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4 text-left">
          {arrivedItems.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white border-2 ${item.theme.border} ${item.theme.shadow} rounded-3xl p-6 sm:p-8 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] hover:-translate-y-1`}
            >
              {/* Dynamic top ribbon */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${item.theme.accentGradient} transition-transform duration-500`} />
              
              {/* Glow spotlight */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full ${item.theme.bgSpotlight} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                {/* Visual Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${item.theme.iconContainer} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  <span className={`text-[9px] font-mono font-black px-2.5 py-1 rounded inline-block ${item.theme.tagBg}`}>
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <h4 className={`text-base font-black text-slate-900 tracking-tight leading-tight ${item.theme.accentTextColor} transition-colors duration-300`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 relative z-10">
                <span className="text-[9.5px] font-mono text-slate-400 font-bold block uppercase">Hardware Specification</span>
                <span className="text-[11px] text-slate-700 font-bold block mt-0.5">{item.details}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
