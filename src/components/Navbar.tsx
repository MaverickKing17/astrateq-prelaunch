import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
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
      className={`sticky top-0 w-full z-43 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/40 border-b border-slate-800/50 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Logo & Wordmark */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleLinkClick('hero')}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-400 group-hover:shadow-indigo-500/35">
              <span className="font-sans font-black text-white text-base sm:text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xs sm:text-sm text-white tracking-[0.12em] uppercase leading-none">ASTRATEQ</span>
              <span className="text-[9px] text-warm-accent tracking-[0.15em] uppercase font-semibold mt-0.5">GADGETS</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-white/60 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Shop
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="text-white/60 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="text-white/60 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-white/60 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-white/60 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Support
            </button>
          </nav>

          {/* Right: Premium CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('waitlist')}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-full text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-400/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Get Started Free
            </button>
          </div>

          {/* Hamburger button for mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-cyan p-2 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-850 animate-fade-in text-white">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Shop Bundles
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Check Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              Support FAQs
            </button>
            <div className="pt-4">
              <button
                onClick={() => handleLinkClick('waitlist')}
                className="w-full text-center py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-sm shadow-md ring-1 ring-indigo-400/20"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
