import { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import LocalIntelligence from './components/LocalIntelligence';
import CompatibilityChecker from './components/CompatibilityChecker';
import WaitlistSection from './components/WaitlistSection';
import WhatIsIncluded from './components/WhatIsIncluded';
import RiskReversal from './components/RiskReversal';
import FaqAccordion from './components/FaqAccordion';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import ExitIntentModal from './components/ExitIntentModal';
import DigitalOBDScanner from './components/DigitalOBDScanner';
import { ShieldAlert, CheckCircle, Gift, ArrowUp } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success' | 'gift'>('info');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Stripe checkout redirects
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('checkout_status');
    if (status === 'success') {
      const bundleName = params.get('bundle') || 'DriveGuard Setup';
      const email = params.get('email') || '';
      const name = params.get('name') || '';
      
      showToast(`Stripe Spot Confirmed! Reserved ${bundleName} for ${name || 'your household'}. Receipt sent to ${email}`, 'success');
      
      // Clear URL query parameters cleanly
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (status === 'cancelled') {
      showToast('Stripe pre-reservation checkout was cancelled.', 'info');
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'info' | 'success' | 'gift' = 'info') => {
    setToastMessage(message);
    setToastType(type);
    
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveSuccess = (email: string, bundle: string) => {
    showToast(`Spot reservation confirmed for ${bundle}! Receipt sent to ${email}`, 'success');
  };

  const handleWaitlistSuccess = (email: string) => {
    showToast(`Registered successfully! Locked early pre-order priority queue for ${email}`, 'info');
  };

  const handleLockDiscount = (email: string) => {
    showToast(`Extra $25 CAD early-access credit applied for ${email}! Code: ASTRATEQ-FND-SAVE25`, 'gift');
  };

  const handleCompatibilitySuccess = (vehicle: string) => {
    showToast(`OBD-II standards verified: ${vehicle} is 100% compatible!`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans relative select-none">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navigation Bar */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* 3. Hero Section (Full Viewport) */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 4. Trust Signals Bar */}
      <TrustBar />

      {/* 5. How It Works Section */}
      <HowItWorks />

      {/* 6. Local Intelligence Technical Deep-Dive */}
      <LocalIntelligence />

      {/* 7. Interactive Compatibility Checker */}
      <CompatibilityChecker 
        onCheckSuccess={handleCompatibilitySuccess} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 7.5 Interactive Digital OBD-II Diagnostic Scanner */}
      <DigitalOBDScanner />

      {/* 8. Bundles & Pricing Section */}
      <Pricing onReserveSuccess={handleReserveSuccess} />

      {/* 9. What’s Included Detailed Breakdown */}
      <WhatIsIncluded />

      {/* 10. Email Waitlist Capture Section */}
      <WaitlistSection onSuccess={handleWaitlistSuccess} />

      {/* 11. Risk Reversal & Trust Commitments Section */}
      <RiskReversal />

      {/* 12. FAQ Accordion Section */}
      <FaqAccordion />

      {/* 13. Final CTA Action block */}
      <FinalCta onScrollToSection={handleScrollToSection} />

      {/* 14. Detailed Premium Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 15. Premium Exit-Intent Coupon Modal */}
      <ExitIntentModal 
        onScrollToSection={handleScrollToSection} 
        onLockDiscount={handleLockDiscount} 
      />

      {/* Colorful Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-gradient-to-tr from-rose-500 via-indigo-600 to-violet-500 hover:from-rose-600 hover:to-violet-600 text-white p-3.5 rounded-full shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-110 active:scale-95 border border-white/25 transition-all duration-300 animate-scale-up group cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" style={{ strokeWidth: 3 }} />
        </button>
      )}

      {/* Non-intrusive Premium Toast Notification Panel */}
      {toastMessage && (
        <div className="fixed bottom-24 right-5 sm:right-6 z-50 animate-scale-up max-w-sm w-full bg-white border-2 border-indigo-500/20 rounded-2xl p-4 shadow-xl flex items-start gap-3 backdrop-blur-md text-slate-800">
          {toastType === 'success' && (
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          )}
          {toastType === 'info' && (
            <ShieldAlert className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
          )}
          {toastType === 'gift' && (
            <Gift className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
          )}
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {toastType === 'success' && 'Secure Event Success'}
              {toastType === 'info' && 'System Notice Active'}
              {toastType === 'gift' && 'Voucher Registered'}
            </span>
            <p className="text-xs text-slate-800 leading-normal font-bold mt-0.5">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
