import React, { useState, useEffect } from 'react';
import { Gift, X, Sparkles, Check } from 'lucide-react';

interface ExitIntentModalProps {
  onScrollToSection: (sectionId: string) => void;
  onLockDiscount: (email: string) => void;
}

export default function ExitIntentModal({ onScrollToSection, onLockDiscount }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user has already seen or closed it inside session
    const shownKey = 'astrateq_exit_modal_shown';
    if (sessionStorage.getItem(shownKey)) return;

    // Trigger on pointer leaving page window toward browser tabs (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 25) {
        setIsOpen(true);
        sessionStorage.setItem(shownKey, 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Fallback timer trigger for mobile/extended sessions (30 seconds)
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(shownKey)) {
        setIsOpen(true);
        sessionStorage.setItem(shownKey, 'true');
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xeedvalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: emailInput,
          type: 'Exit Intent Discount Offer'
        })
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsDone(true);
      onLockDiscount(emailInput);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200/80 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative p-6 sm:p-8 animate-scale-up text-left">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 hover:bg-slate-200 p-1.5 rounded-lg"
          aria-label="Close Promo"
        >
          <X className="w-4 h-4" />
        </button>

        {!isDone ? (
          <div className="space-y-5">
            
            {/* Incentive Header Badge */}
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-150 text-indigo-650 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              EXCLUSIVE ONE-TIME BONUS OFFER
            </div>

            {/* Title */}
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
              Wait! Secure an Extra <span className="text-indigo-600 font-bold">$25 CAD</span> Off Your Founding Reservation
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
              Don’t leave yet empty-handed. Enter your email below to instantly lock in an additional <span className="text-slate-900 font-extrabold">$25 credit</span> and receive your digital model compatibility & safety guide prelaunch.
            </p>

            {/* List key perks */}
            <ul className="space-y-2 text-xs text-slate-600 font-bold bg-slate-50 p-3.5 border border-slate-200/60 rounded-xl">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Extra $25 CAD Off All Bundle spots</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Free Model-Specific Digital Diagnostic Setup Report</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" style={{ strokeWidth: 3 }} />
                <span>Extended 3-Year Warranty spot priorities</span>
              </li>
            </ul>

            {/* Quick Lock Form */}
            <form onSubmit={handleApplyDiscount} className="space-y-3 pt-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your personal email address"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 shadow-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Secure Bonus Coupon
                    <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <span className="text-[9px] text-slate-450 block text-center mt-1 font-semibold">
              No credit card needed to secure coupon. Value applied instantly at checkout.
            </span>

          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Check className="w-6 h-6 text-emerald-600" style={{ strokeWidth: 3 }} />
            </div>

            <h3 className="font-sans font-extrabold text-lg text-slate-900">Extra $25 Credit Locked!</h3>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto font-medium">
              Spot confirmed for <span className="text-indigo-650 font-bold">{emailInput}</span>. An exclusive voucher code has been registered. It will be combined automatically with your prelaunch selection.
            </p>

            <div className="bg-slate-50 border border-slate-200 py-2 px-4 rounded-xl font-mono text-indigo-650 text-xs tracking-widest uppercase inline-block font-extrabold selection:bg-transparent shadow-inner">
              ASTRA-FND-SAVE25
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                onScrollToSection('pricing');
              }}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase cursor-pointer block mt-4 transition-all shadow-sm"
            >
              Continue to Bundles
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
