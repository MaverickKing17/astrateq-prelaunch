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
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 border-b border-slate-200 backdrop-blur-md shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Brand Logo & Wordmark */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleLinkClick('hero')}
          >
            <img 
              src="https://i.ibb.co/99HZPdq1/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
              alt="ASTRA Logo" 
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-cover border border-slate-200 bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xs sm:text-sm text-slate-900 tracking-[0.12em] uppercase leading-none">ASTRATEQ</span>
              <span className="text-[9px] text-indigo-600 tracking-[0.15em] uppercase font-semibold mt-0.5">GADGETS</span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-slate-600 hover:text-indigo-600 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Shop
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="text-slate-600 hover:text-indigo-600 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="text-slate-600 hover:text-indigo-600 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="text-slate-600 hover:text-indigo-600 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-slate-600 hover:text-indigo-600 text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              Support
            </button>
          </nav>

          {/* Right: Premium CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleLinkClick('waitlist')}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-full text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-600/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Get Started Free
              </button>
            </div>

            {/* Hamburger button for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-800 hover:text-indigo-600 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-fade-in text-slate-800 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-2.5 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Shop Bundles
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className="block w-full text-left py-2.5 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('compatibility')}
              className="block w-full text-left py-2.5 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Check Compatibility
            </button>
            <button
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left py-2.5 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Bundles
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="block w-full text-left py-2.5 text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Support FAQs
            </button>
            <div className="pt-4">
              <button
                onClick={() => handleLinkClick('waitlist')}
                className="w-full text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-sm shadow-md"
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
