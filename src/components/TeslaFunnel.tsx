import React, { useState } from 'react';
import { Shield, Cpu, EyeOff, Activity, AlertTriangle, ShieldCheck, Heart, Send, CheckCircle, ArrowRight, CornerDownRight, Zap } from 'lucide-react';

interface TeslaFunnelProps {
  onReserveSuccess: (email: string, bundle: string) => void;
  onViewChange: (view: 'landing' | 'infographic') => void;
}

export default function TeslaFunnel({ onReserveSuccess, onViewChange }: TeslaFunnelProps) {
  const [emailInput, setEmailInput] = useState('');
  const [showOverview, setShowOverview] = useState(false);
  const [activePainPoint, setActivePainPoint] = useState<number | null>(null);
  const [currentSelectedModule, setCurrentSelectedModule] = useState<number>(0);
  const [conceptSubscribed, setConceptSubscribed] = useState(false);

  const handleReserveFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    onReserveSuccess(emailInput, 'Tesla-Level Validation Pre-Order');
    setEmailInput('');
  };

  const handleGetUpdatesOnly = () => {
    if (!emailInput.trim()) {
      alert('Please enter your email first in the conversion form below!');
      return;
    }
    setConceptSubscribed(true);
  };

  return (
    <div id="tesla-funnel-root" className="bg-[#FAF9F6] text-slate-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans transition-all duration-500">
      
      {/* 2026/2027 CRO STANDARD BAR */}
      <div className="bg-slate-950 text-white py-2 px-6 text-center text-[11px] font-mono font-bold uppercase tracking-widest border-b border-white/5 flex items-center justify-center gap-2">
        <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
        <span>Pre-Launch Reservation Funnel • Model Year 2026/2027 CRO Standard Active</span>
      </div>

      {/* GLOBAL WRAPPER WITH MAX WIDTH 1200-1280PX COMPLIANT WITH DESIGN SYSTEM */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-20">

        {/* 1. HERO SECTION (Height: 85–95vh minus header, we target ~88vh) */}
        <section id="funnel-hero" className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-16 lg:py-24 border-b border-slate-200/50 relative overflow-hidden">
          
          {/* Subtle Abstract Radial Spotlight Gradient */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -not-translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/5 to-rose-500/5 rounded-full blur-[140px] pointer-events-none" />
          
          {/* 12-Column Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col (60% Width Layout equivalent: col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase w-fit font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                <span>Concept Interest Validation Phase</span>
              </div>

              {/* H1 Primary Hook */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-950 leading-[1.1] font-sans">
                AI-powered vehicle intelligence for safer driving decisions.
              </h1>

              {/* Subheadline: Premium, clear pre-launch purpose */}
              <p className="text-sm sm:text-base md:text-[17px] text-slate-600 leading-relaxed font-medium max-w-xl">
                Astrateq Gadgets is validating privacy-first automotive technology concepts that help drivers understand fatigue risk, vehicle health, and maintenance urgency more clearly.
              </p>

              {/* CTA BLOCK (Strictly ONE primary CTA, and secondary is de-emphasized text style) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                
                {/* Primary CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('reserve');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 text-center uppercase tracking-wider"
                >
                  Reserve Early Access
                </button>

                {/* Secondary CTA (text only, low visual weight) */}
                <button
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-500 hover:text-indigo-600 font-bold text-sm px-4 py-3 flex items-center justify-center gap-1.5 hover:bg-slate-100/50 rounded-xl transition-all"
                >
                  <span>View Concept Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              {/* Hero microcopy under CTA */}
              <div className="text-[11px] text-slate-400 font-mono font-semibold flex items-center gap-1.5 pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span>Fully refundable. Early validation access. No production commitment.</span>
              </div>

              {/* Collapsed System Overview Panel */}
              {showOverview && (
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3.5 shadow-md animate-slice-in-left max-w-lg">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 block">SYSTEM METRICS overview</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed as an inline OBD-II micro-processor, the Astrateq DriveGuard localizes machine learning loops to monitor engine patterns and CAN-bus metrics without leaking location or audio footprints.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Input Latency</span>
                      <span className="block text-sm font-black text-slate-800">&lt; 1.2ms</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Cloud Leak Risk</span>
                      <span className="block text-sm font-black text-emerald-600">0.00%</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Col: Genuine Automotive Intelligence Panel (No Clutter, Non-Branded SUV) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              
              {/* Delicate glowing light behind */}
              <div className="absolute -inset-4 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Visual Container styled with Rivian/Tesla style minimalist elegance */}
              <div className="relative w-full aspect-square max-w-[420px] bg-white border border-slate-200/80 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-xl shadow-slate-950/5 overflow-hidden">
                
                {/* Micro-grid background pattern to feel like an engineering drafting board */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Header: Identity & Status */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 z-10 bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Local Intel Active</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Offline Shielded
                  </span>
                </div>

                {/* SUV Silhouette & Data Layers */}
                <div className="flex-1 flex flex-col items-center justify-center py-4 relative z-10">
                  <div className="w-full relative h-48 flex items-center justify-center">
                    
                    {/* SVG Non-Branded Modern SUV Silhouette side profile */}
                    <svg viewBox="0 0 320 120" className="w-[85%] h-auto text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {/* Outer road outline */}
                      <line x1="10" y1="95" x2="310" y2="95" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                      
                      {/* Minimalist modern SUV shape */}
                      <path 
                        d="M 20,95 
                           L 35,95 
                           C 35,80 55,80 55,95 
                           L 145,95 
                           C 145,80 165,80 165,95 
                           L 295,95 
                           C 295,91 300,85 300,75
                           C 300,68 290,62 275,62
                           L 245,62
                           C 240,62 215,42 195,35
                           C 185,32 120,32 105,32
                           C 90,32 75,45 60,52
                           L 25,65
                           C 18,68 15,75 15,82
                           Z" 
                        stroke="#CBD5E1" 
                        strokeWidth="1.75" 
                        fill="#F8FAFC"
                      />
                      
                      {/* SUV Wheels */}
                      <circle cx="45" cy="95" r="11" stroke="#94A3B8" strokeWidth="2" fill="#E2E8F0" />
                      <circle cx="45" cy="95" r="4" fill="#94A3B8" />
                      <circle cx="155" cy="95" r="11" stroke="#94A3B8" strokeWidth="2" fill="#E2E8F0" />
                      <circle cx="155" cy="95" r="4" fill="#94A3B8" />

                      {/* Cabin Window Highlight */}
                      <path 
                        d="M 110,40 
                           L 180,40 
                           C 190,45 210,56 220,56 
                           L 105,56 
                           Z" 
                        stroke="#E2E8F0" 
                        strokeWidth="1.5" 
                        fill="#F1F5F9" 
                      />
                    </svg>

                    {/* Laser Overlay Pointer Pin 1: Smart Diagnostics */}
                    <div className="absolute top-[52%] left-[12%] flex items-center">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                      </div>
                      <div className="ml-2 bg-slate-900 text-white text-[9px] font-mono tracking-wide font-black px-2 py-1 rounded shadow-sm border border-slate-700 uppercase whitespace-nowrap">
                        AI Diagnostic Scanner
                      </div>
                    </div>

                    {/* Laser Overlay Pointer Pin 2: Fatigue & Distraction */}
                    <div className="absolute top-[28%] left-[45%] flex flex-col items-center">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </div>
                      <div className="mt-1 bg-slate-900 text-white text-[9px] font-mono tracking-wide font-black px-2 py-1 rounded shadow-sm border border-slate-700 uppercase whitespace-nowrap">
                        Fatigue &amp; Distraction Support
                      </div>
                    </div>

                    {/* Laser Overlay Pointer Pin 3: Privacy Shield Center Shield */}
                    <div className="absolute top-[48%] left-[72%] flex items-center">
                      <div className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 flex items-center justify-center text-[8px] text-white"></span>
                      </div>
                      <div className="ml-2 bg-slate-900 text-white text-[9px] font-mono tracking-wide font-black px-2 py-1 rounded shadow-sm border border-slate-700 uppercase whitespace-nowrap">
                        Privacy-First Processing
                      </div>
                    </div>

                  </div>
                </div>

                {/* Foot indicators representing localized diagnostics in real time */}
                <div className="border-t border-slate-100 pt-3 flex items-center justify-between z-10">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold">Signal telemetry</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* 2. PROBLEM AWARENESS SECTION */}
        <section id="funnel-problem" className="py-20 border-b border-slate-200/50 flex flex-col justify-center min-h-[60vh]">
          
          {/* Centered content column (max 700px width constraint) */}
          <div className="max-w-[700px] mx-auto text-center space-y-10">
            
            {/* Header Area */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-rose-600">
                ⚠️ Driving Vulnerabilities
              </span>
              {/* H2 Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-tight">
                Vehicle alerts often leave drivers without enough context.
              </h2>
            </div>

            {/* 3 PAIN POINT CARDS */}
            <div className="space-y-4 text-left">
              
              {/* Card 1 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 0 ? null : 0)}
                className={`w-full p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 0 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 0 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Warning lights do not explain urgency</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-300 ${
                      activePainPoint === 0 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      An illuminated check engine icon triggers immediate anxiety but lacks critical safety severity context. Drivers don't know if they can safely continue or must pull over instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 1 ? null : 1)}
                className={`w-full p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 1 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 1 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <Activity className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Fatigue and distraction can build before drivers notice</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-300 ${
                      activePainPoint === 1 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      Cognitive fatigue and short microsleep lulls occur gradually without clean visual cues, placing the driver and passengers in dangerous blindspots without warning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 2 ? null : 2)}
                className={`w-full p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 2 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 2 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <Cpu className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Vehicle data is too technical to act on quickly</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-300 ${
                      activePainPoint === 2 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      Standard OBD-II logs emit highly cryptic binary data structures that require specialist tooling to parse, making live safety decisions impossible for the everyday motorist.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Emotional Validation intent subtitle */}
            <span className="text-[10px] font-mono tracking-widest font-black text-slate-400 block pt-1">
              💡 Tap any segment above to reveal diagnostic mechanics
            </span>

          </div>

        </section>


        {/* 3. TRUST + CONCEPT VALIDATION SECTION */}
        <section id="concepts" className="py-20 border-b border-slate-200/50 flex flex-col justify-center min-h-[60vh]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Text Block */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Concept Validation Protocol</span>
              </div>

              {/* H2 Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-tight">
                Pre-launch demand validation
              </h2>

              {/* Body Text Context with explicit validation declaration */}
              <div className="space-y-4 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                <p className="text-slate-700 font-semibold">
                  Astrateq Gadgets is currently validating interest before manufacturing decisions are made. This page is designed to measure demand, gather feedback, and identify which vehicle intelligence concepts drivers value most.
                </p>
                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col gap-1.5 text-slate-700 text-xs shadow-sm">
                  <span className="block font-bold text-amber-900 uppercase tracking-wider text-[10px] font-mono">⚠️ Transparency Declaration</span>
                  <p className="leading-relaxed font-medium text-amber-800">
                    This is a pre-manufacturing interest assessment. No physical hardware is manufactured or shipped during this phase. Reservations are used purely to gauge financial viability and interest.
                  </p>
                </div>
              </div>

              {/* Trust Bullet Points list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="bg-slate-100 text-slate-700 border border-slate-200 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Privacy-First</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Operational entirely offline</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-2.5">
                  <div className="bg-slate-100 text-slate-700 border border-slate-200 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Measure Real Interest</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Refundable model validation</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="bg-slate-100 text-slate-700 border border-slate-200 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">No Risk Reserve</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Zero financial commitment required</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="bg-slate-100 text-slate-700 border border-slate-200 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Driver Built</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Co-design future roadmap</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side: Minimal Abstract System Diagram (50/50 Split layout) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              
              <div className="w-full max-w-[420px] bg-slate-950 text-slate-100 border border-slate-900 rounded-[2rem] p-7 space-y-6 shadow-2xl relative overflow-hidden">
                {/* Spotlights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* High tech glass header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-indigo-950 text-indigo-400 font-mono text-[9px] font-black tracking-widest rounded border border-indigo-900">COHORT MAPPING</div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 font-bold uppercase">VERSION 1.1 PROTOTYPE</span>
                </div>

                {/* Conceptual Schematic boxes */}
                <div className="space-y-4">
                  
                  {/* Wire 1: Vehicle Diagnostics */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3 relative group">
                    <div className="p-2 bg-indigo-950 text-indigo-400 rounded-lg border border-indigo-900">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="block text-[11px] max-w-fit font-bold font-mono tracking-wider text-slate-400 uppercase">Input Node</span>
                      <span className="block text-xs font-black text-white mt-1">Sensing CAN-bus engine signals</span>
                    </div>
                    <span className="absolute top-3.5 right-3.5 h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  {/* Connecting pipe */}
                  <div className="h-4 flex items-center justify-start pl-8">
                    <div className="w-[1.5px] h-full bg-indigo-600/60 dashed" />
                  </div>

                  {/* Wire 2: Internal Edge Processor Shield */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3 relative">
                    <div className="p-2 bg-rose-950 text-rose-400 rounded-lg border border-rose-900">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="block text-[11px] max-w-fit font-bold font-mono tracking-wider text-slate-400 uppercase">Astrateq Edge Layer</span>
                      <span className="block text-xs font-black text-white mt-1">Processing locally &bull; Encrypted loop</span>
                    </div>
                  </div>

                  {/* Connecting pipe */}
                  <div className="h-4 flex items-center justify-start pl-8">
                    <div className="w-[1.5px] h-full bg-indigo-600/60" />
                  </div>

                  {/* Wire 3: Driver action screen */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-start gap-3 relative">
                    <div className="p-2 bg-emerald-950 text-emerald-400 rounded-lg border border-emerald-900">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="block text-[11px] max-w-fit font-bold font-mono tracking-wider text-slate-400 uppercase">Clean Display Out</span>
                      <span className="block text-xs font-black text-white mt-1">Outputting direct verbal driver guidance</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* 4. CORE VALUE MODULES (3-CARD SYSTEM) */}
        <section id="funnel-values" className="py-20 border-b border-slate-200/50 flex flex-col justify-center min-h-[60vh]">
          
          <div className="space-y-12">
            
            {/* Header Title block */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-indigo-600 font-bold">
                ⚡ Tech Capabilities
              </span>
              {/* H2 Section Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-tight">
                Core concept modules
              </h2>
            </div>

            {/* 3 EQUAL HORIZONTAL CARDS (Desktop) / STACKED (Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 — Fatigue Intelligence */}
              <div 
                className="flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[290px] bg-white text-slate-900 border-slate-200/85 hover:border-indigo-400 hover:shadow-lg shadow-sm text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-50 text-indigo-700">
                      Module 01 &bull; Safety
                    </span>
                    <Activity className="w-5 h-5 text-indigo-600 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-slate-950">Fatigue Intelligence</h3>
                    <div className="space-y-2 mt-3.5 text-[12.5px] leading-relaxed text-slate-600">
                      <p><strong className="text-slate-900">Problem:</strong> Fatigue builds slowly and reduces reflexes before drowsiness is noticeable.</p>
                      <p><strong className="text-slate-900">Value:</strong> Stability indicators flag micro-steering shifts to guide safe rest stop timings.</p>
                      <p><strong className="text-slate-900">Privacy:</strong> Analyzed exclusively in volatile RAM; no behavioral files are saved.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 — Smart Diagnostics */}
              <div 
                className="flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[290px] bg-white text-slate-900 border-slate-200/85 hover:border-indigo-400 hover:shadow-lg shadow-sm text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-50 text-indigo-700">
                      Module 02 &bull; Context
                    </span>
                    <Cpu className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-slate-950">Smart Diagnostics</h3>
                    <div className="space-y-2 mt-3.5 text-[12.5px] leading-relaxed text-slate-600">
                      <p><strong className="text-slate-900">Problem:</strong> Engine warnings trigger panic without specifying issue urgency or drivability.</p>
                      <p><strong className="text-slate-900">Value:</strong> Translates fault codes instantly into crystal clear mechanic urgency diagnostics.</p>
                      <p><strong className="text-slate-900">Privacy:</strong> Signals stay inside local chip bus, isolated from remote connected databases.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 — Privacy-First Processing */}
              <div 
                className="flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[290px] bg-white text-slate-900 border-slate-200/85 hover:border-indigo-400 hover:shadow-lg shadow-sm text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-50 text-indigo-700">
                      Module 03 &bull; Shield
                    </span>
                    <EyeOff className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-slate-950">Privacy-First Processing</h3>
                    <div className="space-y-2 mt-3.5 text-[12.5px] leading-relaxed text-slate-600">
                      <p><strong className="text-slate-900">Problem:</strong> Infotainment layers routinely capture location, cabin logs, and travel routes.</p>
                      <p><strong className="text-slate-900">Value:</strong> Shields habits, coordinates, and trip speeds entirely localized to your dashboard.</p>
                      <p><strong className="text-slate-900">Privacy:</strong> Runs on absolute air-gapped local logic that lacks public networking access.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* 5. TRUST REINFORCEMENT STRIP */}
        <section id="funnel-trust-strip" className="py-16 md:py-20 border-b border-slate-200/50 flex flex-col justify-center min-h-[40vh] bg-slate-950 text-white rounded-3xl my-10 relative overflow-hidden px-8 sm:px-12">
          
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-slate-800/10 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="space-y-10 text-center max-w-4xl mx-auto relative z-10">
            
            {/* Main Statement */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 font-extrabold">strict reservation framework</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white max-w-3xl mx-auto">
                Transparent pre-launch validation
              </h2>
            </div>

            {/* Micro-trust bullets row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-5 border-t border-slate-800/80">
              
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-100">Fully refundable reservation</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Get your $40 CAD back instantly at any time</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-100">Limited validation cohort</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Accepting early validation subscribers only</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-100">Feedback shapes product direction</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Help determine physical sensor final design</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-100">No production commitment required</span>
                  <span className="block text-[11px] text-slate-400 mt-1">We optimize concepts first before assembly lines</span>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* 6. FINAL CONVERSION SECTION (DECISION ZONE) */}
        <section id="reserve" className="py-24 border-b border-slate-200/50 flex flex-col justify-center min-h-[70vh]">
          
          <div className="max-w-2xl mx-auto text-center space-y-10">
            
            {/* Header copy precisely mapped */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-indigo-600 font-bold">
                🔒 Secure Pre-order Checkout
              </span>
              {/* H2 Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-tight">
                Join the early validation cohort
              </h2>
              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-600 leading-normal font-semibold">
                Help shape a privacy-first vehicle intelligence system before production decisions are finalized.
              </p>
            </div>

            {/* Structured Conversion Capture Box */}
            <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-6 sm:p-10 shadow-2xl shadow-indigo-950/5 relative overflow-hidden text-left">
              
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-rose-500 to-indigo-600" />

              <form onSubmit={handleReserveFormSubmit} className="space-y-5">
                
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-slate-400">
                    Your Contact Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="e.g. driver@vancouver-tech.ca"
                    className="bg-slate-50/80 border border-slate-200 hover:border-slate-350 focus:border-indigo-600 rounded-xl px-4 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-semibold"
                  />
                </div>

                {/* Primary CTA (Big Solid Button) */}
                <button
                  type="submit"
                  className="w-full py-4.5 bg-indigo-600 hover:bg-slate-900 text-white font-extrabold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center uppercase tracking-wider"
                >
                  Reserve Early Access &mdash; $40 CAD
                </button>

              </form>

              {/* Secondary CTA (Low Visual Priority, placed neatly underneath) */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <button 
                  type="button"
                  onClick={handleGetUpdatesOnly}
                  className="text-slate-400 hover:text-indigo-600 font-bold transition-all text-xs underline cursor-pointer"
                >
                  Get Updates Only
                </button>
                
                {/* Final microcopy */}
                <span className="text-slate-500 font-medium tracking-tight flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Limited early access availability. Fully refundable reservation.
                </span>
              </div>

              {conceptSubscribed && (
                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 text-indigo-800 text-xs font-bold rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Email logged! We will ping you only with core milestone progress reports.</span>
                </div>
              )}

            </div>

            {/* Side Action: Toggle to other views */}
            <div className="flex justify-center items-center gap-4 pt-3 text-xs">
              <button
                onClick={() => onViewChange('landing')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black rounded-lg transition-all cursor-pointer"
              >
                ← Back to Interactive Showcase Dashboard
              </button>
            </div>

          </div>

        </section>


        {/* 7. FOOTER (MINIMAL TRUST FOOTER - Height: 20–30vh) */}
        <footer id="funnel-footer" className="py-12 border-t border-slate-200/50 min-h-[20vh] flex flex-col justify-between text-slate-500 text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-left">
            
            {/* Col 1 */}
            <div className="space-y-2">
              <span className="font-extrabold text-slate-900 block text-sm">Astrateq Gadgets</span>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Empowering automobile operators with transparent signals. Proudly registered in Vancouver, British Columbia, Canada.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <span className="font-extrabold text-slate-900 block text-sm">Privacy-First Architecture</span>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                Zero-telemetry hardware validation programs ensuring complete local driver data authority.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <span className="font-extrabold text-slate-900 block text-sm">Validations &amp; Legal</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-400 font-bold">
                <a href="#tesla-funnel-root" className="hover:text-indigo-600 transition-colors">Privacy Charter</a>
                <a href="#tesla-funnel-root" className="hover:text-indigo-600 transition-colors">Cohort Rules</a>
                <a href="#tesla-funnel-root" className="hover:text-indigo-600 transition-colors">Contact Support</a>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 font-mono">
            <span>&copy; {new Date().getFullYear()} Astrateq Gadgets Inc. All rights reserved.</span>
            <span>Design complies with 2026/2027 CRO Tesla Reservation standards.</span>
          </div>

        </footer>

      </div>

    </div>
  );
}
