import { Shield, Sparkles, CheckCircle, Zap } from 'lucide-react';

interface FinalCtaProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FinalCta({ onScrollToSection }: FinalCtaProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-b border-slate-200 relative overflow-hidden text-center">
      {/* Background elegant grid pattern and glowing radial lights */}
      <div className="absolute inset-0 bg-transparent pointer-events-none opacity-20 select-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Intense color spotlight glows behind the card */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
        
        {/* Colorful Gradient Border Card Sleeve to stand out powerfully */}
        <div className="p-[2.5px] rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.22)] hover:shadow-[0_35px_70px_-10px_rgba(99,102,241,0.32)] transition-all duration-500 max-w-3xl mx-auto group hover:scale-[1.015]">
          
          {/* Card Inner with High-Immersive Dark Cyber Slate Background for premium presentation */}
          <div className="bg-slate-900 text-white rounded-[1.85rem] p-8 sm:p-14 relative overflow-hidden">
            
            {/* Spotlight shimmer effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
            
            <div className="space-y-8 relative z-10">
              
              {/* Premium Colorful Top Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/40 rounded-full text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-none mx-auto backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
                <span>LIMITED SECURE RESERVATIONS</span>
              </div>

              {/* Colorful Visual Shield Container */}
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="relative w-16 h-16 bg-slate-950 border-2 border-indigo-500/50 rounded-2xl flex items-center justify-center drop-shadow-md">
                  <Shield className="w-8 h-8 text-indigo-400 group-hover:text-amber-400 transition-colors duration-300" style={{ strokeWidth: 2.2 }} />
                </div>
              </div>

              {/* Title with elegant bold lettering and custom color accents */}
              <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight leading-tight max-w-2xl mx-auto bg-gradient-to-r from-white via-slate-100 to-indigo-100 bg-clip-text text-transparent">
                Secure Premium Vehicle Intelligence <br className="hidden sm:block" /> for Your Family Today
              </h2>

              {/* Summary Description block with bright color text for maximum readability */}
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
                Don’t settle for intrusive, cloud-streaming trackers that charge monthly subscription fees. Give your household <span className="text-indigo-300 font-extrabold">100% private</span>, predictive AI assistance built strictly for <span className="text-rose-405 font-extrabold">Canadian highway standards</span>.
              </p>

              {/* Two Column Key Trust Points for visual impact */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto pt-2 pb-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-950/40 border border-slate-800 rounded-xl text-left">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs text-slate-300 font-bold">Zero Monthly Subscription</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-950/40 border border-slate-800 rounded-xl text-left">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs text-slate-300 font-bold">100% Offline AI Model</span>
                </div>
              </div>

              {/* Interactive Call Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                
                {/* Colorful Main CTA Button */}
                <button
                  type="button"
                  onClick={() => onScrollToSection('pricing')}
                  className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-indigo-650 to-purple-600 hover:from-indigo-400 hover:via-indigo-550 hover:to-purple-500 text-white rounded-xl font-extrabold text-xs uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-indigo-950/50 hover:shadow-indigo-550/25 cursor-pointer flex items-center justify-center gap-2 select-none border border-indigo-405/30"
                >
                  <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
                  Secure Founding Pricing
                </button>

                {/* Secondary Ghost Button with Border Light Hover */}
                <button
                  type="button"
                  onClick={() => onScrollToSection('waitlist')}
                  className="px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-slate-700 hover:border-indigo-400/60 text-slate-200 hover:text-white rounded-xl font-extrabold text-xs uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 select-none"
                >
                  Join Waitlist Now
                </button>
              </div>

              {/* Final reassurance badge */}
              <div className="flex items-center justify-center gap-2 text-[10.5px] text-slate-400 font-bold pt-4 border-t border-slate-800/60 max-w-lg mx-auto">
                <span className="animate-bounce">🇨🇦</span>
                <span className="text-slate-350">Over 1,200+ Canadian drivers are already waiting in the pre-launch queue</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
