import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, EyeOff, Snowflake, Lock, Activity, Award } from 'lucide-react';

interface AppleProductShowcaseProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function AppleProductShowcase({ onScrollToSection }: AppleProductShowcaseProps) {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      title: "Your Data Stays With You",
      tagline: "Absolute local sovereignty.",
      desc: "All diagnostic logs, coordinates, and visual streams are analyzed directly at the vehicle edge on our neural microprocessor. There are no tracking databases, cloud streams, or remote footprints.",
      icon: <EyeOff className="w-8 h-8 text-indigo-400" />,
      colorTheme: "from-indigo-950 via-[#0a0e17] to-slate-950",
      accent: "text-indigo-400"
    },
    {
      title: "Built For Canadian Roads",
      tagline: "Winter-hardened hardware.",
      desc: "Engineered to withstand harsh Canadian environments. Leveraging high-end thermal supercapacitors rather than standard lithium battery packs, ASTRA safely manages freeze loads down to -35°C and summer cabin temperatures up to 85°C.",
      icon: <Snowflake className="w-8 h-8 text-cyan-400" />,
      colorTheme: "from-cyan-950 via-[#060a12] to-slate-950",
      accent: "text-cyan-400"
    },
    {
      title: "Privacy Without Compromise",
      tagline: "The subscription trap is broken.",
      desc: "Astrateq firmly rejects mandatory recurring software fees. Own your device outright, clear active engine trouble codes, and receive lifetime software updates with 0 monthly subscription costs.",
      icon: <Lock className="w-8 h-8 text-emerald-400" />,
      colorTheme: "from-emerald-950 via-[#050910] to-slate-950",
      accent: "text-emerald-400"
    },
    {
      title: "Know More Before Problems Become Emergencies",
      tagline: "Demystify checks instantly.",
      desc: "Transform confusing check-engine dashboard icons into direct, conversational, human advice locally. Diagnose brake sensors, cooling temperatures, and alternator battery cells instantly without technical jargon.",
      icon: <Activity className="w-8 h-8 text-rose-400" />,
      colorTheme: "from-rose-950 via-[#09070c] to-slate-950",
      accent: "text-rose-400"
    },
    {
      title: "Reserve Early Access",
      tagline: "Lock early-bird founding rates.",
      desc: "Join our priority queue list today with a fully-refundable $49 deposit. Skip public launch cycles completely and secure guaranteed express shipping of your premium dual-lens system.",
      icon: <Award className="w-8 h-8 text-blue-400" />,
      colorTheme: "from-blue-950 via-[#040813] to-slate-950",
      accent: "text-blue-400"
    }
  ];

  return (
    <section id="showcase" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 bg-[#02050a] pointer-events-none opacity-40 select-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section title */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold block mb-4 font-mono">
            ESTEEMED PRODUCT FOCUS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Intelligence That Stays In Your Vehicle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Step through our key architectural principles built exclusively with absolute user privacy in mind.
          </p>
        </div>

        {/* Premium Interactive Carousel Frame */}
        <div className="max-w-5xl mx-auto">
          
          {/* Panel Selector Slide Tabs (Top Line Indicators) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-slate-800">
            {panels.map((panel, index) => (
              <button
                key={index}
                onClick={() => setActivePanel(index)}
                className={`px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-2 ${
                  activePanel === index
                    ? 'bg-white text-slate-950 shadow-lg scale-105'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-850'
                }`}
              >
                <span className="font-mono">{index + 1}.</span>
                <span className="truncate max-w-[120px] sm:max-w-none">
                  {panel.title.split(" ")[0]} {panel.title.split(" ")[1] || ""}
                </span>
              </button>
            ))}
          </div>

          {/* Active Panel Frame (Full screen panel effect) */}
          <div className={`relative rounded-3xl p-8 sm:p-14 text-left transition-all duration-700 bg-gradient-to-br border border-slate-800 shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden ${panels[activePanel].colorTheme}`}>
            {/* Visual glow element behind the active indicator icon */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.012] rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[280px]">
              {/* Text segment */}
              <div className="md:col-span-8 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {panels[activePanel].icon}
                    </div>
                    <span className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] font-mono ${panels[activePanel].accent}`}>
                      {panels[activePanel].tagline}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white pt-2">
                    {panels[activePanel].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-semibold">
                  {panels[activePanel].desc}
                </p>

                {activePanel === 4 ? (
                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => onScrollToSection('pricing')}
                      className="px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      Join Founding Cohort Now
                      <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onScrollToSection('hero')}
                      className="px-6 py-3.5 bg-slate-900 border border-slate-850 hover:border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wide rounded-xl transition-all cursor-pointer"
                    >
                      Verify Eligibility (30 sec)
                    </button>
                  </div>
                ) : (
                  <div className="pt-4">
                    <button
                      onClick={() => setActivePanel((prev) => (prev + 1) % panels.length)}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                    >
                      Step to Next Panel
                      <ArrowRight size={13} className="animate-pulse" />
                    </button>
                  </div>
                )}

              </div>

              {/* Graphical Segment (Big typographic number) */}
              <div className="hidden md:flex md:col-span-4 justify-end items-center select-none">
                <span className="font-mono font-black text-[12rem] lg:text-[14rem] leading-none text-white/[0.02] filter brightness-150">
                  0{activePanel + 1}
                </span>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
