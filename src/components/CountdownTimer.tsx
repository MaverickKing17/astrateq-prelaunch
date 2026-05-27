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
      <div className={`flex items-center gap-1 font-mono text-xs font-semibold text-indigo-400 ${className}`}>
        <span>{formatNum(timeLeft.days)}d</span>
        <span>:</span>
        <span>{formatNum(timeLeft.hours)}h</span>
        <span>:</span>
        <span>{formatNum(timeLeft.minutes)}m</span>
        <span>:</span>
        <span className="text-cyan-400">{formatNum(timeLeft.seconds)}s</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`}>
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="bg-slate-950 border-2 border-slate-800 rounded-xl px-2.5 py-1.5 text-center min-w-[54px] sm:min-w-[62px] shadow-lg shadow-indigo-950/15">
          <span className="font-mono font-black text-lg sm:text-2xl text-white tracking-tight">{formatNum(timeLeft.days)}</span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold mt-1.5">Days</span>
      </div>

      <span className="font-display font-black text-slate-800 text-lg sm:text-xl pb-5">:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="bg-slate-950 border-2 border-slate-800 rounded-xl px-2.5 py-1.5 text-center min-w-[54px] sm:min-w-[62px] shadow-lg shadow-indigo-950/15">
          <span className="font-mono font-black text-lg sm:text-2xl text-white tracking-tight">{formatNum(timeLeft.hours)}</span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold mt-1.5">Hrs</span>
      </div>

      <span className="font-display font-black text-slate-800 text-lg sm:text-xl pb-5">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="bg-slate-950 border-2 border-slate-800 rounded-xl px-2.5 py-1.5 text-center min-w-[54px] sm:min-w-[62px] shadow-lg shadow-indigo-950/15">
          <span className="font-mono font-black text-lg sm:text-2xl text-white tracking-tight">{formatNum(timeLeft.minutes)}</span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold mt-1.5">Min</span>
      </div>

      <span className="font-display font-black text-slate-800 text-lg sm:text-xl pb-5">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="bg-slate-950 border-2 border-slate-800/80 rounded-xl px-2.5 py-1.5 text-center min-w-[54px] sm:min-w-[62px] shadow-lg shadow-indigo-950/15 border-indigo-500/40">
          <span className="font-mono font-black text-lg sm:text-2xl text-cyan-400 tracking-tight animate-pulse">{formatNum(timeLeft.seconds)}</span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-extrabold mt-1.5">Sec</span>
      </div>
    </div>
  );
}
