import { useState } from 'react';
import { ShieldAlert, Radio, ServerCrash, Cpu, CheckCircle2, Eye, ShieldCheck, Database, Wifi, WifiOff, Car, BellRing, SquareTerminal } from 'lucide-react';

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
            
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:border-indigo-500/20">
              
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
                      ? 'bg-indigo-605 text-white shadow shadow-indigo-500/10'
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
              <div className="h-60 bg-slate-950 rounded-2xl flex flex-col relative overflow-hidden border border-slate-800 p-4 justify-between">
                
                {/* Windshield Overlay Grid effect */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                {activeTab === 'local' ? (
                  <>
                    {/* Simulated Camera View HUD: Local Processing (Clean Road detection) */}
                    <div className="relative w-full h-[124px] rounded-lg border border-slate-800 bg-slate-900 flex flex-col justify-end p-2.5 overflow-hidden">
                      {/* Windshield Scenic highway wireframe mockup inside camera view */}
                      <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 200 100" preserveAspectRatio="none">
                        {/* Winding road lines */}
                        <path d="M 0,90 Q 100,60 200,90" fill="none" stroke="#6366f1" strokeWidth="2" />
                        <path d="M 100,60 L 100,100" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" />
                        {/* Mountain wireframe shapes */}
                        <path d="M -10,60 L 40,30 L 90,60 M 80,60 L 130,25 L 190,60" fill="none" stroke="#1e293b" strokeWidth="1" />
                      </svg>

                      {/* AI Bounding Box Highlights simulating edge-detection */}
                      <div className="absolute top-[35px] left-[55px] border border-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded flex flex-col items-center animate-pulse">
                        <span className="text-[6px] text-emerald-300 font-mono font-bold leading-none tracking-widest">HAZARD (ROCKFAST) DEBRIS</span>
                        <div className="w-10 h-6 border-2 border-emerald-400/50 mt-0.5" />
                      </div>

                      {/* Lens Focus Crosshair */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                        <div className="w-8 h-8 border border-indigo-500 rounded-full flex items-center justify-center">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                        </div>
                      </div>

                      {/* Real-time Overlay telemetry */}
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span className="font-mono text-[7px] text-slate-300 font-bold uppercase tracking-widest">SEC PREVIEW (LOCAL ACTIVE)</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-indigo-600/95 border border-indigo-400 text-white font-mono text-[8px] px-2 py-0.5 rounded font-black">
                        12 MS LOCAL LATENCY
                      </div>

                      {/* Status indicator pill bottom left */}
                      <div className="absolute bottom-2 left-2 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[8px] font-semibold text-emerald-400 uppercase tracking-wider font-mono">NEURAL INTEGRATED</span>
                      </div>
                    </div>

                    {/* Simulation Flow Pipeline visualizer map */}
                    <div className="flex items-center justify-between gap-3 bg-slate-900/60 border border-slate-900 rounded-xl px-2.5 py-1.5 mt-0">
                      <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-1.5 rounded-lg">
                          <Eye className="w-3.5 h-3.5 text-white animate-pulse" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[9px] font-black text-white leading-tight">DUAL-LENS CAMERA</span>
                          <span className="text-[7px] text-indigo-300 uppercase tracking-wider font-mono">1080P Windshield Guard</span>
                        </div>
                      </div>

                      <div className="flex-1 flex justify-center items-center">
                        <div className="w-full relative h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 flex items-center justify-center">
                          <span className="absolute bg-indigo-650 text-white font-mono text-[8px] font-black px-1.5 py-0.5 rounded-full border border-indigo-400 animate-bounce">
                            12ms
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-right">
                        <div className="flex flex-col text-right">
                          <span className="text-[9px] font-black text-white leading-tight">IN-CABIN ALERT</span>
                          <span className="text-[7px] text-emerald-300 uppercase tracking-wider font-mono">Instant Buzzer beep</span>
                        </div>
                        <div className="bg-emerald-500 p-1.5 rounded-lg">
                          <BellRing className="w-3.5 h-3.5 text-white animate-[bounce_1s_infinite]" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Simulated Camera View HUD: Cloud Processing with lag alert */}
                    <div className="relative w-full h-[124px] rounded-lg border border-red-900/50 bg-slate-900 flex flex-col justify-end p-2.5 overflow-hidden">
                      {/* Greyed out scenic line */}
                      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <path d="M 0,90 Q 100,60 200,90" fill="none" stroke="#ef4444" strokeWidth="2" />
                        <path d="M 100,60 L 100,100" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
                      </svg>

                      {/* Blurry, laggy hazard detection indicator */}
                      <div className="absolute top-[35px] left-[55px] border border-red-500/40 bg-red-500/5 px-1 py-0.5 rounded flex flex-col items-center opacity-70">
                        <span className="text-[6px] text-red-400 font-mono font-bold leading-none tracking-widest">⚠️ LAGGED DETECTION DATA</span>
                        <div className="w-10 h-6 border-2 border-dashed border-red-500/30 mt-0.5" />
                      </div>

                      {/* Lens Crosshair - Warn symbol */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <ShieldAlert className="w-7 h-7 text-red-500 animate-pulse" />
                      </div>

                      {/* Real-time Overlay telemetry */}
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        <span className="font-mono text-[7px] text-slate-300 font-bold uppercase tracking-widest">SEC PREVIEW (CLOUD ROUTE)</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-red-650 border border-red-500 text-white font-mono text-[8px] px-2 py-0.5 rounded font-black animate-pulse">
                        850+ MS DELAY (SUSCEPTIBLE)
                      </div>

                      {/* Status indicator pill bottom left */}
                      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-red-950/80 border border-red-900 p-0.5 px-1.5 rounded">
                        <WifiOff className="w-3 h-3 text-red-400" />
                        <span className="text-[7.5px] font-semibold text-red-400 uppercase tracking-normal font-mono">DEADZONE RISK ACTIVE</span>
                      </div>
                    </div>

                    {/* Simulation Flow Pipeline visualizer map */}
                    <div className="flex items-center justify-between gap-3 bg-slate-900/60 border border-slate-900 rounded-xl px-2.5 py-1.5 mt-0">
                      <div className="flex items-center gap-2">
                        <div className="bg-red-900/80 p-1.5 rounded-lg border border-red-800/80">
                          <Eye className="w-3.5 h-3.5 text-red-400" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[9px] font-black text-slate-400 leading-tight">DUAL-LENS CAMERA</span>
                          <span className="text-[7px] text-red-400 uppercase tracking-wider font-mono">Uploading Video...</span>
                        </div>
                      </div>

                      <div className="flex-1 flex justify-center items-center">
                        <div className="w-full relative h-1 bg-slate-800 flex items-center justify-center border-t border-dashed border-red-500/50">
                          <span className="absolute bg-red-950 text-red-400 font-mono text-[8px] font-black px-1.5 py-0.5 rounded border border-red-900/85 animate-pulse">
                            Cell Tower 🚫
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-right">
                        <div className="flex flex-col text-right">
                          <span className="text-[9px] font-black text-slate-400 leading-tight">REMOTE CLOUD</span>
                          <span className="text-[7px] text-red-500 uppercase tracking-wider font-mono">Offshore database</span>
                        </div>
                        <div className="bg-red-950 p-1.5 rounded-lg border border-red-900">
                          <ServerCrash className="w-3.5 h-3.5 text-red-400" />
                        </div>
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* Explanatory summary caption card to make the function immediately clear */}
              <div className="mt-4 bg-indigo-50/50 rounded-xl p-3 border border-indigo-100 flex items-start gap-2.5">
                <span className="text-sm">💡</span>
                <p className="text-xs text-slate-700 leading-normal font-medium text-left">
                  {activeTab === 'local' ? (
                    <>
                      <strong>ASTRA acts locally:</strong> Built-in AI processes the live camera video directly in your cabin. It takes only <span className="text-indigo-650 font-bold">12 milliseconds</span> to trigger a safety alert—no cellular latency, no coverage dropouts, and 100% private data security.
                    </>
                  ) : (
                    <>
                      <strong>Cloud cameras stream video:</strong> Data must travels thousands of miles to offshore servers. A transmission lag of <span className="text-red-600 font-bold">850ms</span> means when you travel 100km/h, your car travels <span className="font-bold underline text-red-700">23 meters</span> before the cloud can even begin returning a safety warning.
                    </>
                  )}
                </p>
              </div>

              {/* Features comparison list below */}
              <div className="mt-5 space-y-3 text-left text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-semibold text-slate-700">Data Sovereignty Protection</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded' : 'text-red-600 bg-red-50 px-2 py-0.5 rounded'}`}>
                    {activeTab === 'local' ? '100% Secure (Private)' : 'Exposed to cloud hacks'}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="font-semibold text-slate-700">Processing Speed Lag</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded' : 'text-red-600 bg-red-50 px-2 py-0.5 rounded'}`}>
                    {activeTab === 'local' ? '12 milliseconds' : '850+ milliseconds (Dangerous)'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Cell/Mountain Coverage Range</span>
                  <span className={`font-mono text-[11px] font-bold ${activeTab === 'local' ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded' : 'text-red-600 bg-red-50 px-2 py-0.5 rounded'}`}>
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

