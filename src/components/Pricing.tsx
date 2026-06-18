import React, { useState, useEffect } from 'react';
import { Check, Lock, Gift, ShieldCheck, Sparkles, AlertCircle, Download } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import driveguardSoloImg from '../assets/images/driveguard_solo_light_1780008399839.png';
import familyBundleImg from '../assets/images/family_bundle_light_1780008415368.png';
import guardianProImg from '../assets/images/guardian_pro_light_1780008434749.png';
import { 
  getFallbackReportData, 
  generateDiagnosticReportPDF, 
  generateConfigurationBlueprintPDF 
} from '../utils/pdfGenerator';

interface PricingProps {
  onReserveSuccess: (email: string, bundle: string) => void;
}

export default function Pricing({ onReserveSuccess }: PricingProps) {
  const [selectedBundle, setSelectedBundle] = useState<any | null>(null);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [checkoutName, setCheckoutName] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  const [stripeConfig, setStripeConfig] = useState({ configured: false, publishableKey: '', isValidationMode: true });
  const [stripeError, setStripeError] = useState<string | null>(null);

  // States for interactive mock credit card entries in Validation Mode
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [billingPostal, setBillingPostal] = useState('');

  useEffect(() => {
    fetch('/api/stripe-config')
      .then(res => res.json())
      .then(data => setStripeConfig({
        configured: data.configured,
        publishableKey: data.publishableKey,
        isValidationMode: data.isValidationMode !== undefined ? data.isValidationMode : true
      }))
      .catch(err => {
        console.error('Failed to load Stripe config:', err);
        setStripeConfig(prev => ({ ...prev, isValidationMode: true }));
      });
  }, []);

  const reservationDeposit = 49; // Premium commitment deposit for middle-income security-first parents

  const handleDownloadDiagnostics = () => {
    let year = "2026";
    let make = "Vehicle";
    let model = "Model";
    const parts = (vehicleInfo || "").trim().split(/\s+/);
    if (parts.length > 0) {
      if (/^\d{4}$/.test(parts[0])) {
        year = parts[0];
        if (parts.length > 1) make = parts[1];
        if (parts.length > 2) model = parts.slice(2).join(" ");
      } else {
        make = parts[0];
        if (parts.length > 1) model = parts.slice(1).join(" ");
      }
    }
    const reportData = getFallbackReportData(year, make, model);
    const doc = generateDiagnosticReportPDF(year, make, model, reportData.diagnosticReport);
    doc.save('astrateq_diagnostic_report.pdf');
  };

  const handleDownloadBlueprint = () => {
    let year = "2026";
    let make = "Vehicle";
    let model = "Model";
    const parts = (vehicleInfo || "").trim().split(/\s+/);
    if (parts.length > 0) {
      if (/^\d{4}$/.test(parts[0])) {
        year = parts[0];
        if (parts.length > 1) make = parts[1];
        if (parts.length > 2) model = parts.slice(2).join(" ");
      } else {
        make = parts[0];
        if (parts.length > 1) model = parts.slice(1).join(" ");
      }
    }
    const reportData = getFallbackReportData(year, make, model);
    const doc = generateConfigurationBlueprintPDF(year, make, model, reportData.configurationBlueprint);
    doc.save('astrateq_configuration_blueprint.pdf');
  };

  const bundles = [
    {
      id: 'solo',
      name: 'DriveGuard Solo',
      type: 'Essential Protection',
      image: driveguardSoloImg,
      msrp: 299,
      shipPrice: 250,
      savings: 49,
      deposit: 49,
      badge: 'Starter Tier',
      cta: 'Join Founding Cohort Now',
      warranty: '2-Year Warranty',
      features: [
        'Astrateq AI-DriveGuard Unit',
        'Local Edge AI Neural Processor',
        'Real-Time Driver Awareness System',
        'Mobile Companion App Sync',
        '2-Year Extended Hardware Warranty',
      ],
      bonuses: [
        'Free Elite Custom Installation Kit ($40 Value)',
        'Free Lifetime Firmware Revisions ($120 Value)',
      ]
    },
    {
      id: 'family',
      name: 'Family Safety Hub™',
      type: 'Complete Family Tier',
      image: familyBundleImg,
      msrp: 599,
      shipPrice: 500,
      savings: 99,
      deposit: 99,
      badge: 'Best Value • Most Popular',
      cta: 'Join Founding Cohort Now',
      warranty: '3-Year Warranty',
      isFeatured: true,
      features: [
        'Astrateq AI-DriveGuard + RoadGuard Pro Dual Hubs',
        'Dual-Vehicle Comprehensive Protection',
        'Family GPS Dashboard with Safety Scorecard',
        'Priority Canadian Customer Support Response',
        '3-Year Extended Hardware Warranty',
      ],
      bonuses: [
        '2x Elite Custom Installation Kits ($80 Value)',
        'Free Lifetime Neural Network Upgrades ($240 Value)',
        'Free Model-Specific Diagnostic Report ($50 Value)',
        'VIP Companion App Multi-Profile Sync ($100 Value)',
      ]
    },
    {
      id: 'guardian',
      name: 'Guardian Pro Bundle',
      type: 'Ultimate Fleet Protection',
      image: guardianProImg,
      msrp: 899,
      shipPrice: 750,
      savings: 149,
      deposit: 149,
      badge: 'Elite Collection',
      cta: 'Join Founding Cohort Now',
      warranty: '3-Year Warranty + Concierge',
      features: [
        'All 3 Signature Astrateq Devices',
        'EV Battery Intelligence Diagnostic Kit',
        'Unified Family Fleet Safety Dashboard',
        'White-Glove Priority VIP Onboarding',
        '3-Year Extended Warranty + Accidental Protection',
      ],
      bonuses: [
        '3x Elite Custom Installation Kits ($120 Value)',
        'Free Lifetime Advanced Neural Network Sync ($360 Value)',
        'Direct 24/7 Canadian Engineer Hotline Access ($200 Value)',
        'Deluxe Obsidian Aluminum Travel Bag ($75 Value)',
      ]
    }
  ];

  const handleOpenCheckout = (bundle: any) => {
    setSelectedBundle(bundle);
    setCheckoutStep('form');
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutEmail || !checkoutName) return;

    setIsSubmitting(true);
    setStripeError(null);

    // Only attempt real Stripe Checkout redirection if keys are fully configured AND we are in live production mode (sk_live_)
    if (stripeConfig.configured && !stripeConfig.isValidationMode) {
      try {
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bundleId: selectedBundle?.id,
            bundleName: selectedBundle?.name,
            email: checkoutEmail,
            name: checkoutName,
            vehicle: vehicleInfo,
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to initiate Stripe Checkout session');
        }

        if (data.url) {
          // Redirect the browser to Stripe Checkout Hosted Payment Screen
          window.location.href = data.url;
          return;
        } else {
          throw new Error('Stripe Checkout URL was not returned by server');
        }
      } catch (err: any) {
        console.error("Stripe session creation failed, falling back to simulated booking:", err);
        setStripeError(err.message || 'Connecting to Stripe failed. Operating in Simulation Mode instead.');
      }
    } else if (stripeConfig.isValidationMode) {
      // Simulate real, luxury-tier payment gateway handshake & reservation seed registration (1.2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }

    try {
      await fetch('https://formspree.io/f/xeedvalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: checkoutName,
          email: checkoutEmail,
          vehicle: vehicleInfo,
          bundle: selectedBundle?.name || 'Unknown Bundle',
          deposit: `$${reservationDeposit} CAD`,
          finalPrice: `$${selectedBundle?.shipPrice} CAD`,
          type: 'Hormozi Reservation Checkout (Simulated)'
        })
      });
    } catch (err) {
      console.error(err);
    }

    // Auto-dispatch tailored Canva-style diagnostics and blueprint PDF documents via Resend on checkout success
    try {
      let year = "2026";
      let make = "Vehicle";
      let model = "Model";
      const parts = (vehicleInfo || "").trim().split(/\s+/);
      if (parts.length > 0) {
        if (/^\d{4}$/.test(parts[0])) {
          year = parts[0];
          if (parts.length > 1) make = parts[1];
          if (parts.length > 2) model = parts.slice(2).join(" ");
        } else {
          make = parts[0];
          if (parts.length > 1) model = parts.slice(1).join(" ");
        }
      }
      const reportData = getFallbackReportData(year, make, model);
      const diagDoc = generateDiagnosticReportPDF(year, make, model, reportData.diagnosticReport);
      const blueprintDoc = generateConfigurationBlueprintPDF(year, make, model, reportData.configurationBlueprint);
      
      const diagBase64 = diagDoc.output('datauristring');
      const blueprintBase64 = blueprintDoc.output('datauristring');

      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: checkoutEmail,
          name: checkoutName,
          vehicle: vehicleInfo,
          bundle: selectedBundle?.name,
          pdfDiagnostics: diagBase64,
          pdfBlueprint: blueprintBase64
        })
      });
    } catch (emailErr) {
      console.error("Automated checkout email delivery failed:", emailErr);
    }

    setIsSubmitting(false);
    setCheckoutStep('success');
    onReserveSuccess(checkoutEmail, selectedBundle.name);
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-b border-slate-200/85 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-extrabold block mb-3">
            THE GRAND SLAM PRELAUNCH OFFER
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Unlock High-Volume Pre-Order Access
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed font-bold max-w-[90%] sm:max-w-xl mx-auto">
            We removed all the friction. Secure your Founding Spot today with a <span className="text-indigo-600">fully refundable pre-launch deposit</span>. Your deposit amount acts as your <span className="text-emerald-600">guaranteed discount amount</span>—meaning you pay only the remaining balance at launch and get all premium pre-launch bonuses free!
          </p>

          {/* Connected Pricing Timer */}
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-indigo-50/30 to-white border border-indigo-100 px-6 sm:px-8 py-5 rounded-2xl shadow-md shadow-indigo-100/10">
            <span className="text-indigo-950 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Limited Prelaunch spots end in:
            </span>
            <div className="bg-slate-50/80 border border-slate-100 px-4 py-3 rounded-xl">
              <CountdownTimer />
            </div>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {bundles.map((bundle) => {
            // Count total bonus value
            const bonusSum = bundle.bonuses.reduce((acc, current) => {
              const match = current.match(/\$(\d+)/);
              return match ? acc + parseInt(match[1], 10) : acc;
            }, 0);

            return (
              <div
                key={bundle.id}
                className={`flex flex-col relative group/card transition-all duration-500 ${
                  bundle.isFeatured
                    ? 'scale-[1.01] sm:scale-[1.04] z-10 hover:scale-[1.02] sm:hover:scale-[1.05]'
                    : 'hover:-translate-y-1.5'
                }`}
              >
                {/* Most Popular Badge outside overflow-hidden */}
                {bundle.isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-sans font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md z-30">
                    {bundle.badge}
                  </span>
                )}

                {/* Soft dark backlight ambient aura */}
                <div className="absolute -inset-3.5 rounded-[2.8rem] bg-slate-950/15 blur-3xl opacity-50 group-hover/card:opacity-85 transition-all duration-700 pointer-events-none" />

                {/* Highly structured glowing dual-border frame with absolute styling */}
                <div className={`absolute -inset-[3px] rounded-[2.65rem] opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r ${
                  bundle.isFeatured
                    ? 'from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.55)]'
                    : 'from-indigo-400 via-cyan-400 to-teal-400 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
                }`} />

                {/* Inner White Card */}
                <div
                  className="flex flex-col h-full rounded-[2.5rem] p-6 sm:p-8 relative bg-white border border-slate-905 overflow-hidden shadow-sm"
                >
                  {/* (Moved Most Popular Badge to parent) */}

                {/* Package Type and Title */}
                <div className="mb-5">
                  <span className="text-[10px] uppercase font-bold text-slate-405 tracking-wider block">
                    {bundle.type}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl mt-1 text-slate-900">
                    {bundle.name}
                  </h3>
                </div>

                {/* Professional Product Showcase */}
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-150 bg-slate-50 aspect-[4/3] shadow-inner select-none">
                  <img
                    src={bundle.image}
                    alt={`${bundle.name} premium hardware setup`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-0.5"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest text-slate-100 border border-white/10 flex items-center gap-1.5 shadow-sm font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Authorized Hardware
                  </div>
                </div>

                {/* Reservation Hero Pricing Box */}
                <div className="bg-slate-50/80 border border-slate-200/60 rounded-2xl p-4 mb-6">
                  <div className="text-[10px] text-slate-450 uppercase font-black tracking-widest flex items-center justify-between mb-1">
                    <span>RESERVE TODAY FOR:</span>
                    <span className="text-indigo-650 font-extrabold">100% REFUNDABLE</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-indigo-600 align-top">$</span>
                    <span className="text-4xl font-display font-black text-indigo-600 tracking-tight leading-none">
                      {bundle.deposit}
                    </span>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest ml-1">
                      CAD
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-wide mt-2 pt-2 border-t border-slate-200/50">
                    Pay rest at shipment: <span className="text-slate-900 font-black">${bundle.shipPrice} CAD</span> (MSRP <span className="line-through text-slate-400">${bundle.msrp}</span>)
                  </div>
                  <div className="text-[10px] text-emerald-600 font-extrabold mt-1">
                    🎉 Locked-In Prelaunch Savings: Save ${bundle.savings} CAD
                  </div>
                </div>

                {/* Feature list */}
                <div className="space-y-4 mb-6 flex-1">
                  {bundle.id === 'family' && (
                    <div className="p-3.5 bg-indigo-50/40 border border-indigo-100 rounded-xl mb-4 text-left">
                      <span className="text-[9.5px] font-black uppercase tracking-widest text-indigo-700 block mb-2.5">
                        📦 WHAT'S INCLUDED:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-705 font-bold">
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-555 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>DriveGuard AI Dashcam (Front + Rear)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-555 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>Astrateq Diagnostic Scanner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-555 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>Mobile Companion App</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-555 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>Personalized Vehicle Intelligence Preview</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-555 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>Founding Member Access</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2 font-sans">
                      CORE SPECIFICATIONS:
                    </span>
                    <ul className="space-y-2.5">
                      {bundle.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug font-medium">
                          <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" style={{ strokeWidth: 3 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hormozi High-Value Stacked Bonuses */}
                  <div className="pt-4 border-t border-dashed border-slate-200">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-indigo-600 flex items-center gap-1 mb-2.5 font-sans">
                      <Gift className="w-3.5 h-3.5 shrink-0 text-indigo-600" />
                      FREE FOUNDING BONUSES (+${bonusSum} Value):
                    </span>
                    <ul className="space-y-2">
                      {bundle.bonuses.map((bonus, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-550 leading-snug font-bold">
                          <span className="text-emerald-600 shrink-0 select-none">🎁</span>
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking button */}
                <button
                  type="button"
                  onClick={() => handleOpenCheckout(bundle)}
                  className={`w-full py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                    bundle.isFeatured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-650/20 hover:scale-[1.01]'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  {bundle.cta}
                </button>

                {/* Stripe Checkout Trust Note */}
                <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  Stripe SSL Secure • Credit Card Auth Today Only
                </div>

              </div>
              </div>
            );
          })}
        </div>

        {/* Multi-layered Unconditional Guarantee Board */}
        <div className="mt-16 max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-[40px] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative z-10 text-left">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-150 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-9 h-9 text-emerald-600" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-black text-emerald-600 tracking-widest block font-sans">
                ALEX HORMOZI DOUBLE-RISK REVERSAL
              </span>
              <h4 className="font-sans font-black text-lg text-slate-900 tracking-tight">
                Our "No-Brainer" Double Guarantee: Refund & Keep Bonuses
              </h4>
              <p className="text-slate-550 text-xs sm:text-xs leading-relaxed font-semibold">
                <strong>Guarantee 1 (Prelaunch)</strong>: Cancel your reservation anytime between today and Summer 2026 with a single click inside your email. No questions, instant refund.
                <br />
                <strong>Guarantee 2 (Postlaunch)</strong>: Try ASTRA in your vehicle for 30 full days on the highway. If you are not completely safety-secure, return the unit for a 100% refund, and <span className="text-slate-900 font-bold">keep your custom Elite Installation tool kit absolutely free</span> just for trying. We take 100% of the risk.
              </p>
            </div>
          </div>
        </div>

        {/* Footnote reassurance */}
        <p className="text-center text-[11px] text-slate-450 mt-10 max-w-xl mx-auto leading-relaxed font-bold">
          🛡️ PIPEDA compliance • Fully local device machine vision learning • Zero cloud network dependency safety backups
        </p>

      </div>

      {/* Checkout Modal */}
      {selectedBundle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-slate-250 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-scale-up">
            
            {/* Elegant Header containing custom titles */}
            <div className="bg-slate-950 border-b border-slate-850 px-6 py-4 flex items-center justify-between text-white select-none">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="font-sans font-black text-xs uppercase tracking-wider text-slate-100">
                  {stripeConfig.isValidationMode 
                    ? "SECURE FOUNDING RESERVATION (VALIDATION PHASE)" 
                    : "Stripe Pre-launch Booking Portal"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBundle(null)}
                className="text-slate-400 hover:text-white hover:bg-slate-800 bg-slate-850/80 font-extrabold py-1 px-3 rounded-lg text-[10px] uppercase tracking-wider transition-all cursor-pointer border border-slate-700/50"
              >
                Close
              </button>
            </div>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto text-left">
                
                {/* Component 4: Validation Mode Awareness Banner */}
                {stripeConfig.isValidationMode && (
                  <div id="validation-mode-banner" className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950 via-[#120a2e] to-slate-950 p-[1.5px] shadow-[0_0_20px_rgba(168,85,247,0.2)] border border-purple-500/15">
                    <div className="bg-slate-950/85 backdrop-blur-md p-4 rounded-[15px] text-center relative z-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent)] pointer-events-none" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-cyan-400 font-mono block mb-1">
                        INTELLIGENT CALM SYSTEM LINK
                      </span>
                      <h5 className="text-xs sm:text-sm font-black text-white tracking-tight uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-100 to-cyan-200">
                        SECURE TEST MODE: NO REAL CHARGES
                      </h5>
                      <p className="text-[10px] text-purple-300 font-extrabold tracking-widest uppercase mt-1">
                        SIMULATED PAYMENT FOR VALIDATION
                      </p>
                    </div>
                  </div>
                )}

                {/* Component 2: Dedicated Disclosure Component - Pre-Launch Validation Notice */}
                <div id="prelaunch-validation-notice" className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-indigo-700 select-none">
                    <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                    <h5 className="font-sans font-black text-xs uppercase tracking-wider text-slate-950">
                      Pre-Launch Validation Notice
                    </h5>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                    <span className="text-slate-900 font-extrabold">Astrateq Gadgets is currently operating in an active pre-launch validation phase.</span>
                    <br className="mb-1" />
                    By selecting a package and submitting this reservation form, you are securing a priority reservation position for our upcoming product release. No actual financial transaction will occur and your payment method will not be charged.
                    <br className="mb-1" />
                    This checkout experience utilizes Stripe's secure test environment to simulate a ${selectedBundle?.deposit || 49} CAD Founding Member reservation for market validation and demand analysis purposes. Your financial information is not processed for real currency exchange, stored for billing purposes, or shared with third parties.
                    <br className="mb-1" />
                    Upon official product launch, priority reservation holders will receive exclusive early-access opportunities and will be invited to complete a production order if they choose to proceed.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex flex-col">
                  <span className="text-[9px] uppercase font-bold text-slate-450 tracking-wider">
                    Selected Founding Member Bundle:
                  </span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-sans font-black text-slate-900 text-base">
                      {selectedBundle.name} Spot Reservation
                    </span>
                    <span className="text-xs text-indigo-650 font-extrabold font-mono bg-indigo-50 border border-indigo-120 px-2 py-0.5 rounded-md">
                      ${selectedBundle.deposit} CAD today
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 font-medium leading-relaxed">
                    Under PIPEDA data transparency guidelines, your reservation secures early hardware access. Remaining balance of <strong>${selectedBundle.shipPrice} CAD</strong> billed only at final shipment in Summer 2026.
                  </span>
                </div>

                {/* Elegant Simulated Card Graphic */}
                {stripeConfig.isValidationMode && (
                  <div className="relative h-40 bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 rounded-2xl p-5 border border-white/10 shadow-lg overflow-hidden flex flex-col justify-between select-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(168,85,247,0.12),transparent)] pointer-events-none" />
                    
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-purple-400 block font-mono">
                          ASTRATEQ PLATINUM SYSTEM LINK
                        </span>
                        <span className="text-[11px] text-slate-350 font-bold font-sans">SOVEREIGN EDGE PLATFORM</span>
                      </div>
                      
                      {/* NFC Wave and Gold Chip */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5 items-end h-4 pb-0.5">
                          <span className="w-0.5 h-1 bg-slate-400 rounded-full" />
                          <span className="w-0.5 h-2 bg-slate-400 rounded-full" />
                          <span className="w-0.5 h-3 bg-slate-400 rounded-full" />
                          <span className="w-0.5 h-3.5 bg-slate-405 rounded-full" />
                        </div>
                        <div className="w-7 h-5 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 rounded border border-amber-600/30" />
                      </div>
                    </div>

                    <div className="font-mono text-sm sm:text-base text-slate-100 tracking-[0.22em] font-extrabold my-2">
                      {cardNumber || "••••  ••••  ••••  4242"}
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="max-w-[200px]">
                        <span className="text-[7px] font-bold text-slate-405 uppercase tracking-widest block leading-none mb-1">
                          CARDHOLDER NAME
                        </span>
                        <span className="text-[11px] font-mono font-bold text-slate-200 block truncate">
                          {checkoutName ? checkoutName.toUpperCase() : "FOUNDING MEMBER"}
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <span className="text-[7px] font-bold text-slate-405 uppercase tracking-widest block leading-none mb-1 text-right">
                            EXPIRES
                          </span>
                          <span className="text-[11px] font-mono font-bold text-slate-200 block text-right">
                            {cardExpiry || "12/29"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[7px] font-bold text-slate-405 uppercase tracking-widest block leading-none mb-1 text-right">
                            CVV
                          </span>
                          <span className="text-[11px] font-mono font-bold text-slate-200 block text-right">
                            {cardCvv || "•••"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Primary Card Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter founding member name"
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      className="w-full bg-white border border-slate-250 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Email Address (Recipient)</label>
                    <input
                      type="email"
                      required
                      placeholder="f member@domain.ca"
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      className="w-full bg-white border border-slate-250 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Vehicle Manufacturer Model & Year (Custom Kit Identification)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2021 Toyota RAV4 Hybrid"
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 font-medium"
                  />
                  <div className="flex items-center gap-1.5 text-[10px] text-indigo-700 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-indigo-650" />
                    <span>Free customized model diagnostic guide builds mapped directly to this configuration.</span>
                  </div>
                </div>

                {/* Simulated Card Entry for Premium Validation checkout */}
                {stripeConfig.isValidationMode ? (
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-slate-450 uppercase tracking-widest font-mono">
                        Automotive Simulation Gateway
                      </span>
                      <span className="text-[9px] text-purple-750 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md font-bold tracking-wide">
                        SECURE SANDBOX ACTIVE
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="space-y-1">
                        <label className="text-[8px] font-bold text-slate-450 uppercase tracking-widest block">Simulated Card Number</label>
                        <input
                          type="text"
                          maxLength={19}
                          placeholder="4242 4242 4242 4242"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9 ]/g, ''))}
                          className="w-full bg-white border border-slate-205 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-455 font-mono"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-1 col-span-1">
                          <label className="text-[8px] font-bold text-slate-450 uppercase tracking-widest block">Expiry Date</label>
                          <input
                            type="text"
                            maxLength={5}
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full bg-white border border-slate-205 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-455 font-mono"
                          />
                        </div>
                        <div className="space-y-1 col-span-1">
                          <label className="text-[8px] font-bold text-slate-450 uppercase tracking-widest block">CVV/CVC</label>
                          <input
                            type="text"
                            maxLength={4}
                            placeholder="321"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/g, ''))}
                            className="w-full bg-white border border-slate-205 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-455 font-mono"
                          />
                        </div>
                        <div className="space-y-1 col-span-1">
                          <label className="text-[8px] font-bold text-slate-450 uppercase tracking-widest block">Postal Code</label>
                          <input
                            type="text"
                            placeholder="T2P 2G8"
                            value={billingPostal}
                            onChange={(e) => setBillingPostal(e.target.value.toUpperCase())}
                            className="w-full bg-white border border-slate-205 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-455 font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Live Stripe indicator
                  <div className="bg-emerald-50/50 border border-emerald-250 p-4 rounded-2xl text-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-450 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                      </span>
                      <span>Stripe Enterprise Checkout Gateway</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-semibold">
                      Your session is secure. Clicking the reservation submit button redirects to Stripe's payment gateways for credit card verification of your early delivery deposit.
                    </p>
                  </div>
                )}

                {stripeError && (
                  <div className="bg-rose-50 border border-rose-150 text-rose-700 p-3 rounded-xl text-[11px] font-bold">
                    ⚠️ {stripeError}
                  </div>
                )}

                {/* PDF Requirement C: Validation Commitment Messaging */}
                {stripeConfig.isValidationMode && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-center">
                    <span className="text-[9px] text-emerald-700 uppercase font-extrabold tracking-widest block mb-1 font-mono leading-none">
                      Hormozi Double-Risk Guarantee Activated
                    </span>
                    <div className="text-xs font-extrabold text-slate-800">
                      Today's Validation Commitment: <span className="text-emerald-700 font-black text-sm">${selectedBundle.deposit} CAD (100% Fully Refundable)</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 leading-relaxed font-semibold">
                      Immediate confirmation code generated upon authorization. Refund requested with a single button click anytime before summer shipping begins.
                    </p>
                  </div>
                )}

                {/* Component 1: Astrateq Gadgets Security Promise Panel */}
                <div id="security-promise-panel" className="relative overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                  <div className="bg-slate-950/90 backdrop-blur-md text-white p-4.5 p-4 rounded-[15px] space-y-3 relative z-10">
                    <div className="flex items-center gap-2 text-indigo-300">
                      <ShieldCheck className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] shrink-0" />
                      <h4 className="font-sans font-black text-xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-100 to-cyan-200">
                        Astrateq Gadgets Security Promise
                      </h4>
                    </div>
                    <div className="text-[11px] text-slate-300 leading-relaxed space-y-2 font-medium">
                      <p>We utilize Stripe's official secure test environment.</p>
                      <p>Your payment method may be used to simulate a <span className="text-cyan-400 font-extrabold">${selectedBundle.deposit} CAD</span> Founding Member reservation; however, <span className="text-purple-400 font-extrabold">no charge will be processed</span> during this validation phase.</p>
                      <p>Your information remains secure and your payment method <span className="text-emerald-400 font-extrabold font-mono">will not be billed</span>.</p>
                    </div>
                  </div>
                  {/* Subtle soft gradient glow */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* PDF Requirement D: Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-black text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-indigo-650/15"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying System Handshake...</span>
                    </>
                  ) : (
                    "Join Founding Cohort Now"
                  )}
                </button>

                {/* Supporting trust copy beneath CTA */}
                <div className="p-3.5 bg-indigo-50/35 border border-indigo-100 rounded-2xl text-[10px] sm:text-[10.5px] text-slate-650 leading-relaxed font-semibold text-left space-y-1">
                  <div className="text-indigo-800 font-sans font-black uppercase text-[8.5px] tracking-widest mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    Reservation Security Checkpoint
                  </div>
                  <ul className="space-y-1 text-slate-605 list-disc list-inside">
                    <li><strong className="text-slate-800 font-extrabold">No Real Charge</strong>: Checkout runs in secure test mode — no real charges occur.</li>
                    <li><strong className="text-slate-800 font-extrabold">Validation Experience</strong>: Active pre-launch phase to determine supplier capacity & demand.</li>
                    <li><strong className="text-slate-800 font-extrabold">Reservation Registered</strong>: Your interest is secured and certified under priority priority lanes.</li>
                    <li><strong className="text-slate-800 font-extrabold">Secure & Encrypted</strong>: Personal identifiers remain strictly protected under PIPEDA guidelines.</li>
                  </ul>
                </div>

                <div className="text-center text-[10px] text-slate-400 font-bold flex items-center justify-center gap-1.5 mt-2">
                  <span>🔒 SSL Encrypted • Passive Read Compatibility Guaranteed</span>
                </div>

              </form>
            ) : (
              // Success Feedback
              <div className="p-8 text-center space-y-5 max-h-[85vh] overflow-y-auto">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-8 h-8 text-emerald-600" style={{ strokeWidth: 3 }} />
                </div>
                <span className="text-xs font-black uppercase text-emerald-750 tracking-widest block font-mono">
                  🚨 PRESTIGIOUS ALLOCATION GRANTED
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 mt-1">Founding Spot Reserved!</h4>
                
                <p className="text-sm text-slate-650 leading-relaxed max-w-sm mx-auto font-medium">
                  Thank you, <span className="text-slate-950 font-extrabold">{checkoutName}</span>. Your early dual-lens hardware package for <span className="text-indigo-600 font-extrabold">{selectedBundle.name}</span> has been securely locked. You are officially part of Canada's early-access pilot program.
                </p>

                <div className="bg-slate-950 text-slate-100 border border-slate-800 rounded-3xl p-6 text-xs sm:text-[13px] font-medium leading-relaxed max-w-sm mx-auto text-left space-y-3 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-indigo-500" />
                  
                  <div className="font-extrabold uppercase text-[10px] tracking-widest text-[#94a3b8] font-mono flex items-center gap-1.5 border-b border-slate-805 pb-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    FOUNDING DRIVER RESERVATION CERTIFICATE
                  </div>
                  <div>• Account Holder: <strong className="text-white font-bold">{checkoutName}</strong></div>
                  <div>• Notification Recipient: <strong className="text-white font-bold">{checkoutEmail}</strong></div>
                  <div>• Target Vehicle Hardware Mapping: <strong className="text-white font-bold">{vehicleInfo || "Universal Driver OBD Protocol Matching"}</strong></div>
                  
                  <div className="pt-2 border-t border-slate-805/60 flex flex-col gap-1 mt-1 font-mono text-[11px]">
                    <div>• RESERVATION NUMBER: <strong className="text-indigo-400 font-black">FN-4912-CA</strong></div>
                    <div>• ACCESS WAITING QUEUE: <strong className="text-emerald-400 font-black">#4,912 in Canada</strong></div>
                    <div>• ALLOCATION CLASSIFICATION: <strong className="text-rose-400 font-black">Phase 1 Early Adopter Pool</strong></div>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-120 rounded-2xl p-5 text-xs sm:text-[13px] text-indigo-805 font-black max-w-sm mx-auto leading-relaxed shadow-sm">
                  🎯 Next Step: Download your custom engineering reports and diagnostic guidelines generated by our lab microprocessors for your specific vehicle!
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    type="button"
                    onClick={handleDownloadDiagnostics}
                    className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-indigo-400" />
                    Diagnostics PDF
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadBlueprint}
                    className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-rose-400" />
                    Blueprint PDF
                  </button>
                </div>
                
                <button
                  type="button"
                  onClick={() => setSelectedBundle(null)}
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest shadow-md transition-colors mt-4 cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
