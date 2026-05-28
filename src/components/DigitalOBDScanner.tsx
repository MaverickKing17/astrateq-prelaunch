import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, MapPin, Wrench, Search, RefreshCw, DollarSign, Settings, Navigation, Navigation2, Check, UserCheck, Star, Radio } from 'lucide-react';

const luxuryObdScanImg = '/src/assets/images/luxury_obd_scan_1779998332271.png';

// Symptom / Warning code options
interface SymptomIssue {
  code: string;
  symptom: string;
  issueName: string;
  severity: 'critical' | 'moderate' | 'minor';
  location: 'engine' | 'exhaust' | 'fuel' | 'transmission' | 'brakes' | 'cabin';
  locationLabel: string;
  description: string;
  partsCost: { min: number; max: number };
  laborCost: { min: number; max: number };
}

const SYMPTOMS: SymptomIssue[] = [
  {
    code: 'P0302',
    symptom: 'Engine sputtering / rough shaking / loss of power (Misfire)',
    issueName: 'Cylinder 2 Ignition Coil Misfire',
    severity: 'critical',
    location: 'engine',
    locationLabel: 'Engine Block (Front Compartment)',
    description: 'The Engine Control Unit (ECU) detected that Cylinder 2 failed to fire correctly. This is usually caused by a faulty spark plug or ignition coil boot. Continued driving can damage your catalytic converter due to unburnt fuel leaking into the exhaust stream.',
    partsCost: { min: 85, max: 140 },
    laborCost: { min: 90, max: 160 }
  },
  {
    code: 'P0420',
    symptom: 'Foul sulfur odor / Catalytic alert active (Exhaust)',
    issueName: 'Catalytic Converter Efficiency Below Threshold',
    severity: 'moderate',
    location: 'exhaust',
    locationLabel: 'Exhaust Undercarriage (Mid-Section)',
    description: 'The catalytic converter is not filtering pollutants efficiently. Typically caused by long-term tailpipe carbon buildup, minor exhaust leaks, or old oxygen sensors. It is safe to drive short-term but will cause your vehicle to fail standard provincial emissions testing.',
    partsCost: { min: 650, max: 1200 },
    laborCost: { min: 250, max: 450 }
  },
  {
    code: 'P0171',
    symptom: 'Hissing sound from hood / rough idle at traffic lights',
    issueName: 'Engine Air-Fuel Mix Too Lean (System Too Lean Bank 1)',
    severity: 'moderate',
    location: 'fuel',
    locationLabel: 'Intake Manifold / Vacuum Lines',
    description: 'Too much air or too little fuel is entering the combustion cylinders. Typically caused by a dirty Mass Airflow Sensor (MAF) or cracked rubber vacuum hoses leaking unmetered air into the intake manifold.',
    partsCost: { min: 45, max: 180 },
    laborCost: { min: 80, max: 120 }
  },
  {
    code: 'C0035',
    symptom: 'Yellow ABS light active on dash / pulsing brakes',
    issueName: 'Left Front Wheel Speed Sensor Malfunction',
    severity: 'moderate',
    location: 'brakes',
    locationLabel: 'Left Front Wheel Hub Assembly',
    description: 'The ABS module is not receiving speed signals from the left front wheel hub. This disables your anti-lock braking assist in winter snow/ice. Standard mechanical braking still operates, but active electronic slide prevention is inactive.',
    partsCost: { min: 70, max: 125 },
    laborCost: { min: 110, max: 180 }
  },
  {
    code: 'P0700',
    symptom: 'Slipping gears / hard shifts / high RPM on highway',
    issueName: 'Transmission Control System Error (TCM)',
    severity: 'critical',
    location: 'transmission',
    locationLabel: 'Transmission Case (Lower Engine Bay)',
    description: 'The internal gearbox control module reported an electronic solenoid malfunction. Hard shifting can cause immediate mechanical tooth wear. Immediate inspection is recommended to avoid complete structural transmission swap out.',
    partsCost: { min: 320, max: 680 },
    laborCost: { min: 350, max: 600 }
  },
  {
    code: 'B0001',
    symptom: 'SRS/Airbag light active on speedometer display',
    issueName: 'Driver Frontal Airbag Squib Circuit Malfunction',
    severity: 'critical',
    location: 'cabin',
    locationLabel: 'Steering Wheel Clockspring / Steering Column',
    description: 'A breakdown in Steering Wheel Clockspring connectivity has compromised the deployment connection. If left unfixed, your steering column airbag unit may fail to deploy safely during a front highway collision.',
    partsCost: { min: 190, max: 310 },
    laborCost: { min: 120, max: 200 }
  }
];

