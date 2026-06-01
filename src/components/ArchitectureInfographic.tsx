import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  Video, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Smartphone, 
  Lock, 
  Activity, 
  Zap, 
  Bell, 
  Play, 
  RefreshCw, 
  ServerCrash, 
  CheckCircle2, 
  ArrowLeftRight,
  Database,
  Search,
  WifiOff,
  Radio,
  Sliders,
  Sparkles
} from 'lucide-react';

interface ArchitectureInfographicProps {
  onBack: () => void;
}

export default function ArchitectureInfographic({ onBack }: ArchitectureInfographicProps) {
  // Simulator State
  const [isDriving, setIsDriving] = useState(true);
  const [roadEnvironment, setRoadEnvironment] = useState<'urban' | 'highway' | 'night' | 'suburban'>('urban');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Dynamic metrics
  const [vehicleSpeed, setVehicleSpeed] = useState(52);
  const [engineRPM, setEngineRPM] = useState(2100);
  const [dtcFaults, setDtcFaults] = useState<string[]>([]);
  const [sdFreeSpace, setSdFreeSpace] = useState(94.2);
  const [cpuLoad, setCpuLoad] = useState(24);
  const [canMessageRate, setCanMessageRate] = useState(1280);
  const [transmissionSavingsBytes, setTransmissionSavingsBytes] = useState(14820000); // Bytes saved (local edge computing)
  const [batteryVoltage, setBatteryVoltage] = useState(14.1);
  const [systemUptime, setSystemUptime] = useState(0);

  // Active Interactive Smartphone View
  const [phoneMenu, setPhoneMenu] = useState<'alerts' | 'review' | 'diagnostics'>('alerts');
  const [triggeredAlert, setTriggeredAlert] = useState<{title: string, desc: string, time: string, type: 'hazard' | 'diagnostic' | 'security'} | null>(null);
  const [selectedVideoClip, setSelectedVideoClip] = useState<string | null>(null);

  // Interactive Live Logs Flow
  const [systemLogs, setSystemLogs] = useState<Array<{ id: string; timestamp: string; level: 'SECURE' | 'DIAG' | 'EDGE'; message: string }>>([]);

  // Bounding box simulation state for Dashcam feed
  const [dashcamObjects, setDashcamObjects] = useState<Array<{ label: string; x: number; y: number; w: number; h: number; confidence: number; hazard: boolean }>>([]);

  // Uptime ticker
  useEffect(() => {
    let interval = setInterval(() => {
      setSystemUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Drive loops
  useEffect(() => {
    if (!isDriving) return;

    const driveInterval = setInterval(() => {
      // Speeds & RPMS fluctuate realistically
      setVehicleSpeed(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const target = roadEnvironment === 'highway' ? 104 : roadEnvironment === 'night' ? 45 : 50;
        const nextSpeed = Math.max(0, Math.min(140, prev + change));
        // Gradual push to target
        if (nextSpeed < target) return nextSpeed + 1;
        if (nextSpeed > target) return nextSpeed - 1;
        return nextSpeed;
      });

      setEngineRPM(prev => {
        const baseRpm = vehicleSpeed * 40;
        const noise = Math.floor(Math.random() * 80) - 40;
        return Math.max(750, Math.min(6000, baseRpm + noise + 1000));
      });

      setCanMessageRate(prev => {
        const noise = Math.floor(Math.random() * 40) - 20;
        return Math.max(1200, Math.min(1380, prev + noise));
      });

      setCpuLoad(prev => {
        const noise = Math.floor(Math.random() * 6) - 3;
        const baseCpu = roadEnvironment === 'urban' ? 34 : 22;
        return Math.max(15, Math.min(85, baseCpu + noise));
      });

      setBatteryVoltage(prev => {
        const noise = (Math.random() * 0.1 - 0.05);
        return parseFloat((14.1 + noise).toFixed(2));
      });

      // Increase localized offline data saved (e.g. 150KB/sec)
      setTransmissionSavingsBytes(prev => prev + Math.floor(Math.random() * 150000 + 50000));

    }, 1200);

    return () => clearInterval(driveInterval);
  }, [isDriving, roadEnvironment, vehicleSpeed]);

  // Dashcam tracking bounding boxes simulator
  useEffect(() => {
    const updateObjects = () => {
      if (!isDriving) {
        setDashcamObjects([]);
        return;
      }

      let objects: typeof dashcamObjects = [];

      if (roadEnvironment === 'urban') {
        objects = [
          { label: 'Vehicle (Tesla)', x: 45, y: 35, w: 25, h: 22, confidence: 98.4, hazard: false },
          { label: 'Pedestrian Crossing', x: 12, y: 44, w: 10, h: 32, confidence: 94.1, hazard: true },
          { label: 'Traffic Light', x: 74, y: 15, w: 8, h: 18, confidence: 99.2, hazard: false }
        ];
      } else if (roadEnvironment === 'highway') {
        objects = [
          { label: 'Vehicle (Ford F-150)', x: 38, y: 40, w: 28, h: 25, confidence: 97.8, hazard: false },
          { label: 'Debris on Lane', x: 52, y: 65, w: 8, h: 6, confidence: 89.4, hazard: true },
          { label: 'Overhead Gantry', x: 10, y: 10, w: 80, h: 15, confidence: 95.0, hazard: false }
        ];
      } else if (roadEnvironment === 'night') {
        objects = [
          { label: 'Rear Silhouette', x: 22, y: 42, w: 15, h: 20, confidence: 91.2, hazard: false },
          { label: 'Wildlife Edge Detection', x: 82, y: 50, w: 12, h: 22, confidence: 85.7, hazard: true }
        ];
      } else {
        objects = [
          { label: 'Vehicle (Civic)', x: 55, y: 38, w: 22, h: 20, confidence: 98.9, hazard: false },
          { label: 'Cyclist (Lane Margin)', x: 15, y: 45, w: 12, h: 28, confidence: 96.5, hazard: false }
        ];
      }

      // Add a tiny bit of pixel jitter
      setDashcamObjects(objects.map(o => ({
        ...o,
        x: Math.max(1, Math.min(99, o.x + (Math.random() * 2 - 1))),
        y: Math.max(1, Math.min(99, o.y + (Math.random() * 2 - 1)))
      })));
    };

    updateObjects();
    const interval = setInterval(updateObjects, 1000);
    return () => clearInterval(interval);
  }, [isDriving, roadEnvironment]);

  // Log message generator
  useEffect(() => {
    const makeNewLog = () => {
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      
      const edgeLogs = [
        "Localized Edge Loop active. CAN-packet decryption initialized.",
        `Offline edge processing completed. Telemetry frames isolated. Core CPU load: ${cpuLoad}%`,
        `Cryptographic storage seal success. Data safely partitioned at edge node (SD)`,
        "Vehicle telemetry verification: CAN signal verified healthy."
      ];

      const diagLogs = [
        `CAN network report: ${canMessageRate} packets/sec fully analyzed. Integrity: optimal`,
        `OBD-II response packet parsed in 0.8ms. Fault state check: 0 DTC active`,
        `Power grid analysis: alternator charge stable at ${batteryVoltage}V`,
        "Coolant sensor feedback delta calibrated. Metric system operating within tolerances."
      ];

      const secureLogs = [
        "Vibe-Sensor threat model checking: Accelerometer delta within normal travel parameters",
        "Dashcam Object detection engine running (Front 4K + Rear 1080p stream correlated)",
        "Zero-Trust Cloud Blockactive. All outbound connections redirected to local loopback.",
        "Privacy fortress shield verified: No cloud dependencies engaged for current telemetry."
      ];

      const categories: Array<'SECURE' | 'DIAG' | 'EDGE'> = ['SECURE', 'DIAG', 'EDGE'];
      const chosenCat = categories[Math.floor(Math.random() * categories.length)];
      
      let msg = '';
      if (chosenCat === 'SECURE') msg = secureLogs[Math.floor(Math.random() * secureLogs.length)];
      else if (chosenCat === 'DIAG') msg = diagLogs[Math.floor(Math.random() * diagLogs.length)];
      else msg = edgeLogs[Math.floor(Math.random() * edgeLogs.length)];

      const freshLog = {
        id: Math.random().toString(),
        timestamp,
        level: chosenCat,
        message: msg
      };

      setSystemLogs(prev => [freshLog, ...prev.slice(0, 50)]);
    };

    // Initial logs seed
    if (systemLogs.length === 0) {
      for (let i = 0; i < 4; i++) {
        makeNewLog();
      }
    }

    const logInterval = setInterval(makeNewLog, isDriving ? 3200 : 7000);
    return () => clearInterval(logInterval);
  }, [isDriving, systemLogs, canMessageRate, cpuLoad, batteryVoltage]);

  // Helper to trigger interactive system warnings inside phone simulator
  const handleTriggerSimulatedAlert = (type: 'vibration' | 'obd_leak' | 'hazard') => {
    let alertObj: typeof triggeredAlert = null;
    
    if (type === 'vibration') {
      alertObj = {
        title: "SECURITY THREAT RESOLVED",
        desc: "Local motion threshold crossed. DriveGuard rear security camera isolated: vibration caused by harmless external wind gust.",
        time: "Just Now",
        type: 'security'
      };
      // Log event
      setSystemLogs(prev => [{
        id: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString() + '.000',
        level: 'SECURE',
        message: "[THREAT ARRESTED] Vibration detected -> correlated with rear camera feed -> local analysis confirms low threat."
      }, ...prev]);
    } else if (type === 'obd_leak') {
      alertObj = {
        title: "VEHICLE DIAGNOSTIC CHECK",
        desc: "All CAN Bus subsystems verified. No emission gaps reported. Local telemetry synchronized.",
        time: "Just Now",
        type: 'diagnostic'
      };
      setSystemLogs(prev => [{
        id: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString() + '.000',
        level: 'DIAG',
        message: "[DIAGNOSTICS] Interactive OBD-II scanner checked: 0 fault codes retrieved. Squelch active."
      }, ...prev]);
    } else {
      alertObj = {
        title: "HAZARD AVOIDANCE DETECTED",
        desc: "DriveGuard AI localized model triggered: Pedestrian obstruction threat noted in urban grid. Hazard buffer stored on Edge SSD.",
        time: "Just Now",
        type: 'hazard'
      };
      setSystemLogs(prev => [{
        id: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString() + '.000',
        level: 'SECURE',
        message: "[HAZARD RESOLVED] Object detection flagged hazard state: obstacle on lane. Buffer partitioned."
      }, ...prev]);
    }

    setTriggeredAlert(alertObj);
    setPhoneMenu('alerts');
  };

  const handleClearAlert = () => {
    setTriggeredAlert(null);
  };

  const formattedSavedData = (transmissionSavingsBytes / (1024 * 1024)).toFixed(2);

  return (
    <div className="bg-[#030303] text-stone-200 min-h-screen flex flex-col font-sans select-none overflow-hidden relative pb-12">
      
      {/* Dynamic Keyframes injected safely */}
      <style>{`
        @keyframes flow-horizontal {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        @keyframes scanning {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .flow-line {
          stroke-dasharray: 8 4;
          animation: flow-horizontal 2s linear infinite;
        }
        .pulsing-border {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .scanning-line {
          animation: scanning 4s linear infinite;
        }
      `}</style>

      {/* Decorative ambient background grid glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-purple-950/10 to-black/90 pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />

      {/* 1. Header Control Panel */}
      <header className="sticky top-0 z-30 bg-[#09090B]/90 backdrop-blur-md border-b border-stone-850/65 py-4 px-6 shadow-2xl relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand and Breadcrumbs */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 border border-stone-800 hover:bg-stone-850 hover:text-white rounded-lg text-xs font-semibold text-stone-400 tracking-wide transition-all uppercase cursor-pointer"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Landing Page</span>
            </button>
            <div className="h-6 w-[1px] bg-stone-800 hidden sm:block" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-extrabold">System Architecture</span>
                <span className="bg-emerald-950 border border-emerald-800 px-1.5 py-0.5 rounded text-[8px] font-bold text-emerald-400 uppercase tracking-widest font-mono animate-pulse">
                  Local Loop Live
                </span>
              </div>
              <h1 className="font-sans font-black text-lg sm:text-xl text-white tracking-tight leading-none mt-1">
                ASTRATEQ <span className="text-stone-400 font-medium">Eco-Architecture</span>
              </h1>
            </div>
          </div>

          {/* Interactive Live Dashboard Controls */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            
            {/* Simulation Speed Switch */}
            <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1.5 rounded-lg border border-stone-800">
              <span className="text-[10px] font-mono text-stone-400 font-bold uppercase tracking-wider">Env:</span>
              <select 
                value={roadEnvironment} 
                onChange={(e) => setRoadEnvironment(e.target.value as any)}
                className="bg-transparent text-xs text-white outline-none font-bold cursor-pointer hover:text-cyan-400 transition-colors pr-2"
                style={{ WebkitAppearance: 'none', appearance: 'none' }}
              >
                <option value="urban" className="bg-[#0e0e11] text-stone-300 font-sans">🌆 Urban Grid</option>
                <option value="highway" className="bg-[#0e0e11] text-stone-300 font-sans">🛣️ Express Highway</option>
                <option value="night" className="bg-[#0e0e11] text-stone-300 font-sans">🌃 Midnight Route</option>
                <option value="suburban" className="bg-[#0e0e11] text-stone-300 font-sans">🏡 Suburban Crossway</option>
              </select>
            </div>

            {/* Run state control button */}
            <button
              onClick={() => setIsDriving(!isDriving)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-300 border cursor-pointer select-none ${
                isDriving 
                  ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800 hover:bg-cyan-900/60 shadow-lg shadow-cyan-950/30' 
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isDriving ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
              <span>{isDriving ? 'Driving Core Active' : 'Loop Paused'}</span>
            </button>

            {/* Global Metrics Mini-Panel */}
            <div className="hidden lg:flex items-center gap-4 bg-stone-900/40 px-3.5 py-1 rounded-lg border border-stone-800/85">
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase tracking-wider text-stone-500 font-bold font-mono">Uptime Loop</span>
                <span className="text-xs font-mono font-bold text-stone-300">
                  {Math.floor(systemUptime / 3600).toString().padStart(2, '0')}:
                  {Math.floor((systemUptime % 3600) / 60).toString().padStart(2, '0')}:
                  {(systemUptime % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div className="w-[1px] h-6 bg-stone-800" />
              <div className="flex flex-col text-left">
                <span className="text-[8px] uppercase tracking-wider text-stone-500 font-bold font-mono">Zero-Cloud Cache</span>
                <span className="text-xs font-mono font-black text-cyan-400">
                  {formattedSavedData} MB
                </span>
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-8 flex-grow relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Dynamic Telemetry Highway SVG overlay - Desktop Only */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
          <svg className="absolute w-full h-full" style={{ opacity: 0.15 }}>
            <line x1="25%" y1="12%" x2="52%" y2="28%" stroke="#06B6D4" strokeWidth="2" className="flow-line" />
            <line x1="25%" y1="65%" x2="52%" y2="35%" stroke="#06B6D4" strokeWidth="2" className="flow-line" />
            <line x1="52%" y1="35%" x2="72%" y2="22%" stroke="#06B6D4" strokeWidth="2" className="flow-line" />
            <line x1="52%" y1="42%" x2="72%" y2="65%" stroke="#06B6D4" strokeWidth="2" className="flow-line" />
          </svg>
        </div>

        {/* COL 1: SENSOR ACQUISITION LAYER (Span 4) */}
        <section className="lg:col-span-4 flex flex-col gap-6" id="infographic-sensors">
          
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-[#94A3B8]">01. Acquisition Layer</span>
            <span className="text-xs text-stone-600 font-medium">| Hardware Interface</span>
          </div>

          {/* Node 1: Road Environment */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-cyan-500/55 hover:shadow-[0_0_20px_rgba(34,211,238,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node1' ? 'border-cyan-500 ring-1 ring-cyan-500/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node1')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-cyan-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-stone-500 font-bold tracking-wider">Source Input</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">Road Environment</h3>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-extrabold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/35">
                SIGNAL IN
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Real-world road arrays monitored continuously under localized Edge threat modeling policies. Zero wireless transit logic applied.
            </p>

            {/* Micro visual: Active simulation feedback frame */}
            <div className="bg-[#050505] border border-stone-900 rounded-xl p-3 flex items-center justify-between text-[11px] font-mono">
              <span className="text-stone-500">Telemetry Target State:</span>
              <span className="text-white font-bold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                {roadEnvironment.toUpperCase()} CONDITIONS
              </span>
            </div>
          </article>


          {/* Node 2: Drivehazard AI Dashcam */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-purple-500/55 hover:shadow-[0_0_20px_rgba(168,85,247,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node2' ? 'border-purple-500 ring-1 ring-purple-500/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node2')}
          >
            {/* Purple Security Accent Glow */}
            <div className="absolute top-0 right-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-purple-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Video className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-purple-400/90 font-bold tracking-wider">Security Layer</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">DriveGuard AI Dashcam</h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-purple-300 font-extrabold bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/35">
                VISUAL COGNITION
              </span>
            </div>

            {/* PDF Hardware specifications checklist */}
            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Dual 4K camera arrays process real-time hazard vectors and local crash boundaries on-device. No outbound video packet drops.
            </p>

            {/* High-tech miniature object detection mockup panel */}
            <div className="bg-[#050505] border border-stone-900 rounded-xl p-3 mb-4 text-left overflow-hidden relative">
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-1.5 uppercase tracking-wider">
                <span>[CAM_STREAM_001_A]</span>
                <span className="text-purple-400 flex items-center gap-1">
                  <Radio className="w-2.5 h-2.5 animate-pulse" /> Edge processing
                </span>
              </div>
              
              {/* Box frame */}
              <div className="h-32 bg-stone-950 rounded-lg relative overflow-hidden flex items-center justify-center border border-stone-900">
                {isDriving ? (
                  <>
                    <img 
                      src={
                        roadEnvironment === 'highway' 
                          ? 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=350&auto=format&fit=crop'
                          : roadEnvironment === 'night'
                          ? 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=350&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=350&auto=format&fit=crop'
                      } 
                      alt="Local Road Simulation" 
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-stone-950/15" />
                    <div className="absolute inset-x-0 h-[2px] bg-purple-500/30 top-1/2 scanning-line" />
                    
                    {/* Floating bounding boxes */}
                    {dashcamObjects.map((obj, idx) => (
                      <div 
                        key={idx}
                        className={`absolute border-2 rounded ${
                          obj.hazard 
                            ? 'border-purple-500 text-purple-300 bg-purple-950/40 shadow-[0_0_8px_rgba(168,85,247,0.3)]' 
                            : 'border-cyan-500 text-cyan-300 bg-cyan-950/20'
                        } text-[8px] font-mono font-black p-0.5 tracking-tight`}
                        style={{
                          left: `${obj.x}%`,
                          top: `${obj.y}%`,
                          width: `${obj.w}%`,
                          height: `${obj.h}%`,
                        }}
                      >
                        <span className="absolute -top-4 left-0 bg-black/85 px-1 py-0.2 rounded text-[7px] border border-stone-800 whitespace-nowrap">
                          {obj.label} ({obj.confidence.toFixed(0)}%)
                        </span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-1">
                    <ServerCrash className="w-5 h-5 text-stone-700" />
                    <span className="text-[10px] font-mono text-stone-600 uppercase">Input Feed Halted</span>
                  </div>
                )}
              </div>
            </div>

            {/* Checklist of PDF features */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-500 text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Front Camera (4K)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Rear Camera (1080p)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Local Edge Rec</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-300">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Threat Isolation</span>
              </div>
            </div>
          </article>


          {/* Node 4: Astrateq Diagnostic Scanner */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-lime-500/55 hover:shadow-[0_0_20px_rgba(132,204,22,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node4' ? 'border-lime-500 ring-1 ring-lime-500/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node4')}
          >
            {/* Lime health indicator Top Trim */}
            <div className="absolute top-0 right-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent shadow-[0_0_10px_rgba(132,204,22,0.5)]" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-lime-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Gauge className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-lime-400 font-extrabold tracking-wider">Health Indicators</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">Diagnostic Scanner</h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-lime-300 font-extrabold bg-lime-950/40 px-2 py-0.5 rounded border border-lime-900/35">
                OBD-II + CAN BUS
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Monitors the electronic control vehicle buses down to the millisecond. Pinpoints battery sags, alternator dropouts, and emissions.
            </p>

            {/* Interactive sliders or input to alter telemetry (very engaging) */}
            <div className="bg-[#050505] border border-stone-900 rounded-xl p-3 mb-4 text-left font-mono">
              <span className="text-[10px] text-stone-500 uppercase font-bold tracking-wider block mb-2">[CAN TELEMETRY MODULE]</span>
              
              <div className="space-y-3 text-xs">
                
                {/* Dial Simulators */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0B0B0C] p-2 rounded-lg border border-stone-850">
                    <span className="text-[9px] text-stone-500 block">CAN Rate</span>
                    <span className="text-lime-400 font-bold block mt-0.5 text-sm">{canMessageRate} Hz</span>
                    <div className="h-1 bg-stone-900 rounded-full mt-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-lime-400 transition-all duration-300"
                        style={{ width: `${(canMessageRate - 1000) / 4}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#0B0B0C] p-2 rounded-lg border border-stone-850">
                    <span className="text-[9px] text-stone-500 block">Power Grid</span>
                    <span className="text-lime-400 font-bold block mt-0.5 text-sm">{batteryVoltage} V</span>
                    <div className="h-1 bg-stone-900 rounded-full mt-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-lime-400 transition-all duration-300"
                        style={{ width: `${((batteryVoltage - 11) / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* RPM & Speed metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0B0B0C] p-2 rounded-lg border border-stone-850">
                    <span className="text-[9px] text-stone-500 block">Engine RPM</span>
                    <span className="text-white font-bold block mt-0.5 text-sm">{engineRPM} RPM</span>
                  </div>

                  <div className="bg-[#0B0B0C] p-2 rounded-lg border border-stone-850">
                    <span className="text-[9px] text-stone-500 block">Car Velocity</span>
                    <span className="text-white font-bold block mt-0.5 text-sm">{vehicleSpeed} km/h</span>
                  </div>
                </div>

                {/* OBD Troubleshooting codes simulator */}
                <div className="pt-1.5 flex items-center justify-between text-[10px] text-stone-500">
                  <span>DTC CODES:</span>
                  <span className="text-lime-400 font-black flex items-center gap-1 bg-lime-950/20 px-2 py-0.5 rounded border border-lime-900/30">
                    <CheckCircle2 className="w-3 h-3" /> P0000 - SYSTEM OK
                  </span>
                </div>

              </div>
            </div>

            {/* OBD detailed features catalog */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-500 text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-lime-400" />
                <span>CAN Bus Monitor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-lime-400" />
                <span>Battery Level Analysis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-lime-400" />
                <span>DTC Scanner Engine</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-lime-400" />
                <span>Active Core Check</span>
              </div>
            </div>

          </article>

        </section>

        {/* COL 2: PROCESSING & LOCAL EDGE LOOP CORE (Span 4) */}
        <section className="lg:col-span-4 flex flex-col gap-6" id="infographic-processing">
          
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-[#94A3B8]">02. Decoupled Core</span>
            <span className="text-xs text-stone-600 font-medium">| Edge Computing Loop</span>
          </div>

          {/* Node 3: Local Edge Loop (Vehicle-Based Local AI) */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-6 hover:border-cyan-400/55 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node3' ? 'border-cyan-400 ring-1 ring-cyan-400/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node3')}
          >
            <div className="absolute top-0 left-12 w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-950/20 text-cyan-400 rounded-2xl border border-cyan-800/40 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-cyan-400 font-black tracking-widest">Architectural Pivot</span>
                  <h3 className="text-base font-black text-white tracking-wide uppercase mt-0.5">Local Edge Loop</h3>
                </div>
              </div>
            </div>

            {/* Essential Differentiator Pillars from Page 3 */}
            <div className="bg-stone-950 border border-stone-900 rounded-xl p-4.5 mb-5 space-y-4 text-left">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block font-bold">
                [CLOUD REPLACEMENT PROTOCOL]
              </span>
              
              <ul className="space-y-3.5 text-xs font-medium text-stone-300">
                <li className="flex items-start gap-2.5">
                  <div className="p-0.5 bg-cyan-950 text-cyan-400 border border-cyan-850 rounded mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Data remains 100% local</strong>
                    <span className="text-stone-500 font-mono text-[10px]">No telemetry packets leaked back to cloud farms.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="p-0.5 bg-cyan-950 text-cyan-400 border border-cyan-850 rounded mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Processing remains local</strong>
                    <span className="text-stone-500 font-mono text-[10px]">Neural visual processing triggered entirely inside vehicle.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="p-0.5 bg-cyan-950 text-cyan-400 border border-cyan-850 rounded mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Intelligence remains local</strong>
                    <span className="text-stone-500 font-mono text-[10px]">Pre-trained inference logic executed on high-efficiency edge chips.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="p-0.5 bg-cyan-950 text-cyan-400 border border-cyan-850 rounded mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Ownership remains with the driver</strong>
                    <span className="text-stone-500 font-mono text-[10px]">You own your drives. Pure sovereignty by hardware architecture.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Edge diagnostics monitor metrics */}
            <div className="grid grid-cols-2 gap-3 bg-[#050505] border border-stone-900 rounded-xl p-3.5 text-left font-mono text-xs">
              <div>
                <span className="text-stone-500 text-[9px] block">CPU FREQ</span>
                <span className="text-stone-300 font-bold block mt-0.5">1.84 GHz (4x)</span>
              </div>
              <div>
                <span className="text-stone-500 text-[9px] block">TEMP STATUS</span>
                <span className="text-stone-300 font-bold block mt-0.5">42.2 °C (Passive)</span>
              </div>
            </div>
            
          </article>


          {/* Node 5: Security & Intelligence Processing Engine */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-purple-500/55 hover:shadow-[0_0_20px_rgba(168,85,247,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node5' ? 'border-purple-500 ring-1 ring-purple-500/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node5')}
          >
            <div className="absolute top-0 right-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-purple-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Sliders className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-purple-300 font-bold tracking-wider">Analysis Engine</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">Security & Processing Engine</h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-purple-300 font-extrabold bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/35">
                CORRELATOR
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Performs edge event correlation. Matches optical vehicle detections with CAN bus signals to isolate physical hazards and prevent false alarm triggers.
            </p>

            {/* Live stream logs block to simulate active analysis and highlight safety */}
            <div className="bg-[#050505] border border-stone-900 rounded-xl p-3 mb-4 text-left font-mono relative overflow-hidden">
              <div className="flex items-center justify-between text-[10px] text-stone-500 mb-2 border-b border-stone-900 pb-1.5 uppercase font-bold tracking-wider">
                <span>[PROCESSOR_LOGS_STREAM]</span>
                <span className="text-purple-400 flex items-center gap-1 font-bold">
                  <Activity className="w-3 h-3 animate-pulse" /> correlator running
                </span>
              </div>
              
              {/* Scrolling Log terminal emulator */}
              <div className="h-44 overflow-y-auto space-y-2 text-[9px] leading-snug no-scrollbar pr-1">
                {systemLogs.map((log) => (
                  <div key={log.id} className="transition-all duration-300 border-b border-stone-900/45 pb-1">
                    <div className="flex items-center gap-1.5 justify-between">
                      <span className="text-stone-500 font-bold">{log.timestamp}</span>
                      <span className={`px-1 rounded-[3px] font-black tracking-wider text-[8px] ${
                        log.level === 'SECURE' 
                          ? 'bg-purple-950 text-purple-400 border border-purple-900/30' 
                          : log.level === 'DIAG'
                          ? 'bg-lime-950 text-lime-400 border border-lime-900/30'
                          : 'bg-cyan-950 text-cyan-400 border border-cyan-900/30'
                      }`}>
                        {log.level}
                      </span>
                    </div>
                    <p className="text-stone-300 mt-0.5">{log.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* List of sub-features */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-500 text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>On-Device Edge Filtering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Impact Signal Correlation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Dynamic Vehicle State Loop</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-300">
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Secure Storage Locking</span>
              </div>
            </div>

          </article>

        </section>

        {/* COL 3: HUMAN INTERFACES & DATA CRYPT (Span 4) */}
        <section className="lg:col-span-4 flex flex-col gap-6" id="infographic-crypt">
          
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-[#94A3B8]">03. Control & Sovereignty</span>
            <span className="text-xs text-stone-600 font-medium">| Human Interface Layer</span>
          </div>

          {/* Node 6: Mobile Companion App */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-cyan-400/55 hover:shadow-[0_0_20px_rgba(34,211,238,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node6' ? 'border-cyan-400 ring-1 ring-cyan-400/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node6')}
          >
            <div className="absolute top-0 right-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-cyan-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-cyan-300 font-bold tracking-wider">User Portal</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">Mobile Companion App</h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-cyan-300 font-extrabold bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/35">
                APP INTERFACE
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Immediate security alerts, local video extraction, and engine diagnostic reporting. Pure local-Wi-Fi pairing logic.
            </p>

            {/* MOCK PHONE PREVIEW - REALLY INTERACTIVE */}
            <div className="bg-[#050505] border border-stone-900 rounded-2xl p-3.5 mb-4 text-left font-mono relative overflow-hidden">
              
              {/* Speaker / Notch bar */}
              <div className="w-16 h-3.5 bg-[#0f0f12] rounded-full mx-auto mb-3 flex items-center justify-center border border-stone-800">
                <div className="w-5 h-1 bg-stone-700 rounded-full" />
              </div>

              {/* Internal Phone Viewport */}
              <div className="bg-[#070708] border border-stone-850 rounded-xl p-3 min-h-64 flex flex-col relative">
                
                {/* Header status */}
                <div className="flex items-center justify-between text-[8px] text-stone-500 mb-3 border-b border-stone-900 pb-1.5 font-bold">
                  <span className="flex items-center gap-0.5 text-lime-400">
                    <WifiOff className="w-2.5 h-2.5" /> Offline-direct
                  </span>
                  <span>Astrateq Mobile</span>
                  <span>100% Secure</span>
                </div>

                {/* Sub Menu Switchers for interactive phone state */}
                <div className="grid grid-cols-3 gap-1 mb-3 text-[8px] font-bold">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setPhoneMenu('alerts'); }}
                    className={`py-1 rounded text-center cursor-pointer border ${
                      phoneMenu === 'alerts' 
                        ? 'bg-purple-950/40 text-purple-300 border-purple-900/35' 
                        : 'bg-stone-900 text-stone-500 border-stone-850 hover:bg-stone-850'
                    }`}
                  >
                    ALERTS
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setPhoneMenu('review'); }}
                    className={`py-1 rounded text-center cursor-pointer border ${
                      phoneMenu === 'review' 
                        ? 'bg-cyan-950/40 text-cyan-300 border-cyan-900/35' 
                        : 'bg-stone-900 text-stone-500 border-stone-850 hover:bg-stone-850'
                    }`}
                  >
                    VIDEO CLIPS
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setPhoneMenu('diagnostics'); }}
                    className={`py-1 rounded text-center cursor-pointer border ${
                      phoneMenu === 'diagnostics' 
                        ? 'bg-lime-950/40 text-lime-300 border-lime-900/35' 
                        : 'bg-stone-900 text-stone-500 border-stone-850 hover:bg-stone-850'
                    }`}
                  >
                    HEALTH
                  </button>
                </div>

                {/* Sub Menu Views */}
                <div className="flex-grow flex flex-col text-[10px]">
                  
                  {phoneMenu === 'alerts' && (
                    <div className="space-y-2 flex-grow flex flex-col justify-between">
                      <div className="space-y-1.5 text-left">
                        <span className="text-[8px] text-stone-500 uppercase tracking-wide block font-semibold">Priority Security Stream:</span>
                        
                        {triggeredAlert ? (
                          <div className={`p-2 rounded border animate-scale-up ${
                            triggeredAlert.type === 'hazard' 
                              ? 'bg-orange-950/20 text-orange-200 border-orange-900/40' 
                              : triggeredAlert.type === 'diagnostic'
                              ? 'bg-lime-950/20 text-lime-300 border-lime-900/40'
                              : 'bg-purple-950/20 text-purple-300 border-purple-900/40'
                          }`}>
                            <div className="flex items-center justify-between text-[8px] font-black pb-1 mb-1 border-b border-stone-900">
                              <span>{triggeredAlert.title}</span>
                              <span className="text-stone-500">{triggeredAlert.time}</span>
                            </div>
                            <p className="text-[9px] leading-tight text-stone-300 font-sans">{triggeredAlert.desc}</p>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleClearAlert(); }}
                              className="mt-1.5 text-[8px] underline text-stone-400 hover:text-white uppercase cursor-pointer"
                            >
                              Dismiss Notification
                            </button>
                          </div>
                        ) : (
                          <div className="p-3 bg-stone-900/40 rounded border border-stone-900 text-stone-500 text-center py-6 text-[9px] font-mono leading-relaxed">
                            <Bell className="w-4 h-4 mx-auto text-stone-700 mb-1.5 animate-pulse" />
                            Security perimeter is locked. No alerts triggered.
                          </div>
                        )}
                      </div>

                      {/* Manual trigger test buttons (highly engaging!) */}
                      <div className="pt-2 border-t border-stone-900">
                        <span className="text-[8px] text-stone-500 uppercase block mb-1 font-bold">Inject Mock Diagnostic Events:</span>
                        <div className="grid grid-cols-3 gap-1">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleTriggerSimulatedAlert('vibration'); }}
                            className="bg-[#0f0f12] text-purple-400 hover:bg-stone-850 py-1 rounded text-[8px] font-bold border border-stone-850 cursor-pointer"
                          >
                            Vibe Test
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleTriggerSimulatedAlert('hazard'); }}
                            className="bg-[#0f0f12] text-orange-400 hover:bg-stone-850 py-1 rounded text-[8px] font-bold border border-stone-850 cursor-pointer"
                          >
                            Obstruction
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleTriggerSimulatedAlert('obd_leak'); }}
                            className="bg-[#0f0f12] text-lime-400 hover:bg-stone-850 py-1 rounded text-[8px] font-bold border border-stone-850 cursor-pointer"
                          >
                            OBD Scan
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                  {phoneMenu === 'review' && (
                    <div className="space-y-2 text-left flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[8px] text-stone-500 uppercase tracking-wide block font-semibold mb-1">Decoupled SD Loop Clips:</span>
                        <div className="space-y-1">
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedVideoClip('urban_032'); }}
                            className={`p-1.5 rounded border flex items-center justify-between cursor-pointer ${
                              selectedVideoClip === 'urban_032' ? 'bg-cyan-950/20 border-cyan-800 text-cyan-300' : 'bg-stone-900 border-stone-950 hover:bg-stone-850 text-stone-400'
                            }`}
                          >
                            <span className="flex items-center gap-1 text-[9px]"><Play className="w-2.5 h-2.5" /> Urban_032.mp4</span>
                            <span className="text-[7px] text-stone-600">32s ago</span>
                          </div>
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedVideoClip('highway_004'); }}
                            className={`p-1.5 rounded border flex items-center justify-between cursor-pointer ${
                              selectedVideoClip === 'highway_004' ? 'bg-cyan-950/20 border-cyan-800 text-cyan-300' : 'bg-stone-900 border-stone-950 hover:bg-stone-850 text-stone-400'
                            }`}
                          >
                            <span className="flex items-center gap-1 text-[9px]"><Play className="w-2.5 h-2.5" /> Highway_004.mp4</span>
                            <span className="text-[7px] text-stone-600">2.4m ago</span>
                          </div>
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedVideoClip('security_vibe'); }}
                            className={`p-1.5 rounded border flex items-center justify-between cursor-pointer ${
                              selectedVideoClip === 'security_vibe' ? 'bg-cyan-950/20 border-cyan-800 text-cyan-300' : 'bg-stone-900 border-stone-950 hover:bg-stone-850 text-stone-400'
                            }`}
                          >
                            <span className="flex items-center gap-1 text-[9px]"><Play className="w-2.5 h-2.5" /> Security_Vibe.mp4</span>
                            <span className="text-[7px] text-stone-600">14m ago</span>
                          </div>
                        </div>
                      </div>

                      {selectedVideoClip && (
                        <div className="p-2 bg-stone-900 rounded border border-stone-800 mt-1">
                          <span className="text-[8px] text-cyan-400 font-bold block uppercase mb-1">PLAYING DECRYPTED LOOP:</span>
                          <div className="h-10 bg-stone-950 flex items-center justify-center font-bold text-stone-600 text-[8px] uppercase tracking-wider relative rounded-sm">
                            <span className="absolute top-1 left-1.5 text-rose-500 animate-pulse">● LOCAL REC</span>
                            {selectedVideoClip} ONLINE FEED
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {phoneMenu === 'diagnostics' && (
                    <div className="space-y-1.5 text-left font-mono">
                      <span className="text-[8px] text-stone-500 uppercase tracking-wide block font-semibold mb-1">CAN Gateway Status:</span>
                      
                      <div className="p-2 bg-stone-900 rounded border border-stone-950 text-[9px] space-y-1.5 text-stone-300">
                        <div className="flex justify-between items-center">
                          <span>CAN Message Input Rate:</span>
                          <span className="text-lime-400 font-bold">{canMessageRate} Hz</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Diagnostic Codes:</span>
                          <span className="text-lime-400 font-bold">P0000 - CLEAR</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Local Bus Latency:</span>
                          <span className="text-stone-400">1.2 ms</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Ignition state:</span>
                          <span className="text-emerald-400 font-bold">TERMINAL 15 ON</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Battery voltage profile:</span>
                          <span className={`${batteryVoltage > 13.8 ? 'text-lime-400' : 'text-orange-400'} font-bold`}>{batteryVoltage} V</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>

            {/* List of sub-features */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-stone-500 text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Wi-Fi Direct Peer Sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Zero Cloud Authentication</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Local Video Extraction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Telemetry Dashboard View</span>
              </div>
            </div>

          </article>


          {/* Node 7: Driver Controlled Data (Matte black lock showing zero cloud leak stats) */}
          <article 
            className={`bg-[#0A0A0A] border rounded-2xl p-5 hover:border-lime-550 hover:shadow-[0_0_20px_rgba(132,204,22,0.06)] transition-all duration-300 relative group cursor-pointer ${
              activeNode === 'node7' ? 'border-lime-500 ring-1 ring-lime-500/30' : 'border-stone-850'
            }`}
            onClick={() => setActiveNode('node7')}
          >
            {/* Health-inspired Lime Green Accent Bar */}
            <div className="absolute top-0 left-12 w-16 h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent shadow-[0_0_10px_rgba(132,204,22,0.5)]" />

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-900 rounded-xl text-lime-400 group-hover:scale-105 transition-transform border border-stone-800">
                  <Lock className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] uppercase text-lime-400 font-bold tracking-wider">Ultimate Sovereignty</span>
                  <h3 className="text-sm font-bold text-white tracking-tight uppercase">Driver Controlled Data</h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-lime-300 font-extrabold bg-lime-950/40 px-2 py-0.5 rounded border border-lime-900/35">
                ZERO-CLOUD TRUST
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed text-left mb-4">
              Eliminates central server locks entirely. Security alerts and detailed trip history logs reside in your vehicle, encrypted on physical hardware. You hold the master key.
            </p>

            {/* Simulated Live offline savings tracker */}
            <div className="bg-[#05055] border border-stone-900 rounded-xl p-3.5 text-left font-mono">
              <div className="flex items-center justify-between text-[10px] text-stone-500 mb-2 uppercase font-bold tracking-wider">
                <span>[PRIVACY_SHIELD_METRICS]</span>
                <span className="text-lime-400 font-black flex items-center gap-1">
                  <Database className="w-3.5 h-3.5" /> No Cloud leakage
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Outbound Cloud Sync:</span>
                  <span className="text-stone-500 line-through">Blocked (0.00 KB)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Bypassed Cloud Bandwidth:</span>
                  <span className="text-lime-400 font-black">
                    {formattedSavedData} MB
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Decoupled Encryption Key:</span>
                  <span className="text-stone-400 uppercase text-[9px] bg-stone-900 px-1 rounded font-bold">aes-256-gcm</span>
                </div>
              </div>
            </div>

          </article>

        </section>

      </main>

      {/* FOOTER METRICS TRANSCRIPTION DETAILS */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-12 text-center relative z-10">
        <div className="border-t border-stone-850/65 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <span className="text-purple-400 uppercase tracking-widest text-[8px] font-mono font-black block mb-1">
              FOUNDATIONAL SYSTEM PARAMETERS
            </span>
            <p className="text-stone-500 text-[10px] leading-relaxed">
              This interactive telemetry board decodes <strong>Astrateq Gadgets'</strong> full local loop engine in real-time. By processing camera streams (DriveGuard AI) and diagnostic frames (Astrateq Scanner) exclusively at the physical vehicle gateway boundary, drivers maintain absolute privacy without subscriptions or server exposure.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-cyan-950/20"
            >
              Back to Astrateq Store
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
