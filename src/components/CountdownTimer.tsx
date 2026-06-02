import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CountdownTimer({ className = '', size = 'md' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 47,
    hours: 11,
    minutes: 34,
    seconds: 9
  });

  useEffect(() => {
    // We want a synchronized countdown. To keep it consistent across renders and mounts,
    // we set a target timestamp in localStorage or base it on a fixed relative duration.
    const key = 'astrateq_countdown_target';
    let targetStr = localStorage.getItem(key);
    let target: number;

    if (!targetStr) {
      // 47 days, 11 hours, 34 minutes, 9 seconds from now
      const durationMs = (47 * 24 * 3600 + 11 * 3600 + 34 * 60 + 9) * 1000;
      target = Date.now() + durationMs;
      localStorage.setItem(key, target.toString());
    } else {
      target = parseInt(targetStr);
      // If the target has already passed, reset it to mock another future pre-launch event
      if (target <= Date.now()) {
        const durationMs = (12 * 24 * 3600 + 5 * 3600 + 19 * 60 + 22) * 1000; // soft reset
        target = Date.now() + durationMs;
        localStorage.setItem(key, target.toString());
      }
    }

    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  if (size === 'sm') {
    return (
      <div className={`flex items-center gap-1 font-mono text-sm sm:text-base font-black ${className}`}>
        <span className="text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{formatNum(timeLeft.days)}</span>
        <span className="text-[10px] text-amber-500/75 font-black mr-0.5">D</span>
        <span className="text-amber-500/30 font-light">:</span>
        <span className="text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{formatNum(timeLeft.hours)}</span>
        <span className="text-[10px] text-amber-500/75 font-black mr-0.5">H</span>
        <span className="text-amber-500/30 font-light">:</span>
        <span className="text-amber-400 font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">{formatNum(timeLeft.minutes)}</span>
        <span className="text-[10px] text-amber-500/75 font-black mr-0.5">M</span>
        <span className="text-amber-500/30 font-light">:</span>
        <span className="text-rose-500 font-black animate-pulse drop-shadow-[0_0_12px_rgba(244,63,94,0.7)]">{formatNum(timeLeft.seconds)}</span>
        <span className="text-[10px] text-rose-500/80 font-black">S</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 ${className}`}>
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="bg-[#0B0F19] border border-slate-800/70 rounded-xl px-3 py-2 text-center min-w-[54px] sm:min-w-[64px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <span className="font-mono font-bold text-xl sm:text-2xl text-slate-50 tracking-tight relative z-10">{formatNum(timeLeft.days)}</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.15em] text-slate-400 font-bold mt-1.5">DAYS</span>
      </div>

      <span className="font-mono font-bold text-slate-500 text-lg sm:text-xl pb-4 animate-pulse shrink-0">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="bg-[#0B0F19] border border-slate-800/70 rounded-xl px-3 py-2 text-center min-w-[54px] sm:min-w-[64px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <span className="font-mono font-bold text-xl sm:text-2xl text-slate-50 tracking-tight">{formatNum(timeLeft.hours)}</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.15em] text-slate-400 font-bold mt-1.5">HOURS</span>
      </div>

      <span className="font-mono font-bold text-slate-500 text-lg sm:text-xl pb-4 animate-pulse shrink-0">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="bg-[#0B0F19] border border-slate-800/70 rounded-xl px-3 py-2 text-center min-w-[54px] sm:min-w-[64px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <span className="font-mono font-bold text-xl sm:text-2xl text-slate-50 tracking-tight">{formatNum(timeLeft.minutes)}</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.15em] text-slate-400 font-bold mt-1.5">MINS</span>
      </div>

      <span className="font-mono font-bold text-slate-500 text-lg sm:text-xl pb-4 animate-pulse shrink-0">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="bg-[#0B0F19] border border-indigo-500/20 rounded-xl px-3 py-2 text-center min-w-[54px] sm:min-w-[64px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.04] to-transparent pointer-events-none" />
          <span className="font-mono font-bold text-xl sm:text-2xl text-indigo-400 tracking-tight relative z-10">{formatNum(timeLeft.seconds)}</span>
          <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-indigo-500/30 blur-[0.5px]" />
        </div>
        <span className="text-[8px] uppercase tracking-[0.15em] text-indigo-400 font-bold mt-1.5">SECS</span>
      </div>
    </div>
  );
}
