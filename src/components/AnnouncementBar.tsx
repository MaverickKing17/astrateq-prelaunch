import { ShieldAlert } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-slate-950 border-b border-brand-cyan/25 text-white py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 transition-all duration-300 relative z-50">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shrink-0" />
        <p className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
          🇨🇦 Summer 2026 Founding Member Pricing • Ends Soon
        </p>
      </div>
      <div className="flex items-center gap-2 bg-black/30 border border-brand-cyan/20 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-brand-cyan uppercase">
        <span>Ends In:</span>
        <CountdownTimer size="sm" />
      </div>
    </div>
  );
}