interface ProvincialMechanic {
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  phone: string;
  specialty: string;
}

const MECHANICS_BY_PROVINCE: Record<string, ProvincialMechanic[]> = {
  BC: [
    { name: 'Vancouver Elite Auto Diagnostics', rating: 4.9, reviews: 342, distance: '1.2 km away', address: '2840 Clark Dr, Vancouver, BC', phone: '(604) 555-0182', specialty: 'Computer Remaps & Sensor Refurbishment' },
    { name: 'Marpole Auto Integrity Centre', rating: 4.8, reviews: 189, distance: '3.4 km away', address: '8620 Hudson St, Vancouver, BC', phone: '(604) 555-0925', specialty: 'ECU Coding & Active Harness Safety Diagnostics' },
    { name: 'Lotus West Motorsport Specialists', rating: 4.7, reviews: 215, distance: '5.1 km away', address: '1288 Boundary Rd, Burnaby, BC', phone: '(604) 555-0210', specialty: 'OBD Verification & Hybrid Motor Systems' }
  ],
  ON: [
    { name: 'Toronto Metro Tech Mechanics', rating: 4.9, reviews: 512, distance: '1.5 km away', address: '480 Dupont St, Toronto, ON', phone: '(416) 555-9830', specialty: 'CAN-Bus Telemetry & Airbag Component Reconnects' },
    { name: 'Bayview Precision Overhaul', rating: 4.8, reviews: 228, distance: '2.8 km away', address: '1640 Bayview Ave, East York, ON', phone: '(416) 555-1422', specialty: 'Brake ABS Hub Recovers & Wheel Sensors' },
    { name: 'Ontario Fleet Safety Complex', rating: 4.6, reviews: 147, distance: '6.0 km away', address: '1850 Queensway, Etobicoke, ON', phone: '(416) 555-3211', specialty: 'Engine Tune-Ups, Spark Plugs & Catalytic Repairs' }
  ],
  AB: [
    { name: 'Calgary Apex Automotive', rating: 4.9, reviews: 295, distance: '2.1 km away', address: '3604 Macleod Trail SE, Calgary, AB', phone: '(403) 555-7312', specialty: 'High-Altitude Tuning & Winter Engine Overhauls' },
    { name: 'Rocky Mountain Diagnostic & Repair', rating: 4.8, reviews: 142, distance: '4.5 km away', address: '620 16 Ave NE, Calgary, AB', phone: '(403) 555-8902', specialty: 'Chassis Speed Sensors & Heavy-Climate Gasket Seals' },
    { name: 'Chinook Road Diagnostics Center', rating: 4.7, reviews: 180, distance: '7.2 km away', address: '5812 2 St SW, Calgary, AB', phone: '(403) 555-3341', specialty: 'Transmission Valve Body & Ignition Coil Swaps' }
  ],
  QC: [
    { name: 'Montréal Centre Performance', rating: 4.9, reviews: 418, distance: '1.8 km away', address: '4605 Papineau Ave, Montréal, QC', phone: '(514) 555-3912', specialty: 'Systèmes de télémétrie OBD-II & Mécanique Générale' },
    { name: 'Atelier Mécanique du Plateau', rating: 4.8, reviews: 204, distance: '3.1 km away', address: '1240 Boulevard Saint-Joseph E, Montréal, QC', phone: '(514) 555-9082', specialty: 'Allumage de cylindre, Bobines et Catalyseurs' },
    { name: 'Garages Alignement National', rating: 4.6, reviews: 121, distance: '5.9 km away', address: '7500 Boulevard Robert, Saint-Léonard, QC', phone: '(514) 555-8140', specialty: 'Diagnostic Freins ABS & Capteurs de Collision' }
  ],
  DEFAULT: [
    { name: 'Astrateq Gadgets Certified Diagnostics Hub', rating: 4.9, reviews: 144, distance: 'Local Partner Hub Network', address: 'National Diagnostic Depot Network', phone: '1-800-555-ASTRA', specialty: 'Passive Diagnostic Optimization Work' },
    { name: 'Standard Canadian Road-Network Garage', rating: 4.7, reviews: 92, distance: 'Available Locally', address: 'Nearby Provincial Partner', phone: 'Contact Support', specialty: 'Ignition, Exhaust, and Airbag Inspections' }
  ]
};

