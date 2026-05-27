import { useState } from 'react';
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
import { ShieldAlert, CheckCircle, Gift } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success' | 'gift'>('info');

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
    showToast(`Extra $25 CAD early-access credit applied for ${email}! Code: ASTRA-FND-SAVE25`, 'gift');
  };

  const handleCompatibilitySuccess = (vehicle: string) => {
    showToast(`OBD-II standards verified: ${vehicle} is 100% compatible!`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col font-sans relative select-none">
      
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

      {/* Non-intrusive Premium Toast Notification Panel */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-up max-w-sm w-full bg-[#131D2E]/95 border-2 border-brand-cyan/25 rounded-2xl p-4 shadow-[0_4px_30px_rgba(0,212,255,0.15)] flex items-start gap-3 backdrop-blur-md">
          {toastType === 'success' && (
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          {toastType === 'info' && (
            <ShieldAlert className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
          )}
          {toastType === 'gift' && (
            <Gift className="w-5 h-5 text-warm-accent shrink-0 mt-0.5" />
          )}
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
              {toastType === 'success' && 'Secure Event Success'}
              {toastType === 'info' && 'System Notice Active'}
              {toastType === 'gift' && 'Voucher Registered'}
            </span>
            <p className="text-xs text-white/90 leading-normal font-bold mt-0.5">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
