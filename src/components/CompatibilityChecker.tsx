import React, { useState, useEffect } from 'react';
import { Check, AlertTriangle, MessageSquare, CornerDownRight, UserCheck } from 'lucide-react';

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
    { sender: 'agent', text: 'Hi! I’m James from our Vancouver support team. Any questions about fitting ASTRA into your vehicle?' }
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatMessage('');
    setIsAgentTyping(true);

    // Simulate reactive premium Support Agent reply
    setTimeout(() => {
      setIsAgentTyping(false);
      let replyText = 'Thanks for reaching out! Yes, standard OBD-II ports work perfectly with ASTRA without any splicing. If it’s built since 2010, you are fully backed.';
      
      if (userMsg.toLowerCase().includes('hybrid') || userMsg.toLowerCase().includes('ev') || userMsg.toLowerCase().includes('battery')) {
        replyText = 'Excellent question! ASTRA is optimized for high-voltage systems. Our Guardian Pro kit taps into EV battery telemetry seamlessly to predict capacity drops.';
      } else if (userMsg.toLowerCase().includes('install') || userMsg.toLowerCase().includes('plug')) {
        replyText = 'Installation is 100% plug-and-play. It simply clicks into the OBD-II port under your steering wheel dashboard. It takes less than 30 seconds!';
      }

      setChatHistory((prev) => [...prev, { sender: 'agent', text: replyText }]);
    }, 1500);
  };

  return (
    <section id="compatibility" className="py-20 bg-slate-900/20 border-y border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-cyan font-bold block mb-3 animate-pulse">
            Vehicle Compatibility
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            See if ASTRA Works with Your Vehicle
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Most 2010+ vehicles driven in Canada are fully supported by OBD-II plug standards. Run your specs in seconds to audit configuration options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Check Compatibility Form Panel */}
          <div className="lg:col-span-7 bg-slate-800/40 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-xl">
            
            <div className="space-y-6">
              
              {/* Dropdowns row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Year Selection */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest block">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-xs sm:text-sm text-white/90 focus:outline-none focus:border-indigo-500/50 cursor-pointer"
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                {/* Make Selection */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest block">Make</label>
                  <select
                    value={selectedMake}
                    onChange={(e) => handleMakeChange(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-xs sm:text-sm text-white/90 focus:outline-none focus:border-indigo-500/50 cursor-pointer"
                  >
                    <option value="">Select Make</option>
                    {Object.keys(makesAndModels).map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Model Selection */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest block">Model</label>
                  <select
                    value={selectedModel}
                    disabled={!selectedMake}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-xs sm:text-sm text-white/90 focus:outline-none focus:border-indigo-500/50 cursor-pointer disabled:opacity-50"
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
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 disabled:opacity-40 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Auditing OBD-II Standards...
                  </>
                ) : (
                  'Check Compatibility'
                )}
              </button>

            </div>

            {/* Results Display Window */}
            <div className="mt-8">
              {result ? (
                <div className="border border-white/10 bg-[#0B1120]/40 rounded-2xl overflow-hidden shadow-2xl animate-fade-in text-left">
                  
                  {/* Results Header block */}
                  {result === 'ev' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-500/25 px-5 py-3.5 flex items-center gap-3">
                      <div className="w-7 h-7 bg-emerald-500/15 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                      </div>
                      <span className="font-display font-bold text-sm text-emerald-400">
                        Compatible — EV Optimized!
                      </span>
                    </div>
                  )}

                  {result === 'standard' && (
                    <div className="bg-emerald-500/10 border-b border-emerald-500/25 px-5 py-3.5 flex items-center gap-3">
                      <div className="w-7 h-7 bg-emerald-500/15 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" style={{ strokeWidth: 3 }} />
                      </div>
                      <span className="font-display font-bold text-sm text-emerald-400">
                        Compatible — OBD-II Standard!
                      </span>
                    </div>
                  )}

                  {result === 'limited' && (
                    <div className="bg-orange-500/10 border-b border-orange-500/25 px-5 py-3.5 flex items-center gap-3">
                      <div className="w-7 h-7 bg-orange-500/15 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-orange-400" style={{ strokeWidth: 3 }} />
                      </div>
                      <span className="font-display font-bold text-sm text-orange-400">
                        Limited Compatibility — May Vary
                      </span>
                    </div>
                  )}

                  {/* Results details body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Recommended device card */}
                    <div className="bg-white/3 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Recommended Match</span>
                        <span className="font-display font-bold text-white text-sm mt-0.5">
                          {result === 'ev' && 'Guardian Pro Bundle'}
                          {result === 'standard' && 'Family Safety Bundle'}
                          {result === 'limited' && 'DriveGuard Solo'}
                        </span>
                        <span className="text-[11px] text-gray-500 mt-1">
                          {result === 'ev' && 'Includes high-voltage EV battery analytics.'}
                          {result === 'standard' && 'Best match for dual vehicle layouts.'}
                          {result === 'limited' && 'Compact edge-processing unit.'}
                        </span>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <span className="text-brand-cyan font-bold text-sm">
                          {result === 'ev' && '$899 CAD'}
                          {result === 'standard' && '$599 CAD'}
                          {result === 'limited' && '$269 CAD'}
                        </span>
                        <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded mt-1.5 lowercase">
                          lock found rate
                        </span>
                      </div>
                    </div>

                    {/* Step guidance */}
                    <div className="flex gap-2 text-xs text-gray-400 leading-relaxed font-semibold">
                      <CornerDownRight className="w-4 h-4 text-brand-cyan shrink-0 animate-pulse" />
                      <div>
                        {result === 'ev' && 'Highly Recommended: Standard API connection aligns perfectly. Secure founding spot immediately.'}
                        {result === 'standard' && 'Great news: Ready to ship. Simply plug into standard dashboard port. Locks 3-year warranty.'}
                        {result === 'limited' && 'Older vehicles might require an OBD bypass or standard extension harness. Contact support below to verify.'}
                      </div>
                    </div>

                    {/* Quick navigation CTA */}
                    <button
                      type="button"
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full text-center py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all rounded-lg text-xs uppercase cursor-pointer shadow-lg shadow-indigo-600/30"
                    >
                      Secure Founding Price →
                    </button>

                  </div>

                </div>
              ) : (
                <p className="text-xs text-center text-gray-500">
                  Select your vehicle specifications above to test hardware alignments.
                </p>
              )}
            </div>

          </div>

          {/* Right Column support contact - fallback interactive simulator */}
          <div className="lg:col-span-5 bg-slate-800/40 border border-white/10 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-md shadow-xl border-t">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                <MessageSquare className="w-4 h-4 text-brand-cyan" />
                <h3 className="font-display font-bold text-sm text-white">Not sure? Ask Canadian Support.</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Speak directly with specialized hardware technicians. Real agents, never outsourced.
              </p>

              {/* Chat frame */}
              <div className="bg-[#0B1120]/60 border border-white/5 rounded-2xl p-4 h-44 overflow-y-auto space-y-3 no-scrollbar">
                {chatHistory.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      item.sender === 'user' ? 'ml-auto text-right items-end' : 'mr-auto text-left items-start'
                    }`}
                  >
                    <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider mb-0.5">
                      {item.sender === 'user' ? 'You' : 'Agent James'}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl text-xs leading-relaxed font-semibold ${
                        item.sender === 'user'
                          ? 'bg-brand-cyan text-[#0B1120] rounded-tr-none'
                          : 'bg-white/5 text-white/90 rounded-tl-none border border-white/5'
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
                {isAgentTyping && (
                  <div className="text-left max-w-[80%]">
                    <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider block mb-1">Agent James</span>
                    <div className="bg-white/5 border border-white/5 p-2 rounded-xl inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.4s' }} />
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
                className="flex-1 bg-[#0B1120] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50"
              />
              <button
                type="submit"
                className="bg-brand-cyan text-[#0B1120] hover:bg-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>

            {/* Trust notes */}
            <div className="flex justify-center gap-x-4 gap-y-1 sm:gap-6 mt-6 flex-wrap">
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <div className="w-1 h-1 rounded-full bg-brand-cyan" />
                <span>OBD-II standards verified</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <div className="w-1 h-1 rounded-full bg-brand-cyan" />
                <span>Standard 30s installation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
