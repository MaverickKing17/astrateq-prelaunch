import React, { useState } from 'react';
import { Heart, Send, Copyright, Instagram, Twitter, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xeedvalq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          type: 'Technical Announcements Form'
        })
      });
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#0F172A] border-t border-white/10 pt-16 pb-8 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo Column */}
          <div className="md:col-span-4 space-y-4">
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => onScrollToSection('hero')}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-950 to-indigo-900/30 border border-indigo-500/25 flex items-center justify-center shadow-lg transition-colors group-hover:border-indigo-500/50">
                <span className="font-display font-black text-sm text-indigo-400 tracking-wider">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xs text-white tracking-[0.12em] uppercase leading-none">ASTRATEQ</span>
                <span className="text-[9px] text-indigo-400 tracking-[0.14em] uppercase font-bold mt-0.5">GADGETS</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-semibold">
              Delivering high-integrity automotive intelligence hardware locally processed at the edge. Protecting Canadian families with advanced predictive vision safety.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/3 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-450 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/3 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-450 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-cyan-400/5 hover:bg-cyan-400/15 flex items-center justify-center text-cyan-400 border border-cyan-400/20 transition-all" aria-label="Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#22D3EE]">
              Product Overview
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li>
                <button onClick={() => onScrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Shop Device Bundles
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('how-it-works')} className="hover:text-white transition-colors cursor-pointer">
                  How Edge Sync Works
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('compatibility')} className="hover:text-white transition-colors cursor-pointer">
                  Check OBD Compatibility
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('trust-guarantees')} className="hover:text-white transition-colors cursor-pointer">
                  Trial Trust Guarantees
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policy links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              Legal Declarations
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li><span className="hover:text-white cursor-pointer transition-colors block">Privacy Shield Directive</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors block">PIPEDA Compliance</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors block">Terms of Prelaunch Reservation</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors block">Cookie Sovereignty Policy</span></li>
            </ul>
          </div>

          {/* Right quick subscribe */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              Technical Announcements
            </h4>
            <div className="space-y-3">
              <p className="text-[10px] sm:text-xs text-gray-400 leading-normal font-semibold">
                Get notified on firmware revisions, hardware releases, and Canadian pre-launch slots.
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-1 bg-slate-900 border border-white/10 p-1 rounded-xl">
                <input
                  type="email"
                  required
                  value={email}
                  disabled={isSubmitting}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSubmitted ? "Joined Newsletter!" : "Enter email select"}
                  className="flex-1 bg-transparent px-2 py-1.5 text-[10px] text-white focus:outline-none placeholder-gray-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-[9px] font-bold uppercase cursor-pointer transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "..." : isSubmitted ? "Saved" : "Join"}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Lower row details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
            <Copyright className="w-3.5 h-3.5" />
            <span>2026 Astrateq Gadgets Inc. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium bg-white/3 border border-white/5 py-1 px-2.5 rounded-full">
            <span>Designed for Canadian Road Security with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in beautiful British Columbia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
