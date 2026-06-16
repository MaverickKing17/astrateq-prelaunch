import React, { useState } from 'react';
import { Shield, Cpu, EyeOff, Activity, AlertTriangle, ShieldCheck, Heart, Send, CheckCircle, ArrowRight, CornerDownRight, Zap, X, Scale, FileText, Info } from 'lucide-react';

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
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'tos' | 'cookie' | 'dmca' | 'refund' | null>(null);

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

  const getLegalModalContent = () => {
    switch (activeLegalModal) {
      case 'privacy':
        return {
          title: 'Privacy Policy & Charter',
          icon: <Shield className="w-6 h-6 text-indigo-600 animate-pulse" />,
          badge: 'Zero-Telemetry Assurance',
          date: 'Last Modified: June 2026',
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Zero-Telemetry Core Promise</h4>
                <p>At Astrateq Gadgets, we adhere to a fundamental hardware design philosophy: <strong>your drive information belongs to you</strong>. All fatigue telemetry analysis, steering lulls calculations, and diagnostic evaluations are calculated natively directly within the volatility of the physical indicator's internal RAM buffers. Absolutely zero cabin recordings, diagnostic logs, steering frequency data, or trip histories are transmitted out of your vehicle.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. No External Network Connectivity</h4>
                <p>The Astrateq hardware concept features no cellular modem, no outward Wi-Fi handshake routing, and no active internet connection modules. It operates strictly inside a non-routing physical environment, communicating only to the local vehicle CAN Bus to read sensor signals and displaying output states on the premium built-in dials.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Vancouver Canada Privacy Act (PIPEDA) &amp; GDPR Compliance</h4>
                <p>For individuals reserving a seat in our early validation cohort, we collect only your primary communication email and country code. These details are stored in an encrypted Canadian server enclave. We never sell, lease, exchange, or share your contact records with third-party marketing entities. Your data is restricted purely to milestone communication dispatches regarding Astrateq conceptual phases.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Right to Immediate Erasure (Opt-Out)</h4>
                <p>You hold the permanent right to withdraw from the cohort registry. Simply trigger an email to <strong>vancouver-lab@astrateq-gadgets.ca</strong> or use the unsubscribe links on any dispatch. Upon receipt, your early profile index is scrubbed permanently from all databases within 24 hours.</p>
              </div>
            </div>
          )
        };
      case 'tos':
        return {
          title: 'Cohort Reservation Terms of Service',
          icon: <Scale className="w-6 h-6 text-amber-600 shrink-0" />,
          badge: 'Validation Participant Agreement',
          date: 'Effective: June 16, 2026',
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Scope of Agreement</h4>
                <p>This agreement outlines the relationship between Astrateq Gadgets Inc. and yourself ("Validator Participant" or "Cohort Subscriber") concerning the reservation of a concept authorization seat for Astrateq hardware aftermarket indicators.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Reservation vs. Purchase Contract</h4>
                <p>By executing the <strong>$40 CAD fully refundable reservation</strong> request, you acknowledge that you are joining an early visual validation program. This deposit does not represent a final retail purchase contract of factory-manufactured goods. Instead, it qualifies you as a primary advisory contact who receives exclusive tooling priority, component updates, and co-design shape feedback opportunities.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Prototyping Nature Disclaimers</h4>
                <p>Astrateq modules are currently in active internal design optimization, computational modeling, and non-certified validation trials. Final physical form factors, display layouts, component specifications, and price models may undergo significant modifications as we gather driver feedback and coordinate aftermarket tooling pipelines in Vancouver, British Columbia.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Governing Jurisdictional Law</h4>
                <p>These terms and all early developer interactions are governed by, created in, and construed in complete compliance with the corporate and legal structures of the <strong className="text-slate-900">Province of British Columbia and the federal laws of Canada</strong> applicable therein. Any legal inquiries or claim structures will be processed within the courts of Vancouver, BC.</p>
              </div>
            </div>
          )
        };
      case 'refund':
        return {
          title: 'Unconditional Refund Guarantee Policy',
          icon: <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 animate-bounce" />,
          badge: '100% Secure Canada Escrow',
          date: 'Policy Version: 2026/2027 CRO Standard',
          content: (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100/60 text-emerald-900 text-[12px] leading-relaxed">
                <p className="font-extrabold">
                  Our Commitment: Your $40 CAD reservation is fully, permanently, and unconditionally refundable. You can request your deposit back instantly at any time, for any reason, with no questions asked and zero penalty.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. How to Initiate a Full Refund</h4>
                <p>To request your refund, write to our concierge office at <strong>vancouver-lab@astrateq-gadgets.ca</strong> or <strong>refunds@astrateq.com</strong>. Provide the email address you used to reserve your cohort position and your validation order number (received via email). No complex forms of identity proofing are required for conceptual refund approvals.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Processing Timeframes</h4>
                <p>Our lab team dispatches refund instructions to our payment partners (Stripe/Authorize.net/PayFlow) within <strong>24 to 48 business hours</strong> of your submission. Depending on your bank's local processing velocity, funds will return directly to your original payment card within 3 to 7 business days.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Escrow Isolation Guarantee</h4>
                <p>All collected reservation funds are held in a ring-fenced Canadian bank merchant escrow account in Vancouver, BC. These funds are never utilized for general business operations, advertising budgets, or personal prototyping expenses. They remain securely stored until a commercial standard manufactured release is officially authorized or until you request your return.</p>
              </div>
            </div>
          )
        };
      case 'dmca':
        return {
          title: 'DMCA, Trademark & IP Compliance Notice',
          icon: <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />,
          badge: 'Manufacturer Disclosures & IP Integrity',
          date: 'Compliance Version: CRO Active 2026',
          content: (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100/60 text-rose-900 text-[12px] leading-relaxed">
                <p className="font-extrabold text-rose-950">
                  Astrateq Gadgets operates under strict independent fair-use aftermarket interoperability standards. We are not officially affiliated with Tesla, Inc.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Trademark Declarations</h4>
                <p>All registered trademarks, branding terms, model names (including but not limited to: <em>Tesla, Model S, Model 3, Model X, Model Y, Megapack, Autopilot, and Full Self-Driving</em>) and associated logos shown on this educational design showcase are the absolute and intellectual property of <strong>Tesla, Inc.</strong>, registered in the US, Canada, and other nations.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Fair-Use & Interoperability Rationale</h4>
                <p>Our concepts, descriptions, and mock dashboards are created under research and aftermarket diagnostic exceptions (such as the Right to Repair standard). Hardware modules are developed as independent vehicle diagnostics utilities that interface with open, standard OBD-II physical connections. No proprietary software code is extracted, decompiled, or distributed.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Designated DMCA Compliance Officer</h4>
                <p>We respect intellectual property rights. If you represent Tesla, Inc., a vehicle patent pool, or another IP holder, and believe any graphic asset, text layout, or interactive mockup exceeds fair-use boundaries, please coordinate with our Vancouver DMCA counsel: <strong>legal-ip@astrateq-gadgets.ca</strong>. We respond to and rectify valid concerns within 48 business hours.</p>
              </div>
            </div>
          )
        };
      case 'cookie':
        return {
          title: 'Cookie & Local Storage Policy',
          icon: <FileText className="w-6 h-6 text-slate-600 shrink-0" />,
          badge: 'Anti-Tracking Design Standard',
          date: 'Last Update: June 2026',
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. No Third-Party Selling Pixels</h4>
                <p>We believe tracking scripts decay trust and loading velocities. Astrateq Gadgets does not load third-party ad retargeting pixels (such as Google DoubleClick, Meta Ads Manager, or TikTok logs). You will never find your behavior on this showcase compiled and sold to marketing firms.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Local Storage Functional Usage</h4>
                <p>To provide a smooth, high-fidelity experience during your use of our <strong>Interactive Showcase Dashboard</strong>, we utilize HTML5 Local Storage. This technology stores your mock car metrics configurations, visual graph speed selections, dashboard preferences, and form submission states entirely within your own local browser environment.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Strictly Necessary Session Cookies</h4>
                <p>We only trigger standard, temporary server-side session cookies to authenticate secure reservation connections during checkout validations. These cookies hold zero historical tracking data and are automatically cleared within 15 minutes of ending your browser session.</p>
              </div>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const activeModalData = getLegalModalContent();

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
                  Reserve Early Access — $40 CAD
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

            {/* Right Col: Highly Visual 3D Automotive Intelligence Panel (Non-Branded SUV HUD) */}
            <div className="lg:col-span-12 xl:col-span-5 relative w-full flex items-center justify-center group [perspective:1000px]">
              
              {/* Intelligent ambient background aura */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-80 pointer-events-none transition-all duration-500 group-hover:scale-110" />

              {/* 3D Glassmorphic HUD Panel containing the isometric vehicle projection */}
              <div className="relative w-full aspect-square max-w-[495px] bg-slate-900 border border-slate-800 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-2xl shadow-indigo-950/10 overflow-hidden transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(6deg)_rotateY(-6deg)] group-hover:shadow-indigo-500/10">
                
                {/* 3D Grid background to simulate a digital holographic design stage */}
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#4f46e5_1.2px,transparent_1.2px)] [background-size:16px_16px]" />
                
                {/* HUD Header: Realtime Tech Identity & Status */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 z-20 bg-slate-900/60 backdrop-blur-md [transform:translateZ(20px)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 font-bold">Local Intel Active</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-950/30 px-2.5 py-1 rounded-md border border-emerald-500/30 shadow-xs">
                    Air-Gapped Shielded
                  </span>
                </div>

                {/* Main 3D Stage Layer */}
                <div className="flex-1 flex flex-col items-center justify-center py-2 relative z-10 [transform:translateZ(40px)]">
                  <div className="w-full relative h-60 flex items-center justify-center">
                    
                    {/* The Premium 3D Rendered Vehicle */}
                    <div className="relative w-[98%] h-[188px] rounded-2xl overflow-hidden border border-slate-800 shadow-inner group-hover:border-indigo-500/50 transition-colors duration-500">
                      <img 
                        src="/src/assets/images/vehicle_3d_hud_1781636888483.jpg" 
                        alt="3D Vehicle Diagnostic Intel" 
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {/* Cool grid overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
                    </div>

                    {/* HUD Pin 1: Diagnostic Center Node (Slightly overlapping 3D space) */}
                    <div className="absolute top-[62%] left-[-4%] flex items-center bg-slate-900/95 backdrop-blur-md border border-slate-750 rounded-xl px-2.5 py-1.5 shadow-lg [transform:translateZ(30px)] hover:scale-105 transition-all duration-300 text-white">
                      <div className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-black text-slate-100 leading-tight uppercase font-mono tracking-wide">OBD Scanner</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Realtime translating</span>
                      </div>
                    </div>

                    {/* HUD Pin 2: Cabin Fatigue Sensory Center */}
                    <div className="absolute top-[8%] left-[40%] flex flex-col items-center bg-slate-900/95 backdrop-blur-md border border-slate-750 rounded-xl px-2.5 py-1.5 shadow-lg [transform:translateZ(45px)] hover:scale-105 transition-all duration-300 text-white">
                      <div className="relative flex h-3 w-3 mb-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className="text-[10px] font-black text-slate-100 leading-tight uppercase font-mono tracking-wide">Driver Fatigue Guard</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Steering deviation check</span>
                      </div>
                    </div>

                    {/* HUD Pin 3: Privacy Isolation Node (Lock Center) */}
                    <div className="absolute top-[58%] right-[-2%] flex items-center bg-slate-900/95 backdrop-blur-md border border-slate-750 rounded-xl px-2.5 py-1.5 shadow-lg [transform:translateZ(35px)] hover:scale-105 transition-all duration-300 text-white">
                      <div className="relative flex h-3.5 w-3.5 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-black text-slate-100 leading-tight uppercase font-mono tracking-wide">Privacy Layer</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Zero outward routing</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* HUD Footer: Micro indicators representing constant hardware telemetry stream */}
                <div className="border-t border-slate-800 pt-3 flex items-center justify-between z-20 bg-slate-900/60 backdrop-blur-sm [transform:translateZ(15px)]">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 font-extrabold">Holographic Telemetry</span>
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
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
              
              <div className="w-full max-w-[440px] bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-7.5 space-y-6 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                {/* Spotlights */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
                
                {/* High tech glass header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                    <div className="px-2.5 py-1 bg-indigo-950/60 text-indigo-400 font-mono text-[9px] font-black tracking-widest rounded-md border border-indigo-900/55 uppercase">
                      COHORT MAPPING
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono text-slate-400 font-black tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-500" />
                    v1.1 Concept Layer
                  </span>
                </div>

                {/* Conceptual Schematic boxes */}
                <div className="space-y-4">
                  
                  {/* Wire 1: Vehicle Diagnostics */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-950/80 border border-slate-800/90 rounded-2xl p-4.5 flex items-start gap-4 relative group transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-950/20">
                    {/* Status Glow Bar (Left Border) */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-500 rounded-l-2xl" />
                    
                    {/* Icon Container */}
                    <div className="p-2.5 bg-indigo-950/85 text-indigo-400 rounded-xl border border-indigo-900/60 shrink-0 shadow-sm relative group-hover:scale-105 transition-transform">
                      <Cpu className="w-4.5 h-4.5" />
                      <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 border border-slate-950 animate-pulse" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-indigo-400 uppercase leading-none">Input Node</span>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.2 rounded border border-emerald-900/60 font-semibold uppercase leading-none">CAN Bus • Active</span>
                      </div>
                      <h4 className="text-[13.5px] font-bold text-white mt-1 leading-snug">
                        Sensing CAN-bus engine signals
                      </h4>
                      <p className="text-[10.5px] text-slate-400 font-medium leading-relaxed mt-1">
                        Captures system telemetry and diagnostic frames directly.
                      </p>
                    </div>
                  </div>

                  {/* Flow badge 1 */}
                  <div className="flex justify-center -my-2 select-none pointer-events-none relative z-10">
                    <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[8px] tracking-widest uppercase font-bold text-indigo-400 shadow-sm border-indigo-900/30 flex items-center gap-1.5">
                      <span>FLOW</span>
                      <span className="text-indigo-400 font-black animate-bounce">&darr;</span>
                    </div>
                  </div>

                  {/* Wire 2: Internal Edge Processor Shield */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-950/80 border border-slate-800/90 rounded-2xl p-4.5 flex items-start gap-4 relative group transition-all duration-300 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-950/20">
                    {/* Status Glow Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rose-500 rounded-l-2xl" />

                    {/* Icon Container */}
                    <div className="p-2.5 bg-rose-950/85 text-rose-400 rounded-xl border border-rose-900/60 shrink-0 shadow-sm relative group-hover:scale-105 transition-transform">
                      <Shield className="w-4.5 h-4.5" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-rose-400 uppercase leading-none">Astrateq Edge Layer</span>
                        <span className="text-[8px] font-mono text-rose-400 bg-rose-950/40 px-1.5 py-0.2 rounded border border-rose-900/60 font-semibold uppercase leading-none">Encrypted RAM Loop</span>
                      </div>
                      <h4 className="text-[13.5px] font-bold text-white mt-1 leading-snug">
                        Processing locally &bull; Encrypted loop
                      </h4>
                      <p className="text-[10.5px] text-slate-400 font-medium leading-relaxed mt-1">
                        Evaluates fault metrics in volatile memory; zero remote history is saved.
                      </p>
                    </div>
                  </div>

                  {/* Flow badge 2 */}
                  <div className="flex justify-center -my-2 select-none pointer-events-none relative z-10">
                    <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[8px] tracking-widest uppercase font-bold text-rose-400 shadow-sm border-rose-900/30 flex items-center gap-1.5">
                      <span>SECURED STREAM</span>
                      <span className="text-rose-400 font-black animate-bounce">&darr;</span>
                    </div>
                  </div>

                  {/* Wire 3: Driver action screen */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-950/80 border border-slate-800/90 rounded-2xl p-4.5 flex items-start gap-4 relative group transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-950/20">
                    {/* Status Glow Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500 rounded-l-2xl" />

                    {/* Icon Container */}
                    <div className="p-2.5 bg-emerald-950/85 text-emerald-400 rounded-xl border border-emerald-900/60 shrink-0 shadow-sm relative group-hover:scale-105 transition-transform">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-emerald-400 uppercase leading-none">Clean Display Out</span>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.2 rounded border border-emerald-900/60 font-semibold uppercase leading-none">Verbal Guidance</span>
                      </div>
                      <h4 className="text-[13.5px] font-bold text-white mt-1 leading-snug">
                        Outputting direct verbal driver guidance
                      </h4>
                      <p className="text-[10.5px] text-slate-400 font-medium leading-relaxed mt-1">
                        Deciphers engine codes into plain, spoken mechanical recommendations instantly.
                      </p>
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
                className="group flex flex-col p-7 rounded-[2.5rem] border transition-all duration-500 ease-out bg-white text-slate-900 border-slate-200/80 hover:border-indigo-500/50 hover:shadow-[0_24px_60px_rgba(79,70,229,0.12)] hover:-translate-y-2.5 shadow-sm text-left relative overflow-hidden"
              >
                {/* Glowing top line with color match */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-indigo-500/10 group-hover:bg-indigo-500 transition-colors duration-300" />
                
                {/* Clean ambient radial glow */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-indigo-500/[0.03] group-hover:bg-indigo-500/[0.06] transition-colors duration-500 blur-2xl pointer-events-none" />
                
                <div className="space-y-6 relative z-10 w-full h-full flex flex-col">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100/50 shadow-xs">
                      Module 01 &bull; Safety
                    </span>
                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-650 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(99,102,241,0.25)] transition-all duration-300">
                      <Activity className="w-4 h-4 animate-pulse animate-duration-[2000ms]" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950 group-hover:text-indigo-950 transition-colors duration-300">
                      Fatigue Intelligence
                    </h3>
                  </div>
                  
                  {/* High-fidelity itemized parameters (Timeline style - No inner box/border clutter) */}
                  <div className="relative space-y-5 flex-1 select-none">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-slate-100 group-hover:bg-indigo-100/60 transition-colors duration-300" />
                    
                    {/* Problem Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-50 border border-rose-100/80 flex items-center justify-center text-rose-500 relative z-10 transition-all duration-300 shadow-xs">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-rose-500 block">
                          The Problem
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Fatigue lowers driver reflexes before drowsiness is noticed.
                        </p>
                      </div>
                    </div>

                    {/* Value Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 relative z-10 transition-all duration-300 shadow-xs">
                        <Activity className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-indigo-600 block">
                          Core Concept
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Stability indicators detect steering lulls to guide safe rest stop timings.
                        </p>
                      </div>
                    </div>

                    {/* Privacy Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600 relative z-10 transition-all duration-300 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-650 block">
                          Local Privacy
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          RAM-only volatile analysis — absolutely no behavioral history stored.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 — Smart Diagnostics */}
              <div 
                className="group flex flex-col p-7 rounded-[2.5rem] border transition-all duration-500 ease-out bg-white text-slate-900 border-slate-200/80 hover:border-amber-500/50 hover:shadow-[0_24px_60px_rgba(245,158,11,0.12)] hover:-translate-y-2.5 shadow-sm text-left relative overflow-hidden"
              >
                {/* Glowing top line with color match */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-amber-500/10 group-hover:bg-amber-500 transition-colors duration-300" />
                
                {/* Clean ambient radial glow */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-amber-500/[0.03] group-hover:bg-amber-500/[0.06] transition-colors duration-500 blur-2xl pointer-events-none" />
                
                <div className="space-y-6 relative z-10 w-full h-full flex flex-col">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-xl bg-amber-50 text-amber-700 border border-amber-100/50 shadow-xs">
                      Module 02 &bull; Context
                    </span>
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-650 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(245,158,11,0.25)] transition-all duration-300">
                      <Cpu className="w-4 h-4 animate-pulse animate-duration-[2000ms]" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950 group-hover:text-amber-950 transition-colors duration-300">
                      Smart Diagnostics
                    </h3>
                  </div>
                  
                  {/* High-fidelity itemized parameters (Timeline style - No inner box/border clutter) */}
                  <div className="relative space-y-5 flex-1 select-none">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-slate-100 group-hover:bg-amber-100/60 transition-colors duration-300" />
                    
                    {/* Problem Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-50 border border-rose-100/80 flex items-center justify-center text-rose-500 relative z-10 transition-all duration-300 shadow-xs">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-rose-500 block">
                          The Problem
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Warning lights spark driver anxiety without clarifying severity or failure risk.
                        </p>
                      </div>
                    </div>

                    {/* Value Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-600 relative z-10 transition-all duration-300 shadow-xs">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-amber-600 block">
                          Core Concept
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Translates crypted OBD fault codes into simple, verbal instructions.
                        </p>
                      </div>
                    </div>

                    {/* Privacy Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600 relative z-10 transition-all duration-300 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-650 block">
                          Local Privacy
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Signals remain isolated in the vehicle bus with no remote routing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 — Privacy-First Processing */}
              <div 
                className="group flex flex-col p-7 rounded-[2.5rem] border transition-all duration-500 ease-out bg-white text-slate-900 border-slate-200/80 hover:border-emerald-500/50 hover:shadow-[0_24_60px_rgba(16,185,129,0.12)] hover:-translate-y-2.5 shadow-sm text-left relative overflow-hidden"
              >
                {/* Glowing top line with color match */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-500/10 group-hover:bg-emerald-500 transition-colors duration-300" />
                
                {/* Clean ambient radial glow */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-emerald-500/[0.03] group-hover:bg-emerald-500/[0.06] transition-colors duration-500 blur-2xl pointer-events-none" />
                
                <div className="space-y-6 relative z-10 w-full h-full flex flex-col">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100/50 shadow-xs">
                      Module 03 &bull; Shield
                    </span>
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-650 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all duration-300">
                      <EyeOff className="w-4 h-4 animate-pulse animate-duration-[2000ms]" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950 group-hover:text-emerald-950 transition-colors duration-300">
                      Privacy-First Processing
                    </h3>
                  </div>
                  
                  {/* High-fidelity itemized parameters (Timeline style - No inner box/border clutter) */}
                  <div className="relative space-y-5 flex-1 select-none">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[13px] top-3 bottom-3 w-[2px] bg-slate-100 group-hover:bg-emerald-100/60 transition-colors duration-300" />
                    
                    {/* Problem Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-50 border border-rose-100/80 flex items-center justify-center text-rose-500 relative z-10 transition-all duration-300 shadow-xs">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-rose-500 block">
                          The Problem
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Standard tech layers capture cabin logs, speeds, and trip history.
                        </p>
                      </div>
                    </div>

                    {/* Value Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-650 relative z-10 transition-all duration-300 shadow-xs">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-600 block">
                          Core Concept
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Secures stats instantly on a local, client-authorized dashboard.
                        </p>
                      </div>
                    </div>

                    {/* Privacy Row */}
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600 relative z-10 transition-all duration-300 shadow-xs">
                        <EyeOff className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-emerald-650 block">
                          Local Privacy
                        </span>
                        <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
                          Runs completely offline without outward network or cloud sync.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        {/* 5. TRUST REINFORCEMENT STRIP */}
        <section id="funnel-trust-strip" className="py-16 md:py-20 border border-slate-800/80 flex flex-col justify-center min-h-[40vh] bg-slate-950 bg-gradient-to-b from-slate-900 to-black text-white rounded-[3rem] my-12 relative overflow-hidden px-8 sm:px-12 shadow-2xl shadow-indigo-950/30">
          
          {/* Futuristic ambient lights */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          {/* Tech Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="space-y-12 text-center max-w-5xl mx-auto relative z-10">
            
            {/* Main Statement */}
            <div className="space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-900/60 text-[9px] uppercase tracking-widest font-mono text-indigo-400 font-black shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                strict reservation framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 max-w-3xl mx-auto pb-1">
                Transparent pre-launch validation
              </h2>
            </div>

            {/* Glowing line divider */}
            <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent my-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
            </div>

            {/* Micro-trust bullets row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-3">
              
              {/* Card 1 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-900/80 backdrop-blur-md border border-slate-800/70 rounded-2xl p-5 hover:border-indigo-500/35 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-500/[0.02] hover:-translate-y-1.5 transition-all duration-300 min-h-[195px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/[0.01] group-hover:bg-indigo-500/[0.03] transition-all duration-300 rounded-full blur-lg pointer-events-none" />
                <div className="flex flex-col items-center gap-3.5">
                  <div className="p-2.5 bg-indigo-500/15 text-indigo-400 rounded-2xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-all duration-300">
                    <ShieldCheck className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1.5 px-1">
                    <span className="block text-[13px] font-black text-slate-100 leading-tight">Fully refundable reservation</span>
                    <span className="block text-[11px] text-indigo-200/90 leading-normal font-medium">Get your $40 CAD back instantly at any time</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500 transition-colors duration-300 mt-2" />
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-900/80 backdrop-blur-md border border-slate-800/70 rounded-2xl p-5 hover:border-violet-500/35 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-violet-500/[0.02] hover:-translate-y-1.5 transition-all duration-300 min-h-[195px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/[0.01] group-hover:bg-violet-500/[0.03] transition-all duration-300 rounded-full blur-lg pointer-events-none" />
                <div className="flex flex-col items-center gap-3.5">
                  <div className="p-2.5 bg-violet-500/15 text-violet-400 rounded-2xl border border-violet-500/20 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-300">
                    <CheckCircle className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1.5 px-1">
                    <span className="block text-[13px] font-black text-slate-100 leading-tight">Limited validation cohort</span>
                    <span className="block text-[11px] text-violet-200/90 leading-normal font-medium">Accepting early validation subscribers only</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500/20 group-hover:bg-violet-500 transition-colors duration-300 mt-2" />
              </div>

              {/* Card 3 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-900/80 backdrop-blur-md border border-slate-800/70 rounded-2xl p-5 hover:border-rose-500/35 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-rose-500/[0.02] hover:-translate-y-1.5 transition-all duration-300 min-h-[195px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-rose-500/[0.01] group-hover:bg-rose-500/[0.03] transition-all duration-300 rounded-full blur-lg pointer-events-none" />
                <div className="flex flex-col items-center gap-3.5">
                  <div className="p-2.5 bg-rose-500/15 text-rose-400 rounded-2xl border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(244,63,94,0.25)] transition-all duration-300">
                    <Activity className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1.5 px-1">
                    <span className="block text-[13px] font-black text-slate-100 leading-tight">Early validation access</span>
                    <span className="block text-[11px] text-rose-200/90 leading-normal font-medium">Co-design concepts and hardware direction directly</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500/20 group-hover:bg-rose-500 transition-colors duration-300 mt-2" />
              </div>

              {/* Card 4 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-900/80 backdrop-blur-md border border-slate-800/70 rounded-2xl p-5 hover:border-emerald-500/35 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/[0.02] hover:-translate-y-1.5 transition-all duration-300 min-h-[195px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/[0.01] group-hover:bg-emerald-500/[0.03] transition-all duration-300 rounded-full blur-lg pointer-events-none" />
                <div className="flex flex-col items-center gap-3.5">
                  <div className="p-2.5 bg-emerald-500/15 text-emerald-400 rounded-2xl border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300">
                    <EyeOff className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1.5 px-1">
                    <span className="block text-[13px] font-black text-slate-100 leading-tight">No production commitment</span>
                    <span className="block text-[11px] text-emerald-200/90 leading-normal font-medium">Transparent pre-manufacturing driver assessment</span>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-300 mt-2" />
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
                    placeholder="your@email.com"
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
        <footer id="funnel-footer" className="py-16 border-t border-slate-200/60 min-h-[25vh] flex flex-col justify-between text-slate-500 text-xs mt-12 bg-slate-50/40 px-6 sm:px-12 rounded-[2.5rem]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-left">
            
            {/* Col 1 */}
            <div className="space-y-3.5 max-w-sm">
              <span className="font-black text-slate-900 block text-xs uppercase tracking-widest">
                Astrateq Gadgets
              </span>
              <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed">
                Empowering vehicle owners through elegant hardware concepts. Proudly designed and conceptualized in Vancouver, British Columbia, Canada.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3.5 max-w-sm">
              <span className="font-black text-slate-900 block text-xs uppercase tracking-widest">
                Privacy-First Philosophy
              </span>
              <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed">
                Our designs focus strictly on zero-telemetry validation. All sensor diagnostic evaluations are processed on-device and kept locally.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-3.5">
              <span className="font-black text-slate-900 block text-xs uppercase tracking-widest">
                Validations &amp; Legal
              </span>
              <div className="flex flex-col gap-2.5 text-[11.5px] text-slate-500">
                <button 
                  onClick={() => setActiveLegalModal('privacy')} 
                  className="hover:text-indigo-650 text-slate-600 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-505" />
                  Privacy Policy &amp; Charter
                </button>
                <button 
                  onClick={() => setActiveLegalModal('tos')} 
                  className="hover:text-indigo-650 text-slate-600 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-405" />
                  Terms of Service (Cohort Agreement)
                </button>
                <button 
                  onClick={() => setActiveLegalModal('refund')} 
                  className="hover:text-indigo-650 text-slate-600 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-505 shrink-0" />
                  $40 CAD Refund Guarantee Policy
                </button>
                <button 
                  onClick={() => setActiveLegalModal('dmca')} 
                  className="hover:text-indigo-650 text-slate-600 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-505 shrink-0" />
                  DMCA, Trademark &amp; IP Notices
                </button>
                <button 
                  onClick={() => setActiveLegalModal('cookie')} 
                  className="hover:text-indigo-650 text-slate-600 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  Cookie &amp; Local Storage Policy
                </button>
              </div>
            </div>

          </div>

          {/* HIGH-VISIBILITY ADVISORY CALLOUT CONTAINER */}
          <div className="mt-12 p-6 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-slate-800 space-y-2.5 max-w-5xl text-left select-none relative overflow-hidden shadow-xs">
            {/* Ambient subtle warn glow */}
            <div className="absolute right-0 bottom-0 w-24 h-24 rounded-full bg-amber-500/[0.02] blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-amber-800">
              <Info className="w-4 h-4 shrink-0 text-amber-600" />
              <span className="font-extrabold uppercase tracking-wider text-[10.5px] font-mono">Independent Concept Advisory</span>
            </div>
            
            <p className="text-[12px] font-bold text-slate-900 leading-normal">
              Astrateq Gadgets is an independent private research/prototyping developer laboratory. We are not officially affiliated with, authorized, sponsored, or partnered with Tesla, Inc. or any vehicle manufacturer.
            </p>
            
            <p className="text-[11.5px] text-slate-600 leading-relaxed font-medium">
              All manufactured trade names, trademarks, vehicle brand designations (Model S, Model 3, Model X, Model Y), or company logos referenced inside this interactive page showcase belong exclusively to their legal trademark owners. Our aftermarket hardware conceptual designs communicate with open vehicle OBD-II diagnostic buses purely for independent utility validation, cognitive alert evaluations, and driver optimization experiments.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-400/90 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span>&copy; {new Date().getFullYear()} Astrateq Gadgets Inc. All rights reserved.</span>
            </div>
            <span className="font-medium text-slate-400 text-center md:text-right">
              Vancouver Private Laboratory Cohort 01. Certified CRO Standard compliant.
            </span>
          </div>

        </footer>

        {/* REUSABLE PREMIUM LEGAL INTERACTIVE OVERLAY PORTAL */}
        {activeModalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop layer */}
            <div 
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setActiveLegalModal(null)}
            />
            
            {/* Modal Body */}
            <div className="bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 flex flex-col max-h-[80vh] justify-between text-left animate-in fade-in zoom-in-95 duration-200">
              
              {/* Header block */}
              <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-800">
                    {activeModalData.icon}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[9px] font-mono font-black uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100/40 shrink-0">
                        {activeModalData.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-950 tracking-tight leading-tight">
                      {activeModalData.title}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {activeModalData.date}
                    </p>
                  </div>
                </div>
                
                {/* Close circle */}
                <button
                  type="button"
                  onClick={() => setActiveLegalModal(null)}
                  className="p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors border border-slate-100 cursor-pointer outline-none shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scroll Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-slate-600 text-[12.5px] leading-relaxed space-y-5 font-medium select-text max-h-[50vh]">
                {activeModalData.content}
              </div>

              {/* Footer row */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shrink-0">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-450 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 animate-pulse" />
                  <span>Secure Astrateq Escrow Active</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-950 text-white font-extrabold rounded-xl text-center cursor-pointer transition-all duration-200 text-xs shadow-sm"
                >
                  Confirm Understanding
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}
