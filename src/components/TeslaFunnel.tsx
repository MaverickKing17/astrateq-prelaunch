import React, { useState } from 'react';
import { Shield, Cpu, EyeOff, Activity, AlertTriangle, ShieldCheck, Heart, Send, CheckCircle, ArrowRight, CornerDownRight, Zap } from 'lucide-react';

interface TeslaFunnelProps {
  onReserveSuccess: (email: string, bundle: string) => void;
  onViewChange: (view: 'landing' | 'infographic' | 'funnel') => void;
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
              
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-800 text-[11px] font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase w-fit">
                <Zap className="w-3.5 h-3.5 fill-indigo-200" />
                <span>Now Open For Public Validation</span>
              </div>

              {/* H1 Primary Hook: 48–56px, bold, tight tracking */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-950 leading-[1.08] font-sans">
                AI-powered vehicle intelligence for safer driving decisions
              </h1>

              {/* Subheadline: 16–18px, 1-2 lines max */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                Privacy-first system interpreting vehicle signals into clear, actionable driver insights.
              </p>

              {/* CTA BLOCK (Strictly ONE primary CTA, and secondary is de-emphasized text style) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                
                {/* Primary CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('funnel-conversion');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 text-center uppercase tracking-wider"
                >
                  Reserve Early Access
                </button>

                {/* Secondary CTA (text only, low visual weight) */}
                <button
                  onClick={() => setShowOverview(!showOverview)}
                  className="text-slate-500 hover:text-indigo-600 font-bold text-sm px-4 py-3 flex items-center justify-center gap-1.5 hover:bg-slate-100/50 rounded-xl transition-all"
                >
                  <span>View Concept Overview</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showOverview ? 'rotate-90' : ''}`} />
                </button>

              </div>

              {/* Spacing explanation from CRO rule - above the fold indicator */}
              <div className="text-[11px] text-slate-400 font-mono font-semibold flex items-center gap-1.5 pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Zero obligation. Fully refundable $49 CAD reservation queue.</span>
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

            {/* Right Col: Abstract Vehicle Intelligence Visual (No Clutter UI) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              
              {/* Decorative Tech Rings back-overlay */}
              <div className="absolute -inset-4 bg-indigo-50/40 rounded-full blur-2xl pointer-events-none" />

              {/* Visual Container styled with exquisite minimalist elegance */}
              <div className="relative w-full aspect-square max-w-[420px] bg-white border border-slate-200/70 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl shadow-indigo-950/5 overflow-hidden group">
                
                {/* Micro-grid overlay pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Aesthetic Status Headers */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">SYSTEM ACTIVE</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50/85 px-2 py-0.5 rounded">LOCAL BLOCKAGE: OFF</span>
                </div>

                {/* Main Abstract Design - Clean floating vector/nodes */}
                <div className="flex-1 flex flex-col items-center justify-center py-6 relative z-10">
                  
                  {/* Glowing central node */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-indigo-100 animate-spin" style={{ animationDuration: '40s' }} />
                    <div className="absolute inset-4 rounded-full border border-dashed border-rose-100 animate-spin" style={{ animationDuration: '24s' }} />
                    
                    {/* Concentric ripple */}
                    <div className="absolute inset-8 rounded-full bg-indigo-50/50 border border-indigo-200/40 flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-white border border-slate-800 shadow-md">
                        <Cpu className="w-7 h-7 text-indigo-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic subtle data flow orbits */}
                  <div className="w-full flex items-center justify-between mt-4 px-4">
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full py-1 px-3">
                      <Activity className="w-3.5 h-3.5 text-indigo-600" />
                      <span className="text-[9px] font-mono text-slate-500 font-black">1.8GHz Edge</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full py-1 px-3">
                      <EyeOff className="w-3.5 h-3.5 text-rose-500" />
                      <span className="text-[9px] font-mono text-slate-500 font-black">Zero-Telemetry</span>
                    </div>
                  </div>

                </div>

                {/* Minimalist interactive simulator data trace feedback line */}
                <div className="border-t border-slate-100 pt-3 z-10 flex flex-col justify-center text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-medium">REALTIME DIAGNOSTIC BUS</div>
                  <div className="flex justify-center gap-0.5 mt-1.5 h-1 items-end">
                    <div className="w-1 h-2.5 bg-slate-200 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-1 h-3.5 bg-indigo-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1 h-1.5 bg-slate-300 animate-bounce" style={{ animationDelay: '0.35s' }} />
                    <div className="w-1 h-4 bg-slate-200 animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-1 h-2 bg-indigo-600 animate-bounce" style={{ animationDelay: '0.45s' }} />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* 2. PROBLEM AWARENESS SECTION (Height: 70–90vh) */}
        <section id="funnel-problem" className="py-24 border-b border-slate-200/50 flex flex-col justify-center min-h-[70vh]">
          
          {/* Centered content column (max 700px width constraint) */}
          <div className="max-w-[700px] mx-auto text-center space-y-12">
            
            {/* Header Area */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-rose-600">
                ⚠️ Primary Catalyst
              </span>
              {/* H2 Title: 28–36px */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-[1.12]">
                Vehicles generate data — but drivers don’t understand it.
              </h2>
            </div>

            {/* 3 PAIN POINT CARDS (Stacked Vertically) */}
            <div className="space-y-4 text-left">
              
              {/* Card 1 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 0 ? null : 0)}
                className={`w-full p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 0 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-350 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 0 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <AlertTriangle className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Warning lights don’t explain severity</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-350 ${
                      activePainPoint === 0 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      An illuminated check engine icon triggers anxiety but lacks urgency context. Astrateq translates fault codes instantly so you know if safe driving remains viable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 1 ? null : 1)}
                className={`w-full p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 1 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-350 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 1 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <Shield className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Driver fatigue and distraction go undetected</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-350 ${
                      activePainPoint === 1 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      Microsleep triggers don't wait for dashboard notices. Tracking passive steering fluctuations and driving frequency lets our AI detect drop-offs early.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                onClick={() => setActivePainPoint(activePainPoint === 2 ? null : 2)}
                className={`w-full p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activePainPoint === 2 
                  ? 'bg-rose-50/50 border-rose-200 shadow-md shadow-rose-950/5' 
                  : 'bg-white border-slate-200/80 hover:border-slate-350 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-all ${
                    activePainPoint === 2 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-500 border-slate-100'
                  }`}>
                    <Cpu className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-black text-slate-900 tracking-tight">Vehicle data is too technical to act on in real time</h3>
                    <p className={`text-xs text-slate-500 leading-relaxed font-semibold transition-all overflow-hidden duration-350 ${
                      activePainPoint === 2 ? 'max-h-16 mt-2 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      CAN-bus logs contain thousands of binary data rows. Astrateq processes these signals internally and presents them relative to safety, keeping you free of mental tech overload.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Emotional Validation intent subtitle */}
            <span className="text-[11px] font-mono tracking-widest font-black text-slate-400 block pt-2">
              💡 Tap any segment above to reveal diagnostic mechanics
            </span>

          </div>

        </section>


        {/* 3. TRUST + CONCEPT VALIDATION SECTION (Height: ~80vh) */}
        <section id="funnel-trust-validation" className="py-24 border-b border-slate-200/50 flex flex-col justify-center min-h-[80vh]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Text Block (50/50 Split layout) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Rigorous Concept Validation Protocol</span>
              </div>

              {/* H2 Title: 28–36px */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-[1.12]">
                Pre-launch concept validation
              </h2>

              {/* Body Text Context (Strict Copy from PDF Page 5) */}
              <div className="space-y-4 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                <p className="font-extrabold text-slate-900">
                  Astrateq Gadgets is currently validating whether drivers want a privacy-first intelligence layer inside vehicles.
                </p>
                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col gap-1 text-slate-500 text-xs">
                  <span className="block font-bold">⚠️ COHORT TRANSPARENCY NOTE:</span>
                  <p>Not a finished product. Not mass-market. Early-stage concept exploration.</p>
                </div>
              </div>

              {/* Trust Bullet Points list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Privacy-First</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Zero cloud upload by design</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Local AI Processing</span>
                    <span className="text-[11px] text-slate-500 leading-normal">True Edge chip architecture</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">Driver-Focused</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Insights made clear in seconds</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg p-1 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-slate-900">No Cloud Dependency</span>
                    <span className="text-[11px] text-slate-500 leading-normal">Operational without constant web sync</span>
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


        {/* 4. CORE VALUE MODULES (3-CARD SYSTEM - Height: ~90vh) */}
        <section id="funnel-values" className="py-24 border-b border-slate-200/50 flex flex-col justify-center min-h-[90vh]">
          
          <div className="space-y-12">
            
            {/* Header Title block */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-indigo-600">
                ⚡ Tech Capabilities
              </span>
              {/* H2 Section Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-[1.12]">
                Core concept modules
              </h2>
            </div>

            {/* 3 EQUAL HORIZONTAL CARDS (Desktop) / STACKED (Mobile) */}
            {/* Rule: Card gap: 24px (gap-6), Internal padding: 20-24px (p-6) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 — Fatigue Intelligence */}
              <div 
                onClick={() => setCurrentSelectedModule(0)}
                className={`flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[220px] cursor-pointer text-left ${
                  currentSelectedModule === 0
                  ? 'bg-slate-950 text-white border-slate-900 shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-900 border-slate-200/80 hover:border-indigo-400 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded ${
                      currentSelectedModule === 0 ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      Card 01 • Behavior
                    </span>
                    <Activity className={`w-5 h-5 ${currentSelectedModule === 0 ? 'text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-black tracking-tight">Fatigue Intelligence</h3>
                    <p className={`text-xs mt-2.5 leading-relaxed font-semibold ${currentSelectedModule === 0 ? 'text-slate-350' : 'text-slate-500'}`}>
                      Detects early signs of driver fatigue using local behavioral signals.
                    </p>
                  </div>
                </div>
                <div className={`mt-5 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold ${
                  currentSelectedModule === 0 ? 'text-indigo-400' : 'text-slate-400'
                }`}>
                  <span>Active Module</span>
                  <CornerDownRight className="w-3 h-3" />
                </div>
              </div>

              {/* Card 2 — Smart Diagnostics */}
              <div 
                onClick={() => setCurrentSelectedModule(1)}
                className={`flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[220px] cursor-pointer text-left ${
                  currentSelectedModule === 1
                  ? 'bg-slate-950 text-white border-slate-900 shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-900 border-slate-200/80 hover:border-indigo-400 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded ${
                      currentSelectedModule === 1 ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      Card 02 • Translate
                    </span>
                    <Cpu className={`w-5 h-5 ${currentSelectedModule === 1 ? 'text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-black tracking-tight">Smart Diagnostics</h3>
                    <p className={`text-xs mt-2.5 leading-relaxed font-semibold ${currentSelectedModule === 1 ? 'text-slate-350' : 'text-slate-500'}`}>
                      Translates vehicle system signals into plain-English condition insights.
                    </p>
                  </div>
                </div>
                <div className={`mt-5 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold ${
                  currentSelectedModule === 1 ? 'text-indigo-400' : 'text-slate-400'
                }`}>
                  <span>Active Module</span>
                  <CornerDownRight className="w-3 h-3" />
                </div>
              </div>

              {/* Card 3 — Privacy-First Processing */}
              <div 
                onClick={() => setCurrentSelectedModule(2)}
                className={`flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 min-h-[220px] cursor-pointer text-left ${
                  currentSelectedModule === 2
                  ? 'bg-slate-950 text-white border-slate-900 shadow-xl scale-[1.02]'
                  : 'bg-white text-slate-900 border-slate-200/80 hover:border-indigo-400 shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded ${
                      currentSelectedModule === 2 ? 'bg-indigo-950 text-indigo-400' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      Card 03 • Secure
                    </span>
                    <EyeOff className={`w-5 h-5 ${currentSelectedModule === 2 ? 'text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-black tracking-tight">Privacy-First Processing</h3>
                    <p className={`text-xs mt-2.5 leading-relaxed font-semibold ${currentSelectedModule === 2 ? 'text-slate-350' : 'text-slate-500'}`}>
                      All analysis is processed locally where possible to minimize data exposure.
                    </p>
                  </div>
                </div>
                <div className={`mt-5 flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold ${
                  currentSelectedModule === 2 ? 'text-indigo-400' : 'text-slate-400'
                }`}>
                  <span>Active Module</span>
                  <CornerDownRight className="w-3 h-3" />
                </div>
              </div>

            </div>

            {/* CRO RULE: Only ONE idea per card */}
            <div className="bg-indigo-50/50 p-4 border border-indigo-100 rounded-2xl flex items-center justify-center gap-2 max-w-lg mx-auto">
              <span className="text-[11px] font-mono font-bold text-indigo-800">
                ⚡ CRO CONSTRAINT: Only ONE core idea analyzed per module card to reduce cognitive load.
              </span>
            </div>

          </div>

        </section>


        {/* 5. TRUST REINFORCEMENT STRIP (Height: ~40-60vh, compact band) */}
        <section id="funnel-trust-strip" className="py-16 md:py-20 border-b border-slate-200/50 flex flex-col justify-center min-h-[40vh] bg-slate-950 text-white rounded-3xl my-10 relative overflow-hidden px-8 sm:px-12">
          
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="space-y-10 text-center max-w-4xl mx-auto relative z-10">
            
            {/* Main Statement */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-mono text-rose-500 font-extrabold">strict reservation framework</span>
              <p className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white max-w-3xl mx-auto">
                "Early access reservations only — limited validation cohort participation."
              </p>
            </div>

            {/* Micro-trust bullets row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-slate-800/80">
              
              <div className="flex flex-col items-center gap-2.5">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-black text-slate-100">Fully refundable reservation</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Cancel anytime with 1-click CAD refunds</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2.5">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-black text-slate-100">No production commitment required</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Your reservation shapes early validation phases</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2.5">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/25">
                  <Heart className="w-5 h-5 text-rose-450" />
                </div>
                <div className="text-center">
                  <span className="block text-xs font-black text-slate-100">Feedback shaping development</span>
                  <span className="block text-[11px] text-slate-400 mt-1">Founding cohort holds priority steering rights</span>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* 6. FINAL CONVERSION SECTION (DECISION ZONE - Height: ~80vh) */}
        <section id="funnel-conversion" className="py-24 border-b border-slate-200/50 flex flex-col justify-center min-h-[80vh]">
          
          <div className="max-w-2xl mx-auto text-center space-y-10">
            
            {/* Header copy precisely mapped */}
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-widest uppercase font-black text-indigo-600">
                🔒 Secure Pre-order Checkout
              </span>
              {/* H2 Title */}
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-black tracking-tight leading-[1.12]">
                Join the early validation cohort
              </h2>
              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-600 leading-normal font-semibold">
                Help shape the future of privacy-first vehicle intelligence.
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
                  Reserve Early Access &mdash; $49 CAD
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
                <span className="text-rose-600 font-bold tracking-tight uppercase flex items-center gap-1">
                  <span>⏱️</span> Limited early access availability
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
