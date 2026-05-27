import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Award, WifiOff, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Live fluctuations to make the mock dashboard feel authentic and active
  const [awareness, setAwareness] = useState(98);
  const [latency, setLatency] = useState(12);
  const [status, setStatus] = useState('Optimal');

  useEffect(() => {
    const awarenessInterval = setInterval(() => {
      setAwareness((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next > 99 ? 99 : next < 96 ? 96 : next;
      });
    }, 3000);

    const latencyInterval = setInterval(() => {
      setLatency((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;
        return next > 14 ? 14 : next < 11 ? 11 : next;
      });
    }, 4500);

    return () => {
      clearInterval(awarenessInterval);
      clearInterval(latencyInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Orbs & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Premium Direct-Response Copy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Canadian Founders Badge */}
            <div className="inline-flex self-start items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Now in Public Beta
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
              Predictive AI safety,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                elevated to art.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-gray-400 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Local edge-computing. Zero cloud dependencies. Real-time driving diagnostics. Built strictly for Canadian roads to ensure your family's safety with absolute privacy.
            </p>

            {/* Conversational CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-white/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                Reserve Your Spot
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onScrollToSection('compatibility')}
                className="px-8 py-4 bg-slate-900/40 hover:bg-slate-900/60 text-white rounded-xl font-semibold text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Check Vehicle Compatibility
              </button>
            </div>

            {/* Live Synchronized Countdown Block */}
            <div className="border border-slate-800/50 bg-slate-900/20 rounded-2xl p-5 backdrop-blur-md max-w-md shadow-lg shadow-black/20 self-start w-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                  ⚠️ Special Founding Allocation
                </span>
                <span className="text-[10px] bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-0.5 rounded font-mono font-medium">
                  Rate Locked
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-4 font-semibold leading-snug">
                Lock in founding pricing. Standard rates apply after launch.
              </p>
              <CountdownTimer />
            </div>

          </div>

          {/* Right Column: Interactive Hardware Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-[40px] blur-3xl -z-10"></div>
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-slate-800/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col z-10 transition-all duration-500 hover:border-indigo-500/40">
              
              {/* Device Header */}
              <div className="bg-slate-900 border-b border-white/5 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="font-display font-semibold text-xs tracking-[0.06em] text-indigo-400 uppercase">
                    ASTRA-AI DriveGuard
                  </span>
                </div>
                <div className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded font-mono font-bold">
                  EDGE INTERNALS
                </div>
              </div>

              {/* Edge Visualized Environment Display */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                
                {/* Visualizer Grid */}
                <div className="relative w-full h-32 bg-black/40 rounded-xl border border-white/5 flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                  
                  {/* Dynamic Scanner Wave */}
                  <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-bounce opacity-40 top-0 bottom-0" />

                  {/* Realtime Vector Graphic of vehicle */}
                  <svg className="w-24 h-24 text-indigo-500/10 absolute z-0" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '60s' }} />
                    <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
                  </svg>

                  {/* Edge HUD Icons */}
                  <div className="relative z-10 flex flex-col items-center">
                    <ShieldCheck className="w-8 h-8 text-indigo-400 mb-1 drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]" />
                    <span className="font-mono text-[10px] tracking-wider text-white font-bold">
                      PRIVACY SHIELD ACTIVE
                    </span>
                    <span className="text-[9px] text-slate-400">
                      Zero External Cloud Connections
                    </span>
                  </div>
                </div>

                {/* Dashboard Technical Metrics */}
                <div className="flex flex-col gap-2.5">
                  
                  {/* Metric 1 */}
                  <div className="bg-white/5 border border-white/5 rounded-lg py-2.5 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[11px] text-slate-400 font-medium tracking-wide">AI Processing Latency</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-indigo-400">
                      {latency}ms
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-white/5 border border-white/5 rounded-lg py-2.5 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] text-slate-400 font-medium tracking-wide">Privacy Connection</span>
                    </div>
                    <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      Local-Only
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-white/5 border border-white/5 rounded-lg py-2.5 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-slate-400 font-medium tracking-wide">Driver Awareness Index</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400 transition-all duration-300">
                      {awareness}%
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="bg-white/5 border border-white/5 rounded-lg py-2.5 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-[11px] text-slate-400 font-medium tracking-wide">Road Condition Assist</span>
                    </div>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded font-bold uppercase">
                      Ready
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Premium Floating Context Cards - To reinforce local-edge philosophy */}
            <div className="absolute top-4 -right-10 md:-right-6 bg-slate-900 border border-indigo-500/20 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-[150px] z-20 text-left animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-7 h-7 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-2">
                <Database className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Privacy Engine</span>
              <p className="font-display font-semibold text-xs text-white leading-snug mt-1">
                100% Local Processing
              </p>
              <span className="text-[9px] text-slate-400 mt-1 block leading-tight">
                No telemetry ever leaves your vehicle.
              </span>
            </div>

            <div className="absolute -bottom-6 -left-10 md:-left-6 bg-slate-900/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-[140px] z-20 text-left animate-bounce" style={{ animationDuration: '8s' }}>
              <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-2">
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Reaction</span>
              <p className="font-display font-semibold text-xs text-emerald-400 leading-snug mt-1">
                Sub-12ms Edge Sync
              </p>
              <span className="text-[9px] text-gray-400 mt-1 block leading-tight">
                100x faster than cloud streaming.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
