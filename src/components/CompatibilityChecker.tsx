import React, { useState } from 'react';
import { 
  Check, 
  AlertTriangle, 
  MessageSquare, 
  CornerDownRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Send, 
  HelpCircle, 
  Clock, 
  Milestone,
  CheckCircle2,
  Heart,
  ChevronDown
} from 'lucide-react';

interface CompatibilityCheckerProps {
  onCheckSuccess: (vehicle: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function CompatibilityChecker({ onCheckSuccess, onScrollToSection }: CompatibilityCheckerProps) {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'ev' | 'standard' | 'limited' | null>(null);

  // Chat Simulator states
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'agent'; text: string }>>([
    { sender: 'agent', text: 'Bonjour! Hi! I’m James from our Toronto support team. Any questions about fitting our Astrateq Gadgets DriveGuard units into your vehicle?' }
  ]);
  const [isAgentTyping, setIsAgentTyping] = useState(false);

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
    GMC: ['Sierra', 'Terrain', 'Yukon'],
    RAM: ['1500', '2500']
  };

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setSelectedModel('');
  };

  const handleCheck = () => {
    if (!selectedYear || !selectedMake || !selectedModel) return;

    setIsLoading(true);
    setResult(null);

    setTimeout(() => {
      setIsLoading(false);
      const yearNum = parseInt(selectedYear);
      const isEV = ['Ioniq 5', 'EV6', 'Leaf', 'ID.4'].includes(selectedModel);

      if (yearNum < 2012) {
        setResult('limited');
      } else if (isEV) {
        setResult('ev');
      } else {
        setResult('standard');
      }

      onCheckSuccess(`${selectedYear} ${selectedMake} ${selectedModel}`);
    }, 1200);
  };

  // Helper to dynamically trigger supporting responses for predefined Canadian questions
  const triggerPredefinedQuestion = (question: string) => {
    if (isAgentTyping) return;
    
    // Add user message
    setChatHistory((prev) => [...prev, { sender: 'user', text: question }]);
    setIsAgentTyping(true);

    setTimeout(() => {
      setIsAgentTyping(false);
      let replyText = 'Yes indeed! Standard OBD-II ports work perfectly with Astrateq Gadgets without any splicing. If it’s built since 2010, you are fully backed.';
      
      if (question.includes('-35°C')) {
        replyText = 'Absolutely! Astrateq Gadgets is winter-hardened with a premium supercapacitor (no explosive lithium batteries) that safely operates from -35°C up to 85°C. Reliable power whether you’re in Calgary, Yellowknife, or Abitibi! ❄️';
      } else if (question.includes('EVs')) {
        replyText = 'Absolutely. Modern electric vehicles and hybrids (like the Ioniq 5 or EV6) are 100% compatible. Our dual-lens unit extracts zero secondary engine stats so it won’t trigger battery system drain warnings. ⚡';
      } else if (question.includes('shipping')) {
        replyText = 'Standard express shipping across Canada is quick & tracked! Usually 2-3 business days to Montreal/Ottawa, next-day within Ontario from our Toronto hub, and 3-4 days to Western/Eastern provinces. 📦';
      } else if (question.includes('warranty')) {
        replyText = 'No, it will not void your warranty! Astrateq Gadgets is a strictly passive OBD-II monitoring device (ices-003 compliant). It does not write commands/hack your vehicle ECU, which is fully compliant with Canada Consumer Protection. 🛠️';
      }

      setChatHistory((prev) => [...prev, { sender: 'agent', text: replyText }]);
    }, 1200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatMessage('');
    setIsAgentTyping(true);

    // Simulate reactive support reply
    setTimeout(() => {
      setIsAgentTyping(false);
      let replyText = 'Thanks for reaching out! Yes, standard OBD-II ports work perfectly with Astrateq Gadgets without any splicing. If it’s built since 2010, you are fully backed.';
      
      if (userMsg.toLowerCase().includes('hybrid') || userMsg.toLowerCase().includes('ev') || userMsg.toLowerCase().includes('battery') || userMsg.toLowerCase().includes('electric')) {
        replyText = 'Excellent question! Astrateq Gadgets units are optimized for high-voltage systems. Our Guardian Pro kit taps into EV battery telemetry seamlessly without triggering alerts on your dash.';
      } else if (userMsg.toLowerCase().includes('install') || userMsg.toLowerCase().includes('plug') || userMsg.toLowerCase().includes('how')) {
        replyText = 'Installation is 100% plug-and-play. It simply clicks into the OBD-II port under your steering wheel dashboard. It takes less than 30 seconds!';
      } else if (userMsg.toLowerCase().includes('winter') || userMsg.toLowerCase().includes('cold') || userMsg.toLowerCase().includes('weather') || userMsg.toLowerCase().includes('freeze')) {
        replyText = 'Designed specifically for harsh climates: Astrateq Gadgets leverages extreme-grade supercapacitors instead of standard lithium batteries, meaning it stands up to -35°C Canadian winters without failure! 🏔️';
      }

      setChatHistory((prev) => [...prev, { sender: 'agent', text: replyText }]);
    }, 1300);
  };

  // Predefined interactive pills for Canadian visitors to click and immediately try
  const canadianQuestions = [
    { text: "❄️ Will it freeze in a -35°C winter?", action: "Will this survive a -35°C Calgary/winter weather environment?" },
    { text: "⚡ EV & Hybrid compatibility?", action: "Is this compatible with electric vehicles or hybrids?" },
    { text: "📦 Shipping times to ON/BC?", action: "How long is standard express shipping to Toronto, Montreal, or Calgary?" },
    { text: "🛠️ Will OBD-II void my warranty?", action: "Does plugging Astrateq Gadgets into the OBD-II port void my warranty?" }
  ];

  return (
    <section id="compatibility" className="py-24 bg-gradient-to-b from-[#F5F8FF] via-white to-white border-b border-slate-150 relative overflow-hidden">
      
      {/* Decorative background grid and glowing light source blobs representing high-end Canadian trans-continental routes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      
      {/* Dynamic ambient highlights */}
      <div className="absolute left-[5%] top-[15%] w-[45%] h-[45%] bg-indigo-200/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[15%] w-[40%] h-[40%] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with vivid premium badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100/90 border border-rose-200 shadow-sm px-4 py-2 rounded-full text-rose-955 text-xs font-black uppercase tracking-widest mb-4">
            <span className="text-base leading-none">🇨🇦</span>
            Trans-Canada Highway Certified • Pre-Launch Demand Audit
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-4 animate-fade-in-up">
            Vehicle Compatibility Assessment
          </h2>
          
          <p className="text-slate-750 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-bold mb-3">
            Check if your vehicle model will be supported in our planned safety intelligence rollout.
          </p>
          
          <div className="inline-block bg-rose-50/60 border border-rose-100 py-1.5 px-4 rounded-xl mt-3">
            <p className="text-xs text-rose-800 font-mono font-semibold tracking-wide">
              * Concept interface shown for validation purposes. Final product experience may change before launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Check Compatibility Form Panel */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-205 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-indigo-650/5 relative overflow-hidden group hover:border-indigo-400/80 transition-all duration-300">
            
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e11d48] via-[#818cf8] to-[#4f46e5]" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                  <span className="text-xs font-black text-slate-950 uppercase tracking-widest font-mono">
                    Step 1: Vehicle Profile
                  </span>
                </div>
                <span className="text-[10px] bg-indigo-100 text-indigo-950 border border-indigo-200 px-3 py-1 rounded-md font-mono font-black tracking-wide">
                  Passive ISO-15765 Compliant
                </span>
              </div>

              {/* Dropdowns layout styled dynamically as slot indicators with completely custom select elements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Year Selection */}
                <div className="space-y-2 text-left bg-slate-50 border border-slate-200 rounded-2xl p-3.5 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-widest block">
                    SLOT 01 / TIME
                  </span>
                  <label className="text-[10.5px] sm:text-xs font-black text-slate-900 uppercase tracking-widest block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-650" />
                    Year
                  </label>
                  <div className="relative">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="appearance-none w-full bg-white border-2 border-slate-200 hover:border-slate-350 rounded-xl pl-3 pr-8 py-2.5 text-xs sm:text-sm text-slate-950 font-black focus:outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 cursor-pointer shadow-sm transition-all focus:bg-white"
                    >
                      <option value="">Select Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Make Selection */}
                <div className="space-y-2 text-left bg-slate-50 border border-slate-200 rounded-2xl p-3.5 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-widest block">
                    SLOT 02 / MAKE
                  </span>
                  <label className="text-[10.5px] sm:text-xs font-black text-slate-900 uppercase tracking-widest block flex items-center gap-1.5">
                    <Milestone className="w-3.5 h-3.5 text-indigo-650" style={{ color: '#4f46e5' }} />
                    Brand / Make
                  </label>
                  <div className="relative">
                    <select
                      value={selectedMake}
                      onChange={(e) => handleMakeChange(e.target.value)}
                      className="appearance-none w-full bg-white border-2 border-slate-200 hover:border-slate-350 rounded-xl pl-3 pr-8 py-2.5 text-xs sm:text-sm text-slate-950 font-black focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 cursor-pointer shadow-sm transition-all focus:bg-white"
                    >
                      <option value="">Select Make</option>
                      {Object.keys(makesAndModels).map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Model Selection */}
                <div className="space-y-2 text-left bg-slate-50 border border-slate-200 rounded-2xl p-3.5 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-500 uppercase tracking-widest block">
                    SLOT 03 / PATTERN
                  </span>
                  <label className="text-[10.5px] sm:text-xs font-black text-slate-900 uppercase tracking-widest block flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-650" />
                    Model Lineup
                  </label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      disabled={!selectedMake}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="appearance-none w-full bg-white border-2 border-slate-200 hover:border-slate-350 rounded-xl pl-3 pr-8 py-2.5 text-xs sm:text-sm text-slate-955 font-black focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 cursor-pointer disabled:opacity-50 disabled:bg-slate-50 disabled:cursor-not-allowed shadow-sm transition-all focus:bg-white"
                    >
                      <option value="">Select Model</option>
                      {selectedMake &&
                        makesAndModels[selectedMake].map((mo) => (
                          <option key={mo} value={mo}>{mo}</option>
                        ))}
                    </select>
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Live Connection status Screen - HUD Console with macOS-style control window spheres */}
              <div className="bg-slate-950/95 border border-slate-900 rounded-2xl p-4.5 font-mono text-left relative overflow-hidden shadow-2xl">
                {/* Visual subtle dynamic mesh effect */}
                <div className="absolute inset-x-0 h-[1px] bg-indigo-500/25 top-0 animate-pulse pointer-events-none" />
                <div className="flex items-center justify-between mb-3 border-b border-slate-900 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black ml-2 font-mono">
                      ASTRATEQ-LINK CONNECT TERMINAL
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedModel ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                    <span className="text-[9px] text-slate-400 font-black font-mono">
                      {selectedModel ? 'SPEC READY' : 'STANDBY'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-[11px] text-slate-300 font-mono leading-relaxed">
                  <p>
                    <span className="text-slate-500 font-bold">&gt;_ STATUS:</span>{' '}
                    {!selectedYear && !selectedMake ? (
                      <span className="text-amber-400 font-semibold animate-pulse">Awaiting Vehicle Selection Profile...</span>
                    ) : selectedYear && !selectedMake ? (
                      <span className="text-indigo-400">Year recognized: {selectedYear}. Seeking Brand Make...</span>
                    ) : selectedYear && selectedMake && !selectedModel ? (
                      <span className="text-indigo-400">Querying {selectedMake} model lineage configuration...</span>
                    ) : (
                      <span className="text-emerald-400 font-black flex items-center gap-1.5">
                        ✓ Vehicle signature fully cataloged code: [A-{selectedYear}-{selectedMake?.substring(0,3)?.toUpperCase()}]
                      </span>
                    )}
                  </p>
                  
                  {selectedModel ? (
                    <div className="space-y-1.5 text-slate-450 text-[10.5px] border-t border-slate-900 pt-2.5 mt-2.5">
                      <p className="text-emerald-400 font-extrabold">&gt;_ DEVICE NETWORK 01: DriveGuard AI Dashcam unit recognized & valid</p>
                      <p className="text-emerald-400 font-extrabold">&gt;_ DEVICE NETWORK 02: OBD-II Secure Sync Module recognized & valid</p>
                      <p className="text-indigo-400 font-black flex items-center gap-1.5 animate-pulse">&gt;_ AI COGNITIVE SHIELD: Local Dual-Device Intrusion Detection firmware simulation ready [100% SUCCESS]</p>
                    </div>
                  ) : selectedMake ? (
                    <p className="text-[10px] text-slate-400">
                      <span className="text-slate-500 font-bold">&gt;_ CONSOLE:</span> Connected to passive OBD CAN-Bus protocol ISO-15765 layout framework successfully. Dynamic dashboard tracking active.
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={isLoading || !selectedYear || !selectedMake || !selectedModel}
                onClick={handleCheck}
                className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg ${
                  isLoading || !selectedYear || !selectedMake || !selectedModel
                    ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-indigo-650 via-purple-650 to-rose-600 hover:from-indigo-700 hover:to-rose-700 hover:shadow-indigo-600/25 text-white hover:scale-[1.015] active:scale-[0.985] shadow-indigo-600/10 cursor-pointer'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Auditing Canadian Trans-OBD Compatibility...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4.5 h-4.5 text-indigo-200 animate-pulse" />
                    Verify Astrateq Gadgets Integration Specs
                  </>
                )}
              </button>

            </div>

            {/* Results Display Window */}
            <div className="mt-8">
              {result ? (
                <div className="border border-indigo-150 bg-gradient-to-br from-indigo-50/15 via-white to-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in text-left">
                  
                  {/* Results Header block */}
                  {result === 'ev' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-150 px-6 py-5 flex items-center gap-3.5 text-left">
                      <div className="w-11 h-11 bg-emerald-100/90 rounded-full flex items-center justify-center border-2 border-emerald-300 shrink-0 shadow-sm animate-pulse">
                        <Check className="w-5.5 h-5.5 text-emerald-700" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-mono font-black uppercase tracking-wider text-emerald-950 bg-emerald-200 px-2.5 py-0.5 rounded border border-emerald-300/40 w-fit">
                          AUDIT COMPLETED • 100% COMPATIBLE
                        </span>
                        <span className="font-sans font-black text-slate-900 text-[13.5px] sm:text-sm mt-1 leading-normal max-w-xl">
                          Your vehicle is 100% eligible! The dual-device system and local AI Intrusion Detection Core will function beautifully with zero configuration.
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'standard' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-150 px-6 py-5 flex items-center gap-3.5 text-left">
                      <div className="w-11 h-11 bg-emerald-100/90 rounded-full flex items-center justify-center border-2 border-emerald-300 shrink-0 shadow-sm animate-pulse">
                        <Check className="w-5.5 h-5.5 text-emerald-700" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-mono font-black uppercase tracking-wider text-emerald-955 bg-emerald-200 px-2.5 py-0.5 rounded border border-emerald-300/40 w-fit">
                          AUDIT COMPLETED • 100% COMPATIBLE
                        </span>
                        <span className="font-sans font-black text-slate-900 text-[13.5px] sm:text-sm mt-1 leading-normal max-w-xl">
                          Your vehicle is 100% eligible! The dual-device system and local AI Intrusion Detection Core will function beautifully with zero configuration.
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'limited' && (
                    <div className="bg-amber-500/10 border-b border-amber-150 px-6 py-5 flex items-center gap-3.5">
                      <div className="w-11 h-11 bg-amber-100/90 rounded-full flex items-center justify-center border-2 border-amber-300 shrink-0 shadow-sm animate-pulse">
                        <AlertTriangle className="w-5.5 h-5.5 text-amber-700" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-mono font-black uppercase tracking-wider text-amber-955 bg-amber-250 px-2.5 py-0.5 rounded border border-amber-300/40 w-fit">
                          OLDER VEHICLE INTEGRATION PROFILE
                        </span>
                        <span className="font-sans font-black text-slate-900 text-sm mt-0.5">
                          Standard hardware compatible! Highly recommended companion setup shown.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* High Fidelity Specification Sheet Bento Body */}
                  <div className="p-6 space-y-6">
                    
                    {/* Coordinated Dual-Device Ecosystem Visualizer */}
                    <div className="bg-slate-950 border-2 border-indigo-500/30 rounded-2xl p-5 text-slate-100 relative overflow-hidden shadow-lg">
                      <div className="absolute right-[-20px] top-[-20px] w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-1.5 mb-3.5 bg-indigo-500/20 border border-indigo-400/35 px-3 py-1 rounded-full w-fit">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-pulse" />
                        <span className="text-[10px] font-mono font-black text-indigo-200 tracking-wider uppercase">Active Coordinated Sentinel Network</span>
                      </div>
                      
                      <h4 className="text-white font-black text-sm sm:text-base tracking-tight mb-2">
                        Dual-Device AI Intrusion Detection System
                      </h4>
                      
                      <p className="text-slate-300 text-xs leading-relaxed mb-4 font-bold">
                        Your pre-order includes BOTH matching hardware endpoints. They collaborate offline over a localized neural link to establish a high-security canopy:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                          <div className="flex items-center gap-1.5 font-black text-rose-450 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                            1. DRIVEGUARD AI DASHCAM
                          </div>
                          <span className="text-slate-400 text-[11px] leading-relaxed block font-semibold">
                            Secures the cockpit & viewport. Performs local visual edge threat evaluation, detecting motion, glass fractures, and tailing profiles.
                          </span>
                        </div>
                        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                          <div className="flex items-center gap-1.5 font-black text-cyan-450 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            2. OBD-II SECURE SCANNER
                          </div>
                          <span className="text-slate-400 text-[11px] leading-relaxed block font-semibold">
                            Locks down diagnostic port buses. Blocks rogue key clone injections, ECU hijacking attempts, and rogue terminal intrusions in real-time.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bento Specs Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-205 rounded-2xl p-4 flex flex-col hover:bg-slate-100 transition-colors">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold">Coordinated threat alert</span>
                        <span className="text-sm font-black text-slate-950 mt-1">Both Devices Protected</span>
                        <span className="text-[10px] text-slate-700 mt-1 font-bold">Dashcam + OBD scanner coverage</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-205 rounded-2xl p-4 flex flex-col hover:bg-slate-100 transition-colors">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold">Active isolation engine</span>
                        <span className="text-sm font-black text-slate-950 mt-1">AI Intrusion Lockout</span>
                        <span className="text-[10px] text-slate-700 mt-1 font-bold">Sub-15ms physical ECU blockade</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-205 rounded-2xl p-4 flex flex-col hover:bg-slate-100 transition-colors">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold">Supercapacitor grade</span>
                        <span className="text-sm font-black text-slate-950 mt-1">Extreme Weather proof</span>
                        <span className="text-[10.5px] text-rose-700 font-black mt-1 font-sans">Stable -35°C to 85°C</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-205 rounded-2xl p-4 flex flex-col hover:bg-slate-100 transition-colors">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold">Power integrity</span>
                        <span className="text-sm font-black text-slate-950 mt-1">No Battery Drain Shield</span>
                        <span className="text-[10px] text-slate-700 mt-1 font-bold">Passive &lt;0.02W smart sleep</span>
                      </div>
                    </div>

                    {/* Recommended Matching Product Deal */}
                    <div className="bg-slate-950 border border-indigo-900 rounded-3xl p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between text-left shadow-xl relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[9px] text-[#fb7185] font-mono font-black uppercase tracking-widest leading-none">
                          FOUNDING EARLY-ACCESS PACKAGE
                        </span>
                        <span className="font-sans font-black text-white text-xl sm:text-2xl">
                          {result === 'ev' && 'Guardian Pro Bundle'}
                          {result === 'standard' && 'Family Safety Hub™'}
                          {result === 'limited' && 'DriveGuard Dual-Pack'}
                        </span>
                        <span className="text-xs text-slate-350 leading-relaxed max-w-[210px] sm:max-w-xs font-bold">
                          {result === 'ev' && 'Our dual hardware package with certified EV power regulation accessories.'}
                          {result === 'standard' && 'Includes both devices: DriveGuard Dashcam, OBD2 Secure Scanner, & AI Intrusion Core.'}
                          {result === 'limited' && 'Dual hardware setup with extended climate shield backup module.'}
                        </span>
                      </div>
                      
                      <div className="text-left sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center shrink-0 w-full sm:w-auto p-4 sm:p-0 bg-slate-900/40 sm:bg-transparent rounded-xl mt-4 sm:mt-0">
                        <span className="text-white font-black text-2.5xl sm:text-3xl leading-none">
                          {result === 'ev' && '$899 CAD'}
                          {result === 'standard' && '$599 CAD'}
                          {result === 'limited' && '$269 CAD'}
                        </span>
                        <span className="text-[9.5px] text-emerald-450 border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 rounded-full mt-2 uppercase font-mono tracking-widest font-black">
                          FOUNDING FOUNDER PRICE LOCK
                        </span>
                      </div>
                    </div>

                    {/* Step details advice with nice alignment */}
                    <div className="flex gap-2.5 text-xs text-slate-900 leading-relaxed font-bold bg-indigo-50 border border-indigo-150 p-4.5 rounded-xl">
                      <CornerDownRight className="w-5 h-5 text-indigo-650 shrink-0 mt-0.5" />
                      <div>
                        {result === 'ev' && 'Electric power networks validated. Harness pulls telemetry completely silently on the active thread without triggering dealership error records.'}
                        {result === 'standard' && 'Standard architecture confirmed. Harness slots cleanly under the steering assembly, instantly establishing localized canopy with the AI Dashcam.'}
                        {result === 'limited' && 'Legacy CAN-Bus structure confirmed. High accuracy logs and intrusion indicators are guaranteed to perform immediately.'}
                      </div>
                    </div>

                    {/* Advanced scrolling Anchor CTA */}
                    <button
                      type="button"
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full text-center py-4.5 bg-indigo-650 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/20 text-white font-black transition-all duration-300 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99]"
                    >
                      SECURE FOUNDING RATE • NO TAX ON PRE-ORDERS
                    </button>

                  </div>

                </div>
              ) : (
                <div className="text-center py-12 border-2 border-dashed border-slate-205 rounded-3xl bg-slate-50 flex flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-50/80 flex items-center justify-center border border-indigo-150 mb-3 text-lg animate-pulse">
                    🍁
                  </div>
                  <p className="text-xs text-slate-800 font-extrabold max-w-sm leading-normal">
                    Select your vehicle configuration inside slots 1, 2, and 3 above to verify high-fidelity integration specifications and lock prelaunch founding pricing.
                  </p>
                </div>
              )}
            </div>

            {/* Canada wide safety assurance notes */}
            <div className="mt-8 pt-4 border-t border-slate-150 flex flex-wrap items-center justify-between text-[10px] text-slate-700 font-mono font-black uppercase tracking-wider bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-2xl gap-2 text-left shadow-xs">
              <span className="flex items-center gap-1.5">
                🇨🇦 Trans-Canada Highway Tested
              </span>
              <span className="flex items-center gap-1.5 text-rose-700">
                ❄️ Supercapacitors Built For -35°C
              </span>
              <span className="flex items-center gap-1.5 text-indigo-750">
                🍁 100% Toronto Owned
              </span>
            </div>

          </div>

          {/* Right Column: Premium Canadian Support Simulator Column */}
          <div className="lg:col-span-5 relative group/support flex flex-col animate-fade-in-up self-stretch lg:self-auto">
            
            {/* Ambient intense glowing light spotlights behind the support card */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-rose-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Glowing High-Contrast Outer Gradient Sleeve to pop beautifully off white backgrounds */}
            <div className="p-[2.5px] rounded-[2.2rem] bg-gradient-to-b from-indigo-500 via-purple-500 to-rose-500 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.22)] hover:shadow-[0_35px_70px_-10px_rgba(99,102,241,0.32)] transition-all duration-500 flex-1 flex flex-col group/glow">
              
              {/* Inner Content Card Container - Dark Immersive Cyber Slate Theme */}
              <div className="relative bg-slate-900 text-white rounded-[2rem] p-6 lg:p-7 flex-1 flex flex-col justify-between overflow-hidden shadow-inner">
                
                {/* Spotlight subtle overlay reflections on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-rose-500/10 opacity-0 group-hover/support:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
                
                {/* Corner Leaf badge with stunning neon glow styling */}
                <div className="absolute top-6 right-6 bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md select-none">
                  <span className="scale-110">🍁</span>
                  ON/BC AGENTS
                </div>

                <div className="space-y-6 relative z-10">
                  
                  {/* Title & Agent Profiles Header block */}
                  <div className="flex items-center gap-3.5 pb-4.5 border-b border-slate-800/80">
                    <div className="flex -space-x-3 overflow-hidden shrink-0">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 border-2 border-slate-900 flex items-center justify-center font-black text-xs text-white shadow-xl">J</div>
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 border-2 border-slate-900 flex items-center justify-center font-black text-xs text-white shadow-xl">S</div>
                    </div>
                    
                    <div className="flex flex-col text-left">
                      <h3 className="font-sans font-black text-base text-white tracking-tight block leading-tight">
                        Canadian Support Hub
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider font-mono">
                          Toronto Tech Center • Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Elegant introductory glass box pill */}
                  <div className="bg-slate-950/45 border border-slate-800/80 rounded-2xl p-4 text-left backdrop-blur-sm">
                    <p className="text-xs text-slate-250 leading-relaxed font-semibold">
                      Have a customized rig, commercial diesel truck, or specific Canadian winter package question? Shoot a quick live ping directly to our Toronto hardware engineers:
                    </p>
                  </div>

                  {/* Suggestion questions pills structured beautifully */}
                  <div className="flex flex-col space-y-2.5 py-1">
                    <span className="text-[9px] font-mono font-black text-indigo-400 uppercase tracking-widest text-left">
                      SUGGESTED QUICK PINGS
                    </span>
                    <div className="flex flex-wrap gap-2 w-full">
                      {canadianQuestions.map((q, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => triggerPredefinedQuestion(q.action)}
                          className="text-[10.5px] bg-slate-950/40 hover:bg-indigo-650/15 border border-slate-800 hover:border-indigo-500/55 text-slate-300 hover:text-white font-bold px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 active:scale-95 text-left flex items-center gap-1.5"
                          disabled={isAgentTyping}
                        >
                          {q.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chat frame styled as an immersive high-tech console window with custom colors */}
                  <div className="bg-slate-950 border border-slate-850 rounded-2xl p-4.5 h-[210px] overflow-y-auto space-y-4 no-scrollbar shadow-inner relative">
                    {chatHistory.map((item, i) => (
                      <div
                        key={i}
                        className={`flex flex-col max-w-[85%] ${
                          item.sender === 'user' ? 'ml-auto text-right items-end' : 'mr-auto text-left items-start'
                        }`}
                      >
                        <span className="text-[8.5px] uppercase font-bold text-slate-500 tracking-wider mb-1">
                          {item.sender === 'user' ? '⚡ Your Inquiry' : '🍁 James (Toronto Support)'}
                        </span>
                        <div
                          className={`p-3.5 rounded-2xl text-xs leading-relaxed font-medium transition-all duration-300 ${
                            item.sender === 'user'
                              ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-tr-none shadow-md shadow-rose-900/30 border border-rose-450/40 animate-slice-in-right'
                              : 'bg-slate-900 text-slate-100 rounded-tl-none border border-slate-800 shadow-md animate-slice-in-left'
                          }`}
                        >
                          {item.text}
                        </div>
                      </div>
                    ))}
                    
                    {isAgentTyping && (
                      <div className="text-left max-w-[80%] animate-pulse">
                        <span className="text-[8.5px] uppercase font-bold text-indigo-400 tracking-wider block mb-1">
                          🍁 James is typing...
                        </span>
                        <div className="bg-slate-900 border border-slate-805 p-3 rounded-2xl rounded-tl-none inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style={{ animationDuration: '0.8s' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: '0.15s', animationDuration: '0.8s' }} />
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }} />
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Quick message input form aligned perfectly at the custom footer */}
                <div className="pt-4 mt-5 border-t border-slate-800/50">
                  <form onSubmit={handleSendMessage} className="flex gap-2.5 relative z-10 w-full">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Ask about your specific vehicle fit..."
                      className="flex-1 bg-slate-950 border border-slate-800 hover:border-slate-750 focus:border-indigo-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-inner transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white text-xs font-black px-5 py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-950/40 hover:shadow-indigo-500/25 flex items-center justify-center gap-1.5 active:scale-95 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask</span>
                    </button>
                  </form>
                  
                  {/* Verification assurances badge */}
                  <div className="text-[10px] text-center text-slate-450 font-bold mt-4.5 flex items-center justify-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/80 animate-pulse" />
                    <span>Over 45,000 kilometres of cold weather road-testing across Canada.</span>
                  </div>
                </div>

              </div> {/* Closing Inner Content Card Container */}
            </div> {/* Closing Glowing Outer Sleeve */}

          </div> {/* Closing lg:col-span-5 wrapper */}

        </div>

      </div>
    </section>
  );
}
