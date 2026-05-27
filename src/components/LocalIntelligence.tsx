import { useState } from 'react';
import { ShieldAlert, Radio, ServerCrash, Cpu, CheckCircle2, CloudLightning } from 'lucide-react';

export default function LocalIntelligence() {
  const [activeTab, setActiveTab] = useState<'local' | 'cloud'>('local');

  return (
    <section id="local-intel" className="py-20 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct response content & concepts translated to emotion */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs uppercase tracking-[0.15em] text-indigo-400 font-bold block mb-3">
              Absolute Architecture Safeguard
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-6">
              Intelligence That Stays Inside Your Vehicle
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Most standard automotive gadgets capture your driving coordinates, audio logs, and camera arrays, streaming them continuously to insecure offshore cloud databases. If the cloud servers disconnect, your backup guard goes completely offline.
            </p>

            <span className="text-white font-semibold text-sm block mb-4">
              ASTRA-AI changes that equation with a hardware-first design philosophy:
            </span>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-3 h-3 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">100% On-Device Neural Compute</h4>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">All neural operations and hazard detection models run directly on the custom edge CPU inside your unit.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-3 h-3 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">Reduced Cloud Dependencies</h4>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">Zero cellular subscriptions needed. Your device operates seamlessly even in deep Canadian tunnels or remote mountain passes.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">PIPEDA-aligned Local Storage</h4>
                  <p className="text-xs text-gray-500 leading-normal mt-0.5">No driver profiles or trackable behavior history are stored externally. You maintain 100% data sovereignty over your vehicle.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Premium Active Comparison Widget & Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-md bg-slate-800/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative shadow-2xl">
              
              {/* Tab Selector */}
              <div className="flex bg-slate-900 rounded-xl p-1 mb-6 relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab('local')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'local'
                      ? 'bg-indigo-600 text-white shadow shadow-indigo-500/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  ASTRA Local Edge
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cloud')}
                  className={`flex-1 text-center py-3 text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'cloud'
                      ? 'bg-red-500/15 text-red-400 border border-red-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5" />
                  Conventional Cloud
                </button>
              </div>

              {/* Graphical Simulation Container */}
              <div className="h-48 bg-black/40 border border-white/5 rounded-xl flex flex-col justify-center items-center p-5 relative overflow-hidden">
                
                {activeTab === 'local' ? (
                  <div className="space-y-4 w-full text-center">
                    {/* Local flow */}
                    <div className="flex items-center justify-center gap-8 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-brand-cyan" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold mt-1">Edge Device</span>
                      </div>

                      {/* Speed connector line */}
                      <div className="relative flex-1 h-[2px] bg-indigo-500">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-2 py-0.5 rounded font-mono font-bold text-[9px] uppercase tracking-wider">
                          12ms Latency
                        </span>
                        <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold mt-1">Vehicle Actuator</span>
                      </div>
                    </div>

                    <p className="text-xs text-emerald-400 font-mono text-center">
                      ✓ Instant hazard detection. Offline capable. Private.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 w-full text-center">
                    {/* Cloud flow */}
                    <div className="flex items-center justify-center gap-8 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                          <Radio className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold mt-1">Car Sensor</span>
                      </div>

                      {/* Laggy dotted connector line */}
                      <div className="relative flex-1 h-[2px] bg-red-500/20 border-t border-dashed border-red-500">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-mono font-bold text-[9px]">
                          850ms+ Lag
                        </span>
                        <span className="absolute -top-1.5 left-1/4">⚠️</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center animate-pulse">
                          <ServerCrash className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold mt-1">Cloud Server</span>
                      </div>
                    </div>

                    <p className="text-xs text-red-400 font-mono text-center">
                      ⚠️ Latency vulnerable to weather & wilderness cell coverage.
                    </p>
                  </div>
                )}
              </div>

              {/* Features comparison list below */}
              <div className="mt-6 space-y-3.5 text-left text-xs text-gray-400">
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="font-medium">Data Sovereignty Protection</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-brand-cyan' : 'text-red-400'}`}>
                    {activeTab === 'local' ? '100% Secure (Private)' : 'Exposed to cloud hacks'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                  <span className="font-medium">Processing Speed Lag</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-brand-cyan' : 'text-red-400'}`}>
                    {activeTab === 'local' ? '12 milliseconds' : '850+ milliseconds (Dangerous)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Cell/Mountain Coverage Range</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-brand-cyan' : 'text-red-400'}`}>
                    {activeTab === 'local' ? 'Full range (Offline-ready)' : 'Fails in deadzones'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
