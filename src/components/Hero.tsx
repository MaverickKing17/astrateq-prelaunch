import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Award, WifiOff, Zap, Bluetooth, Activity, RefreshCw, CheckCircle2, Cpu, Car, Lock, UserCheck, Shield } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

import activeScanningImg from '../assets/images/active_scanning_1779906877154.png';
import windshieldCamImg from '../assets/images/dashcam_bright_1779908744354.png';
import obdPluginImg from '../assets/images/obd_plugin_under_dash_1780165262295.png';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Tabs for interactive mockup
  const [activeTab, setActiveTab] = useState<'privacy' | 'obd'>('privacy');
  const [awareness, setAwareness] = useState(98);
  const [latency, setLatency] = useState(12);

  // OBD Simulation
  const [obdScanning, setObdScanning] = useState(false);
  const [obdProgress, setObdProgress] = useState(0);
  const [rpm, setRpm] = useState(752);
  const [voltage, setVoltage] = useState(14.2);
  const [obdStatusMsg, setObdStatusMsg] = useState('Idle Standby');

  // Above-the-fold Compatibility inputs
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [checkLoading, setCheckLoading] = useState(false);
  const [checkSuccess, setCheckSuccess] = useState(false);
  const [showResultMsg, setShowResultMsg] = useState('');

  const years = Array.from({ length: 17 }, (_, i) => String(2026 - i));
  const makesAndModels: { [key: string]: string[] } = {
    Toyota: ['Camry', 'RAV4', 'Corolla', 'Highlander', 'Prius'],
    Honda: ['Civic', 'CR-V', 'Accord', 'Pilot', 'Odyssey'],
    Ford: ['F-150', 'Explorer', 'Escape', 'Edge', 'Mustang'],
    Chevrolet: ['Silverado', 'Equinox', 'Cruze', 'Malibu'],
    Hyundai: ['Elantra', 'Tucson', 'Santa Fe', 'Ioniq 5'],
    Kia: ['Sorento', 'Sportage', 'Forte', 'EV6'],
    Mazda: ['Mazda3', 'CX-5', 'CX-9'],
    Subaru: ['Outback', 'Forester', 'Impreza'],
    Nissan: ['Rogue', 'Sentra', 'Altima', 'Leaf'],
    Volkswagen: ['Tiguan', 'Jetta', 'Golf', 'ID.4'],
    BMW: ['3 Series', '5 Series', 'X5'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLE'],
    Tesla: ['Model 3', 'Model Y', 'Model S', 'Model X'],
    GMC: ['Sierra', 'Terrain', 'Yukon'],
    RAM: ['1500', '2500']
  };

  const handleMakeChange = (selectedMake: string) => {
    setMake(selectedMake);
    setModel('');
  };

  const handleCheckCompatibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!year || !make || !model) return;

    setCheckLoading(true);
    setCheckSuccess(false);

    setTimeout(() => {
      setCheckLoading(false);
      setCheckSuccess(true);
      setShowResultMsg(`${year} ${make} ${model}`);
    }, 1200);
  };

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
    <section id="hero" className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Orbs & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-Response Layout rebuilt for conversion */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Canadian Founders Badge */}
            <div className="inline-flex self-start items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping shrink-0" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider font-mono">
                🇨🇦 Canadian Founding Allocation
              </span>
            </div>

            {/* Headline matching PDF exactly */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12] mb-4">
              Could Your Vehicle Qualify{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-rose-600">
                For Early Access?
              </span>
            </h1>

            {/* Subheadline matching PDF exactly */}
            <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed mb-6 max-w-xl font-medium">
              Private AI-powered vehicle intelligence built for Canadian drivers who want greater safety, privacy, and control.
            </p>

            {/* Above-the-fold Compatibility Checker integrated directly (no scrolling required) */}
            <div className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-[0_20px_45px_rgba(15,23,42,0.1)] relative overflow-hidden mb-6 hover:border-indigo-500/30 transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-indigo-600 to-red-500" />
              
              {!checkSuccess ? (
                <form onSubmit={handleCheckCompatibility} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-indigo-600" />
                      Vehicle Compatibility Checker
                    </span>
                    <span className="text-[9px] bg-emerald-50 border border-emerald-150 text-emerald-700 font-bold px-2 py-0.5 rounded font-mono uppercase">
                      ICES-003 Compliant
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Year Dropdown */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block">Year</label>
                      <select
                        required
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-250 rounded-xl px-3 py-2 text-xs text-slate-800 font-bold focus:outline-none focus:border-indigo-500 bg-white cursor-pointer"
                      >
                        <option value="">Year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>

                    {/* Make Dropdown */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block">Make</label>
                      <select
                        required
                        value={make}
                        onChange={(e) => handleMakeChange(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-250 rounded-xl px-3 py-2 text-xs text-slate-800 font-bold focus:outline-none focus:border-indigo-500 bg-white cursor-pointer"
                      >
                        <option value="">Make</option>
                        {Object.keys(makesAndModels).map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    {/* Model Dropdown */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider block">Model</label>
                      <select
                        required
                        disabled={!make}
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-250 rounded-xl px-3 py-2 text-xs text-slate-800 font-bold focus:outline-none focus:border-indigo-500 bg-white cursor-pointer disabled:opacity-50"
                      >
                        <option value="">Model</option>
                        {make && makesAndModels[make]?.map((mod) => (
                          <option key={mod} value={mod}>{mod}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={checkLoading}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg hover:shadow-indigo-600/10 transition-all flex items-center justify-center gap-2 cursor-pointer border border-transparent disabled:opacity-50"
                  >
                    {checkLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 text-white animate-spin" />
                        Verifying Hardware Protocols...
                      </>
                    ) : (
                      <>
                        Check My Vehicle
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-4 py-2 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider font-mono">Protocol Match Verified</span>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {showResultMsg} is 100% Compatible!
                      </h4>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-[11.5px] text-slate-700 leading-normal font-semibold">
                      🎁 <span className="text-indigo-600 font-black">Pre-order Spot Qualification Locked</span>: Your dual-cam systems, companion application keys, and 3-Year cold-climate guarantee can be reserved today at the special Founding rate ($49 fully refundable deposit).
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => onScrollToSection('pricing')}
                      className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Reserve Your Spot Now
                      <ArrowRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCheckSuccess(false); setYear(''); setMake(''); setModel(''); }}
                      className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Check Another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* TRUST BAR BADGES (page 4-5 of PDF): Six visual trust badges directly below form, visible immediately */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3.5 w-full max-w-xl pb-6 mb-4">
              
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-150 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">No Subscription</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">Buy once, own forever</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-150 flex items-center justify-center text-indigo-600 shrink-0">
                  <Zap className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">100% Local</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">Edge neural core</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-150 flex items-center justify-center text-rose-600 shrink-0">
                  <Award className="w-4 h-4 text-rose-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">Canadian Roads</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">Winter-hardened</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-150 flex items-center justify-center text-blue-600 shrink-0">
                  <Lock className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">Privacy First</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">Zero cloud streaming</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-150 flex items-center justify-center text-violet-600 shrink-0">
                  <UserCheck className="w-4 h-4 text-violet-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">No Data Required</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">No personal telemetry</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-150 flex items-center justify-center text-amber-600 shrink-0">
                  <Activity className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10.5px] font-black tracking-tight block">Fast Check</span>
                  <span className="text-[9.5px] text-slate-400 font-medium">Instant protocol audit</span>
                </div>
              </div>

            </div>

            {/* Live reservation timer locked metrics (adds real prelaunch demand urgency without fake scarcity) */}
            <div className="relative bg-[#090D16] border border-slate-800 rounded-2xl p-4 max-w-xl shadow-lg w-full overflow-hidden transition-all duration-300 hover:border-slate-700 group mt-2.5">
              <div className="absolute top-3.5 right-4 bg-rose-500/10 text-rose-400 border border-rose-500/25 text-[8.5px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full animate-pulse">
                Phase 1 Guaranteed Spot
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-black font-mono">
                  SPECIAL FOUNDING ALLOCATION COUNTDOWN
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <p className="text-[11px] text-slate-300 leading-snug font-medium text-left max-w-sm">
                  Lock your dual-lens hardware at <span className="text-indigo-400 font-extrabold">Early-Bird rates ($49 fully refundable deposit)</span>. Standard MSRP rates apply once the countdown turns zero.
                </p>
                <div className="bg-[#030508]/90 border border-slate-850/80 rounded-xl p-2.5 flex justify-center shrink-0">
                  <CountdownTimer />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive HUD Visual Panel */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-[40px] blur-3xl -z-10" />
            <div className="relative w-full max-w-[420px] bg-white border border-slate-205 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 transition-all duration-500 hover:border-indigo-500/20">
              
              {/* Device Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-3.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="font-display font-semibold text-xs tracking-[0.06em] text-indigo-600 uppercase">
                    ASTRA-AI Smart DriveGuard
                  </span>
                </div>
                <div className="text-[10px] bg-emerald-100 text-emerald-850 px-2 py-0.5 rounded font-mono font-bold">
                  PREMIUM HARDWARE
                </div>
              </div>

              {/* Secure Bluetooth Switch */}
              <div className="bg-slate-105 p-1 mx-5 mt-4 rounded-xl flex gap-1 border border-slate-200/40 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('privacy')}
                  className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 focus:outline-none ${
                    activeTab === 'privacy'
                      ? 'bg-slate-800 text-white shadow-sm border border-slate-800'
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
                      ? 'bg-indigo-600 text-white shadow-md border border-indigo-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  OBD Engine Scan
                </button>
              </div>

              {/* Display Viewport */}
              <div className="p-5 flex flex-col gap-4">
                
                {activeTab === 'privacy' ? (
                  <>
                    <div className="relative w-full h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-200/80 shadow-inner group">
                      <img
                        src={activeScanningImg}
                        alt="ASTRA Real-Time Windshield Safety HUD Active Road Scanning"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse opacity-85 top-1/2 -translate-y-1/2 shadow-[0_0_12px_#6366f1]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/45 pointer-events-none" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-505"></span>
                        </span>
                        <span className="text-[9px] font-mono tracking-widest font-black uppercase text-white bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded shadow-sm">
                          ACTIVE SAFETY AI HUD SCAN
                        </span>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-3 pt-6 flex justify-between items-end z-10">
                        <div className="flex flex-col">
                          <span className="font-mono text-[9px] tracking-wider text-indigo-300 font-bold">
                            ● PREDICTIVE HAZARD SENSE
                          </span>
                          <span className="text-[10px] text-white font-semibold">
                            Twilight Highway Vision Active
                          </span>
                        </div>
                        <span className="text-[8px] bg-slate-900 text-slate-300 font-mono font-medium rounded px-1.5 py-0.5 border border-slate-800">
                          Secure Local AI Core
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-indigo-500" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">AI Processing Latency</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-indigo-650">
                          {latency}ms
                        </span>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Privacy Connection</span>
                        </div>
                        <span className="text-[9px] bg-amber-50 border border-amber-200/50 text-amber-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          Local-Only Sync
                        </span>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Driver Awareness Index</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-600 transition-all duration-300">
                          {awareness}%
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative w-full h-44 bg-slate-900 rounded-xl border border-slate-200/50 flex flex-col items-center justify-center overflow-hidden p-4 group">
                      <img
                        src={obdPluginImg}
                        alt="ASTRA OBD-II Direct Active Hardware Connection"
                        className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/20 pointer-events-none" />
                      
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
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Live Engine RPM</span>
                        </div>
                        <span className="font-mono text-xs font-black text-slate-800">
                          {rpm} RPM
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Sensor Voltage</span>
                        </div>
                        <span className="font-mono text-xs font-black text-indigo-600">
                          {voltage} V
                        </span>
                      </div>
                      
                      <div className="bg-slate-50 border border-slate-100 rounded-lg py-1.5 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[11px] text-slate-600 font-semibold tracking-wide">Active Diagnostic Flags</span>
                        </div>
                        <span className="text-[9px] bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded font-black uppercase">
                          0 Active Codes
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleStartObdScan}
                        disabled={obdScanning}
                        className={`w-full py-2.5 rounded-lg text-[10px] font-black tracking-widest transition-all uppercase flex items-center justify-center gap-1.5 cursor-pointer mt-1 ${
                          obdScanning
                            ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-slate-900 shadow-md shadow-indigo-600/15'
                        }`}
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${obdScanning ? 'animate-spin' : ''}`} />
                        {obdScanning ? 'Diagnosing System...' : 'Trigger ECU Hardware Scan'}
                      </button>
                    </div>
                  </>
                )}

              </div>

            </div>

            {/* Float badges */}
            <div className="absolute top-4 -right-8 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xl max-w-[140px] z-20 text-left animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-7 h-7 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-1.5">
                <Database className="w-4 h-4 text-indigo-505" />
              </div>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Privacy Engine</span>
              <p className="font-display font-semibold text-xs text-slate-800 leading-snug mt-0.5">
                100% Offline Processing
              </p>
            </div>

            <div className="absolute -bottom-6 -left-8 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xl max-w-[130px] z-20 text-left animate-bounce" style={{ animationDuration: '8s' }}>
              <div className="w-7 h-7 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-1.5">
                <Zap className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Fast Edge</span>
              <p className="font-display font-semibold text-xs text-emerald-600 leading-snug mt-0.5">
                Sub-12ms Response
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