export default function DigitalOBDScanner() {
  const [selectedProvince, setSelectedProvince] = useState<string>('BC');
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState<number>(0);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScanStepMsg, setCurrentScanStepMsg] = useState('');
  const [carAnimPhase, setCarAnimPhase] = useState(0);

  // Simulated scan steps for ultimate visual depth
  const scanSequence = [
    { progress: 15, msg: 'Initializing Bluetooth Link on Port 3000...' },
    { progress: 30, msg: 'Querying ISO-15765-4 High Speed CAN-Bus telemetry lines...' },
    { progress: 45, msg: 'Mapping Vehicle Engine Control Module (ECM) registers...' },
    { progress: 65, msg: 'Analyzing Cylinder Ignition Timing & O2 Air-Fuel ratios...' },
    { progress: 80, msg: 'Fetching saved and active Diagnostic Trouble Codes (DTCs)...' },
    { progress: 95, msg: 'Verifying location sensors & calculating component degradation...' }
  ];

  // Engine diagnostic loops
  useEffect(() => {
    if (scanState !== 'scanning') return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 2;
        
        // Update messages dynamically
        const matchingStep = [...scanSequence].reverse().find(step => next >= step.progress);
        if (matchingStep) {
          setCurrentScanStepMsg(matchingStep.msg);
        }

        // Cycle through car wireframe flash states for physical active-scanning vibe
        setCarAnimPhase(Math.floor(next / 15) % 4);

        if (next >= 100) {
          clearInterval(interval);
          setScanState('complete');
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [scanState]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    setScanProgress(0);
    setScanState('scanning');
  };

  const activeIssue = SYMPTOMS[selectedSymptomIdx];
  const mechanics = MECHANICS_BY_PROVINCE[selectedProvince] || MECHANICS_BY_PROVINCE.DEFAULT;

  const totalPartsLow = activeIssue.partsCost.min;
  const totalPartsHigh = activeIssue.partsCost.max;
  const totalLaborLow = activeIssue.laborCost.min;
  const totalLaborHigh = activeIssue.laborCost.max;
  const rangeLow = totalPartsLow + totalLaborLow;
  const rangeHigh = totalPartsHigh + totalLaborHigh;

  // Render miniature vehicle SVG with accurate pulsing indicator where the issue is physically located!
  const renderVehicleBlueprintSvg = () => {
    // Coordinate mapping (relative to the container size)
    let spotTop = '50%';
    let spotLeft = '50%';

    switch (activeIssue.location) {
      case 'engine':
        spotTop = '32%'; spotLeft = '30%';
        break;
      case 'transmission':
        spotTop = '44%'; spotLeft = '42%';
        break;
      case 'cabin':
        spotTop = '42%'; spotLeft = '62%';
        break;
      case 'exhaust':
        spotTop = '72%'; spotLeft = '54%';
        break;
      case 'brakes':
        spotTop = '52%'; spotLeft = '20%';
        break;
      case 'fuel':
        spotTop = '26%'; spotLeft = '45%';
        break;
    }

    return (
      <div className="relative w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col items-stretch shadow-2xl p-4">
        {/* Style injection for smooth cyber-HUD elements */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes laser-sweep {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes target-ripple {
            0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.2; }
            50% { opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
          }
          .hud-sweep-line {
            animation: laser-sweep 3s infinite linear;
          }
          .hud-target-pulse {
            animation: target-ripple 2s infinite ease-out;
          }
        `}} />

        {/* Top telemetry status bar */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3 font-mono">
          <div className="flex items-center gap-1.5 text-[8.5px] tracking-wider font-extrabold text-indigo-400 uppercase">
            <Radio className="w-3.5 h-3.5 animate-pulse text-indigo-505 shrink-0" />
            <span>Telemetry: {scanState === 'idle' ? 'STANDBY' : scanState === 'scanning' ? 'SCAN_RUNNING' : 'ALERT_LOCKED'}</span>
          </div>
          <span className="text-[8px] text-slate-500">
            SYS_REF: ASR-90x2
          </span>
        </div>

        {/* Diagnostic Hologram Image Canvas Wrapper */}
        <div className="relative w-full aspect-square md:aspect-[4/3] bg-slate-900/60 rounded-xl overflow-hidden border border-slate-900 flex items-center justify-center p-2">
          {/* Subtle sci-fi backdrop grids */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

          {/* Luxury vehicle 3D holographic asset */}
          <img
            src={luxuryObdScanImg}
            referrerPolicy="no-referrer"
            alt="Astrateq Gadgets 3D OBD Diagnostics Live Hologram Preview"
            className={`w-full h-full object-contain object-center transition-all duration-705 ease-in-out ${
              scanState === 'idle' 
                ? 'opacity-40 grayscale-[40%] blur-[0.5px]' 
                : scanState === 'scanning' 
                  ? 'opacity-90 saturate-[120%]' 
                  : 'opacity-100 saturate-[140%] contrast-[105%]'
            }`}
          />

          {/* Active Sensor Scan laser beam */}
          {scanState === 'scanning' && (
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_12px_rgba(99,102,241,0.8)] pointer-events-none hud-sweep-line" />
          )}

          {/* Precision glowing hotspot marker targeting the exact part */}
          {scanState === 'complete' && (
            <div 
              style={{ top: spotTop, left: spotLeft }} 
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
              {/* Pulsing focal radar rings */}
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-red-500/10 rounded-full blur-md hud-target-pulse" />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-red-500/20 rounded-full border border-red-500/40 hud-target-pulse [animation-delay:0.5s]" />
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500/30 rounded-full border border-red-500/60 hud-target-pulse [animation-delay:1s]" />

              {/* Central pinpoint dot */}
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white shadow-lg shadow-red-500 animate-pulse relative z-30" />

              {/* Leader-line HUD tag detailing issue code */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/90 backdrop-blur-sm border border-red-500/40 text-red-455 text-red-500 font-mono text-[9px] font-black uppercase py-1 px-2.5 rounded-lg whitespace-nowrap shadow-xl z-40 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {activeIssue.code} : FAULT LCK
              </div>
            </div>
          )}

          {/* Passive Standby UI indicator overlay */}
          {scanState === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/50 backdrop-blur-[0.5px]">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-2">
                <Activity className="w-5 h-5 text-indigo-400 animate-pulse" />
              </div>
              <span className="font-mono text-[8px] text-slate-400 tracking-widest font-black uppercase">
                Remote Link Status
              </span>
              <p className="text-white text-xs font-bold mt-1.5 max-w-[180px] leading-relaxed">
                ASTRA-OBD Connected. Select a symptom & trigger scan.
              </p>
            </div>
          )}

          {/* Active scanning UI loading overlay */}
          {scanState === 'scanning' && (
            <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-2 font-mono text-[8.5px] text-indigo-300 space-y-0.5 pointer-events-none select-none">
              <div className="flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                <span>ECU_PROBE: ON_LNK</span>
              </div>
              <div>PORT: 3000</div>
              <div>RATE: 500 KB/S</div>
            </div>
          )}
        </div>

        {/* Footer info stream bar */}
        <div className="flex items-center justify-between mt-3 mb-1 border-t border-slate-900 pt-2 text-[8px] text-slate-500 font-mono">
          <span className="truncate max-w-[130px]">
            {scanState === 'complete' ? `ALERT: ${activeIssue.issueName}` : `ECU_STATE: LNK_READY`}
          </span>
          <span className="font-mono text-indigo-400 font-extrabold uppercase">
            {scanState === 'complete' ? activeIssue.locationLabel : 'O2_SYS // PASS'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="digital-scanner" className="relative py-20 bg-slate-50 border-t border-b border-slate-205">
      {/* Decorative styling */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title / Marketing Pitch */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-indigo-700 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 shadow-sm select-none">
            ⚡ Leads & Drivers Resource
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4.5xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Astrateq Gadgets Interactive OBD Diagnostic Portal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Got a glowing check-engine light or diagnostic trouble? Use our custom Bluetooth remote simulator to isolate your automotive fault code, estimate labor costs, and review recommended verified mechanics instantly.
          </p>
        </div>

        {/* Dynamic Inner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left panel: Config, symptom selector & scanning mechanism */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-indigo-600 to-emerald-500" />
            
            <form onSubmit={handleStartScan} className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <Settings className="w-4.5 h-4.5 text-indigo-600" />
                  Remote OBD Connector
                </span>
                <span className="text-[9px] bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold uppercase py-0.5 px-2 rounded font-mono">
                  ASTRA Scan Engine
                </span>
              </div>

              {/* Province dropdown */}
              <div className="space-y-1 text-left">
                <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Provincial Region (For Nearest Repair Estimates)
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-250 hover:border-slate-350 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm cursor-pointer"
                >
                  <option value="BC">British Columbia (Vancouver Area)</option>
                  <option value="ON">Ontario (Greater Toronto Area)</option>
                  <option value="AB">Alberta (Calgary / Edmonton Area)</option>
                  <option value="QC">Québec (Région De Montréal)</option>
                </select>
              </div>

              {/* Symptom selector */}
              <div className="space-y-1 text-left">
                <label className="text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Select Warning light / Driving Symptom
                </label>
                <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                  {SYMPTOMS.map((item, idx) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setSelectedSymptomIdx(idx);
                        if (scanState === 'complete') {
                          setScanState('idle');
                        }
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs leading-normal transition-all flex flex-col justify-between ${
                        selectedSymptomIdx === idx
                          ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 w-full font-bold">
                        <span className="truncate">{item.symptom}</span>
                        <span className={`px-2 py-0.5 rounded text-[8px] tracking-widest font-black uppercase font-mono border ${
                          selectedSymptomIdx === idx
                            ? 'bg-indigo-600/35 border-indigo-500/30 text-indigo-200'
                            : 'bg-white border-slate-300 text-slate-500'
                        }`}>
                          {item.code}
                        </span>
                      </div>
                      <span className={`text-[9.5px] mt-1 font-medium ${selectedSymptomIdx === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                        Report: {item.issueName}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action scanner triggers */}
              {scanState === 'idle' && (
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4.5 h-4.5 text-indigo-250 hover:rotate-180 transition-transform duration-500" />
                  Initiate Wireless OBD Scan
                </button>
              )}

              {scanState === 'scanning' && (
                <div className="bg-slate-950 text-white rounded-xl p-4 font-mono text-left space-y-3.5 animate-pulse border border-slate-850">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-indigo-400 font-extrabold flex items-center gap-1.5 uppercase">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Active Scanning
                    </span>
                    <span className="text-xs font-black text-slate-400">{scanProgress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div className="h-full bg-indigo-500 transition-all duration-150" style={{ width: `${scanProgress}%` }} />
                  </div>
                  <p className="text-[9.5px] text-slate-300 leading-normal font-mono select-none truncate">
                    &gt;_ {currentScanStepMsg}
                  </p>
                </div>
              )}

              {scanState === 'complete' && (
                <button
                  type="button"
                  onClick={() => setScanState('idle')}
                  className="w-full py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-widest border border-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-slate-500" />
                  Run New Diagnostic Scan
                </button>
              )}
            </form>

            {/* Direct Multi-State Holographic Console Viewport */}
            <div className="mt-5">
              {renderVehicleBlueprintSvg()}
            </div>
          </div>

          {/* Right panel: Scanned code details, ballpark quotes, mechanics near them */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {scanState !== 'complete' ? (
              <div className="bg-slate-100 border-2 border-dashed border-slate-300/80 rounded-3xl p-12 text-center h-[560px] flex flex-col items-center justify-center text-slate-700">
                <div className="w-16 h-16 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-400 mb-4 animate-pulse">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight mb-2">
                  Awaiting Scan Data Input
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                  Select your vehicle symptom on the left panel, choose your Canadian province, and click the scan trigger to diagnose issues in real-time.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* 1. Diagnostic Report Block */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 py-1.5 px-4 bg-red-500 text-white font-mono text-[9px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm">
                    {activeIssue.severity} priority alert
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-2xl font-black font-mono text-red-500 border border-red-500/20 px-3.5 py-1 rounded-2xl bg-red-50/50">
                      {activeIssue.code}
                    </span>
                    <div>
                      <h4 className="font-display font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                        {activeIssue.issueName}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-bold tracking-wide mt-1 block font-mono">
                        LOCATION: {activeIssue.locationLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed border-b border-dashed border-slate-100 pb-4">
                    {activeIssue.description}
                  </p>

                  {/* 2. Ballpark Pricing grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 items-stretch">
                    <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 text-center">
                      <span className="text-[9px] font-mono text-slate-450 text-slate-400 uppercase tracking-widest font-bold block">
                        Ballpark Parts
                      </span>
                      <p className="font-mono text-base font-black text-slate-900 mt-1">
                        ${totalPartsLow} - ${totalPartsHigh} <span className="text-[10px] text-slate-500 font-bold">CAD</span>
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 text-center">
                      <span className="text-[9px] font-mono text-slate-450 text-slate-400 uppercase tracking-widest font-bold block">
                        Estimated Labor
                      </span>
                      <p className="font-mono text-base font-black text-slate-900 mt-1">
                        ${totalLaborLow} - ${totalLaborHigh} <span className="text-[10px] text-slate-500 font-bold">CAD</span>
                      </p>
                    </div>

                    <div className="bg-gradient-to-tr from-rose-50 to-indigo-50 border border-rose-100/70 rounded-2xl p-4 text-center">
                      <span className="text-[9px] font-mono text-indigo-700 uppercase tracking-widest font-black block">
                        Total Industry Est.
                      </span>
                      <p className="font-mono text-lg font-extrabold text-indigo-950 mt-1 leading-none">
                        ${rangeLow} - ${rangeHigh} <span className="text-[10px] text-slate-505 font-bold">CAD</span>
                      </p>
                      <span className="text-[7.5px] font-bold text-indigo-600 block mt-1 tracking-wider uppercase font-mono">
                        Standard Canadian Rates
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Nearby mechanics list based on province */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl text-left">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                      <div>
                        <h4 className="font-display font-black text-sm sm:text-base text-slate-900 uppercase tracking-tight leading-none">
                          Verified Mechanics Nearby ({selectedProvince})
                        </h4>
                        <span className="text-[10px] text-slate-505 font-semibold mt-0.5 block">
                          Top audited diagnostic workshops near your region
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold uppercase tracking-wide">
                      Active
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {mechanics.map((mech, index) => (
                      <div
                        key={mech.name}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/60 border border-slate-150 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-black text-slate-900">{mech.name}</span>
                            <div className="flex items-center gap-0.5 bg-amber-50 text-amber-600 border border-amber-200/50 px-1.5 py-0.5 rounded text-[8px] font-bold">
                              <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                              <span>{mech.rating}</span>
                              <span className="text-slate-400">({mech.reviews})</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-indigo-650 font-extrabold block uppercase tracking-wide">
                            Specialty: {mech.specialty}
                          </span>
                          <span className="text-[11px] text-slate-505 block leading-tight">
                            📍 {mech.address}
                          </span>
                        </div>

                        <div className="flex sm:flex-col items-stretch sm:items-end justify-between w-full sm:w-auto shrink-0 gap-1.5 border-t sm:border-t-0 border-slate-200/50 pt-2 sm:pt-0">
                          <span className="font-mono text-[10px] text-slate-500 font-bold uppercase block text-left sm:text-right">
                            {mech.distance}
                          </span>
                          <a
                            href={`tel:${mech.phone.replace(/[\(\)\s-]/g, '')}`}
                            className="bg-white hover:bg-indigo-600 border border-indigo-200/60 hover:border-indigo-600 hover:text-white px-3 py-1.5 rounded-xl text-[10.5px] font-bold text-indigo-650 tracking-wider transition-colors inline-flex items-center justify-center gap-1 shadow-sm text-indigo-600"
                          >
                            <Wrench className="w-3.5 h-3.5" />
                            Book Diagnostic
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Astrateq Marketing Pitch Connection CTA */}
                <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl text-left border border-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-rose-500/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-[180px] h-[180px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <span className="font-sans font-black text-[9px] text-rose-300 uppercase tracking-widest">
                          ASTRATEQ DIAGNOSTIC DEFENSE
                        </span>
                      </div>
                      <h4 className="font-display font-black text-xl text-white tracking-tight leading-snug">
                        Monitor vehicle health 24/7. Avoid catastrophic shop bills.
                      </h4>
                      <p className="text-slate-350 text-xs leading-relaxed max-w-xl">
                        Instead of reading codes only AFTER the damage is done, Astrateq Gadgets units stay continuously connected on your dashboard, isolating engine diagnostics in real-time and warning you blocks before structural failures.
                      </p>
                    </div>

                    <a
                      href="#pricing"
                      className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md whitespace-nowrap text-center w-full md:w-auto shrink-0 select-none cursor-pointer"
                    >
                      Secure Prelaunch Saving Only $49
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
