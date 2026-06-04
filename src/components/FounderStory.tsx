import React from 'react';
import { ShieldAlert, MapPin, Heart, HelpCircle, ArrowRight } from 'lucide-react';

interface FounderStoryProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FounderStory({ onScrollToSection }: FounderStoryProps) {
  return (
    <section id="founder-story" className="py-24 bg-[#FCFDFE] border-y border-slate-200/60 relative overflow-hidden">
      {/* Visual background aesthetics */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-red-100/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-indigo-100/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-left">
        
        {/* Visual Badge */}
        <div className="mb-8 flex items-center justify-start">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-full px-4 py-2 text-slate-800 text-[10.5px] font-black uppercase tracking-widest leading-none font-mono">
            🍁 Letter From the Founders
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Bold Headline and visual sign-off */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
              Why We Built Astrateq
            </h2>
            
            <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed">
              Based in Vancouver, British Columbia, we are a group of Canadian engineers, designers, and consumer privacy advocates committed to physical data sovereignty.
            </p>

            <div className="pt-4 border-t border-slate-200/80 space-y-3">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono block">OUR PILLARS</span>
              
              <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-700 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span>Built for Canadian families</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Built for Canadian roads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Built for privacy-conscious drivers</span>
                </div>
              </div>
            </div>

            {/* Simulated interactive signature cards */}
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-mono font-bold text-sm">
                  JA
                </div>
                <div className="text-left leading-none">
                  <span className="text-xs font-black block text-slate-900">James Anderson</span>
                  <span className="text-[9.5px] text-slate-400 font-medium font-mono">Co-Founder, Firmware Design</span>
                </div>
              </div>
              <span className="text-xs font-serif italic text-slate-400 select-none">Vancouver, BC</span>
            </div>
          </div>

          {/* Right Block: Pure, Authentic Jargon-Free Story text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
            
            <div className="border-l-4 border-indigo-600 pl-4 py-1">
              <p className="text-slate-905 font-bold leading-relaxed text-base">
                "Most connected vehicle technologies send sensitive driving information to cloud services. We believe drivers should have greater control over their own data."
              </p>
            </div>

            <p>
              Every time you buckle up in a modern connected car, you're driving a data goldmine. Major manufacturers, diagnostic portals, and subscription safety utilities compile continuous telemetry: where you go, when you steer, and how fast you accelerate.
            </p>

            <p>
              This isn't just about ads. Insurance brokers buy driver profiling digests to quietly increase premiums, and complex multi-national backend servers track vehicle locations under terms you're forced to accept just to start your engine.
            </p>

            <p>
              We resolved to build a better option. <strong>Astrateq was created to bring intelligent vehicle insights directly to drivers while keeping information where it belongs: inside the vehicle.</strong>
            </p>

            <p>
              By combining high-efficiency edge AI microprocessors inside a windshield-mounted dashcam with a custom local OBD-II hardware harness, ASTRA acts as a localized offline safety sentinel. It scans lanes, detects collision hazards, and deciphers vehicle trouble codes natively in under 12 milliseconds—without transmitting a single byte of personal telemetry outside your cabin door.
            </p>

            <p>
              We firmly refuse the subscription SaaS loop. We buy high-end materials once and maintain physical ownership of our dashboards. Your purchase provides a permanent, secure safety system completely free of monthly recurring fee structures, tracking coordinates, or data mining compromises.
            </p>

            <div className="pt-4 text-left">
              <button
                type="button"
                onClick={() => onScrollToSection('pricing')}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-[#0F172A] hover:bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                Join the Founding Driver Queue
                <ArrowRight size={13} className="text-indigo-400 animate-pulse" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
