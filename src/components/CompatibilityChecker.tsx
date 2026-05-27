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
    <section id="compatibility" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative background map lines representing Canadian trans-continental routes */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute right-0 bottom-12 w-96 h-96 bg-gradient-to-tl from-rose-500/5 to-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with vivid premium badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100/80 px-3.5 py-1.5 rounded-full text-rose-700 text-xs font-black uppercase tracking-widest mb-4 shadow-sm animate-pulse">
            <span className="text-sm leading-none">🇨🇦</span>
            Trans-Canada Highway Certified
          </div>
          
          <h2 className="font-display font-black text-3.5xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            See if ASTRA Works with Your Vehicle
          </h2>
          
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Over <span className="text-rose-600 font-black">98.4% of vehicles</span> driven in Canada (2010 onwards) are fully supported. Find your model configuration in real-time below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Check Compatibility Form Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-100 relative overflow-hidden group hover:border-indigo-505 transition-all duration-300">
            
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-rose-500 to-indigo-600" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-slate-800 uppercase tracking-widest font-mono">
                    Step 1: Vehicle Profile
                  </span>
                </div>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-mono font-bold tracking-wide">
                  Passive ISO-15765 Compliant
                </span>
              </div>

              {/* Dropdowns row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Year Selection */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                    <Clock className="w-3 h-3 text-rose-500" />
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-rose-450/45 rounded-xl px-3 py-3 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:border-rose-500 cursor-pointer shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-rose-400"
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Make Selection */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1 columns-1">
                    <Milestone className="w-3 h-3 text-indigo-500" />
                    Brand / Make
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => handleMakeChange(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 hover:border-indigo-400/40 rounded-xl px-3 py-3 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:border-indigo-500 cursor-pointer shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-indigo-400"
                  >
                    <option value="">Select Make</option>
                    {Object.keys(makesAndModels).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Model Selection */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] sm:text-xs font-black text-slate-700 uppercase tracking-widest block flex items-center gap-1">
                    <Compass className="w-3 h-3 text-emerald-500" />
                    Model Lineup
                  </label>
                  <select
                    value={selectedModel}
                    disabled={!selectedMake}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:border-indigo-500 cursor-pointer disabled:opacity-50 shadow-sm transition-all focus:bg-white focus:ring-1 focus:ring-indigo-400"
                  >
                    <option value="">Select Model</option>
                    {selectedMake &&
                      makesAndModels[selectedMake].map((mo) => (
                        <option key={mo} value={mo}>{mo}</option>
                      ))}
                  </select>
                </div>

              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={isLoading || !selectedYear || !selectedMake || !selectedModel}
                onClick={handleCheck}
                className="w-full py-4 bg-gradient-to-r from-red-650 via-rose-600 to-indigo-650 hover:from-red-700 hover:to-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-40 cursor-pointer flex items-center justify-center gap-2.5 shadow-lg shadow-rose-950/15"
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
                <div className="border border-indigo-100 bg-gradient-to-br from-indigo-50/20 via-white to-white rounded-2xl overflow-hidden shadow-lg animate-fade-in text-left">
                  
                  {/* Results Header block */}
                  {result === 'ev' && (
                    <div className="bg-emerald-50 border-b border-emerald-100/50 px-5 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-250 animate-bounce">
                        <Check className="w-4.5 h-4.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-black text-xs uppercase tracking-wider text-emerald-800">SUCCESS: 100% COMPATIBLE</span>
                        <span className="font-sans font-bold text-xs text-slate-600 leading-none">
                          EV Optimized Battery Safety Management Active!
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'standard' && (
                    <div className="bg-emerald-50 border-b border-emerald-100/50 px-5 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-250">
                        <Check className="w-4.5 h-4.5 text-emerald-600" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-black text-xs uppercase tracking-wider text-emerald-800">SUCCESS: 100% COMPATIBLE</span>
                        <span className="font-sans font-bold text-xs text-slate-600 leading-none">
                          Standard Dual-Lens Dashcam Plug & Play Certified!
                        </span>
                      </div>
                    </div>
                  )}

                  {result === 'limited' && (
                    <div className="bg-amber-50 border-b border-amber-100 px-5 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center border border-amber-250 animate-pulse">
                        <AlertTriangle className="w-4.5 h-4.5 text-amber-650" style={{ strokeWidth: 3 }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-black text-xs uppercase tracking-wider text-amber-800">OLDER VEHICLE DETECTED</span>
                        <span className="font-sans font-semibold text-xs text-slate-600 leading-none">
                          OBD Extension cable recommended for complete cabin dash clearing.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Results details body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Recommended device card */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Recommended Match</span>
                        <span className="font-sans font-black text-indigo-950 text-base mt-0.5">
                          {result === 'ev' && 'Guardian Pro Bundle'}
                          {result === 'standard' && 'Family Safety Bundle'}
                          {result === 'limited' && 'DriveGuard Solo'}
                        </span>
                        <span className="text-xs text-slate-550 mt-1 max-w-[240px] sm:max-w-xs leading-normal">
                          {result === 'ev' && 'Includes extreme high-voltage battery telemetry sensors.'}
                          {result === 'standard' && 'Includes front windshield dual-lens unit with 3 years premium guarantee.'}
                          {result === 'limited' && 'Compact edge-processing unit with high-impact winter supercapacitor.'}
                        </span>
                      </div>
                      <div className="text-right flex flex-col items-end shrink-0 pl-2">
                        <span className="text-indigo-950 font-black text-base sm:text-lg">
                          {result === 'ev' && '$899 CAD'}
                          {result === 'standard' && '$599 CAD'}
                          {result === 'limited' && '$269 CAD'}
                        </span>
                        <span className="text-[9px] text-emerald-700 font-extrabold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md mt-1.5 uppercase tracking-wider">
                          Guaranteed Rate Found
                        </span>
                      </div>
                    </div>

                    {/* Step guidance */}
                    <div className="flex gap-2 text-xs text-slate-600 leading-relaxed font-semibold">
                      <CornerDownRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        {result === 'ev' && 'Our high-voltage EV integration isolates all safety processing directly on the device. Ready for immediate winter pre-order.'}
                        {result === 'standard' && 'Perfect fit confirmed. Plugs into dashboard OBD-II under steering wheel column. No wiring required.'}
                        {result === 'limited' && 'Prelaunch models older than 2012 may experience slight battery stat tracking delays. Standard audio and dual-lens visual recording works 100% fine.'}
                      </div>
                    </div>

                    {/* Navigation CTA */}
                    <button
                      type="button"
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full text-center py-3 bg-indigo-600 hover:bg-slate-900 text-white font-black transition-all duration-300 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md shadow-indigo-650/10"
                    >
                      Secure Prelaunch Founding Price →
                    </button>

                  </div>

                </div>
              ) : (
                <div className="text-center py-6 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                  <span className="text-sm">👆</span>
                  <p className="text-xs text-slate-500 font-bold mt-1 max-w-xs mx-auto">
                    Select your vehicle specs from the drop-downs above to test compatibility and lock prelaunch rates.
                  </p>
                </div>
              )}
            </div>

            {/* Canada wide safety assurance notes */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50/40 p-3 rounded-xl">
              <span className="flex items-center gap-1">
                🛡️ Trans-Canada Tested
              </span>
              <span className="flex items-center gap-1">
                ❄️ Built For -35°C Winters
              </span>
              <span className="flex items-center gap-1 text-rose-600">
                🍁 100% Canadian Owned
              </span>
            </div>

          </div>

          {/* Right Column: Premium Canadian Support Simulator Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-rose-50/50 via-white to-indigo-50/50 border border-indigo-100 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-slate-100 relative">
            
            {/* Corner Leaf badge */}
            <div className="absolute -top-3 -right-3 bg-red-650 text-white font-mono text-[9px] font-black px-3 py-1 rounded-full shadow-md border-2 border-white flex items-center gap-1">
              <span>🍁</span>
              BC/ON Agents
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-indigo-100/40">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="w-7 h-7 rounded-full bg-indigo-650 border border-white flex items-center justify-center font-bold text-[9px] text-white">J</div>
                  <div className="w-7 h-7 rounded-full bg-rose-600 border border-white flex items-center justify-center font-bold text-[9px] text-white">S</div>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-display font-black text-xs text-indigo-950 uppercase tracking-wider">Canadian Support Line</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-slate-500 font-bold">2 Agents Online (Calgary / BC)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-semibold text-left">
                Not sure if your specific custom package or Canadian truck needs a special harness adaptor? Shoot a quick message to our Vancouver-based hardware specialists below:
              </p>

              {/* Dynamic Interactive Suggestion Questions Pills */}
              <div className="flex flex-wrap gap-1.5 py-1">
                {canadianQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => triggerPredefinedQuestion(q.action)}
                    className="text-[9px] bg-white border border-rose-100 hover:border-rose-450 hover:bg-rose-50 text-rose-855 font-bold px-2.5 py-1 rounded-full cursor-pointer transition-all shadow-sm active:scale-95 text-left"
                    disabled={isAgentTyping}
                  >
                    {q.text}
                  </button>
                ))}
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
