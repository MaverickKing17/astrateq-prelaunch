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
      details: "High-temperature composite chassis with custom integrated camera arm."
    },
    {
      title: "OBD-II Special Transceiver Harness",
      category: "DIAGNOSTIC TELEMETRY CAPTURE",
      desc: "An extremely slim, ICES-003 passive OBD sync harness that connects directly below your steering column. Delivers constant, supercapacitor-regulated power.",
      details: "Pure copper diagnostic wires, heavy electromagnetic shielding."
    },
    {
      title: "U3 Extreme Endurance Memory Card",
      category: "DURABLE LOCAL STORAGE",
      desc: "A pre-formatted 128GB high-end solid-state storage unit engineered specifically for continuous local writing cycles under severe vibrations and winter frost.",
      details: "Industrial Grade, Grade 10 High-Vibe memory cells."
    },
    {
      title: "Matte Black Magnetic Gift Packaging",
      category: "PRESTIGIOUS UNBOXING",
      desc: "Delivered in a striking, thick matte-black gift presentation box with safe high-density foam molds and clean mechanical magnetic closure seals.",
      details: "100% recyclable structural automotive grade paper stocks."
    },
    {
      title: "Companion Mobile App License",
      category: "NATIVE COMPANION CLIENT",
      desc: "Lifetime, zero-fee direct-connection mobile app key. Synchronizes error logs, telemetry files, and road clips securely with 0 cloud streaming dependencies.",
      details: "iOS & Android offline sync software included forever."
    },
    {
      title: "Canadian Install Kit & Accessories",
      category: "COMPLETE TOOLSETS INCLUDED",
      desc: "Everything you need for a premium, clean layout: clear adhesive windshield anchors, cable-routing trim tuckers, and standard adhesive cable wraps.",
      details: "Windshield mount, trim routing leverage lever, installation guide."
    }
  ];

  return (
    <section id="included" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      
      {/* Absolute whitespace frame grids */}
      <div className="absolute inset-0 bg-transparent pointer-events-none opacity-20 select-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]" />

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
              An Apple-Style Engineering Package
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
              We design premium consumer electronics built strictly to stand up to the rigorous requirements of high-class drivers. No cardboard inserts, no loose plastic bags, and no unorganized manuals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <span className="text-[9.5px] font-mono font-black text-indigo-600 block uppercase">100% REFUNDABLE</span>
                <p className="text-xs text-slate-800 font-extrabold mt-0.5">Secure Escrow Protection</p>
                <p className="text-[11px] text-slate-550 mt-1 font-semibold leading-relaxed">Cancel anytime with 1 click in your secure reservation confirmation log.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                <span className="text-[9.5px] font-mono font-black text-emerald-600 block uppercase">3-YEAR EXTENSION</span>
                <p className="text-xs text-slate-800 font-extrabold mt-0.5">Extreme Weather Warranty</p>
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
              className="bg-slate-50/40 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-black text-indigo-650 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded">
                  {item.category}
                </span>

                <div className="space-y-1.5 pt-1">
                  <h4 className="text-base font-black text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6">
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
