import React from 'react';
import { Box, Smartphone, Check, ShieldCheck, Eye, ShieldAlert, Cpu, Sparkles, Zap } from 'lucide-react';

import smartDashcamImg from '../assets/images/dashcam_bright_1779908744354.png';

export default function WhatIsIncluded() {
  const specs = [
    {
      id: "spec-cpu",
      title: 'ASTRA-AI DriveGuard Unit',
      desc: 'Our flagship edge-processing neural CPU. Powered by a high-efficiency dual-core ARM Cortex processor to tap OBD telemetry directly with sub-12ms response intervals.',
      icon: <Cpu className="w-5 h-5 text-indigo-650" />,
      tag: "1.2GHz Dual-Core"
    },
    {
      id: "spec-vision",
      title: 'RoadGuard Pro Vision',
      desc: 'Compact custom camera featuring premium night vision grids. Natively analyzes cabin drowsiness, lane drift, and collision states locally on-device.',
      icon: <Eye className="w-5 h-5 text-indigo-650" />,
      tag: "Full 1080p Night-Vision"
    },
    {
      id: "spec-harness",
      title: 'OBD-II Secure Sync Harness',
      desc: 'Heavy-climate physical transceiver harness. Features differential custom transceivers with high electromagnetic shielding to secure passenger diagnostic streams.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-650" />,
      tag: "OBD-II Plug & Play"
    },
    {
      id: "spec-mobile",
      title: 'Companion Mobile License',
      desc: 'Lifetime direct-sync companion mobile licenses with no monthly tier caps. Local encrypted offline telemetry diagnostics and threat event logs.',
      icon: <Smartphone className="w-5 h-5 text-indigo-650" />,
      tag: "iOS & Android Included"
    },
  ];

  return (
    <section id="included" className="py-24 bg-gradient-to-b from-[#F4F7FF] via-white to-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      
      {/* Decorative ambient color nodes to convey highly advanced hardware design */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-rose-200/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-indigo-150 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div id="included-badge-container" className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200/85 px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-650 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-indigo-800">
              COMPLETE HARDWARE CONFIGURATION
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-5">
            What’s Included in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-600">Family Safety Bundle</span>
          </h2>
          <p className="text-slate-605 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            A premium turnkey system for comprehensive vehicle defense. Zero extra adapters, zero complex configuration, and absolutely zero monthly subscription paywalls required.
          </p>
        </div>

        {/* Visual Box Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto border-b border-slate-200/60 pb-16">
          
          {/* Left: Beautiful Hardware Product Interactive Diagram Component */}
          <div id="hardware-diagram-column" className="lg:col-span-5 relative flex flex-col items-center order-2 lg:order-1 w-full max-w-md mx-auto">
            <div className="bg-white border-2 border-slate-205 rounded-3xl p-6 relative w-full overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:border-indigo-400/80">
              
              {/* Subtle top red/white/indigo decorative line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e11d48] via-[#818cf8] to-[#4f46e5]" />
              
              {/* Dynamic Grid Background Overlay representing advanced calibration */}
              <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              
              {/* Title Header with status */}
              <div className="flex items-center justify-between mb-4 relative z-10 border-b border-slate-100 pb-3">
                <span className="text-[10px] font-mono font-black text-slate-500 tracking-widest uppercase">
                  📦 In-the-Box Hardware Blueprint
                </span>
                <span className="text-[8px] bg-indigo-50/80 text-indigo-600 border border-indigo-150 px-2.5 py-0.5 rounded font-mono font-black uppercase tracking-wider">
                  Canadian Premium
                </span>
              </div>

              {/* Hardware showcase content */}
              <div className="relative h-72 w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 mb-4 flex items-center justify-center p-3 shadow-inner">
                
                {/* Windshield Scenic background shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 z-1" />
                
                {/* Genuine High-Quality Smart Dashcam Product image */}
                <img
                  src={smartDashcamImg}
                  alt="ASTRA High-Tech Dual-Lens Smart Dashcam Windshield Mount"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] opacity-90 rounded-xl mix-blend-lighten"
                  referrerPolicy="no-referrer"
                />

                {/* Scanning laser visual effect */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse opacity-85 top-1/3 shadow-[0_0_15px_rgba(129,140,248,0.9)] z-2" />

                {/* HUD Overlay 1: Front Facing Lens */}
                <div className="absolute top-6 left-6 flex items-center gap-2 transform translate-y-2 animate-bounce z-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-650"></span>
                  </span>
                  <div className="bg-slate-900/95 border border-slate-700/60 rounded-lg px-2.5 py-1 text-left shadow-lg backdrop-blur-md">
                    <span className="text-[9.5px] text-indigo-300 font-mono font-black tracking-widest uppercase block leading-none">Dual-Lens Optics</span>
                    <span className="text-[8px] text-slate-350 font-bold leading-none">Real-Time Threat Scanning</span>
                  </div>
                </div>

                {/* HUD Overlay 2: OBD Integration Wire */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 transform -translate-y-2 animate-bounce z-2" style={{ animationDelay: '2.5s' }}>
                  <div className="bg-slate-900/95 border border-slate-700/60 rounded-lg px-2.5 py-1 text-right shadow-lg backdrop-blur-md">
                    <span className="text-[9.5px] text-rose-300 font-mono font-black tracking-widest uppercase block leading-none">AI INTRUSION GRID</span>
                    <span className="text-[8px] text-rose-400 font-black leading-none">⚠️ EXPLOIT BLOCKED</span>
                  </div>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </span>
                </div>

                {/* Corner watermark badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 px-2 py-1 rounded shadow-md z-2">
                  <ShieldAlert className="w-3 h-3 text-rose-500 animate-pulse" />
                  <span className="text-[8px] font-mono tracking-widest font-black uppercase text-rose-400">
                    AI INTRUSION CORE: SECURITY ARMED
                  </span>
                </div>

              </div>

              {/* Status Note & Packaging Assurance Details */}
              <div className="border-t border-slate-100 pt-4 flex flex-col items-center">
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-widest font-mono">
                  Hardware SKU: F-2026-CA / OBD-SHIELD
                </span>
                <p className="text-xs text-slate-800 mt-1 font-bold">
                  Complete Dual-Lens In-Cabin Hardware System
                </p>
                
                <div className="mt-4 w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5 text-rose-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-wider text-rose-700">CANADIAN MARKET GUARANTEE</span>
                    <span className="text-[10.5px] text-slate-650 font-bold leading-normal">
                      Lifetime physical hardware ownership. Fully covered under a premium <span className="text-indigo-700 font-extrabold">3-Year Cold-Climate Warranty</span>.
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Breakdown list specs */}
          <div id="specifications-right-column" className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            
            {/* Embedded Spotlight: Active AI Intrusion Detection System */}
            <div id="ai-intrusion-spotlight" className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl border border-indigo-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3.5 bg-indigo-500/20 border border-indigo-400/35 rounded-xl shrink-0 shadow-lg animate-pulse">
                  <ShieldAlert className="w-6 h-6 text-indigo-300" style={{ strokeWidth: 2.5 }} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-rose-500 text-white font-mono font-black text-[9px] uppercase tracking-wider rounded-md shadow-sm">
                      PROPRIETARY FEATURE
                    </span>
                    <span className="text-indigo-300 font-mono text-[10px] font-black tracking-widest uppercase">
                      DUAL-DEVICE NETWORK
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                    Integrated AI Intrusion Detection System
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Unlike standard dashcams or passive OBD readers that only log basic data, our custom firmware coordinates both devices (the <strong>DriveGuard AI Dashcam</strong> and the <strong>OBD2 Diagnostic Scanner</strong>) into a secure localized perimeter sentinel. 
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-200 pt-2 font-semibold">
                    <li className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Physical Cabin Entry Alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>OBD2 Port Exploit Blocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Sub-15ms Local Threat Kill</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Offline Neural Core Security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {specs.map((spec) => (
                <div
                  key={spec.id}
                  id={spec.id}
                  className="bg-white border-2 border-slate-205 rounded-2xl p-5 hover:border-indigo-400 group transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-150 group-hover:border-indigo-300 transition-all duration-300">
                        {spec.icon}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {spec.tag}
                      </span>
                    </div>
                    <h4 className="font-sans font-extrabold text-sm sm:text-base text-slate-800 tracking-tight mb-2 group-hover:text-indigo-705 transition-colors">
                      {spec.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick value checkmark overview */}
            <div id="included-checkmarks-footer" className="border-t border-slate-200/80 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" style={{ strokeWidth: 3 }} />
                <span>Standard plug compliance: Universal J1962 OBD-II</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" style={{ strokeWidth: 3 }} />
                <span>Zero monthly recurring subscription fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" style={{ strokeWidth: 3 }} />
                <span>Offline edge fallback logic (no SIM required)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0" style={{ strokeWidth: 3 }} />
                <span>Lifetime mobile firmware + application updates</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
