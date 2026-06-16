import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, LayoutGrid } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  currentView: 'landing' | 'infographic' | 'funnel';
  onViewChange: (view: 'landing' | 'infographic' | 'funnel') => void;
}

export default function Navbar({ onScrollToSection, currentView, onViewChange }: NavbarProps) {
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
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b border-slate-200/80 backdrop-blur-md shadow-sm py-1.5'
          : 'bg-white/80 border-b border-slate-100/50 backdrop-blur-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 transition-all duration-300">
          
          {/* Left: Brand Logo & Wordmark */}
          <div 
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => {
              if (currentView === 'infographic') {
                onViewChange('landing');
              } else {
                handleLinkClick('hero');
              }
            }}
          >
            <div className="relative flex-shrink-0">
              <img 
                src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="Astrateq Gadgets Logo" 
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover border-2 border-indigo-600 bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-black text-sm sm:text-base text-slate-950 tracking-tight leading-none whitespace-nowrap">Astrateq Gadgets</span>
                <span className="hidden sm:inline-flex items-center gap-0.5 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded text-[9px] font-black text-rose-600 uppercase tracking-wider">
                  <span>🍁</span> Canada
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 lg:gap-8 xl:gap-10">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Shop
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('digital-scanner')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Diagnostic Scanner
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-slate-600 hover:text-indigo-650 text-xs lg:text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 cursor-pointer relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              Support
            </button>
          </nav>

          {/* Right: Premium CTA & View Controls */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 flex-shrink-0">
            {/* View Multi-Toggle pill switcher */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => onViewChange('landing')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  currentView === 'landing'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Showcase
              </button>
              <button
                onClick={() => onViewChange('funnel')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-wide uppercase transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                  currentView === 'funnel'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3 h-3 text-current" />
                <span>Tesla Funnel</span>
              </button>
              <button
                onClick={() => onViewChange('infographic')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  currentView === 'infographic'
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Structure
              </button>
            </div>

            {/* Main Purchase Call-To-Action */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <button
                onClick={() => handleLinkClick('pricing')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-600/25 active:scale-95 rounded-xl text-xs lg:text-sm font-extrabold text-white shadow-lg shadow-indigo-600/15 transition-all duration-300 cursor-pointer text-center tracking-wide whitespace-nowrap hover:scale-[1.02]"
              >
                Reserve Space — $49 CAD
              </button>
              <span className="text-[9px] text-slate-500 font-bold mt-1 tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5">
                <span>🛡️</span> 100% Fully Refundable
              </span>
            </div>

            {/* Hamburger button for mobile */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 hover:text-indigo-600 p-2 focus:outline-none transition-colors border border-slate-200 rounded-lg bg-slate-50 hover:bg-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-fade-in text-slate-800 shadow-xl relative z-50">
          <div className="px-4 pt-4 pb-8 space-y-4">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Shop Bundles
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Check Vehicle Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('digital-scanner')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Direct OBD-II Scanner
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Prelaunch Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="block w-full text-left py-3 px-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-50 font-bold text-sm transition-colors"
            >
              Support FAQs
            </button>
            {/* Mobile Representation Segment Swappers */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="block text-[9px] font-mono tracking-widest font-black text-slate-400 uppercase">APP VIEW LAYOUTS</span>
              
              <button
                onClick={() => {
                  onViewChange('landing');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'landing' ? 'bg-white border border-slate-200 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                1. Full Interactive Showcase
              </button>

              <button
                onClick={() => {
                  onViewChange('funnel');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                  currentView === 'funnel' ? 'bg-indigo-650 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>2. Tesla CRO Validation Funnel</span>
                <span className="bg-rose-500 text-white font-mono text-[8px] font-black px-1.5 py-0.5 rounded uppercase">ACTIVE</span>
              </button>

              <button
                onClick={() => {
                  onViewChange('infographic');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'infographic' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                3. Technical Infographic
              </button>
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-center py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-extrabold text-sm shadow-md"
              >
                Reserve Space — $49 CAD
              </button>
              <span className="text-center text-[11px] text-slate-500 font-bold block">
                🛡️ 100% Fully Refundable Deposit
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
