import React, { useState } from 'react';
import { Heart, Send, Copyright, Instagram, Twitter, MessageSquare, X, Shield, Lock, Scale, AlertTriangle, FileText, Sparkles, Linkedin } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

type LegalSection = 'privacy' | 'pipeda' | 'terms' | 'cookies' | 'dmca' | 'safety';

export default function Footer({ onScrollToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalSection | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xeedvalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          type: 'Technical Announcements Form'
        })
      });
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const paymentMethods = [
    { name: 'Visa', logo: (
      <div className="flex items-center justify-center font-sans tracking-tight font-black text-xs sm:text-sm text-[#1A1F71] bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm leading-none select-none">
        VISA
      </div>
    )},
    { name: 'Mastercard', logo: (
      <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm select-none">
        <div className="flex -space-x-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] opacity-90" />
        </div>
        <span className="font-sans text-[10px] sm:text-xs font-black text-slate-800 leading-none lowercase tracking-tight">mastercard</span>
      </div>
    )},
    { name: 'Amex', logo: (
      <div className="flex items-center justify-center font-sans font-black text-xs sm:text-sm text-[#0070D2] bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm leading-none select-none uppercase tracking-tight">
        Amex
      </div>
    )},
    { name: 'Interac', logo: (
      <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm select-none leading-none">
        <span className="text-sm sm:text-base text-red-600 font-extrabold italic select-none">I</span>
        <span className="font-sans text-xs sm:text-sm font-black tracking-tight text-[#0060A9] uppercase">Interac</span>
      </div>
    )},
    { name: 'Stripe', logo: (
      <div className="flex items-center justify-center font-sans font-black text-xs sm:text-sm text-[#635BFF] bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm leading-none select-none lowercase">
        stripe
      </div>
    )},
    { name: 'Apple Pay', logo: (
      <div className="flex items-center justify-center font-sans font-bold text-xs sm:text-sm text-white bg-black px-3.5 py-1.5 rounded-lg border border-white/20 shadow-md leading-none select-none">
         Pay
      </div>
    )},
    { name: 'Google Pay', logo: (
      <div className="flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-lg border border-transparent shadow-sm select-none leading-none">
        <span className="text-blue-600 font-black text-xs sm:text-sm">G</span>
        <span className="text-slate-900 font-extrabold text-xs tracking-tight">Pay</span>
      </div>
    )}
  ];

  const legalContent: Record<LegalSection, { title: string; icon: React.ReactNode; text: string[] }> = {
    privacy: {
      title: 'ASTRATEQ Privacy Shield Directive',
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      text: [
        'Your digital safety and visual privacy form the fundamental architecture of Astrateq Gadgets Inc. Unlike commercial cloud-based dashcams that stream raw driver video archives to external server farms, all Astrateq Gadgets devices handle environmental scanning entirely locally at the physical edge.',
        'No Automated Video Uploads: Real-time highway sweeps, lane orientation, and cabin fatigue tracking are processed inside your device’s neural network. Feeds are overwritten instantly and never persisted on any network host.',
        'Data Control sovereignty: Companion app coordinates, system diagnostics, and trip statistics are encrypted using high-grade local protocols (AES-256) and remain behind your personal device credentials.'
      ]
    },
    pipeda: {
      title: 'PIPEDA & Canadian Privacy Statutes',
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      text: [
        'We strictly process all subscriber identifiers in full alignment with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada, alongside provincial analogues (such as the BC PIPA and Ontario’s FIPPA guidelines).',
        'Consent Models: Customer email logs and reservation coordinates are stored securely on encrypted database clusters exclusively for Summer 2026 scheduling. We do not engage in commercial data aggregation or high-frequency marketing brokers.',
        'Data Sovereignty Rights: Under PIPEDA, Canadian participants maintain absolute rights to inspect, update, or completely purge their prelaunch slot files from our servers. Contact privacy@astrateq.ca for automated sequence deletion.'
      ]
    },
    terms: {
      title: 'Terms of Prelaunch Reservation',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      text: [
        'Queue Reservation Deposit: Participants make a fully-refundable prelaunch reservation deposit ($49 to $149 CAD, depending on selected tier) today to lock in high pre-order volume discounts and ensure early shipment allocation in Summer 2026.',
        'Cancellation & Immediate Refund: You retain the absolute right to cancel your reservation queue sequence at any point before your specific physical hardware unit enters our Toronto packaging conveyor line. Refund transactions are instantly debited back to your funding card via Stripe SSL secure processes.',
        'The Hormozi Double-Risk Guarantee: Following delivery, you receive an unconditional 30-day trial period on Canadian roadways. If Astrateq Gadgets does not meet your safety standards, you can return the device for a 100% refund of the purchase price and keep the deluxe client tool installation kit ($40-$120 value) completely free.'
      ]
    },
    cookies: {
      title: 'Cookie Sovereignty Policy',
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      text: [
        'Our prelaunch portal uses strict functional local storage parameters alongside minor analytical cookie sequences to preserve your layout state, countdown timings, and discount preferences.',
        'Zero Advertising Retargeting: Astrateq Gadgets does not use cooperative cross-site commercial trackers. Your navigation across our system remains anonymous.',
        'Manual Modification: You may opt to disable browser cookie tracking at any point. Your local prelaunch countdown and localized reservation parameters can safely be reset by purging persistent site data.'
      ]
    },
    dmca: {
      title: 'IP, Copyright & DMCA Protections',
      icon: <Scale className="w-5 h-5 text-indigo-400" />,
      text: [
        'The entirety of our local machine learning algorithms, vehicle lane-tracking neural architectures, physical obsidian casing designs, and software portal materials are intellectual properties owned by Astrateq Gadgets Inc.',
        'Copyright Protection: In compliance with the Copyright Act of Canada and the DMCA, unauthorized duplication, decompilation of embedded firmware, or replication of computer vision model weights is strictly prohibited.',
        'Designates: Legal inquiries concerning intellectual property, copyright license parameters, or official corporate disclosures should be directed to agent channels at legal@astrateq.co.'
      ]
    },
    safety: {
      title: 'Transport Canada & Road Safety Advisory',
      icon: <AlertTriangle className="w-5 h-5 text-rose-450" />,
      text: [
        'IMPORTANT LEGAL DISCLAIMER FOR CANADIAN MOTORISTS: Astrateq Gadgets safety units (including AI DriveGuard and RoadGuard Pro) are secondary driver advisory units designed to alert operators of upcoming highway obstacles. They do NOT replace active, focused human command of the vehicle.',
        'Provincial Motor Vehicles Statutes: Under laws established across all Canadian provinces (including the BC Motor Vehicle Act and the Highway Traffic Act of Ontario), operators must maintain unimpeded physical control and dedicated viewport attention. Secondary alert tools do not mitigate liability for distracted driving violations.',
        'Hardware Compliance: All on-board sensors operate on minor OBD-II Diagnostic pins in passive read-only protocol. Devices conform strictly to ICES-003 vehicular radio frequency standardizations.'
      ]
    }
  };

  return (
    <footer className="w-full bg-[#070a13] border-t border-slate-900 pt-20 pb-10 relative z-10 text-left selection:bg-indigo-650 selection:text-white overflow-hidden">
      {/* Decorative dark background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-800/60">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => onScrollToSection('hero')}
            >
              <img 
                src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="Astrateq Gadgets Logo" 
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover border border-slate-800 bg-slate-950 p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-sans font-black text-sm text-white tracking-tight leading-none group-hover:text-indigo-300 transition-colors">Astrateq Gadgets</span>
                <span className="text-[9px] text-rose-500 tracking-wider font-extrabold uppercase mt-1">🇨🇦 Canadian Focus</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Delivering high-integrity automotive intelligence hardware locally processed at the edge. Protecting Canadian families with advanced predictive vision safety.
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-450 transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200" aria-label="Threads">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.3 11.5c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zM9 12.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5S9 14.3 9 13.5v-1z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all duration-200" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.18.94 1.13 2.27 1.87 3.73 2.11v4.18c-1.89-.04-3.71-.8-5.06-2.12v8.52c.04 4.09-2.91 7.63-6.99 8.01-4.7 1.01-9.22-2.52-9.22-7.39 0-3.69 2.76-6.88 6.44-7.24 1.25-.13 2.53.11 3.63.74v-4c-1.15-1.11-1.92-2.61-2.15-4.21-.08-1.54-.01-3.09-.01-4.63h4.15l-.01.03z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-550/20 flex items-center justify-center transition-all duration-200" aria-label="Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] filter brightness-110">
              Product Overview
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-100 font-medium">
              <li>
                <button onClick={() => onScrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Shop Device Bundles
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('how-it-works')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  See How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('compatibility')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Verify Eligibility (30 sec)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('digital-scanner')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Interactive OBD Diagnostic Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('trust-guarantees')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Trial Trust Guarantees
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policy links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] filter brightness-110">
              Legal Declarations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-100 font-medium">
              <li>
                <button onClick={() => setActiveLegalTab('privacy')} className="hover:text-white cursor-pointer transition-colors block text-left focus:outline-none">
                  Privacy &amp; Security Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('pipeda')} className="hover:text-white cursor-pointer transition-colors block text-left focus:outline-none">
                  PIPEDA Compliance (Canada)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('terms')} className="hover:text-white cursor-pointer transition-colors block text-left focus:outline-none">
                  Prelaunch Reservation Terms
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('cookies')} className="hover:text-white cursor-pointer transition-colors block text-left focus:outline-none">
                  Cookie Sovereignty Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('dmca')} className="hover:text-white cursor-pointer transition-colors block text-left focus:outline-none">
                  Intellectual Property & DMCA
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('safety')} className="text-rose-450 hover:text-rose-350 cursor-pointer transition-colors block text-left focus:outline-none">
                  ⚠️ Highway Safety Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Right quick subscribe */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#94a3b8] filter brightness-110">
              Technical Announcements
            </h4>
            <div className="space-y-3 font-medium text-xs">
              <p className="text-[10px] sm:text-xs text-slate-150 leading-normal">
                Get notified on firmware revisions, hardware releases, and Canadian pre-launch slots.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-1 bg-slate-900 border border-slate-800 p-1.5 rounded-xl shadow-inner focus-within:border-slate-700 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSubmitted ? "Joined Newsletter!" : "Enter email address"}
                  className="flex-1 bg-transparent px-2.5 py-1.5 text-[10px] text-white placeholder-slate-500 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-[9px] font-bold uppercase cursor-pointer transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "..." : isSubmitted ? "Saved" : "Join"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Secure Canadian Payment Methods Badge Row */}
        <div className="py-8 border-b border-slate-800/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-100">Secure Canadian Checkout Partners</span>
            <span className="text-xs text-slate-200 font-normal">Stripe Merchant Services authorized with industry-leading SSL encryption.</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 max-w-full">
            {paymentMethods.map((pm, idx) => (
              <div key={idx} title={pm.name} className="transition-all hover:scale-105">
                {pm.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Lower row details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-[11px] text-slate-100 font-medium">
            <img 
              src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
              alt="Astrateq Gadgets Bottom Logo" 
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg object-cover border border-slate-804 bg-slate-950 p-1 shadow-md shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Copyright className="w-3.5 h-3.5 text-slate-200" />
                <span>2026 Astrateq Gadgets Inc. All Rights Reserved.</span>
              </div>
              <span className="text-[10px] text-slate-200 font-normal mt-0.5">Empowering safer journeys custom-built for Canadian roads.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-100 font-medium bg-slate-900/65 border border-slate-800 py-1.5 px-3.5 rounded-full shadow-inner">
            <span>Designed for Canadian Road Security with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in beautiful Toronto</span>
          </div>
        </div>

        {/* Component 3: Footer Transparency Notice */}
        <div id="footer-transparency-notice" className="mt-10 pt-8 border-t border-slate-800/40 text-center max-w-4xl mx-auto px-4 select-none">
          <span className="text-[9px] uppercase tracking-[0.15rem] text-rose-500 font-black block mb-2 font-mono">
            Pre-Launch Validation Transparency Framework
          </span>
          <p className="text-white font-normal leading-relaxed text-[11px] max-w-3xl mx-auto">
            <strong>Astrateq Gadgets</strong> is currently operating in an active pre-launch validation phase. By selecting a package and submitting this reservation form, you are securing a priority reservation position for our upcoming product release. No actual financial transaction will occur and your payment method will not be charged. This checkout experience utilizes Stripe's secure test environment to simulate a $49 CAD Founding Member reservation for market validation and demand analysis purposes. Your financial information is not processed for real currency exchange, stored for billing purposes, or shared with third parties. Upon official product launch, priority reservation holders will receive exclusive early-access opportunities and will be invited to complete a production order if they choose to proceed.
          </p>
          <div className="text-[10px] text-neutral-600 font-semibold mt-3 flex items-center justify-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Active Pre-Launch Compliance Mapped Successfully • Canada Transport Transparency Guidelines Accorded
          </div>
        </div>

      </div>

      {/* Interactive Modal for Legal documents */}
      {activeLegalTab && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#070a13] border border-slate-800 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-scale-up text-left">
            <div className="bg-slate-900 px-6 py-4.5 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                {legalContent[activeLegalTab].icon}
                <span className="font-sans font-extrabold text-sm text-white tracking-tight">
                  {legalContent[activeLegalTab].title}
                </span>
              </div>
              <button
                onClick={() => setActiveLegalTab(null)}
                className="text-slate-400 hover:text-white hover:bg-slate-805 bg-slate-900 border border-slate-800 font-extrabold p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed font-normal">
              {legalContent[activeLegalTab].text.map((paragraph, idx) => (
                <p key={idx} className="bg-slate-900/40 p-4 border border-slate-800/80 rounded-xl">
                  {paragraph}
                </p>
              ))}
              
              <div className="border-t border-slate-800 pt-4 mt-6 flex justify-between items-center text-[10px] text-slate-400 font-bold shrink-0">
                <span>Authorized document seq ID: AST-{activeLegalTab.toUpperCase()}-2026</span>
                <span>Active Region: Canada & Provincial Authorities</span>
              </div>
            </div>
            <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setActiveLegalTab(null)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs tracking-wide transition-colors cursor-pointer"
              >
                Acknowledge Directive
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
