import CountdownTimer from './CountdownTimer';

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-slate-950 border-b-2 border-rose-500/30 text-white py-3.5 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 transition-all duration-300 relative z-50 shadow-lg selection:bg-rose-600">
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>
        </div>
        <p className="text-xs sm:text-sm md:text-base font-black tracking-wide text-white drop-shadow-sm select-none">
          🇨🇦 Summer 2026 Founding Member Pricing • Ends Soon
        </p>
      </div>
      <div className="flex items-center gap-3 bg-slate-900 border-2 border-rose-500/20 px-4 py-1.5 rounded-xl text-[10px] sm:text-xs font-black tracking-wider text-rose-300 uppercase shadow-inner">
        <span className="text-rose-200 tracking-widest">Ends In:</span>
        <CountdownTimer size="sm" />
      </div>
    </div>
  );
}
