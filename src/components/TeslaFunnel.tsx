import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, EyeOff, Activity, AlertTriangle, ShieldCheck, Heart, Send, CheckCircle, ArrowRight, CornerDownRight, Zap, X, Scale, FileText, Info, Gift } from 'lucide-react';

import DigitalOBDScanner from './DigitalOBDScanner';
import CompatibilityChecker from './CompatibilityChecker';

// Import image assets to ensure Vite builds and hashes them correctly for both production and development
import vehicleHudImg from '../assets/images/vehicle_3d_hud_1781636888483.jpg';
import driveguardSoloImg from '../assets/images/driveguard_solo_modern_1781714862550.jpg';
import driveguardFamilyImg from '../assets/images/driveguard_family_modern_1781714875124.jpg';
import guardianProImg from '../assets/images/guardian_pro_modern_1781714886921.jpg';

interface TeslaFunnelProps {
  onReserveSuccess: (email: string, bundle: string) => void;
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function TeslaFunnel({ onReserveSuccess, onNavigate }: TeslaFunnelProps) {
  const [emailInput, setEmailInput] = useState('');
  const [activePainPoint, setActivePainPoint] = useState<number | null>(null);
  const [currentSelectedModule, setCurrentSelectedModule] = useState<number>(0);
  const [conceptSubscribed, setConceptSubscribed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'tos' | 'cookie' | 'dmca' | 'refund' | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<'solo' | 'family' | 'guardian'>('family');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [activeHudNode, setActiveHudNode] = useState<'obd' | 'fatigue' | 'privacy'>('obd');

  const [isDesktop, setIsDesktop] = useState(false);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  const soloRef = useRef<HTMLDivElement>(null);
  const familyRef = useRef<HTMLDivElement>(null);
  const guardianRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      if (soloRef.current) soloRef.current.style.transform = '';
      if (familyRef.current) familyRef.current.style.transform = '';
      if (guardianRef.current) guardianRef.current.style.transform = '';
      return;
    }

    const handleScroll = () => {
      const container = parallaxContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const scrollRange = viewportHeight + rect.height;
      const progress = (viewportHeight - rect.top) / scrollRange;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const offset = clampedProgress - 0.5;

      const soloY = offset * -25;
      const familyY = offset * -45;
      const guardianY = offset * -15;

      if (soloRef.current) {
        soloRef.current.style.transform = `translateY(${soloY}px)`;
      }
      if (familyRef.current) {
        familyRef.current.style.transform = `translateY(${familyY}px)`;
      }
      if (guardianRef.current) {
        guardianRef.current.style.transform = `translateY(${guardianY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const handleScrollToSection = (sectionId: string) => {
    let targetId = sectionId;
    if (sectionId === 'pricing') targetId = 'reserve';
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReserveFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    
    const packageName = selectedPackage === 'solo' 
      ? 'DriveGuard Solo™' 
      : selectedPackage === 'family' 
        ? 'Family Safety Hub™' 
        : 'Guardian Pro Bundle™';

    onReserveSuccess(emailInput, packageName);
    setEmailInput('');
    setValidationError(null);
  };

  const handleGetUpdatesOnly = () => {
    if (!emailInput.trim()) {
      setValidationError('Please type your email first to receive updates.');
      return;
    }
    setConceptSubscribed(true);
    setValidationError(null);
  };

  const getLegalModalContent = () => {
    switch (activeLegalModal) {
      case 'privacy':
        return {
          title: 'Privacy & Security Overview',
          icon: <Shield className="w-6 h-6 text-indigo-600 animate-pulse" />,
          badge: 'Zero-Telemetry Assurance & Canadian Sovereignty',
          date: 'Last Modified: June 16, 2026',
          content: (
            <div className="space-y-5 text-slate-700 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Zero-Telemetry Core Promise</h4>
                <p>At Astrateq Gadgets, we adhere to a fundamental hardware design philosophy: <strong>your drive information belongs strictly and exclusively to you</strong>. All fatigue telemetry analysis, steering lulls calculations, and diagnostic evaluations are calculated natively directly within the volatility of the physical indicator's internal RAM buffers. Absolutely zero cabin recordings, diagnostic logs, steering frequency data, or trip histories are transmitted out of your vehicle.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Operational Sandboxing &amp; No External Cloud Storage</h4>
                <p>The Astrateq hardware concept features no cellular modem, no outward Wi-Fi handshake routing, and no active internet connection modules. This ensures absolute protection from remote cyber threats or unwarranted server storage of your positional coordinates. It operates strictly inside a non-routing physical environment, communicating only to the local vehicle CAN Bus to read sensor signals and displaying output states on the premium built-in dials.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Canadian Privacy Statutes (PIPEDA) Compliance</h4>
                <p>For individuals reserving a seat in our early validation cohort, we collect only your primary communication email and country code. These details are stored in an encrypted Canadian server enclave located in Ontario. We never sell, lease, exchange, or share your contact records with third-party marketing entities or ad networks. Your data is restricted purely to milestone communication dispatches regarding Astrateq conceptual phases.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Local Passcode &amp; Encryption Matrix</h4>
                <p>Any settings or vehicle presets customized by you are encrypted using local hardware-bound AES-256 protocols. If you opt to link our companion diagnostics application via your smartphone, the handshake will utilize local Bluetooth Low Energy (BLE) secure paring with cryptographically generated roll-over keys. Under no circumstances do we stream your operational indicators to an external centralized server.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">5. Permanent Right to Immediate Erasure (Opt-Out)</h4>
                <p>You hold the permanent, unconditional right to withdraw from the cohort registry. Simply trigger an email to <strong>toronto-lab@astrateq-gadgets.ca</strong> or use the unsubscribe links on any dispatch. Upon receipt, your early profile index is scrubbed permanently and non-recoverably from all databases within 24 business hours.</p>
              </div>
            </div>
          )
        };
      case 'tos':
        return {
          title: 'Cohort Reservation Terms of Service',
          icon: <Scale className="w-6 h-6 text-amber-600 shrink-0" />,
          badge: 'Validation Participant Agreement & Non-Binding Accord',
          date: 'Effective: June 16, 2026',
          content: (
            <div className="space-y-5 text-slate-700 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Scope of Agreement</h4>
                <p>This agreement outlines the relationship between Astrateq Gadgets Inc. and yourself ("Validator Participant" or "Cohort Subscriber") concerning the reservation of a pre-launch validation slot for Astrateq AI-powered automotive technology and indicator displays.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Reservation vs. Purchase Contract</h4>
                <p>By executing the <strong>fully refundable reservation</strong> request, you acknowledge that you are participating in a pre-launch market research validation program. This deposit does not represent a final retail purchase contract of factory-built consumer inventory. Instead, it places you on our advisory cohort list to receive exclusive design dispatches, co-design input invitations, and premium delivery order queues upon commercial production clearance.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Pre-Launch Validation Disclosures</h4>
                <p>Astrateq AI algorithms, display models, and localized hardware telemetry structures are in active computational optimization and validation testing. Final configurations, pricing variables, technical dimensions, and specific graphic UI elements may shift based on user-preference studies and market research analysis conducted during this pre-launch program in Toronto, Ontario.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Independent Non-Affiliation Pact</h4>
                <p>As a validation participant, you acknowledge that Astrateq Gadgets Inc. is an entirely independent entity. We do not act on behalf of, nor are we licensed by, any original equipment vehicle manufacturers. Our kits are built exclusively as universal physical diagnostic accessories leveraging standardized OBD-II interfaces.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">5. Governing Jurisdictional Law</h4>
                <p>These terms and all early validation interactions are governed by, created in, and construed in complete compliance with the corporate and legal structures of the <strong>Province of Ontario and the federal laws of Canada</strong> applicable therein. Any legal inquiries or claim structures will be processed within the courts of Toronto, ON.</p>
              </div>
            </div>
          )
        };
      case 'refund':
        return {
          title: 'Unconditional Refund Guarantee Policy',
          icon: <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 animate-bounce" />,
          badge: '100% Secure Canada Escrow Assurance',
          date: 'Policy Version: 2026/2027 CRO Standard',
          content: (
            <div className="space-y-5 text-slate-700 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100/60 text-emerald-900 text-[12px] leading-relaxed">
                <p className="font-extrabold text-emerald-950">
                  Our Commitment: Your pre-launch reservation deposit is fully, permanently, and unconditionally refundable. You can request your deposit back instantly at any time, for any reason, with no questions asked and zero penalty.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. How to Initiate a Full Refund</h4>
                <p>To request your refund, write to our concierge office at <strong>toronto-lab@astrateq-gadgets.ca</strong> or <strong>refunds@astrateq.com</strong>. Provide the email address you used to reserve your cohort position and your validation order number (received via email). No complex forms of identity proofing or tedious surveys are required for prompt approval.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Processing Timeframes</h4>
                <p>Our lab team dispatches refund instructions to our payment partners (Stripe/Authorize.net/PayFlow) within <strong>24 to 48 business hours</strong> of your submission. Depending on your bank's local processing velocity, funds will return directly to your original payment card within 3 to 7 business days.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Escrow Isolation Guarantee</h4>
                <p>All collected reservation funds are held in a ring-fenced Canadian bank merchant escrow account in Toronto, ON. These funds are never utilized for general business operations, advertising budgets, or personal prototyping expenses. They remain securely stored until a commercial standard manufactured release is officially authorized or until you request your return.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Double-Guarantee Provision For Early Members</h4>
                <p>If you choose to maintain your slot and proceed to test our custom hardware package on delivery, you remain backed by our 30-day "Test on the Highway" trial. You can return the unit within 30 days of arrival for a 100% full merchandise refund, and you are welcome to keep your custom metallic OBD connection tools as our gift to you.</p>
              </div>
            </div>
          )
        };
      case 'dmca':
        return {
          title: 'DMCA, Trademark & IP Compliance Notice',
          icon: <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />,
          badge: 'Manufacturer Disclosures & IP Integrity Guidelines',
          date: 'Compliance Version: CRO Active 2026',
          content: (
            <div className="space-y-5 text-slate-700 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100/60 text-rose-900 text-[12px] leading-relaxed">
                <p className="font-extrabold text-rose-950">
                  Astrateq Gadgets operates under strict independent fair-use aftermarket interoperability standards. We are not officially affiliated with, endorsed by, or authorized by any original design vehicle manufacturer.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">1. Trademark Declarations</h4>
                <p>All registered trademarks, branding terms, model names, and associated logos shown on this pre-launch educational design showcase are the absolute and intellectual property of their respective original trademark holders registered in Canada, the US, and other nations.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">2. Fair-Use &amp; Interoperability Rationale</h4>
                <p>Our concepts, descriptions, and mock dashboards are created under research and aftermarket diagnostic exceptions (such as the Canadian Right to Repair standard, Bill C-244). Hardware modules are developed as independent vehicle diagnostics utilities that interface with open, standard OBD-II physical connections. No proprietary software code is extracted, decompiled, or distributed.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">3. Respect for Corporate IP Boundaries</h4>
                <p>The Astrateq brand strictly prohibits the integration of trademark-infringing graphic decals or visual UI clones into consumer production runs. We do not distribute physical vehicle badges, copy proprietary operating system firmware, or spoof diagnostic system IDs.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Designated DMCA Compliance Officer</h4>
                <p>We respect intellectual property rights. If you represent an intellectual property holder or vehicle manufacturer and feel any graphic asset, text layout, or interactive mockup exceeds fair-use boundaries, please coordinate with our Toronto DMCA counsel: <strong>legal-ip@astrateq-gadgets.ca</strong>. We respond to and rectify valid concerns within 48 business hours.</p>
              </div>
            </div>
          )
        };
      case 'cookie':
        return {
          title: 'Cookie & Local Storage Policy',
          icon: <FileText className="w-6 h-6 text-slate-600 shrink-0" />,
          badge: 'Anti-Tracking Design Standard & Cookie Protection',
          date: 'Last Update: June 16, 2026',
          content: (
            <div className="space-y-5 text-slate-700 text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
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
              <div>
                <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider mb-1.5 font-mono">4. Cleansing Your Browser Footprint</h4>
                <p>Because we do not store your interactive settings on our servers, you hold total authority over your configuration footprint. You can instantly restore our default mock interface parameters at any time by wiping your browser’s cache and site data for this domain.</p>
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
    <div id="launch-funnel-root" className="bg-[#FAF9F6] text-slate-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans transition-all duration-500">
      
      {/* 2026/2027 CRO STANDARD BAR */}
      <div className="bg-slate-950 text-slate-300 py-2.5 px-4 sm:px-6 text-center text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-wider border-b border-white/5 shadow-inner">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 md:gap-x-6">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            <span className="text-white text-[11px]">COHORT PHASE 1: <span className="text-indigo-400 font-black">ACTIVE</span></span>
          </div>
          <span className="hidden sm:inline text-slate-800">|</span>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% ESCROW REFUND GUARANTEE</span>
          </div>
          <span className="hidden sm:inline text-slate-800">|</span>
          <div className="flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>PASSIVE OBD-II HARNESS STANDARD</span>
          </div>
          <span className="hidden md:inline text-slate-800">|</span>
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>LIFETIME LOOPS SUBSCRIPTION WAIVED</span>
          </div>
        </div>
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
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
                <span>Limited Canadian early access — allocation closing soon.</span>
              </div>

              {/* H1 Primary Hook */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-950 leading-[1.1] font-sans">
                Join the Founding Driver Cohort
              </h1>

              {/* Subheadline: Premium, clear pre-launch purpose */}
              <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug font-sans">
                Privacy-first vehicle intelligence for safer driving decisions.
              </p>

              {/* Clarity line under Hero list */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                A pre-launch vehicle intelligence system designed to improve driving awareness using privacy-first on-device processing.
              </p>

              {/* CTA BLOCK (Strictly ONE primary CTA for absolute conversions focus) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                
                {/* Primary CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('reserve');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm sm:text-base rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 text-center uppercase tracking-wider"
                >
                  Join Founding Cohort Now
                </button>

              </div>

              {/* Hero microcopy under CTA */}
              <div className="text-[11px] text-slate-500 font-sans font-bold flex items-center gap-1.5 pt-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Early access allocated in limited Canadian founding cohorts.</span>
              </div>

            </div>

            {/* Right Col: Highly Visual 3D Automotive Intelligence Panel (Non-Branded SUV HUD) */}
            <div className="lg:col-span-12 xl:col-span-5 relative w-full flex items-center justify-center group [perspective:1000px]">
              
              {/* Intelligent ambient background aura */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-80 pointer-events-none transition-all duration-500 group-hover:scale-110" />

              {/* 3D Glassmorphic HUD Panel containing the isometric vehicle projection */}
              <div className="relative w-full aspect-auto min-h-[495px] bg-slate-900 border-2 border-indigo-500/25 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-2xl shadow-indigo-950/20 overflow-hidden transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(4deg)_rotateY(-4deg)] group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10">
                
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
                <div className="flex-1 flex flex-col items-center justify-center py-4 relative z-10 [transform:translateZ(40px)]">
                  <div className="w-full relative h-[190px] flex items-center justify-center">
                    
                    {/* Glowing holographic back-spotlight for rich contrast */}
                    <div className="absolute -inset-x-2 -inset-y-3 bg-gradient-to-r from-indigo-500/35 via-cyan-400/40 to-purple-500/30 rounded-[2.2rem] blur-2xl opacity-100 pointer-events-none" />
                    
                    {/* Holographic grid bracket overlay frame behind the vehicle to give depth */}
                    <div className="absolute inset-x-2 inset-y-0.5 border border-cyan-400/30 rounded-2xl pointer-events-none z-0" />

                    {/* The Premium 3D Rendered Vehicle */}
                    <div className="relative w-[98%] h-[178px] rounded-2xl overflow-hidden border-2 border-indigo-400/60 shadow-[0_0_30px_rgba(99,102,241,0.35)] group-hover:border-cyan-400/70 transition-all duration-500 z-10 bg-slate-950/80">
                      <img 
                        src={vehicleHudImg} 
                        alt="3D Vehicle Diagnostic Intel" 
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out brightness-115 contrast-[1.08] saturate-110"
                        referrerPolicy="no-referrer"
                      />
                      {/* Cool grid overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
                      
                      {/* Decorative corner crosshair brackets for HUD aesthetic without clutter */}
                      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-cyan-400 opacity-85" />
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-cyan-400 opacity-85" />
                      <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-cyan-400 opacity-85" />
                      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-cyan-400 opacity-85" />
                    </div>

                    {/* HUD Pin 1: Diagnostic Center Node (Slightly overlapping 3D space) */}
                    <button 
                      onClick={() => setActiveHudNode('obd')}
                      className={`absolute top-[58%] left-[-2%] flex items-center bg-slate-950/95 backdrop-blur-sm border rounded-xl px-2.5 py-1.5 shadow-xl [transform:translateZ(45px)] hover:scale-105 hover:bg-indigo-950/95 transition-all duration-300 text-white cursor-pointer ${
                        activeHudNode === 'obd' 
                          ? 'border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] scale-105' 
                          : 'border-slate-800 hover:border-indigo-500/55'
                      }`}
                    >
                      <div className="relative flex h-3 w-3 mr-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 ${activeHudNode === 'obd' ? 'inline' : 'hidden md:inline'}`}></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className={`text-[9.5px] font-black uppercase font-mono tracking-wide ${activeHudNode === 'obd' ? 'text-indigo-400 font-extrabold' : 'text-slate-100'}`}>OBD Scanner</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Realtime translating</span>
                      </div>
                    </button>

                    {/* HUD Pin 2: Cabin Fatigue Sensory Center */}
                    <button 
                      onClick={() => setActiveHudNode('fatigue')}
                      className={`absolute top-[4%] left-[32%] flex flex-col items-center bg-slate-950/95 backdrop-blur-sm border rounded-xl px-2.5 py-1.5 shadow-xl [transform:translateZ(55px)] hover:scale-105 hover:bg-amber-950/95 transition-all duration-300 text-white cursor-pointer ${
                        activeHudNode === 'fatigue' 
                          ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' 
                          : 'border-slate-800 hover:border-amber-500/55'
                      }`}
                    >
                      <div className="relative flex h-3 w-3 mb-1">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 ${activeHudNode === 'fatigue' ? 'inline' : 'hidden md:inline'}`}></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className={`text-[9.5px] font-black uppercase font-mono tracking-wide ${activeHudNode === 'fatigue' ? 'text-amber-450 font-extrabold' : 'text-slate-100'}`}>Driver Fatigue Guard</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Steering monitoring</span>
                      </div>
                    </button>

                    {/* HUD Pin 3: Privacy Isolation Node (Lock Center) */}
                    <button 
                      onClick={() => setActiveHudNode('privacy')}
                      className={`absolute top-[56%] right-[-2%] flex items-center bg-slate-950/95 backdrop-blur-sm border rounded-xl px-2.5 py-1.5 shadow-xl [transform:translateZ(45px)] hover:scale-105 hover:bg-emerald-950/95 transition-all duration-300 text-white cursor-pointer ${
                        activeHudNode === 'privacy' 
                          ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105' 
                          : 'border-slate-800 hover:border-emerald-500/55'
                      }`}
                    >
                      <div className="relative flex h-3.5 w-3.5 mr-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${activeHudNode === 'privacy' ? 'inline' : 'hidden md:inline'}`}></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className={`text-[9.5px] font-black uppercase font-mono tracking-wide ${activeHudNode === 'privacy' ? 'text-emerald-450 font-extrabold' : 'text-slate-100'}`}>Privacy Layer</span>
                        <span className="text-[7.5px] font-mono text-slate-400 font-bold uppercase leading-none mt-0.5">Zero outward routing</span>
                      </div>
                    </button>

                  </div>
                </div>

                {/* Interactive Diagnostic Feed Terminal */}
                <div className="bg-slate-950/95 border border-slate-800/80 rounded-[1.2rem] p-3.5 font-mono text-[11px] relative overflow-hidden transition-all duration-300 mt-2 text-left shadow-inner">
                  <div className="flex justify-between items-center border-b border-indigo-950/30 pb-2 mb-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-400">⚡ Interactive Realtime Feed</span>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => setActiveHudNode('obd')}
                        className={`px-2 py-0.5 rounded text-[8.5px] font-extrabold ${activeHudNode === 'obd' ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        OBD
                      </button>
                      <button 
                        onClick={() => setActiveHudNode('fatigue')}
                        className={`px-2 py-0.5 rounded text-[8.5px] font-extrabold ${activeHudNode === 'fatigue' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        CABIN
                      </button>
                      <button 
                        onClick={() => setActiveHudNode('privacy')}
                        className={`px-2 py-0.5 rounded text-[8.5px] font-extrabold ${activeHudNode === 'privacy' ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        SHIELD
                      </button>
                    </div>
                  </div>

                  {activeHudNode === 'obd' && (
                    <div className="space-y-1 text-slate-300 leading-normal">
                      <div className="flex justify-between">
                        <span className="text-slate-500">PROTOCOL:</span>
                        <span className="text-indigo-400">Standard ISO-15765 CAN-Bus</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">OBD QUERY:</span>
                        <span>Sovereign passive read loop</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-500">STATE:</span>
                        <span className="text-emerald-400 font-bold">100% compliant / 0 fault codes</span>
                      </div>
                      <p className="text-[9.5px] text-slate-450 leading-relaxed pt-1.5 border-t border-slate-900 mt-1">
                        Translates proprietary signals instantly into natural language alerts without overwriting or interfering with vehicle ECUs.
                      </p>
                    </div>
                  )}

                  {activeHudNode === 'fatigue' && (
                    <div className="space-y-1 text-slate-300 leading-normal">
                      <div className="flex justify-between">
                        <span className="text-slate-500">ENGINE:</span>
                        <span className="text-amber-450 font-bold">Gaze Attention & Steering Tracker</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">COMPUTE:</span>
                        <span>100% Local cabin microprocessors</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">SPEED:</span>
                        <span className="text-indigo-400">12ms frame processing velocity</span>
                      </div>
                      <p className="text-[9.5px] text-slate-450 leading-relaxed pt-1.5 border-t border-slate-900 mt-1">
                        Detects gaze deviation patterns and lateral micro-steering drifts completely offline at the edge. No interior video of your face is saved.
                      </p>
                    </div>
                  )}

                  {activeHudNode === 'privacy' && (
                    <div className="space-y-1 text-slate-300 leading-normal">
                      <div className="flex justify-between">
                        <span className="text-slate-500">OUTWARD REG:</span>
                        <span className="text-emerald-400 font-bold">BLOCKED [Sovereign State]</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">CRYPT KEY:</span>
                        <span>Hardware-bonded AES-256</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">PHYS BYPASS:</span>
                        <span className="text-indigo-400 font-semibold uppercase">Physical air-gap lines active</span>
                      </div>
                      <p className="text-[9.5px] text-slate-450 leading-relaxed pt-1.5 border-t border-slate-900 mt-1">
                        Includes a physical telemetry separator ensuring your driving routes, acceleration metrics, and diagnostic logs never leave your vehicle.
                      </p>
                    </div>
                  )}
                </div>

                {/* HUD Footer: Micro indicators representing constant hardware telemetry stream */}
                <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between z-20 bg-slate-900/60 backdrop-blur-sm [transform:translateZ(15px)] mt-2">
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

            {/* Right side: Interactive Pre-launch Campaign Metrics & Founding Perks Card */}
            <div className="lg:col-span-6 flex justify-center items-center">
              
              <div className="w-full max-w-[440px] bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-[2.5rem] p-7.5 space-y-6 shadow-2xl relative overflow-hidden ring-1 ring-white/10 text-left">
                {/* Spotlights */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
                
                {/* Dynamic glass header */}
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    <div className="px-2.5 py-1 bg-rose-950/60 text-rose-300 font-mono text-[9px] font-black tracking-widest rounded-md border border-rose-900/55 uppercase">
                      LIVE DEMAND METRICS
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono text-emerald-400 font-black tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    84.2% LOCKED IN
                  </span>
                </div>

                {/* Progress bar info & Founding Metrics */}
                <div className="space-y-4">
                  
                  {/* Reservation Count Stats */}
                  <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest block font-extrabold">FOUNDING PILOT COHORT</span>
                      <p className="text-xl font-black text-white tracking-tight">842 / 1,000 Reserved</p>
                      <p className="text-[11px] text-slate-200 font-medium">Slots reserved across Canada in last 30 days</p>
                    </div>
                    {/* Visual Radial Glow meter */}
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500/40 shadow-inner">
                      <span className="text-xs font-mono font-black text-white">84%</span>
                      <div className="absolute inset-0 rounded-full border-2 border-t-rose-500 border-r-rose-500 border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '4s' }} />
                    </div>
                  </div>

                  {/* Benefit Items */}
                  <div className="space-y-3.5">
                    
                    <span className="text-[9.5px] font-mono font-black text-indigo-300 uppercase tracking-widest block pt-1">
                      EXCLUSIVE BATCH 1 FOUNDER BENEFITS:
                    </span>

                    {/* Benefit 1 */}
                    <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="p-1.5 bg-indigo-950/80 text-indigo-400 rounded-lg shrink-0 border border-indigo-900/45">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-black text-white block">🎁 Lifetime Subscription Waiver Included</span>
                        <span className="text-[11px] text-white font-medium block leading-relaxed mt-0.5">
                          Lifetime subscription waiver included with reservation (waiving the standard $12 CAD/month active cloud logs subscription completely).
                        </span>
                      </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="p-1.5 bg-rose-950/80 text-rose-400 rounded-lg shrink-0 border border-rose-900/45">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-black text-white block">🛡️ Free 3-Year Extended Canadian Warranty</span>
                        <span className="text-[11px] text-white font-medium block leading-relaxed mt-0.5">
                          Covers extreme temperature operations (+85°C down to harsh -35°C Canadian winters). Ultimate durability warranty.
                        </span>
                      </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="p-1.5 bg-emerald-950/80 text-emerald-400 rounded-lg shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-black text-white block">👥 VIP Co-Design & Firmware Beta Access</span>
                        <span className="text-[11px] text-white font-medium block leading-relaxed mt-0.5">
                          Join our core feedback group. Directly shape the Astrateq software features roadmap and firmware rollout updates.
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* INTERACTIVE OBD2 DIAGNOSTICS & VEHICLE COMPATIBILITY SECTIONS */}
        <div id="diagnostics-suite" className="space-y-4">
          <DigitalOBDScanner />
          <CompatibilityChecker 
            onCheckSuccess={(vehicle) => {
              if (typeof window !== 'undefined') {
                console.log(`Verified compatibility for ${vehicle}`);
              }
            }} 
            onScrollToSection={(sectionId) => {
              handleScrollToSection(sectionId);
            }}
          />
        </div>

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
        <section id="funnel-trust-strip" className="py-20 md:py-24 border-2 border-slate-700/50 flex flex-col justify-center min-h-[42vh] bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 text-white rounded-[3.5rem] my-12 relative overflow-hidden px-8 sm:px-12 shadow-2xl shadow-slate-950/50">
          
          {/* Futuristic ambient lights */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          {/* Tech Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
          
          <div className="space-y-12 text-center max-w-6xl mx-auto relative z-10 animate-fade-in">
            
            {/* Main Statement */}
            <div className="space-y-4">
              <div className="inline-flex justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[11px] sm:text-[12px] uppercase tracking-widest font-mono text-indigo-300 font-extrabold shadow-lg shadow-indigo-500/10 backdrop-blur-md select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  strict reservation framework
                </span>
              </div>
              <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 max-w-3xl mx-auto pb-1">
                Transparent pre-launch validation
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-medium leading-relaxed">
                Unlock early access to direct cockpit co-design and parameter validation with absolute security guarantees.
              </p>
            </div>

            {/* Glowing line divider */}
            <div className="relative w-full max-w-3xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent my-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
            </div>

            {/* Micro-trust bullets row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              
              {/* Card 1 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-950/75 backdrop-blur-md border-2 border-blue-500/40 rounded-2xl p-6.5 hover:border-blue-400 hover:bg-slate-950/90 hover:shadow-2xl hover:shadow-blue-500/[0.15] hover:-translate-y-2 transition-all duration-300 min-h-[230px] relative overflow-hidden shadow-2xl shadow-black">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.04] group-hover:bg-blue-500/[0.08] transition-all duration-300 rounded-full blur-xl pointer-events-none" />
                
                <div className="absolute top-3 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-500/40 px-2.5 py-0.5 rounded-md">
                    100% SECURED
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 w-full mt-4">
                  <div className="p-3.5 bg-blue-500/15 text-blue-300 rounded-xl border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="block text-[15px] sm:text-[15.5px] font-black text-white leading-tight tracking-tight">Fully refundable reservation</span>
                    <span className="block text-[12px] text-slate-300 leading-relaxed font-semibold group-hover:text-slate-100 transition-colors">Get your full deposit back instantly at any time</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,1)] transition-all duration-300 mt-4" />
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-950/75 backdrop-blur-md border-2 border-violet-500/40 rounded-2xl p-6.5 hover:border-violet-400 hover:bg-slate-950/90 hover:shadow-2xl hover:shadow-violet-500/[0.15] hover:-translate-y-2 transition-all duration-300 min-h-[230px] relative overflow-hidden shadow-2xl shadow-black">
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/[0.04] group-hover:bg-violet-500/[0.08] transition-all duration-300 rounded-full blur-xl pointer-events-none" />
                
                <div className="absolute top-3 right-4 pointer-events-none flex items-center gap-1.5 bg-violet-500/20 border border-violet-500/40 px-2.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-violet-300">
                    COHORT #1
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 w-full mt-4">
                  <div className="p-3.5 bg-violet-500/15 text-violet-300 rounded-xl border border-violet-500/30 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="block text-[15px] sm:text-[15.5px] font-black text-white leading-tight tracking-tight">Limited validation cohort</span>
                    <span className="block text-[12px] text-slate-300 leading-relaxed font-semibold group-hover:text-slate-100 transition-colors">Accepting early validation subscribers only</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-violet-500/50 group-hover:bg-violet-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,1)] transition-all duration-300 mt-4" />
              </div>

              {/* Card 3 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-950/75 backdrop-blur-md border-2 border-rose-500/40 rounded-2xl p-6.5 hover:border-rose-400 hover:bg-slate-950/90 hover:shadow-2xl hover:shadow-rose-500/[0.15] hover:-translate-y-2 transition-all duration-300 min-h-[230px] relative overflow-hidden shadow-2xl shadow-black">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/[0.04] group-hover:bg-rose-500/[0.08] transition-all duration-300 rounded-full blur-xl pointer-events-none" />
                
                <div className="absolute top-3 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-rose-300 bg-rose-500/20 border border-rose-500/40 px-2.5 py-0.5 rounded-md">
                    CO-DESIGN
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 w-full mt-4">
                  <div className="p-3.5 bg-rose-500/15 text-rose-300 rounded-xl border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all duration-300">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="block text-[15px] sm:text-[15.5px] font-black text-white leading-tight tracking-tight">Early validation access</span>
                    <span className="block text-[12px] text-slate-300 leading-relaxed font-semibold group-hover:text-slate-100 transition-colors">Co-design concepts and hardware direction directly</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-rose-500/50 group-hover:bg-rose-400 group-hover:shadow-[0_0_10px_rgba(244,63,94,1)] transition-all duration-300 mt-4" />
              </div>

              {/* Card 4 */}
              <div className="group flex flex-col items-center justify-between text-center bg-slate-950/75 backdrop-blur-md border-2 border-emerald-500/40 rounded-2xl p-6.5 hover:border-emerald-400 hover:bg-slate-950/90 hover:shadow-2xl hover:shadow-emerald-500/[0.15] hover:-translate-y-2 transition-all duration-300 min-h-[230px] relative overflow-hidden shadow-2xl shadow-black">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.04] group-hover:bg-emerald-500/[0.08] transition-all duration-300 rounded-full blur-xl pointer-events-none" />
                
                <div className="absolute top-3 right-4 pointer-events-none">
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-md">
                    OBLIGATION FREE
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4 w-full mt-4">
                  <div className="p-3.5 bg-emerald-500/15 text-emerald-300 rounded-xl border border-emerald-500/25 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
                    <EyeOff className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="block text-[15px] sm:text-[15.5px] font-black text-white leading-tight tracking-tight">No production commitment</span>
                    <span className="block text-[12px] text-slate-300 leading-relaxed font-semibold group-hover:text-slate-100 transition-colors">Transparent pre-manufacturing driver assessment</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-300 mt-4" />
              </div>
            </div>

            {/* High-conversion trust reassurance footer */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-slate-450 font-mono border-t border-slate-700/40 mt-6">
              <span className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                Funds secure in Stripe-compliant partner trust accounts
              </span>
              <span className="hidden md:inline text-slate-800">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                🔒 256-Bit SSL Secured Encryption Protocols
              </span>
              <span className="hidden md:inline text-slate-800">•</span>
              <span className="flex items-center gap-1 text-indigo-400 font-bold">
                Direct 1-click refund action enabled inside control panel
              </span>
            </div>

          </div>

        </section>


        {/* 6. FINAL CONVERSION SECTION (DECISION ZONE) */}
        <section id="reserve" className="py-28 md:py-32 border-b border-slate-200/60 flex flex-col justify-center min-h-[90vh] relative overflow-hidden bg-slate-50/75">
          
          {/* Majestic light-theme technical pattern overlay */}
          <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          {/* Ambient light/glow sources to illuminate the design grid and make cards pop */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-indigo-300/20 to-cyan-200/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-violet-200/20 to-purple-300/10 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '1.5s' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-14 relative z-10">
            
            {/* Header copy precisely mapped */}
            <div className="space-y-5 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase font-black text-indigo-700 bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse inline-block shrink-0" />
                🛡️ 100% SECURE PRE-ORDER • CANCEL & REFUND INSTANTLY ANYTIME
              </span>
              {/* Dynamic Marketing Hook Title */}
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-slate-950">
                Forge your sovereign shield. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">Secure early hardware priority.</span>
              </h2>
              {/* High-Converting Subtext */}
              <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Configure your passive offline intelligence suite below to secure your slots. Help guide final production decisions and lock in pilot-run savings before Canadian regional manufacturing allocations close.
              </p>
            </div>

            {/* 1. THREE PREMIUM INTERACTIVE ARCHITECTURAL TIERS */}
            <div ref={parallaxContainerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4 max-w-6xl mx-auto">
              
              {/* TIER 1: SOLO */}
              <div ref={soloRef} className="relative flex flex-col min-h-full transition-transform duration-100 ease-out">
                {/* Backlight Glow Aura */}
                {selectedPackage === 'solo' && (
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-[2.3rem] blur-2xl opacity-100 animate-pulse pointer-events-none z-0" style={{ animationDuration: '3.5s' }} />
                )}
                <div 
                  onClick={() => { setSelectedPackage('solo'); setValidationError(null); }}
                  className={`group cursor-pointer rounded-[2.2rem] border-2 text-left relative flex flex-col justify-between overflow-hidden bg-white flex-1 z-10 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.985] ${
                    selectedPackage === 'solo' 
                      ? 'border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.45)] ring-4 ring-indigo-500/15' 
                      : 'border-slate-200/80 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/[0.05]'
                  }`}
                >
                  {/* Header Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={driveguardSoloImg} 
                      alt="DriveGuard Solo Hardware"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                    />
                    {/* Subtle Elegant Glassmorphic Overlay for Text Contrast */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pt-8 pb-3 px-4 flex items-end justify-between">
                      <div>
                        <span className="text-[9.5px] font-mono text-slate-200 uppercase tracking-wider font-bold block leading-none">RESERVATION DEPOSIT</span>
                        <span className="text-2xl font-black text-white tracking-tight leading-none mt-1 block">$49<span className="text-xs font-bold text-slate-200 ml-0.5">CAD</span></span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8.5px] font-mono text-emerald-400 font-black uppercase tracking-widest block bg-emerald-950/75 px-2 py-0.5 rounded border border-emerald-500/30">SAVE $49 CAD</span>
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-slate-200 text-[8.5px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-700/60 shadow-lg">
                      ENTRY PILOT EDITION
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6.5 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-slate-500">Starter Configuration</span>
                        <span className="text-[10px] text-slate-400 font-mono font-bold">1 Unit Setup</span>
                      </div>
                      <h3 className="text-[17px] font-black text-slate-950 tracking-tight leading-snug flex items-center gap-1.5">
                        <Shield className="w-5 h-5 text-indigo-650 shrink-0" />
                        DriveGuard Solo™
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Designed for single commuter vehicles. Equips your car with robust voice diagnostics and discrete crash-recording capabilities.
                      </p>
                    </div>

                    {/* High Quality Specification Checklist */}
                    <div className="border-t border-slate-100 pt-5 space-y-2.5">
                      <span className="text-[9.5px] font-mono font-black text-indigo-600 uppercase tracking-widest block mb-1">HARDWARE SPECS & PERKS:</span>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>Single Premium 4K Starvis HDR Camera</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>Passive OBD-II CAN-Bus diagnostics scanner</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>On-Device 64GB Encrypted Secure Enclave</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>Extreme Canadian Environment Armored Chassis</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-indigo-600 font-bold bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100/60 mt-1">
                        <Gift className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 animate-pulse" />
                        <span>Lifetime subscription waiver included with reservation (waives standard $12 CAD/month fee)</span>
                      </div>
                    </div>

                    {/* Selector Anchor */}
                    <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">POST-LAUNCH BALANCE</span>
                        <span className="text-slate-950 font-extrabold text-sm">$250 CAD <span className="text-[10px] text-slate-400 line-through ml-1.5 font-normal">$299 Regular</span></span>
                      </div>
                      <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedPackage === 'solo' ? 'border-indigo-600 bg-indigo-600' : 'border-slate-350'
                      }`}>
                        {selectedPackage === 'solo' && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* TIER 2: FAMILY (FEATURED) */}
              <div ref={familyRef} className="relative flex flex-col min-h-full transition-transform duration-100 ease-out">
                {/* Backlight Glow Aura */}
                {selectedPackage === 'family' && (
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 via-rose-500 via-violet-650 to-indigo-600 rounded-[2.3rem] blur-2xl opacity-100 animate-pulse pointer-events-none z-0" style={{ animationDuration: '3s' }} />
                )}
                <div 
                  onClick={() => { setSelectedPackage('family'); setValidationError(null); }}
                  className={`group cursor-pointer rounded-[2.2rem] border-2 text-left relative flex flex-col justify-between overflow-hidden bg-white flex-1 z-10 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.985] ${
                    selectedPackage === 'family' 
                      ? 'border-indigo-500 shadow-[0_0_45px_rgba(244,63,94,0.4)] ring-4 ring-indigo-500/15' 
                      : 'border-indigo-205 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/[0.05]'
                  }`}
                >
                  {/* Glow Ring Effect */}
                  <div className="absolute inset-0 border border-indigo-500/20 rounded-[2.2rem] pointer-events-none z-10" />
                  
                  {/* Featured Ribbon Badge */}
                  <div className="absolute top-0 right-0 z-20 bg-gradient-to-l from-indigo-600 via-rose-500 to-indigo-600 text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-[1.25rem] shadow-md border-b border-l border-white/5">
                    ⭐ RECOMMENDED TIERS & BEST VALUE
                  </div>

                  {/* Header Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-indigo-100">
                    <img 
                      src={driveguardFamilyImg} 
                      alt="DriveGuard Family Hardware Bundle"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                    />
                    {/* Subtle Elegant Glassmorphic Overlay for Text Contrast */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pt-8 pb-3 px-4 flex items-end justify-between">
                      <div>
                        <span className="text-[9.5px] font-mono text-slate-200 uppercase tracking-wider font-bold block leading-none">RESERVATION DEPOSIT</span>
                        <span className="text-2xl font-black text-white tracking-tight leading-none mt-1 block">$99<span className="text-xs font-bold text-slate-200 ml-0.5">CAD</span></span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8.5px] font-mono text-emerald-400 font-black uppercase tracking-widest block bg-emerald-950/75 px-2 py-0.5 rounded border border-emerald-500/30">SAVE $99 CAD</span>
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 bg-indigo-900/90 backdrop-blur-sm text-indigo-200 text-[8.5px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-indigo-700/60 shadow-lg">
                      CO-PILOT MULTI-VEHICLE DUO
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6.5 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-indigo-600">Dual Safety Ecosystem</span>
                        <span className="text-[10px] text-indigo-600 font-mono font-bold">2 Unit Sync</span>
                      </div>
                      <h3 className="text-[17px] font-black text-slate-950 tracking-tight leading-snug flex items-center gap-1.5">
                        <ShieldCheck className="w-5.5 h-5.5 text-indigo-655 shrink-0" />
                        Family Safety Hub™
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Slightly optimized for teenage, senior, or dual drivers in Canada. Keeps multiple vehicles synced inside a single unified dashboard.
                      </p>
                    </div>

                    {/* Specs & Honey Effect Callouts */}
                    <div className="border-t border-indigo-505 pt-5 space-y-2.5 bg-indigo-50/20 -mx-6.5 px-6.5 py-4 pb-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9.5px] font-mono font-black text-rose-500 uppercase tracking-widest block leading-none">🔥 EXCLUSIVE LIFETIME PERK:</span>
                        <span className="text-[8px] bg-red-100 text-red-650 px-1.5 rounded font-mono font-black tracking-wider leading-none uppercase py-0.5 font-bold">VALUED AT $400+</span>
                      </div>
                      <p className="text-[11px] font-black text-slate-905 leading-snug">
                        🎁 Lifetime subscription waiver included with reservation (waiving standard $12 CAD/month companion cloud active logs subscription completely).
                      </p>
                      
                      <span className="text-[9.5px] font-mono font-black text-indigo-600 uppercase tracking-widest block pt-2">HARDWARE SPECS INCLUDED:</span>
                      <div className="flex items-start gap-2 text-xs text-slate-800 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>2x Dual 4K Front/Rear Camera Systems</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-800 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>2x CAN-Bus OBD-II Interface Modules</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-800 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Automated parent/teen driver companion app syncer</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-800 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Bonus complimentary 3-Year Extended Warranty</span>
                      </div>
                    </div>

                    {/* Selector Anchor */}
                    <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-indigo-650 uppercase tracking-wider block">POST-LAUNCH BALANCE</span>
                        <span className="text-indigo-600 font-black text-sm">$500 CAD <span className="text-[10px] text-slate-400 line-through ml-1.5 font-normal">$599 Regular</span></span>
                      </div>
                      <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedPackage === 'family' ? 'border-indigo-600 bg-indigo-600' : 'border-slate-350'
                      }`}>
                        {selectedPackage === 'family' && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* TIER 3: GUARDIAN */}
              <div ref={guardianRef} className="relative flex flex-col min-h-full transition-transform duration-100 ease-out">
                {/* Backlight Glow Aura */}
                {selectedPackage === 'guardian' && (
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-650 via-indigo-650 to-cyan-500 rounded-[2.3rem] blur-2xl opacity-100 animate-pulse pointer-events-none z-0" style={{ animationDuration: '3.5s' }} />
                )}
                <div 
                  onClick={() => { setSelectedPackage('guardian'); setValidationError(null); }}
                  className={`group cursor-pointer rounded-[2.2rem] border-2 text-left relative flex flex-col justify-between overflow-hidden bg-white flex-1 z-10 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.985] ${
                    selectedPackage === 'guardian' 
                      ? 'border-indigo-500 shadow-[0_0_40px_rgba(139,92,246,0.45)] ring-4 ring-indigo-500/15' 
                      : 'border-slate-200/80 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/[0.05]'
                  }`}
                >
                  {/* Header Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img 
                      src={guardianProImg} 
                      alt="Guardian Pro System Suite"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                    />
                    {/* Subtle Elegant Glassmorphic Overlay for Text Contrast */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pt-8 pb-3 px-4 flex items-end justify-between">
                      <div>
                        <span className="text-[9.5px] font-mono text-slate-200 uppercase tracking-wider font-bold block leading-none">RESERVATION DEPOSIT</span>
                        <span className="text-2xl font-black text-white tracking-tight leading-none mt-1 block">$149<span className="text-xs font-bold text-slate-200 ml-0.5">CAD</span></span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8.5px] font-mono text-emerald-400 font-black uppercase tracking-widest block bg-emerald-950/75 px-2 py-0.5 rounded border border-emerald-500/30">SAVE $149 CAD</span>
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-slate-200 text-[8.5px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-slate-700/60 shadow-lg">
                      ELITE FLEET COMMANDER
                    </div>
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6.5 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-slate-500">Elite Flagship Tier</span>
                        <span className="text-[10px] text-slate-400 font-mono font-bold">3 Unit Ecosystem</span>
                      </div>
                      <h3 className="text-[17px] font-black text-slate-950 tracking-tight leading-snug flex items-center gap-1.5">
                        <Cpu className="w-5 h-5 text-indigo-650 shrink-0" />
                        Guardian Pro Bundle™
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        Our ultimate multi-car and professional package. Configured with priority concierge support and early access testing blocks.
                      </p>
                    </div>

                    {/* High Quality Specification Checklist */}
                    <div className="border-t border-slate-100 pt-5 space-y-2.5">
                      <span className="text-[9.5px] font-mono font-black text-indigo-600 uppercase tracking-widest block mb-1">HARDWARE SPECS & PERKS:</span>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>3x Flagship 4K HDR Multi-angle Camera Units</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>3x High-frequency OBD-II diagnostic active nodes</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>Dedicated concierge installation tech setup assistance</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-4 h-4 text-indigo-650 shrink-0 mt-0.5" />
                        <span>Direct VIP shaping access back to Astrateq engineering team</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-indigo-600 font-bold bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100/60 mt-1">
                        <Gift className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 animate-pulse" />
                        <span>Lifetime subscription waiver included with reservation (waives standard $12 CAD/month fee)</span>
                      </div>
                    </div>

                    {/* Selector Anchor */}
                    <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">POST-LAUNCH BALANCE</span>
                        <span className="text-slate-950 font-extrabold text-sm">$750 CAD <span className="text-[10px] text-slate-400 line-through ml-1.5 font-normal">$899 Regular</span></span>
                      </div>
                      <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedPackage === 'guardian' ? 'border-indigo-600 bg-indigo-600' : 'border-slate-350'
                      }`}>
                        {selectedPackage === 'guardian' && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* DYNAMIC SECURE SUMMARY PANEL & INPUT PORTAL */}
            <div className="relative max-w-xl mx-auto mt-12 z-10">
              {/* Soft Ambient Core Portal Backlight */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-600 rounded-[2.7rem] blur-xl opacity-35 pointer-events-none z-0 animate-pulse" />
              
              <div className="bg-white border-2 border-slate-200/90 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.12)] relative overflow-hidden text-left z-10">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-rose-500 to-indigo-600" />
              
              <div className="space-y-6">
                
                {/* Active Selection Summary */}
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-slate-400 block font-bold tracking-widest">ACTIVE CONFIGURATION:</span>
                    <h4 className="text-xs sm:text-sm font-black text-slate-950 tracking-tight uppercase">
                      {selectedPackage === 'solo' 
                        ? 'DriveGuard Solo™' 
                        : selectedPackage === 'family' 
                          ? 'Family Safety Hub™' 
                          : 'Guardian Pro Bundle™'
                      }
                    </h4>
                    <span className="text-[11px] font-bold text-indigo-600 flex items-center gap-1">
                      <span>🎁</span> Lifetime subscription waiver included with reservation
                    </span>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-[9px] font-mono text-indigo-500 block font-bold tracking-widest">REFUNDABLE DEPOSIT:</span>
                    <span className="text-base font-black text-indigo-600 font-mono tracking-tight block">
                      ${selectedPackage === 'solo' ? '49.00' : selectedPackage === 'family' ? '99.00' : '149.00'} CAD
                    </span>
                  </div>
                </div>

                {/* Email Sign-up form */}
                <form onSubmit={handleReserveFormSubmit} className="space-y-5">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-slate-400">
                        Step 2: Enter Contact Email Address
                      </label>
                      <span className="text-[10px] text-emerald-600 font-bold font-mono">100% Fully Refundable Deposit</span>
                    </div>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => { setEmailInput(e.target.value); setValidationError(null); }}
                      placeholder="your@email.com"
                      className="bg-slate-50/85 border border-slate-200 hover:border-slate-350 focus:border-indigo-600 rounded-xl px-4 py-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-semibold"
                    />
                  </div>

                  {/* Simulated Purchase & Market Validation Campaign Disclaimer */}
                  <div className="p-4 bg-amber-50/80 border border-amber-200 text-amber-900 rounded-xl text-[11px] leading-relaxed text-left space-y-1.5 shadow-sm font-semibold">
                    <div className="flex items-center gap-1.5 font-bold text-amber-955 font-mono text-[9px] uppercase tracking-wider">
                      <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 font-bold" />
                      <span>⚠️ PRE-LAUNCH SIMULATED PURCHASE PROTOCOL</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-semibold">
                      Astrateq Gadgets is in a public concept validation and demand-testing phase. 
                      Your credit card is <strong>not</strong> being charged today. This reservation, secured via email, maps your position in our Canadian pilot cohort and locks in early-access pricing with no final financial liability. Thank you for validating interest with us!
                    </p>
                  </div>

                  {validationError && (
                    <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-800 text-xs font-bold rounded-xl flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Primary CTA (Big Solid Button) */}
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-gradient-to-r from-indigo-650 to-indigo-700 hover:from-slate-900 hover:to-slate-900 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center uppercase tracking-wider"
                  >
                    Join Founding Cohort Now
                  </button>

                </form>

                {/* Secondary CTA */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <button 
                    type="button"
                    onClick={handleGetUpdatesOnly}
                    className="text-slate-400 hover:text-indigo-600 font-bold transition-all text-xs underline cursor-pointer font-mono"
                  >
                    Build Progress &amp; Updates
                  </button>
                  
                  {/* Final microcopy */}
                  <span className="text-slate-500 font-medium tracking-tight flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Limited cohort access — Canada only.
                  </span>
                </div>

                {conceptSubscribed && (
                  <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Email saved! We will ping you strictly with core milestone progress reports.</span>
                  </div>
                )}

              </div>
            </div>
          </div>

          </div>

        </section>


        {/* 7. FOOTER (MINIMAL TRUST FOOTER - Height: 20–30vh) */}
        <footer id="funnel-footer" className="py-16 border-t border-slate-800 min-h-[30vh] flex flex-col justify-between text-slate-300 text-xs mt-16 bg-slate-900 px-6 sm:px-12 rounded-[2.5rem] relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start text-left relative z-10">
            
            {/* Col 1 */}
            <div className="space-y-4 max-w-sm">
              <span className="font-black text-slate-100 block text-xs uppercase tracking-widest flex items-center gap-2">
                🍁 Astrateq Gadgets
              </span>
              <p className="text-[11.5px] text-slate-300 font-medium leading-relaxed">
                An pioneering automotive technology brand dedicated to elevating vehicle diagnostics and cognitive driving safety indicator displays. Conceptualized in Toronto, Ontario, Canada.
              </p>
              <div className="pt-2.5 text-[11px] space-y-1 text-slate-400 border-t border-slate-800">
                <span className="block font-bold text-slate-200">Pre-Order Inquiries:</span>
                <span className="block text-slate-400 leading-relaxed font-semibold">Priority cohort support channels are provided directly inside early secure validation packages.</span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4 max-w-sm">
              <span className="font-black text-slate-100 block text-xs uppercase tracking-widest">
                Pre-Launch Validation
              </span>
              <p className="text-[11.5px] text-slate-300 font-medium leading-relaxed">
                We are in a public tuning phase to calibrate safety sensors and alert thresholds (such as driver fatigue limits or micro-steering drift velocities). Early cohort deposits are held safely in escrow and are instantly refundable in one-click.
              </p>
              <div className="flex gap-2 flex-wrap pt-1.5">
                <span className="bg-slate-800 border border-slate-705 px-2.5 py-1 rounded-lg text-[9.5px] font-bold text-slate-300">🛡️ SECURE COHORT</span>
                <span className="bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-lg text-[9.5px] font-bold text-emerald-300">✓ INSTANT REFUNDS</span>
              </div>
            </div>

            {/* Col 3: Explore Navigation */}
            <div className="space-y-4">
              <span className="font-black text-slate-100 block text-xs uppercase tracking-widest">
                Explore Platform
              </span>
              <div className="flex flex-col gap-2.5 text-[11.5px]">
                <button 
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-indigo-400 transition-colors font-bold text-left outline-none cursor-pointer"
                >
                  See How It Works
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('concepts');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-indigo-400 transition-colors font-bold text-left outline-none cursor-pointer"
                >
                  Software &amp; HUD Concepts
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('compatibility');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-indigo-400 transition-colors font-bold text-left outline-none cursor-pointer"
                >
                  Verify Eligibility (30 sec)
                </button>
                <button 
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-extrabold text-left outline-none cursor-pointer flex items-center gap-1.5"
                >
                  <span>🚀</span> Learn Our Story (About Us)
                </button>
              </div>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <span className="font-black text-slate-100 block text-xs uppercase tracking-widest">
                Validations &amp; Legal
              </span>
              <div className="flex flex-col gap-2.5 text-[11.5px] text-slate-300">
                <button 
                  onClick={() => setActiveLegalModal('privacy')} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-400"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  Privacy &amp; Security Overview
                </button>
                <button 
                  onClick={() => setActiveLegalModal('tos')} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-400"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  Terms of Service (Cohort Agreement)
                </button>
                <button 
                  onClick={() => setActiveLegalModal('refund')} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-400"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  100% Refund Guarantee Policy
                </button>
                <button 
                  onClick={() => setActiveLegalModal('dmca')} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-400"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  DMCA, Trademark &amp; IP Notices
                </button>
                <button 
                  onClick={() => setActiveLegalModal('cookie')} 
                  className="hover:text-indigo-400 text-slate-300 transition-colors font-bold flex items-center gap-2 text-left outline-none cursor-pointer focus:text-indigo-400"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  Cookie &amp; Local Storage Policy
                </button>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[13px] font-semibold text-slate-200 font-sans">&copy; {new Date().getFullYear()} Astrateq Gadgets Inc. All rights reserved.</span>
            </div>
            
            {/* Highly polished, responsive social platform access group */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/astrateq-gadgets" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/astrateq-gadgets" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-yellow-500 hover:hover:to-pink-600 hover:via-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-250 shadow-sm hover:shadow hover:-translate-y-0.5" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="https://twitter.com/astrateq-gadgets" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-950 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5" aria-label="Twitter">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Reddit */}
              <a href="https://reddit.com/r/astrateq-gadgets" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5" aria-label="Reddit">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.24-1.72l1.42-4.5 3.89.87c.04 1.11.95 2 2.05 2 1.14 0 2.07-.93 2.07-2.07s-.93-2.07-2.07-2.07c-1.03 0-1.88.75-2.03 1.73l-4.22-.95c-.23-.05-.46.08-.53.3l-1.61 5.1c-2.46.04-4.73.68-6.4 1.7l-.02-.02c-.56-.73-1.44-1.19-2.43-1.19-1.65 0-3 1.35-3 3 0 1.12.61 2.1 1.53 2.62-.03.25-.05.51-.05.78 0 4.14 4.7 7.5 10.5 7.5s10.5-3.36 10.5-7.5c0-.26-.02-.52-.05-.77.9-.53 1.5-1.5 1.5-2.61zm-18 1.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm11 4.5c-1.84 1.16-4.52 1.37-5 1.37s-3.16-.21-5-1.37c-.15-.1-.2-.3-.1-.45.1-.15.3-.2.45-.1 1.54.91 3.82 1.12 4.65 1.12.82 0 3.1-.2 4.65-1.12.15-.1.35-.05.45.1.1.15.05.35-.1.45zm-.5-2.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </a>
            </div>
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
