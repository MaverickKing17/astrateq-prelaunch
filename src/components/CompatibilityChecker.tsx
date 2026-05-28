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
  Heart
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
    { sender: 'agent', text: 'Bonjour! Hi! I’m James from our Vancouver support team. Any questions about fitting the ASTRA-AI DriveGuard into your vehicle?' }
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
    Tesla: ['Model 3', 'Model Y', 'Model S', 'Model X'],
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
      const isTesla = selectedMake === 'Tesla';
      const isEV = isTesla || ['Ioniq 5', 'EV6', 'Leaf', 'ID.4'].includes(selectedModel);

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
      let replyText = 'Yes indeed! Standard OBD-II ports work perfectly with ASTRA without any splicing. If it’s built since 2010, you are fully backed.';
      
      if (question.includes('-35°C')) {
        replyText = 'Absolutely! ASTRA is winter-hardened with a premium supercapacitor (no explosive lithium batteries) that safely operates from -35°C up to 85°C. Reliable power whether you’re in Calgary, Yellowknife, or Abitibi! ❄️';
      } else if (question.includes('EVs')) {
        replyText = 'Absolutely. Teslas and modern EVs (like the Ioniq 5 or EV6) are 100% compatible. Our dual-lens unit extracts zero secondary engine stats so it won’t trigger battery system drain warnings. ⚡';
      } else if (question.includes('shipping')) {
        replyText = 'Standard express shipping across Canada is quick & tracked! Usually 2-3 business days to Toronto/Montreal, 3-4 days to Calgary/Edmonton, and next-day within BC from our Vancouver hub. 📦';
      } else if (question.includes('warranty')) {
        replyText = 'No, it will not void your warranty! ASTRA is a strictly passive OBD-II monitoring device (ices-003 compliant). It does not write commands/hack your vehicle ECU, which is fully compliant with Canada Consumer Protection. 🛠️';
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
      let replyText = 'Thanks for reaching out! Yes, standard OBD-II ports work perfectly with ASTRA without any splicing. If it’s built since 2010, you are fully backed.';
      
      if (userMsg.toLowerCase().includes('hybrid') || userMsg.toLowerCase().includes('ev') || userMsg.toLowerCase().includes('battery') || userMsg.toLowerCase().includes('tesla')) {
        replyText = 'Excellent question! ASTRA is optimized for high-voltage systems. Our Guardian Pro kit taps into EV battery telemetry seamlessly without triggering alerts on your dash.';
      } else if (userMsg.toLowerCase().includes('install') || userMsg.toLowerCase().includes('plug') || userMsg.toLowerCase().includes('how')) {
        replyText = 'Installation is 100% plug-and-play. It simply clicks into the OBD-II port under your steering wheel dashboard. It takes less than 30 seconds!';
      } else if (userMsg.toLowerCase().includes('winter') || userMsg.toLowerCase().includes('cold') || userMsg.toLowerCase().includes('weather') || userMsg.toLowerCase().includes('freeze')) {
        replyText = 'Designed specifically for harsh climates: ASTRA leverages extreme-grade supercapacitors instead of standard lithium batteries, meaning it stands up to -35°C Canadian winters without failure! 🏔️';
      }

      setChatHistory((prev) => [...prev, { sender: 'agent', text: replyText }]);
    }, 1300);
  };

  // Predefined interactive pills for Canadian visitors to click and immediately try
  const canadianQuestions = [
    { text: "❄️ Will it freeze in a -35°C winter?", action: "Will this survive a -35°C Calgary/winter weather environment?" },
    { text: "⚡ EV/Tesla compatibility?", action: "Is this compatible with EVs (like Tesla, Ioniq 5, EV6)?" },
    { text: "📦 Shipping times to ON/BC?", action: "How long is standard express shipping to Toronto, Montreal, or Calgary?" },
    { text: "🛠️ Will OBD-II void my warranty?", action: "Does plugging ASTRA into the OBD-II port void my Canadian vehicle warranty?" }
  ];

  return (
    <section id="compatibility" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/55 to-white border-b border-rose-100/30 relative overflow-hidden">
      
      {/* Decorative background grid and glowing light source blobs representing high-end Canadian trans-continental routes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      
      {/* Dynamic ambient highlights */}
      <div className="absolute left-[-10%] top-[20%] w-[45%] h-[45%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[45%] h-[45%] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with vivid premium badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-4 py-2 rounded-full text-rose-700 text-xs font-black uppercase tracking-widest mb-4 shadow-sm animate-pulse">
            <span className="text-base leading-none">🇨🇦</span>
            Trans-Canada Highway Certified
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5.5xl text-slate-900 tracking-tight mb-4">
            See if ASTRA Works with Your Vehicle
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Over <span className="text-rose-600 font-extrabold">98.4% of vehicles</span> driven in Canada (2010 onwards) are fully supported. Find your model configuration in real-time below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Check Compatibility Form Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-slate-200/60 relative overflow-hidden group hover:border-slate-350 transition-all duration-300">
            
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-indigo-650" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-black text-slate-800 uppercase tracking-widest font-mono">
                    Step 1: Vehicle Profile
                  </span>
                </div>
                <span className="text-[10px] bg-indigo-5- bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-md font-mono font-bold tracking-wide">
                  Passive ISO-15765 Compliant
                </span>
              </div>

              {/* Dropdowns layout styled dynamically as slot indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Year Selection */}
                <div className="space-y-2 text-left bg-slate-50 hover:bg-slate-100/65 border border-slate-200 rounded-2xl p-3 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                    SLOT 01 / TIME
                  </span>
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-rose-450/45 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-rose-500 cursor-pointer shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-rose-400"
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Make Selection */}
                <div className="space-y-2 text-left bg-slate-50 hover:bg-slate-100/65 border border-slate-200 rounded-2xl p-3 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                    SLOT 02 / MAKE
                  </span>
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1.5">
                    <Milestone className="w-3.5 h-3.5 text-indigo-500" />
                    Brand / Make
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => handleMakeChange(e.target.value)}
                    className="w-full bg-white border border-slate-200 hover:border-indigo-400/40 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-indigo-500 cursor-pointer shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-indigo-400"
                  >
                    <option value="">Select Make</option>
                    {Object.keys(makesAndModels).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Model Selection */}
                <div className="space-y-2 text-left bg-slate-50 hover:bg-slate-100/65 border border-slate-200 rounded-2xl p-3 transition-all">
                  <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest block">
                    SLOT 03 / PATTERN
                  </span>
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-550" style={{ color: '#10b981' }} />
                    Model Lineup
                  </label>
                  <select
                    value={selectedModel}
                    disabled={!selectedMake}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 font-bold focus:outline-none focus:border-indigo-500 cursor-pointer disabled:opacity-50 shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-indigo-400"
                  >
                    <option value="">Select Model</option>
                    {selectedMake &&
                      makesAndModels[selectedMake].map((mo) => (
                        <option key={mo} value={mo}>{mo}</option>
                      ))}
                  </select>
                </div>

              </div>

              {/* Dynamic Live Connection status Screen - HUD Console */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-left relative overflow-hidden shadow-inner">
                {/* Visual scan light effect */}
                <div className="absolute inset-x-0 h-[1px] bg-emerald-500/20 top-0 animate-pulse pointer-events-none" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                    [ASTRA-LINK REAL-TIME TERMINAL]
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedModel ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
                    <span className="text-[8px] text-slate-400 font-bold">
                      {selectedModel ? 'SPEC READY' : 'STANDBY'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-[10px] sm:text-xs text-slate-300">
                  <p>
                    <span className="text-slate-500">&gt;_ STATUS:</span>{' '}
                    {!selectedYear && !selectedMake ? (
                      <span className="text-amber-400 font-semibold animate-pulse">Awaiting Vehicle Selection Profile...</span>
                    ) : selectedYear && !selectedMake ? (
                      <span className="text-indigo-400">Year recognized: {selectedYear}. Seeking Brand Make...</span>
                    ) : selectedYear && selectedMake && !selectedModel ? (
                      <span className="text-indigo-400">Querying {selectedMake} model lineage configuration...</span>
                    ) : (
                      <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
                        ✓ Vehicle signature fully cataloged code: [A-{selectedYear}-{selectedMake?.substring(0,3)?.toUpperCase()}]
                      </span>
                    )}
                  </p>
                  
                  {selectedMake && (
                    <p className="text-[10px] text-slate-400">
                      <span className="text-slate-500">&gt;_ CONSOLE:</span> Connected to passive OBD CAN-Bus protocol ISO-15765 layout framework successfully.
                    </p>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={isLoading || !selectedYear || !selectedMake || !selectedModel}
                onClick={handleCheck}
                className="w-full py-4 bg-gradient-to-r from-red-655 via-rose-600 to-indigo-650 hover:from-red-700 hover:to-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-40 cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-rose-950/15"
              >
                {isLoading ? (
                  <>
                    <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Auditing Canadian Trans-OBD Compatibility...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4.5 h-4.5 text-rose-200 animate-pulse" />
                    Verify ASTRA Integration Specs
                  </>
                )}
              </button>

            </div>

            {/* Results Display Window */}
            <div className="mt-8">
              {result ? (
                <div className="border border-indigo-150 bg-gradient-to-br from-indigo-50/20 via-white to-white rounded-2xl overflow-hidden shadow-xl animate-fade-in text-left">
                  
                  {/* Results Header block */}
                  {result === 'ev' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-100/50 px-6 py-4.5 flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-250 shrink-0 shadow-sm animate-bounce">
                        <Check className="w-5.5 h-5.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/55 px-2 py-0.5 rounded-md w-fit">
                          AUDIT SUCCESSFUL • 100% COMPATIBLE
                        </span>
                        <span className="font-sans font-black text-slate-800 text-sm mt-0.5">
                          Tesla / EV Power Guard Protection Protocol Active
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'standard' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-100/50 px-6 py-4.5 flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-250 shrink-0 shadow-sm">
                        <Check className="w-5.5 h-5.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/55 px-2 py-0.5 rounded-md w-fit">
                          AUDIT SUCCESSFUL • 100% COMPATIBLE
                        </span>
                        <span className="font-sans font-black text-slate-800 text-sm mt-0.5">
                          Standard Passenger Vehicle Direct OBD Sync Certified
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'limited' && (
                    <div className="bg-amber-500/10 border-b border-amber-100 px-6 py-4.5 flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border border-amber-250 shrink-0 shadow-sm animate-pulse">
                        <AlertTriangle className="w-5.5 h-5.5 text-amber-605" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-800 bg-amber-100/50 px-2 py-0.5 rounded-md w-fit">
                          OLDER VEHICLE SIGNATURE DETECTED
                        </span>
                        <span className="font-sans font-black text-slate-800 text-sm mt-0.5">
                          Recommended Accessory Cable Pack Highlighted
                        </span>
                      </div>
                    </div>
                  )}

                  {/* High Fidelity Specification Sheet Bento Body */}
                  <div className="p-6 space-y-6">
                    
                    {/* Bento Specs Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-col">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400">Power draw</span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 mt-1">Passive &lt;0.02W Sleep</span>
                        <span className="text-[9px] text-slate-500 mt-0.5">Guards 12V Battery safety</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-col">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400">Install difficulty</span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 mt-1">Zero tools required</span>
                        <span className="text-[9px] text-slate-500 mt-0.5">30-second click connection</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-col">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400">Supercapacitor grade</span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 mt-1">Winter-proof rating</span>
                        <span className="text-[9px] text-rose-600 font-extrabold mt-0.5">Stable -35°C to 85°C</span>
                      </div>
                      <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-col">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400">Compute latency</span>
                        <span className="text-xs sm:text-sm font-black text-slate-800 mt-1">Real-time edge response</span>
                        <span className="text-[9px] text-indigo-650 font-extrabold mt-0.5">Sub-12ms active alert</span>
                      </div>
                    </div>

                    {/* Recommended Matching Product Deal */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4.5 flex items-center justify-between text-left shadow-lg">
                      <div className="flex flex-col">
                        <span className="text-[8px] text-indigo-400 font-mono font-black uppercase tracking-widest leading-none">
                          SUGGESTED COMBINATORIAL PACKAGE
                        </span>
                        <span className="font-sans font-black text-white text-lg mt-1 mb-0.5">
                          {result === 'ev' && 'Guardian Pro Bundle'}
                          {result === 'standard' && 'Family Safety Bundle'}
                          {result === 'limited' && 'DriveGuard Solo'}
                        </span>
                        <span className="text-[11px] text-slate-350 leading-relaxed max-w-[210px] sm:max-w-xs">
                          {result === 'ev' && 'Our ultimate extreme winter setup designed with specific high-voltage isolators.'}
                          {result === 'standard' && 'Includes front dual-lens visual computer and quick-install secure sync OBD harness.'}
                          {result === 'limited' && 'Optimal stand-alone windshield visual hazard tracker backed by Canada warranty.'}
                        </span>
                      </div>
                      <div className="text-right flex flex-col items-end shrink-0 pl-2">
                        <span className="text-white font-black text-xl sm:text-2.5xl leading-none">
                          {result === 'ev' && '$899 CAD'}
                          {result === 'standard' && '$599 CAD'}
                          {result === 'limited' && '$269 CAD'}
                        </span>
                        <span className="text-[9px] text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded mt-2 uppercase font-mono tracking-wider">
                          Locked rate
                        </span>
                      </div>
                    </div>

                    {/* Step details advice with nice alignment */}
                    <div className="flex gap-2.5 text-xs text-slate-650 leading-relaxed font-semibold bg-indigo-50/20 border border-indigo-100/30 p-3.5 rounded-xl">
                      <CornerDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        {result === 'ev' && 'Verified for electric power structures. Direct connection extracts zero dangerous battery drain specs, making it completely invisible to manufacturer warning logs.'}
                        {result === 'standard' && 'ASTRA click link verified. System plugs in flawlessly beneath your steering column and secures standard dashboard communication link instantly.'}
                        {result === 'limited' && 'Prelaunch models older than 2012 support our supercapacitor visual computer 100% fine. Diagnostic warning text readouts may complete with minor delay.'}
                      </div>
                    </div>

                    {/* Advanced scrolling Anchor CTA */}
                    <button
                      type="button"
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full text-center py-4 bg-indigo-650 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/10 text-white font-black transition-all duration-300 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md"
                    >
                      Secure Prelaunch Founding Price →
                    </button>

                  </div>

                </div>
              ) : (
                <div className="text-center py-10 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200/50 mb-2">
                    <span className="text-base animate-pulse">🔍</span>
                  </div>
                  <p className="text-xs text-slate-500 font-extrabold max-w-xs leading-normal">
                    Select your vehicle configuration inside slots 1, 2, and 3 above to verify high-fidelity spec specs and lock prelaunch founding price.
                  </p>
                </div>
              )}
            </div>

            {/* Canada wide safety assurance notes */}
            <div className="mt-8 pt-4.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-[10px] text-slate-500 font-mono font-black uppercase tracking-wider bg-slate-50/60 px-4 py-3.5 rounded-xl gap-2">
              <span className="flex items-center gap-1.5">
                🇨🇦 Trans-Canada Tested
              </span>
              <span className="flex items-center gap-1.5">
                ❄️ Built For -35°C Winters
              </span>
              <span className="flex items-center gap-1.5 text-rose-600">
                🍁 100% Canadian Owned
              </span>
            </div>

          </div>

          {/* Right Column: Premium Canadian Support Simulator Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            
            {/* Top design light strip */}
            <div className="absolute top-0 inset-x-0 h-1 bg-indigo-650" />
            
            {/* Corner Leaf badge */}
            <div className="absolute top-3.5 right-3.5 bg-red-650 text-white font-mono text-[9px] font-black px-3 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1">
              <span>🍁</span>
              BC/ON Agents
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="flex -space-x-2 overflow-hidden shrink-0">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-650 to-indigo-500 border-2 border-white flex items-center justify-center font-bold text-xs text-white shadow">J</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 to-rose-455 border-2 border-white flex items-center justify-center font-bold text-xs text-white shadow">S</div>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-display font-black text-xs text-indigo-950 uppercase tracking-wider block leading-tight">Canadian Support Hub</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wide">
                      Vancouver Tech Center • Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50/45 border border-indigo-100/30 rounded-2xl p-4 text-left">
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Have a customized rig, commercial diesel truck, or specific Canadian winter package question? Shoot a quick live ping directly to our Vancouver hardware engineers:
                </p>
              </div>

              {/* Dynamic Interactive Suggestion Questions Pills */}
              <div className="flex flex-col space-y-1.5 py-1">
                <span className="text-[8px] font-mono font-black text-slate-400 uppercase tracking-widest text-left">
                  SUGGESTED QUICK PINGS
                </span>
                <div className="flex flex-wrap gap-1.5 w-full">
                  {canadianQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => triggerPredefinedQuestion(q.action)}
                      className="text-[10px] bg-white border border-slate-200 hover:border-rose-400 hover:bg-rose-50/30 text-slate-700 font-bold px-3 py-1.5 rounded-full cursor-pointer transition-all shadow-sm active:scale-95 text-left"
                      disabled={isAgentTyping}
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat frame */}
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 h-[180px] overflow-y-auto space-y-3 no-scrollbar shadow-inner relative">
                {chatHistory.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      item.sender === 'user' ? 'ml-auto text-right items-end animate-slice-in-right' : 'mr-auto text-left items-start animate-slice-in-left'
                    }`}
                  >
                    <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                      {item.sender === 'user' ? 'You' : '🍁 James (Vancouver Support)'}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl text-xs leading-relaxed font-medium transition-all ${
                        item.sender === 'user'
                          ? 'bg-rose-605 text-white rounded-tr-none shadow-sm'
                          : 'bg-slate-900 text-slate-100 rounded-tl-none border border-slate-800'
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
                {isAgentTyping && (
                  <div className="text-left max-w-[80%] animate-pulse">
                    <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider block mb-1">🍁 James is typing...</span>
                    <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Quick message input form */}
            <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about your specific vehicle fit..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-450 shadow-sm"
              />
              <button
                type="submit"
                className="bg-indigo-650 text-white hover:bg-slate-900 text-xs font-black px-4 py-3 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/10 flex items-center justify-center gap-1"
              >
                <Send className="w-3 h-3" />
                Ask
              </button>
            </form>

            <div className="text-[10px] text-center text-slate-400 font-bold mt-4 flex items-center justify-center gap-1.5">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
              Over 45,000 kilometres of cold weather road-testing across Canada.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
