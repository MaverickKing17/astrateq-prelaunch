import React, { useState } from 'react';
import { Heart, Send, Copyright, Instagram, Twitter, MessageSquare, X, Shield, Lock, Scale, AlertTriangle, FileText, Sparkles } from 'lucide-react';

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
      <div className="flex items-center justify-center font-sans tracking-tight font-black text-[9px] text-[#1A1F71] bg-white px-2 py-1 rounded border border-slate-205 shadow-xs leading-none select-none">
        VISA
      </div>
    )},
    { name: 'Mastercard', logo: (
      <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-205 shadow-xs select-none">
        <div className="flex -space-x-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] opacity-90" />
        </div>
        <span className="font-sans text-[7px] font-black text-slate-700 leading-none lowercase tracking-tight">mastercard</span>
      </div>
    )},
    { name: 'Amex', logo: (
      <div className="flex items-center justify-center font-sans font-extrabold text-[8px] text-[#0070D2] bg-white px-1.5 py-1 rounded border border-slate-205 shadow-xs leading-none select-none uppercase tracking-tight">
        Amex
      </div>
    )},
    { name: 'Interac', logo: (
      <div className="flex items-center gap-1 bg-white px-1.5 py-1 rounded border border-slate-205 shadow-xs select-none leading-none">
        <span className="text-[10px] text-red-600 font-black italic select-none">I</span>
        <span className="font-sans text-[8px] font-black tracking-tight text-[#0060A9] uppercase">Interac</span>
      </div>
    )},
    { name: 'Stripe', logo: (
      <div className="flex items-center justify-center font-sans font-black text-[9px] text-[#635BFF] bg-white px-2 py-1 rounded border border-slate-205 shadow-xs leading-none select-none lowercase">
        stripe
      </div>
    )},
    { name: 'Apple Pay', logo: (
      <div className="flex items-center justify-center font-sans font-medium text-[8px] text-white bg-black px-1.5 py-1 rounded border border-black shadow-xs leading-none select-none">
         Pay
      </div>
    )},
    { name: 'Google Pay', logo: (
      <div className="flex items-center gap-0.5 bg-white px-1.5 py-1 rounded border border-slate-205 shadow-xs select-none leading-none">
        <span className="text-blue-600 font-extrabold text-[9px]">G</span>
        <span className="text-slate-650 font-bold text-[8px] tracking-tight">Pay</span>
      </div>
    )}
  ];

  const legalContent: Record<LegalSection, { title: string; icon: React.ReactNode; text: string[] }> = {
    privacy: {
      title: 'ASTRATEQ Privacy Shield Directive',
      icon: <Shield className="w-5 h-5 text-indigo-650" />,
      text: [
        'Your digital safety and visual privacy form the fundamental architecture of Astrateq Inc. Unlike commercial cloud-based dashcams that stream raw driver video archives to external server farms, all ASTRA devices handle environmental scanning entirely locally at the physical edge.',
        'No Automated Video Uploads: Real-time highway sweeps, lane orientation, and cabin fatigue tracking are processed inside your device’s neural network. Feeds are overwritten instantly and never persisted on any network host.',
        'Data Control sovereignty: Companion app coordinates, system diagnostics, and trip statistics are encrypted using high-grade local protocols (AES-256) and remain behind your personal device credentials.'
      ]
    },
    pipeda: {
      title: 'PIPEDA & Canadian Privacy Statutes',
      icon: <Lock className="w-5 h-5 text-indigo-650" />,
      text: [
        'We strictly process all subscriber identifiers in full alignment with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada, alongside provincial analogues (such as the BC PIPA and Ontario’s FIPPA guidelines).',
        'Consent Models: Customer email logs and reservation coordinates are stored securely on encrypted database clusters exclusively for Summer 2026 scheduling. We do not engage in commercial data aggregation or high-frequency marketing brokers.',
        'Data Sovereignty Rights: Under PIPEDA, Canadian participants maintain absolute rights to inspect, update, or completely purge their prelaunch slot files from our servers. Contact privacy@astrateq.ca for automated sequence deletion.'
      ]
    },
    terms: {
      title: 'Terms of Prelaunch Reservation',
      icon: <FileText className="w-5 h-5 text-indigo-650" />,
      text: [
        'Queue Reservation Deposit: Participants make a fully-refundable $19 CAD reservation authorization today to lock in high pre-order volume discounts and ensure early shipment allocation in Summer 2026.',
        'Cancellation & Immediate Refund: You retain the absolute right to cancel your reservation queue sequence at any point before your specific physical hardware unit enters our Vancouver packaging conveyor line. Refund transactions are instantly debited back to your funding card via Stripe SSL secure processes.',
        'The Hormozi Double-Risk Guarantee: Following delivery, you receive an unconditional 30-day trial period on Canadian roadways. If ASTRA does not meet your safety standards, you can return the device for a 100% refund of the purchase price and keep the deluxe client tool installation kit ($40-$120 value) completely free.'
      ]
    },
    cookies: {
      title: 'Cookie Sovereignty Policy',
      icon: <Sparkles className="w-5 h-5 text-indigo-650" />,
      text: [
        'Our prelaunch portal uses strict functional local storage parameters alongside minor analytical cookie sequences to preserve your layout state, countdown timings, and discount preferences.',
        'Zero Advertising Retargeting: Astrateq does not use cooperative cross-site commercial trackers. Your navigation across our system remains anonymous.',
        'Manual Modification: You may opt to disable browser cookie tracking at any point. Your local prelaunch countdown and localized reservation parameters can safely be reset by purging persistent site data.'
      ]
    },
    dmca: {
      title: 'IP, Copyright & DMCA Protections',
      icon: <Scale className="w-5 h-5 text-indigo-650" />,
      text: [
        'The entirety of our local machine learning algorithms, vehicle lane-tracking neural architectures, physical obsidian casing designs, and software portal materials are intellectual properties owned by Astrateq Gadgets Inc.',
        'Copyright Protection: In compliance with the Copyright Act of Canada and the DMCA, unauthorized duplication, decompilation of embedded firmware, or replication of computer vision model weights is strictly prohibited.',
        'Designates: Legal inquiries concerning intellectual property, copyright license parameters, or official corporate disclosures should be directed to agent channels at legal@astrateq.co.'
      ]
    },
    safety: {
      title: 'Transport Canada & Road Safety Advisory',
      icon: <AlertTriangle className="w-5 h-5 text-indigo-650" />,
      text: [
        'IMPORTANT LEGAL DISCLAIMER FOR CANADIAN MOTORISTS: ASTRATEQ safety gadgets (including AI DriveGuard and RoadGuard Pro) are secondary driver advisory units designed to alert operators of upcoming highway obstacles. They do NOT replace active, focused human command of the vehicle.',
        'Provincial Motor Vehicles Statutes: Under laws established across all Canadian provinces (including the BC Motor Vehicle Act and the Highway Traffic Act of Ontario), operators must maintain unimpeded physical control and dedicated viewport attention. Secondary alert tools do not mitigate liability for distracted driving violations.',
        'Hardware Compliance: All on-board sensors operate on minor OBD-II Diagnostic pins in passive read-only protocol. Devices conform strictly to ICES-003 vehicular radio frequency standardizations.'
      ]
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-8 relative z-10 text-left selection:bg-indigo-650 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => onScrollToSection('hero')}
            >
              <img 
                src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="ASTRA Logo" 
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover border border-slate-200 bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-sans font-black text-xs text-slate-900 tracking-[0.12em] uppercase leading-none">ASTRATEQ</span>
                <span className="text-[9px] text-indigo-650 tracking-[0.14em] uppercase font-bold mt-0.5">GADGETS</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Delivering high-integrity automotive intelligence hardware locally processed at the edge. Protecting Canadian families with advanced predictive vision safety.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-550 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-550 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-650 transition-colors hover:bg-indigo-100" aria-label="Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-800">
              Product Overview
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-550 font-semibold">
              <li>
                <button onClick={() => onScrollToSection('pricing')} className="hover:text-indigo-650 transition-colors cursor-pointer text-left focus:outline-none">
                  Shop Device Bundles
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('how-it-works')} className="hover:text-indigo-650 transition-colors cursor-pointer text-left focus:outline-none">
                  How Edge Sync Works
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('compatibility')} className="hover:text-indigo-650 transition-colors cursor-pointer text-left focus:outline-none">
                  Check OBD Compatibility
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('trust-guarantees')} className="hover:text-indigo-650 transition-colors cursor-pointer text-left focus:outline-none">
                  Trial Trust Guarantees
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policy links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-800">
              Legal Declarations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-550 font-bold transition-all">
              <li>
                <button onClick={() => setActiveLegalTab('privacy')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none">
                  Privacy Shield Directive
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('pipeda')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none">
                  PIPEDA Compliance (Canada)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('terms')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none">
                  Prelaunch Reservation Terms
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('cookies')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none">
                  Cookie Sovereignty Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('dmca')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none">
                  Intellectual Property & DMCA
                </button>
              </li>
              <li>
                <button onClick={() => setActiveLegalTab('safety')} className="hover:text-indigo-600 cursor-pointer transition-colors block text-left focus:outline-none text-rose-600">
                  ⚠️ Highway Safety Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Right quick subscribe */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-450">
              Technical Announcements
            </h4>
            <div className="space-y-3 font-semibold text-xs">
              <p className="text-[10px] sm:text-xs text-slate-500 leading-normal">
                Get notified on firmware revisions, hardware releases, and Canadian pre-launch slots.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-1 bg-slate-50 border border-slate-205 p-1 rounded-xl shadow-sm">
                <input
                  type="email"
                  required
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSubmitted ? "Joined Newsletter!" : "Enter email select"}
                  className="flex-1 bg-transparent px-2.5 py-1.5 text-[10px] text-slate-800 placeholder-slate-400 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-lg text-[9px] font-bold uppercase cursor-pointer transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "..." : isSubmitted ? "Saved" : "Join"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Secure Canadian Payment Methods Badge Row */}
        <div className="py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-800">Secure Canadian Checkout Partners</span>
            <span className="text-[10px] text-slate-500 font-bold">Stripe Merchant Services authorized with industry-leading SSL encryption.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 max-w-full">
            {paymentMethods.map((pm, idx) => (
              <div key={idx} title={pm.name} className="transition-all hover:scale-105">
                {pm.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Lower row details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-[11px] text-slate-450 font-bold">
            <img 
              src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
              alt="ASTRA Bottom Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover border border-slate-200 bg-white p-1 shadow-sm shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Copyright className="w-3.5 h-3.5" />
                <span>2026 Astrateq Gadgets Inc. All Rights Reserved.</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold mt-0.5">Empowering safer journeys custom-built for Canadian roads.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold bg-slate-50 border border-slate-200 py-1.5 px-3 rounded-full">
            <span>Designed for Canadian Road Security with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in beautiful British Columbia</span>
          </div>
        </div>

      </div>

      {/* Interactive Modal for Legal documents */}
      {activeLegalTab && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-scale-up text-left">
            <div className="bg-slate-50 px-6 py-4.5 border-b border-slate-200/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                {legalContent[activeLegalTab].icon}
                <span className="font-sans font-extrabold text-sm text-slate-900 tracking-tight">
                  {legalContent[activeLegalTab].title}
                </span>
              </div>
              <button
                onClick={() => setActiveLegalTab(null)}
                className="text-slate-550 hover:text-slate-805 hover:bg-slate-200 bg-slate-100 font-extrabold p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed font-semibold">
              {legalContent[activeLegalTab].text.map((paragraph, idx) => (
                <p key={idx} className="bg-slate-50/40 p-4 border border-slate-100 rounded-xl">
                  {paragraph}
                </p>
              ))}
              
              <div className="border-t border-slate-150 pt-4 mt-6 flex justify-between items-center text-[10px] text-slate-400 font-bold shrink-0">
                <span>Authorized document seq ID: AST-{activeLegalTab.toUpperCase()}-2026</span>
                <span>Active Region: Canada & Provincial Authorities</span>
              </div>
            </div>
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setActiveLegalTab(null)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs tracking-wide transition-colors cursor-pointer"
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
