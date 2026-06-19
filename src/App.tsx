import { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import ValidationTransparency from './components/ValidationTransparency';

// Custom New Components requested in the conversion framework
import FoundingDriver from './components/FoundingDriver';
import EmotionalBenefits from './components/EmotionalBenefits';
import FounderStory from './components/FounderStory';
import AppleProductShowcase from './components/AppleProductShowcase';
import SocialProofReplacement from './components/SocialProofReplacement';
import TeslaFunnel from './components/TeslaFunnel';
import AboutUs from './components/AboutUs';

import { ShieldAlert, CheckCircle, Gift, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success' | 'gift'>('info');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailDebugStatus, setEmailDebugStatus] = useState<string | null>(null);
  const [emailDebugError, setEmailDebugError] = useState<string | null>(null);
  const [emailApiStatus, setEmailApiStatus] = useState<number | null>(null);
  const [emailApiId, setEmailApiId] = useState<string | null>(null);

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
      const selectedTier = params.get('bundle') || 'DriveGuard Setup';
      const email = params.get('email') || '';
      const simulatedAmount = "$0.00 CAD";
      
      console.log('Initiating reservation success email pipeline...');
      setEmailDebugStatus('Processing reservation...');
      setEmailDebugError(null);
      setEmailApiStatus(null);
      setEmailApiId(null);
      showToast('Processing reservation...', 'info');
      
      // Call secure server action to trigger Resend confirmation email
      fetch('/api/send-reservation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          selectedTier: selectedTier,
          simulatedAmount: simulatedAmount,
          timestamp: new Date().toISOString()
        })
      })
      .then(async response => {
        setEmailApiStatus(response.status);
        const data = await response.json();
        console.log('Email API response:', response.status, data);
        
        if (response.ok && data && data.success) {
          setEmailApiId(data.resendId || null);
          setEmailDebugStatus('Reservation received. Confirmation email sent.');
          showToast('Reservation received. Confirmation email sent.', 'success');
        } else {
          const errMsg = data.error || 'Email dispatch failed';
          setEmailDebugStatus('Reservation received, but confirmation email could not be sent.');
          setEmailDebugError(errMsg);
          showToast(`Reservation received, but confirmation email could not be sent. Error: ${errMsg}`, 'info');
        }
      })
      .catch(err => {
        console.error("Error dispatching reservation confirmation email:", err);
        const errMsg = err.message || 'Network error';
        setEmailApiStatus(500);
        setEmailDebugStatus('Reservation received, but confirmation email could not be sent.');
        setEmailDebugError(errMsg);
        showToast(`Reservation received, but confirmation email could not be sent. Error: ${errMsg}`, 'info');
      });
      
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
    let targetId = sectionId;
    if (sectionId === 'pricing') targetId = 'reserve';
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
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
    <div className="min-h-screen flex flex-col font-sans relative select-none bg-[#F8FAFC] text-slate-900">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navigation Bar */}
      <Navbar onScrollToSection={handleScrollToSection} currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Visual Email Reservation Pipeline Debug Status Banner */}
      {emailDebugStatus && (
        <div className="bg-slate-900 border-b-2 border-indigo-500 text-white py-4 px-6 relative z-50">
          <div className="max-w-4xl mx-auto flex flex-col gap-3 font-mono text-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${
                  emailDebugStatus.includes('could not') || emailDebugStatus.includes('failed')
                    ? 'bg-rose-500'
                    : emailDebugStatus.includes('sent') || emailDebugStatus.includes('successfully')
                      ? 'bg-emerald-500'
                      : 'bg-indigo-500 animate-pulse'
                }`} />
                <span className="font-extrabold text-indigo-400">RESERVATION DISPATCH DEBUGGER:</span>
                <span className="text-slate-100 font-bold">{emailDebugStatus}</span>
              </div>
              <button 
                onClick={() => setEmailDebugStatus(null)}
                className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer underline hover:no-underline"
              >
                [Dismiss]
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300">
              <div>• Email API called: <strong className="text-white">yes</strong></div>
              <div>• API response status: <strong className="text-white">{emailApiStatus !== null ? emailApiStatus : 'N/A'}</strong></div>
              <div>• Resend email ID if available: <strong className="text-emerald-400">{emailApiId || 'N/A'}</strong></div>
              <div>• Error message if failed: <strong className="text-rose-400">{emailDebugError || 'none'}</strong></div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'home' ? (
        <TeslaFunnel onReserveSuccess={handleReserveSuccess} onNavigate={setCurrentPage} />
      ) : (
        <AboutUs onBackToHome={() => setCurrentPage('home')} onScrollToSection={handleScrollToSection} />
      )}

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
