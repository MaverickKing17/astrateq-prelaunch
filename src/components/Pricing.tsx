import React, { useState } from 'react';
import { Check, Lock } from 'lucide-react';
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

  const bundles = [
    {
      id: 'solo',
      name: 'DriveGuard Solo',
      type: 'Essential',
      msrp: 329,
      price: 269,
      savings: 60,
      badge: 'Starter Protection',
      cta: 'Reserve Bundle',
      warranty: '2-Year Warranty Goal',
      features: [
        'ASTRA-AI DriveGuard Unit',
        'Local Edge AI Processing',
        'Real-Time Driver Awareness',
        'Mobile Companion App',
        '2-Year Warranty Goal',
      ]
    },
    {
      id: 'family',
      name: 'Family Safety Bundle',
      type: 'Complete Family',
      msrp: 778,
      price: 599,
      savings: 179,
      badge: 'Most Popular',
      cta: 'Secure My Bundle',
      warranty: '3-Year Warranty Goal',
      isFeatured: true,
      features: [
        'ASTRA-AI DriveGuard + RoadGuard Pro',
        'Dual-Vehicle Comprehensive Coverage',
        'Family Dashboard with Instant Alerts',
        'Priority Canadian Customer Support',
        '3-Year Warranty Goal',
        'Free Automotive Safety Diagnostic Report',
      ]
    },
    {
      id: 'guardian',
      name: 'Guardian Pro Bundle',
      type: 'Complete Protection',
      msrp: 1157,
      price: 899,
      savings: 258,
      badge: 'Enterprise Grade',
      cta: 'Join Founding Access',
      warranty: '3-Year Warranty Goal',
      features: [
        'All 3 Signature ASTRA Devices',
        'EV Battery Intelligence Kit',
        'Unified Fleet Tracking Dashboard',
        'White-Glove Priority Onboarding',
        '3-Year Warranty Goal',
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
          type: 'Secure Checkout Pre-Order'
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
    <section id="pricing" className="py-20 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
            Founding Member Bundles
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Choose Your Safety Bundle
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-medium">
            Founding member pricing is strictly limited. Lock in your rate before the Summer 2026 launch. Fully credit card-backed deposit protection.
          </p>

          {/* Connected Pricing Timer */}
          <div className="inline-flex flex-col items-center bg-white border border-slate-200 px-6 sm:px-8 py-5 rounded-2xl shadow-sm">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
              ⏳ Founding Pricing Ends Soon:
            </span>
            <CountdownTimer />
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 relative ${
                bundle.isFeatured
                  ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-650/10'
                  : 'bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Most Popular Badge */}
              {bundle.isFeatured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-sans font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  {bundle.badge}
                </span>
              )}

              {/* Package Type and Title */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {bundle.type}
                </span>
                <h3 className={`font-sans font-bold text-xl sm:text-2xl mt-1 text-slate-900`}>
                  {bundle.name}
                </h3>
              </div>

              {/* Price Block */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 line-through">
                  CAD ${bundle.msrp}
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-xl font-bold text-slate-400 align-top">$</span>
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
                    {bundle.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    CAD
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold tracking-wide mt-1.5">
                  Founding Member Reservation Price
                </div>
                {/* Savings Badge */}
                <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-md mt-3 tracking-wide">
                  Save ${bundle.savings} CAD
                </span>
              </div>

              <hr className="border-0 border-t my-6 border-slate-100" />

              {/* Feature list */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {bundle.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug font-medium">
                    <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-indigo-50 border border-indigo-100">
                      <Check className="w-2.5 h-2.5 text-indigo-650" style={{ strokeWidth: 3 }} />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* simulated checkout CTA */}
              <button
                onClick={() => handleOpenCheckout(bundle)}
                className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
                  bundle.isFeatured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-[1.01]'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {bundle.cta}
              </button>

              {/* Stripe Checkout Trust Note */}
              <div className="flex items-center justify-center gap-1.5 mt-3 text-slate-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-350" />
                Stripe Secure Checkout • CAD
              </div>

            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <p className="text-center text-xs text-slate-500 mt-12 max-w-xl mx-auto leading-relaxed font-semibold">
          🔒 No ongoing subscription fees planned • Future PIPEDA-aligned offline privacy architecture • Fully Canadian company
        </p>

      </div>

      {/* Interactive Stripe Checkout Simulation Modal */}
      {selectedBundle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-scale-up">
            
            {/* Header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200/85 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-600" />
                <span className="font-sans font-bold text-sm text-slate-800">Stripe Secure Deposit Checkout</span>
              </div>
              <button
                onClick={() => setSelectedBundle(null)}
                className="text-slate-600 hover:text-slate-800 hover:bg-slate-200 bg-slate-100 font-bold py-1 px-2.5 rounded text-xs transition-colors"
              >
                Close
              </button>
            </div>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4 text-left">
                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Tier Selection
                  </span>
                  <span className="font-sans font-bold text-slate-900 text-base mt-0.5">
                    {selectedBundle.name}
                  </span>
                  <span className="text-xs text-indigo-600 font-bold mt-1">
                    Founding Reservation: ${selectedBundle.price} CAD (MSRP ${selectedBundle.msrp})
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={checkoutName}
                    onChange={(e) => setCheckoutName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={checkoutEmail}
                    onChange={(e) => setCheckoutEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                  <span className="text-[10px] text-slate-400 italic block mt-1">Strict privacy: Zero telemetry data collection policy.</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Vehicle Info (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. 2021 Toyota RAV4"
                    value={vehicleInfo}
                    onChange={(e) => setVehicleInfo(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>

                {/* Stripe Simulated Credit Card Panel */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 mt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Simulated Pre-order Card Entry</span>
                    <span className="text-[9px] text-indigo-650 bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">TEST MODE</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="col-span-4 bg-white border border-slate-200 rounded p-2 text-slate-700">
                      ••••  ••••  ••••  4242
                    </div>
                    <div className="col-span-2 bg-white border border-slate-200 rounded p-2 text-slate-500">
                      12 / 2029
                    </div>
                    <div className="col-span-2 bg-white border border-slate-200 rounded p-2 text-slate-500">
                      321
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold text-xs tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-indigo-650/15"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Authorizing...
                    </>
                  ) : (
                    `Complete Secure Deposit ($${selectedBundle.price} CAD)`
                  )}
                </button>

                <div className="text-center text-[10px] text-slate-400 font-semibold flex items-center justify-center gap-1 mt-1">
                  <span>🔒 Fully Refundable Pre-launch Deposit protection</span>
                </div>

              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-250 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check className="w-6 h-6 text-emerald-600 animate-fade-in" />
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-900">Founding Member Confirmed!</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                  Thank you, <span className="text-slate-800 font-bold">{checkoutName}</span>. We will reserve your <span className="text-indigo-650 font-bold">{selectedBundle.name}</span> spot. A structured pre-launch confirmation receipt has been sent to <span className="text-slate-800 font-bold">{checkoutEmail}</span>.
                </p>
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-[11px] text-indigo-650 font-bold inline-block">
                  🎯 Next Step: Check compatibility for and lock details of your device.
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBundle(null)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors mt-4"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
