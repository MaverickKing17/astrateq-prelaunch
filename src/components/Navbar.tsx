import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LayoutGrid, Wrench, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function Navbar({ onScrollToSection, currentPage = 'home', onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    if (onNavigate && id !== 'about') {
      onNavigate('home');
    }
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-45 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b border-slate-200/50 backdrop-blur-md shadow-xs py-2'
          : 'bg-white/80 border-b border-slate-100/30 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 transition-all duration-300">
          
          {/* Left: Brand Logo & Wordmark */}
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => {
              if (onNavigate) onNavigate('home');
              handleLinkClick('hero');
            }}
          >
            <div className="relative flex-shrink-0">
              <img 
                src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="Astrateq Gadgets Logo" 
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover border-[1.5px] border-slate-200 bg-white p-0.5 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-500 group-hover:shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-black text-sm sm:text-base text-slate-950 tracking-tight leading-none whitespace-nowrap">Astrateq Premium</span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-red-50 to-rose-50 border border-red-100/80 px-2 py-0.5 rounded-full text-[9px] font-black text-rose-600 uppercase tracking-widest shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
                  Canada Pilot
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10">
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="text-slate-600 hover:text-indigo-600 text-xs lg:text-[13px] font-bold tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              See How It Works
            </button>
            <button
              onClick={() => handleLinkClick('concepts')}
              className="text-slate-600 hover:text-indigo-600 text-xs lg:text-[13px] font-bold tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Concepts
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="text-indigo-600 hover:text-indigo-700 text-xs lg:text-[13px] font-extrabold tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full flex items-center gap-1.5 group"
            >
              <Wrench className="w-3.5 h-3.5 text-indigo-500 transition-transform group-hover:rotate-12" />
              <span>Verify Eligibility (30 sec)</span>
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-slate-600 hover:text-indigo-600 text-xs lg:text-[13px] font-bold tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              FAQ
            </button>
            <button
              onClick={handleAboutClick}
              className={`text-xs lg:text-[13px] font-bold tracking-tight transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full ${
                currentPage === 'about'
                  ? 'text-indigo-650 font-extrabold after:w-full'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              About Team
            </button>
          </nav>

          {/* Right: Premium CTA & View Controls */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 flex-shrink-0">

            {/* Main Purchase Call-To-Action */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <button
                onClick={() => handleLinkClick('pricing')}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-650 to-violet-600 hover:from-indigo-700 hover:to-violet-700 active:scale-98 rounded-xl text-xs lg:text-[13px] font-extrabold text-white shadow-md shadow-indigo-600/10 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 cursor-pointer text-center tracking-wide whitespace-nowrap hover:scale-[1.02]"
              >
                Secure Founding Driver Cohort Access
              </button>
              <span className="text-[9px] text-slate-500 font-bold mt-1 tracking-wide uppercase whitespace-nowrap flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>100% Refundable Deposit</span>
              </span>
            </div>

            {/* Hamburger button for mobile */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 hover:text-indigo-600 p-2 focus:outline-none transition-all duration-200 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white active:scale-95"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200/80 animate-fade-in text-slate-800 shadow-xl relative z-50">
          <div className="px-4 pt-4 pb-8 space-y-3">
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              See How It Works
            </button>
            <button
              onClick={() => handleLinkClick('concepts')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Concepts
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="w-full text-left py-2.5 px-3 rounded-lg text-indigo-700 hover:bg-indigo-50/50 font-extrabold text-sm transition-colors flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-indigo-600" />
              <span>Verify Eligibility (30 sec)</span>
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="block w-full text-left py-2.5 px-3 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={handleAboutClick}
              className={`block w-full text-left py-2.5 px-3 rounded-lg font-bold text-sm transition-colors ${
                currentPage === 'about'
                  ? 'text-indigo-605 bg-slate-50 font-extrabold'
                  : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              About Team
            </button>

            <div className="pt-4 border-t border-slate-150 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-center py-3 bg-gradient-to-r from-indigo-600 to-violet-650 text-white rounded-xl font-extrabold text-sm shadow-md active:scale-98 transition-all"
              >
                Secure Founding Driver Cohort Access
              </button>
              <span className="text-center text-[10px] text-slate-500 font-bold flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 inline shrink-0" />
                <span>100% Secure Refundable Deposit</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
