import { useState } from 'react';
import { ShieldAlert, Radio, ServerCrash, Cpu, CheckCircle2 } from 'lucide-react';

export default function LocalIntelligence() {
  const [activeTab, setActiveTab] = useState<'local' | 'cloud'>('local');

  return (
    <section id="local-intel" className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct response content */}
          <div className="lg:col-span-6 text-left animate-fade-in">
            <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
              Absolute Architecture Safeguard
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
              Intelligence That Stays Inside Your Vehicle
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Most standard automotive gadgets capture your driving coordinates, audio logs, and camera arrays, streaming them continuously to insecure offshore cloud databases. If the cloud servers disconnect, your backup guard goes completely offline.
            </p>

            <span className="text-slate-800 font-bold text-sm block mb-4">
              ASTRA-AI changes that equation with a hardware-first design philosophy:
            </span>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">100% On-Device Neural Compute</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">All neural operations and hazard detection models run directly on the custom edge CPU inside your unit.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-indigo-605" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">Reduced Cloud Dependencies</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Zero cellular subscriptions needed. Your device operates seamlessly even in deep Canadian tunnels or remote mountain passes.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">PIPEDA-aligned Local Storage</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">No driver profiles or trackable behavior history are stored externally. You maintain 100% data sovereignty over your vehicle.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Premium Active Comparison Widget & Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              
              {/* Tab Selector */}
              <div className="flex bg-slate-100 rounded-xl p-1 mb-6 relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab('local')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'local'
                      ? 'bg-indigo-600 text-white shadow shadow-indigo-500/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
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
                      ? 'bg-red-50 text-red-650 border border-red-200 bg-red-500/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5" />
                  Conventional Cloud
                </button>
              </div>

              {/* Graphical Simulation Container */}
              <div className="h-48 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-center items-center p-5 relative overflow-hidden">
                
                {activeTab === 'local' ? (
                  <div className="space-y-4 w-full text-center">
                    {/* Local flow */}
                    <div className="flex items-center justify-center gap-8 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shadow-sm">
                          <Cpu className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold mt-1">Edge Device</span>
                      </div>

                      {/* Speed connector line */}
                      <div className="relative flex-1 h-[2px] bg-indigo-500">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-2 py-0.5 rounded font-mono font-bold text-[9px] uppercase tracking-wider shadow-sm">
                          12ms Latency
                        </span>
                        <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold mt-1">Vehicle Actuator</span>
                      </div>
                    </div>

                    <p className="text-xs text-emerald-600 font-mono text-center font-bold">
                      ✓ Instant hazard detection. Offline capable. Private.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 w-full text-center">
                    {/* Cloud flow */}
                    <div className="flex items-center justify-center gap-8 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                          <Radio className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold mt-1">Car Sensor</span>
                      </div>

                      {/* Laggy dotted connector line */}
                      <div className="relative flex-1 h-[2px] bg-red-300/40 border-t border-dashed border-red-400">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-50 text-red-650 border border-red-205/50 px-2 py-0.5 rounded font-mono font-bold text-[9px]">
                          850ms+ Lag
                        </span>
                        <span className="absolute -top-1.5 left-1/4">⚠️</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-50 border border-red-250 flex items-center justify-center animate-pulse">
                          <ServerCrash className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold mt-1">Cloud Server</span>
                      </div>
                    </div>

                    <p className="text-xs text-red-600 font-mono text-center font-bold">
                      ⚠️ Latency vulnerable to weather & cell coverage.
                    </p>
                  </div>
                )}
              </div>

              {/* Features comparison list below */}
              <div className="mt-6 space-y-3.5 text-left text-xs text-slate-650">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-semibold text-slate-700">Data Sovereignty Protection</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-indigo-600' : 'text-red-600'}`}>
                    {activeTab === 'local' ? '100% Secure (Private)' : 'Exposed to cloud hacks'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-semibold text-slate-700">Processing Speed Lag</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-indigo-600' : 'text-red-600'}`}>
                    {activeTab === 'local' ? '12 milliseconds' : '850+ milliseconds (Dangerous)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Cell/Mountain Coverage Range</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-indigo-600' : 'text-red-600'}`}>
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
