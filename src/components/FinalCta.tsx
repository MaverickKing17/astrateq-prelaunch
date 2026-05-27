import { Shield, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function FinalCta({ onScrollToSection }: FinalCtaProps) {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden text-center">
      {/* Soft overlay elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-800/40 border border-[#6366f1]/25 rounded-3xl p-8 sm:p-14 backdrop-blur-md shadow-2xl relative max-w-3xl mx-auto">
          
          <div className="space-y-6">
            {/* Visual Spark icon */}
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/25 rounded-2xl flex items-center justify-center mx-auto mb-2 animate-pulse">
              <Shield className="w-6 h-6 text-[#22D3EE]" />
            </div>

            {/* Title */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              Secure Premium Vehicle Intelligence for Your Family Today
            </h2>

            {/* Summary description block */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
              Don’t settle for intrusive, cloud-streaming trackers that charge monthly subscription fees. Give your household 100% private, predictive AI assistance built strictly for Canadian highway standards.
            </p>

            {/* Call actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="button"
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-indigo-600/35 cursor-pointer"
              >
                Secure Founding Pricing
              </button>
              <button
                type="button"
                onClick={() => onScrollToSection('waitlist')}
                className="px-8 py-3.5 bg-white text-slate-950 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer"
              >
                Join Waitlist Now
              </button>
            </div>

            {/* Final reassurance */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-semibold pt-4">
              <span>🇨🇦 Over 1,200+ Canadian drivers are already waiting in the pre-launch queue</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
