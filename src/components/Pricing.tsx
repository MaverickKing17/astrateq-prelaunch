import React, { useState } from 'react';
import { Check, Lock, Gift, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

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

  const reservationDeposit = 19; // Hormozi low-barrier deposit

  const bundles = [
    {
      id: 'solo',
      name: 'DriveGuard Solo',
      type: 'Essential Protection',
      msrp: 329,
      shipPrice: 269,
      savings: 60,
      badge: 'Starter Tier',
      cta: 'Reserve for $19 CAD',
      warranty: '2-Year Warranty',
      features: [
        'ASTRA-AI DriveGuard Unit',
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
      name: 'Family Safety Bundle',
      type: 'Complete Family Tier',
      msrp: 778,
      shipPrice: 599,
      savings: 179,
      badge: 'Best Value • Most Popular',
      cta: 'Secure Family Spot for $19',
      warranty: '3-Year Warranty',
      isFeatured: true,
      features: [
        'ASTRA-AI DriveGuard + RoadGuard Pro Dual Hubs',
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
      msrp: 1157,
      shipPrice: 899,
      savings: 258,
      badge: 'Elite Collection',
      cta: 'Reserve Pro Spot for $19',
      warranty: '3-Year Warranty + Concierge',
      features: [
        'All 3 Signature ASTRA Devices',
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
          type: 'Hormozi Reservation Checkout'
        })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setCheckoutStep('success');
      onReserveSuccess(checkoutEmail, selectedBundle.name);
    }
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
          <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed font-bold max-w-xl mx-auto">
            We removed all the friction. Reserve your Founding Spot today for a <span className="text-indigo-600">fully refundable $19 CAD</span>. Keep your discount locked, get all premium prelaunch bonuses free, and pay the balance only when we ship in Summer 2026.
          </p>

          {/* Connected Pricing Timer */}
          <div className="inline-flex flex-col items-center bg-white border border-slate-200 px-6 sm:px-8 py-5 rounded-2xl shadow-sm">
            <span className="text-slate-500 text-[10px] font-extrabold uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              Limited Prelaunch spots end in:
            </span>
            <CountdownTimer />
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
                className={`flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 relative ${
                  bundle.isFeatured
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-650/10 scale-105 z-10'
                    : 'bg-white border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Most Popular Badge */}
                {bundle.isFeatured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-sans font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                    {bundle.badge}
                  </span>
                )}

                {/* Package Type and Title */}
                <div className="mb-5">
                  <span className="text-[10px] uppercase font-bold text-slate-405 tracking-wider block">
                    {bundle.type}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl mt-1 text-slate-900">
                    {bundle.name}
                  </h3>
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
                      {reservationDeposit}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
            
            {/* Header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200/85 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-600" />
                <span className="font-sans font-bold text-xs text-slate-800">Stripe Pre-launch Booking Portal</span>
              </div>
              <button
                onClick={() => setSelectedBundle(null)}
                className="text-slate-500 hover:text-slate-850 hover:bg-slate-200 bg-slate-100 font-extrabold py-1 px-2.5 rounded text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4 text-left">
                <div className="bg-indigo-50/60 border border-indigo-120 p-4 rounded-xl flex flex-col">
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                    Hormozi Deposit Stack Activated:
                  </span>
                  <span className="font-sans font-black text-slate-900 text-base mt-1">
                    {selectedBundle.name} Spot Reservation
                  </span>
                  <span className="text-xs text-indigo-650 font-bold mt-1.5 bg-white border border-indigo-150 px-2.5 py-1 rounded-md self-start">
                    Today's Authorized Charge: <span className="text-emerald-700 font-extrabold uppercase">$19 CAD</span> (Fully Refundable)
                  </span>
                  <span className="text-[10px] text-slate-500 mt-2 font-semibold">
                    Remaining balance of <strong>${selectedBundle.shipPrice} CAD</strong> billed ONLY in Summer 2026 once tracking shipment begins.
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={checkoutName}
                    onChange={(e) => setCheckoutName(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Address (Reservation Code Recipient)</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={checkoutEmail}
                    onChange={(e) => setCheckoutEmail(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Vehicle Model Year (For Diagnostic Custom Kit)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2021 Toyota RAV4 Hybrid"
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    className="w-full bg-white border border-slate-250 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                  <div className="flex items-center gap-1.5 text-[10px] text-indigo-600 font-bold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Free Model-Specific custom tool kit and compatible diagnostic guide matches this vehicle.</span>
                  </div>
                </div>

                {/* Stripe Simulated Credit Card Panel */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Simulated Pre-order Card Entry</span>
                    <span className="text-[9px] text-indigo-650 bg-indigo-50 border border-indigo-150 px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">TEST MODE</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="col-span-4 bg-white border border-slate-205 rounded p-2 text-slate-600">
                      ••••  ••••  ••••  4242
                    </div>
                    <div className="col-span-2 bg-white border border-slate-205 rounded p-2 text-slate-450">
                      12 / 2029
                    </div>
                    <div className="col-span-2 bg-white border border-slate-205 rounded p-2 text-slate-450">
                      321
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-lg font-black text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-indigo-650/15"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Authorizing Booking...
                    </>
                  ) : (
                    `Reserve My Spot ($${reservationDeposit} CAD)`
                  )}
                </button>

                <div className="text-center text-[10px] text-slate-400 font-bold flex items-center justify-center gap-1.5 mt-1.5">
                  <span>🔒 Fully Refundable Pre-launch Deposit Protection</span>
                </div>

              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-sans font-black text-lg text-slate-900">Founding Spot Reserved!</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                  Thank you, <span className="text-slate-800 font-bold">{checkoutName}</span>. We successfully credited your <span className="text-indigo-650 font-bold">${reservationDeposit} CAD</span> deposit. Your slot for <span className="text-indigo-650 font-bold">{selectedBundle.name}</span> has been securely locked in our database sequence.
                </p>
                <div className="bg-indigo-50 border border-indigo-120 rounded-xl p-3.5 text-[11px] text-indigo-650 font-bold inline-block">
                  🎯 Next Step: Check compatibility details for and lock down customization of your companion app profile.
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBundle(null)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-850 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors mt-4"
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
