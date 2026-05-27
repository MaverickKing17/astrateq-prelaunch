import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Award, WifiOff, Zap, Bluetooth, Activity, RefreshCw, CheckCircle2, Cpu } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const activeScanningImg = '/src/assets/images/active_scanning_1779906877154.png';
const windshieldCamImg = '/src/assets/images/windshield_cam_1779906863402.png';
const obdPluginImg = '/src/assets/images/obd_plug_simple_1779907676774.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Navigation for ASTRA physical device interactive modes
  const [activeTab, setActiveTab] = useState<'privacy' | 'obd'>('privacy');

  // Live fluctuations to make the mock dashboard feel authentic and active
  const [awareness, setAwareness] = useState(98);
  const [latency, setLatency] = useState(12);

  // OBD-II Diagnostics Simulator States
  const [obdScanning, setObdScanning] = useState(false);
  const [obdProgress, setObdProgress] = useState(0);
  const [rpm, setRpm] = useState(752);
  const [voltage, setVoltage] = useState(14.2);
  const [obdStatusMsg, setObdStatusMsg] = useState('Idle Standby');

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

    // Simulated ECU engine telemetry over OBD Bluetooth sync
    const obdInterval = setInterval(() => {
      setRpm((prev) => {
        const delta = Math.floor(Math.random() * 12) - 6;
        const next = prev + delta;
        return next < 742 ? 742 : next > 768 ? 768 : next;
      });
      setVoltage((prev) => {
        const delta = Math.random() > 0.5 ? 0.02 : -0.02;
        const next = prev + delta;
        return Number((next < 14.15 ? 14.15 : next > 14.28 ? 14.28 : next).toFixed(2));
      });
    }, 1100);

    return () => {
      clearInterval(awarenessInterval);
      clearInterval(latencyInterval);
      clearInterval(obdInterval);
    };
  }, []);

  // OBD Smart Bluetooth Handshake sequence simulation
  useEffect(() => {
    if (!obdScanning) return;
    
    setObdStatusMsg('Opening Bluetooth API Port...');
    
    const interval = setInterval(() => {
      setObdProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setObdScanning(false);
          setObdStatusMsg('Diagnostic Engine Scan Complete: 0 DTC Codes Found.');
          return 100;
        }
        
        const next = prev + 10;
        if (next < 30) setObdStatusMsg('Bluetooth API handshake established with OBD-II chip.');
        else if (next < 60) setObdStatusMsg('Reading engine cylinders & oxygen sensor signals...');
        else if (next < 90) setObdStatusMsg('Checking diagnostic check-engine system codes...');
        else setObdStatusMsg('Validating vehicle safety compliance profile...');
        
        return next;
      });
    }, 320);

    return () => clearInterval(interval);
  }, [obdScanning]);

  const handleStartObdScan = () => {
    if (obdScanning) return;
    setObdProgress(0);
    setObdScanning(true);
  };

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
            <div className="inline-flex self-start items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-650 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Now in Public Beta
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15] mb-6">
              Predictive AI safety,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">
                elevated to art.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Local edge-computing. Zero cloud dependencies. Real-time driving diagnostics. Built strictly for Canadian roads to ensure your family's safety with absolute privacy.
            </p>

            {/* Conversational CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Reserve Your Spot
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onScrollToSection('compatibility')}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-xl font-semibold text-sm tracking-wide border border-slate-200 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Check Vehicle Compatibility
              </button>
            </div>

            {/* Live Synchronized Countdown Block */}
            <div className="relative border border-indigo-100 bg-gradient-to-br from-indigo-50/40 via-white to-white rounded-2xl p-6 max-w-md shadow-md shadow-indigo-100/10 self-start w-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Corner badge ribbon */}
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-lg shadow-sm font-mono animate-pulse">
                Rate Locked
              </div>

              <div className="flex items-center gap-2 mb-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs uppercase tracking-wider text-indigo-950 font-black flex items-center gap-1.5 font-display">
                  Special Founding Allocation
                </span>
              </div>
              
              <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed max-w-[90%]">
                Secure your dual-lens hardware at <span className="text-indigo-600 font-extrabold font-sans">Early-Bird Pricing ($19 fully refundable deposit)</span>. Standard MSRP rates apply after launch.
              </p>
              
              <div className="bg-slate-50 border border-slate-100/80 rounded-xl p-4 flex justify-center">
                <CountdownTimer />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hardware Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-[40px] blur-3xl -z-10" />
            <div className="relative w-full max-w-[420px] bg-white border border-slate-205 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 transition-all duration-500 hover:border-indigo-500/20">
              
              {/* Device Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="font-display font-semibold text-xs tracking-[0.06em] text-indigo-600 uppercase">
                    ASTRA-AI Smart DriveGuard
                  </span>
                </div>
                <div className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                  PREMIUM HARDWARE
                </div>
              </div>

              {/* Secure Bluetooth Interactive Switcher */}
              <div className="bg-slate-100/50 p-1 mx-5 mt-4 rounded-xl flex gap-1 border border-slate-200/40 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('privacy')}
                  className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none ${
                    activeTab === 'privacy'
                      ? 'bg-slate-900 text-white shadow-sm border border-slate-850'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Smart Dashcam HUD
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('obd')}
                  className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none ${
                    activeTab === 'obd'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  OBD Engine Scan
                </button>
              </div>

              {/* Edge Visualized Environment Display */}
              <div className="p-5 flex flex-col gap-4">
                
                {activeTab === 'privacy' ? (
                  <>
                    {/* Active Scanning Windshield HUD Display */}
                    <div className="relative w-full h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-200/80 shadow-inner group">
                      <img
                        src={activeScanningImg}
                        alt="ASTRA Real-Time Windshield Safety HUD Active Road Scanning"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dynamic Scan Laser scanning line effect overlay */}
                      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse opacity-85 top-1/2 -translate-y-1/2 shadow-[0_0_12px_#6366f1]" />

                      {/* Gradient over image for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/45 pointer-events-none" />

                      {/* Hardwired Physical Unit Indicator HUD Labels */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-505"></span>
                        </span>
                        <span className="text-[9px] font-mono tracking-widest font-black uppercase text-white bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded shadow-sm">
                          ACTIVE SAFETY AI HUD SCAN
                        </span>
                      </div>

                      {/* Hardware Bottom Overlay */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-3 pt-6 flex justify-between items-end z-10">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] tracking-wider text-indigo-305 font-bold">
                            ● PREDICTIVE LANE DETECTION
                          </span>
                          <span className="text-[10px] text-white font-semibold">
                            Twilight Highway Visual Scan
                          </span>
                        </div>
                        <span className="text-[8px] bg-slate-900 text-slate-300 font-mono font-medium rounded px-1.5 py-0.5 border border-slate-800">
                          Secure Local AI Core
                        </span>
                      </div>
                    </div>

                    {/* Dashboard Technical Metrics */}
                    <div className="flex flex-col gap-2">
                      {/* Metric 1 */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-indigo-500" />
                          <span className="text-[11px] text-slate-600 font-medium tracking-wide">AI Processing Latency</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-indigo-600">
                          {latency}ms
                        </span>
                      </div>

                      {/* Metric 2 */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                          <span className="text-[11px] text-slate-605 font-medium tracking-wide">Privacy Connection</span>
                        </div>
                        <span className="text-[10px] bg-amber-50 border border-amber-200/50 text-amber-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Local-Only
                        </span>
                      </div>

                      {/* Metric 3 */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px] text-slate-600 font-medium tracking-wide">Driver Awareness Index</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-600 transition-all duration-300">
                          {awareness}%
                        </span>
                      </div>

                      {/* Metric 4 */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-indigo-505" />
                          <span className="text-[11px] text-slate-600 font-medium tracking-wide">Road Condition Assist</span>
                        </div>
                        <span className="text-[10px] bg-indigo-50 border border-indigo-200/50 text-indigo-600 px-2 py-0.5 rounded font-bold uppercase">
                          Ready
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* OBD Active Screen Display */}
                    <div className="relative w-full h-44 bg-slate-955 rounded-xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden p-4 group">
                      
                      {/* Active photorealistic OBD hardware plugin backdrop */}
                      <img
                        src={obdPluginImg}
                        alt="ASTRA OBD-II Direct Active Hardware Connection"
                        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity filter brightness-75 group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none" />
                      
                      {obdScanning ? (
                        <div className="w-full flex flex-col items-center px-2 relative z-10">
                          <RefreshCw className="w-7 h-7 text-indigo-400 mb-1.5 animate-spin" />
                          <span className="font-mono text-[9px] tracking-widest text-indigo-400 font-bold">ECU DEEP PORT SCAN</span>
                          <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden border border-slate-705">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-full transition-all duration-300" style={{ width: `${obdProgress}%` }} />
                          </div>
                          <p className="text-[8px] text-slate-400 font-mono mt-1 w-full text-center truncate">{obdStatusMsg}</p>
                        </div>
                      ) : (
                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Bluetooth className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span className="font-mono text-[10px] tracking-wider text-emerald-400 font-black">
                              OBD-II BLUETOOTH LINK
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-200 max-w-xs font-bold leading-normal tracking-wide">
                            Direct Hardware Connection Established
                          </span>
                          <span className="text-[8.5px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono font-bold mt-2.5">
                            ICES-003 Compliant Passive OBD Monitor
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Live OBD Diagnostic Parameters Container */}
                    <div className="flex flex-col gap-2">
                      {/* RPM Metric */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Live Engine RPM</span>
                        </div>
                        <span className="font-mono text-xs font-black text-slate-800 transition-all">
                          {rpm} RPM
                        </span>
                      </div>

                      {/* Alternator Battery Metric */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Sensor Voltage</span>
                        </div>
                        <span className="font-mono text-xs font-black text-indigo-650">
                          {voltage} V
                        </span>
                      </div>

                      {/* Diagnostic Codes Metric */}
                      <div className="bg-slate-50/70 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-emerald-555" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Active Engine Codes (DTCs)</span>
                        </div>
                        <span className="text-[9px] bg-emerald-50 border border-emerald-250 text-emerald-600 px-2.5 py-0.5 rounded font-black uppercase tracking-wide">
                          0 Found (Healthy)
                        </span>
                      </div>

                      {/* Trigger Scan Button */}
                      <button
                        type="button"
                        onClick={handleStartObdScan}
                        disabled={obdScanning}
                        className={`w-full py-2.5 rounded-lg text-[10px] font-black tracking-widest transition-all uppercase flex items-center justify-center gap-1.5 cursor-pointer mt-1 ${
                          obdScanning
                            ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/15'
                        }`}
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${obdScanning ? 'animate-spin' : ''}`} />
                        {obdScanning ? 'Diagnosing Sensor Lines...' : 'Trigger Smart ECU Diagnostics Scan'}
                      </button>
                    </div>
                  </>
                )}

              </div>

            </div>

            {/* Premium Floating Context Cards - To reinforce local-edge philosophy */}
            <div className="absolute top-4 -right-10 md:-right-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl max-w-[150px] z-20 text-left animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-7 h-7 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-2">
                <Database className="w-4 h-4 text-indigo-500" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-550 tracking-wider">Privacy Engine</span>
              <p className="font-display font-semibold text-xs text-slate-800 leading-snug mt-1">
                100% Local Processing
              </p>
              <span className="text-[9px] text-slate-500 mt-1 block leading-tight">
                No telemetry ever leaves your vehicle.
              </span>
            </div>

            <div className="absolute -bottom-6 -left-10 md:-left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl max-w-[140px] z-20 text-left animate-bounce" style={{ animationDuration: '8s' }}>
              <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-2">
                <Zap className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Reaction</span>
              <p className="font-display font-semibold text-xs text-emerald-600 leading-snug mt-1">
                Sub-12ms Edge Sync
              </p>
              <span className="text-[9px] text-slate-550 mt-1 block leading-tight">
                100x faster than cloud streaming.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
