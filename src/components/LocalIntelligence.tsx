import { useState } from 'react';
import { ShieldAlert, Radio, ServerCrash, Cpu, CheckCircle2, Eye, ShieldCheck, Database, Wifi, WifiOff, Car, BellRing, SquareTerminal } from 'lucide-react';
import smartDashcamProductImg from '../assets/images/smart_dashcam_product_1779905537085.png';
import cloudServerBrightImg from '../assets/images/cloud_server_bright_1779987924754.png';

export default function LocalIntelligence() {
  const [activeTab, setActiveTab] = useState<'local' | 'cloud'>('local');

  return (
    <section id="local-intel" className="py-20 bg-slate-50 relative border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct response content */}
          <div className="lg:col-span-6 text-left animate-fade-in">
            <span className="text-xs uppercase tracking-[0.15em] text-indigo-600 font-bold block mb-3">
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
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">100% On-Device Neural Compute</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">All neural operations and hazard detection models run directly on the custom edge CPU inside your unit.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">Reduced Cloud Dependencies</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">Zero cellular subscriptions needed. Your device operates seamlessly even in deep Canadian tunnels or remote mountain passes.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
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
            
            <div className="w-full max-w-md relative group/sim animate-fade-in-up">
              {/* Deep dark soft ambient aura backlighting */}
              <div className="absolute -inset-3.5 rounded-[2.4rem] bg-slate-950/15 blur-3xl opacity-50 group-hover/sim:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Glowing High-Contrast Outer Frame in Deep Slate-Indigo (The Dark Glow Border) */}
              <div className="absolute -inset-[3px] rounded-[2.15rem] bg-gradient-to-b from-slate-950 via-[#1e293b] to-slate-950 opacity-90 group-hover/sim:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_15px_45px_rgba(11,15,25,0.42),0_0_30px_rgba(15,23,42,0.25)]" />

              <div className="relative bg-white border border-slate-900 rounded-[2rem] p-6 sm:p-7 transition-all duration-500">
                
                {/* Header explaining the widget to avoid any confusion */}
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                  <SquareTerminal className="w-4 h-4 text-indigo-600" />
                  <span className="text-[10px] font-mono font-black text-indigo-950 uppercase tracking-widest">
                    Live Safety Flow Simulator
                  </span>
                </div>

                {/* Tab Selector */}
                <div className="flex bg-slate-100 rounded-xl p-1 mb-5 relative z-10">
                  <button
                    type="button"
                    onClick={() => setActiveTab('local')}
                    className={`flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'local'
                        ? 'bg-indigo-600 text-white shadow shadow-indigo-500/10'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    ASTRA Local Edge
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('cloud')}
                    className={`flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === 'cloud'
                        ? 'bg-slate-900 text-white shadow'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    Conventional Cloud
                  </button>
                </div>

                {/* Graphical Simulation Container with ADAS Camera HUD */}
                <div className="h-64 bg-slate-100 rounded-2xl flex flex-col relative overflow-hidden border border-slate-200 shadow-md group mb-4">
                  
                  {/* Visual HUD Corner Accents */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/45 z-20 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/45 z-20 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/45 z-20 pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/45 z-20 pointer-events-none" />
                  {/* Subtle dynamic grid patterns overlay */}
                  <div className="absolute inset-x-0 h-px bg-white/10 z-20 pointer-events-none" style={{ top: '35%' }} />
                  <div className="absolute inset-y-0 w-px bg-white/10 z-20 pointer-events-none" style={{ left: '50%' }} />

                  {activeTab === 'local' ? (
                    <div className="w-full h-full relative animate-fade-in">
                      <img
                        src={smartDashcamProductImg}
                        alt="ASTRA On-Device Smart Hardware"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Subtle dark gradient overlay to keep badging text high-contrast and readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/15 pointer-events-none" />

                      {/* Left top status badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded shadow-sm z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] text-emerald-400 font-mono font-black uppercase tracking-wider">
                          ASTRA AI ENGINE • ON-BOARD
                        </span>
                      </div>

                      {/* Right top latency badge */}
                      <div className="absolute top-3.5 right-3.5 bg-indigo-600 border border-indigo-500 text-white font-mono text-[9px] px-2.5 py-1 rounded font-black tracking-wide shadow-sm z-10">
                        12MS ULTRA-LOW LATENCY
                      </div>

                      {/* Bottom layout metadata content */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left z-10">
                        <p className="text-[10px] uppercase font-mono font-black tracking-widest text-indigo-300 leading-none mb-1">
                          Localized Secure Core
                        </p>
                        <h4 className="text-white text-xs font-black tracking-tight leading-tight">
                          Dual-Lens Windshield Computer (No Cloud Streaming)
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative animate-fade-in">
                      <img
                        src={cloudServerBrightImg}
                        alt="Conventional Cloud Processing Servers"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />

                      {/* Subtle dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/15 pointer-events-none" />

                      {/* Left top status badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-2.5 py-1 rounded shadow-sm z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-[9px] text-amber-400 font-mono font-black uppercase tracking-wider">
                          OFFSHORE DATACENTER STREAMING
                        </span>
                      </div>

                      {/* Right top latency badge */}
                      <div className="absolute top-3.5 right-3.5 bg-red-650 border border-red-500 text-white font-mono text-[9px] px-2.5 py-1 rounded font-black tracking-wide shadow-sm z-10 animate-pulse">
                        850MS+ TRANSMISSION LAG
                      </div>

                      {/* Bottom layout metadata content */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left z-10">
                        <p className="text-[10px] uppercase font-mono font-black tracking-widest text-red-300 leading-none mb-1">
                          Unsecured Cellular Pipeline
                        </p>
                        <h4 className="text-white text-xs font-black tracking-tight leading-tight">
                          Continuous Video Uploads (Susceptible to Deadzones & Hacks)
                        </h4>
                      </div>
                    </div>
                  )}

                </div>

                {/* Explanatory summary caption card to make the function immediately clear */}
                <div className={`mt-4 rounded-xl p-3.5 border transition-all duration-300 text-left ${
                  activeTab === 'local'
                    ? 'bg-emerald-50/40 border-emerald-100 text-slate-800'
                    : 'bg-red-50/40 border-red-100 text-slate-800'
                }`}>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5">{activeTab === 'local' ? '🛡️' : '⚠️'}</span>
                    <p className="text-xs leading-relaxed font-semibold">
                      {activeTab === 'local' ? (
                        <>
                          <strong>ASTRA acts locally:</strong> Built-in AI processes visual telemetry directly on-cabin. True real-time hazard checking executes in only <span className="text-emerald-600 font-black">12 milliseconds</span>—zero cellular subscriptions, zero latency traps, and 100% private data security.
                        </>
                      ) : (
                        <>
                          <strong>Conventional Cloud streams video:</strong> Data must travel thousands of miles to offshore servers. A transmission lag of <span className="text-red-650 font-black">850ms+</span> means your vehicle travels <span className="font-extrabold underline text-red-700">23 meters</span> at 100km/h before the cloud can even begin returning a safety warning.
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Features comparison list below */}
                <div className="mt-5 space-y-3 text-left text-xs border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between border-b border-slate-100/60 pb-2.5">
                    <span className="font-semibold text-slate-550 uppercase tracking-widest font-sans text-[8px]">Data Sovereignty Security</span>
                    <span className={`font-mono text-[9px] font-black tracking-wide ${activeTab === 'local' ? 'text-emerald-700 bg-emerald-55/15 border border-emerald-250/20 px-2 py-0.5 rounded' : 'text-red-700 bg-red-55/15 border border-red-250/20 px-2 py-0.5 rounded'}`}>
                      {activeTab === 'local' ? '100% PRIVATE (MILITARY-GRADE)' : 'EXPOSED ROUTE TRACKING'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100/60 pb-2.5">
                    <span className="font-semibold text-slate-550 uppercase tracking-widest font-sans text-[8px]">Response Signal Delay</span>
                    <span className={`font-mono text-[9px] font-bold ${activeTab === 'local' ? 'text-indigo-700 bg-indigo-55/15 border border-indigo-250/20 px-2 py-0.5 rounded' : 'text-red-700 bg-red-55/15 border border-red-250/20 px-2 py-0.5 rounded'}`}>
                      {activeTab === 'local' ? '12ms (OPTIMAL RESPONSE)' : '850ms+ (DANGEROUS LAG)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-550 uppercase tracking-widest font-sans text-[8px]">Canadian Coverage Zone</span>
                    <span className={`font-mono text-[9px] font-bold ${activeTab === 'local' ? 'text-emerald-700 bg-emerald-55/15 border border-emerald-250/20 px-2 py-0.5 rounded' : 'text-red-700 bg-red-55/15 border border-red-250/20 px-2 py-0.5 rounded'}`}>
                      {activeTab === 'local' ? 'FULL CABIN OFFLINE-READY' : 'DIES IN HIGHWAY DEADZONES'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
