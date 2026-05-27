import CountdownTimer from './CountdownTimer';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-slate-900 border-b border-indigo-500/10 text-white py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 transition-all duration-300 relative z-50 shadow-sm selection:bg-indigo-600">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shrink-0" />
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/95">
          🇨🇦 Summer 2026 Founding Member Pricing • Ends Soon
        </p>
      </div>
      <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-indigo-300 uppercase">
        <span>Ends In:</span>
        <CountdownTimer size="sm" />
      </div>
    </div>
  );
}
