import { Sparkles, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#030712] via-[#0a0f1d] to-[#030712] border-b border-indigo-500/15 text-white py-2.5 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 transition-all duration-300 relative z-50 shadow-lg select-none">
      {/* Decorative subtle ambient line under the border */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Left Column: Founding Member Badge & Text */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/25 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-widest text-indigo-400">
          <Sparkles className="w-3 h-3 text-indigo-400 select-none animate-pulse" />
          <span>Founding Status</span>
        </div>
        <p className="text-[11px] sm:text-[12px] font-bold tracking-tight text-slate-100 flex items-center gap-1.5">
          <span className="text-sm select-none">🇨🇦</span> 
          <span>Summer 2026 Canadian Pilot Cohort Allocation Active</span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-indigo-300 font-extrabold text-[11px] uppercase tracking-wide">Founding Member Pricing Locked</span>
        </p>
      </div>

      {/* Right Column: Custom Clean Countdown Nest */}
      <div className="flex items-center gap-2 text-slate-300 pr-1">
        <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1 font-mono text-[10px] sm:text-xs">
          <div className="relative flex h-1.5 w-1.5 shrink-0 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
          </div>
          <span className="text-slate-400 font-extrabold tracking-wider uppercase text-[9px] mr-1.5 flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-500" /> RESV CLOSES IN:
          </span>
          <CountdownTimer size="sm" />
        </div>
      </div>
    </div>
  );
}

