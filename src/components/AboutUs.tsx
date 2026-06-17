import { Shield, Brain, Cpu, Leaf, ArrowLeft, Landmark, Zap, Mail, Compass, HelpCircle } from 'lucide-react';

interface AboutUsProps {
  onBackToHome: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function AboutUs({ onBackToHome, onScrollToSection }: AboutUsProps) {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      title: "On-Device Edge Intelligence",
      description: "We execute deep learning hazard detection networks entirely at the physical edge. All calculations occur inside your cabin on specialized low-power microprocessors. No driver video streams are ever uploaded, processed, or saved to a remote cloud host."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Data Sovereignty & Air-Gap Shield",
      description: "Traditional dashcams stream coordinates, biometric data, and continuous video files to third-party database nodes. Astrateq maintains high-grade local AES-256 physical security. What happens in your cabin stays entirely private."
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Passive ISO OBD Translator",
      description: "Our proprietary hardware reads standard ISO-15765 CAN-Bus streams completely passively. It acts strictly as a translation layer, translating raw codes into driver-friendly alerts without writing commands or interfering with vehicle ECUs."
    }
  ];

  const milestones = [
    {
      year: "Q4 2025",
      title: "The Genesis",
      desc: "Founded by a group of hardware engineers and cybersecurity practitioners in Toronto, Ontario who were disillusioned by commercial vehicle tracking practices which continuously upload raw video, routes, and acceleration data."
    },
    {
      year: "Q1 2026",
      title: "Pilot Testing & Tuning",
      desc: "Completed extreme cold-temperature pilot-run test arrays across several remote Canadian corridors, calibrating hardware-based steering drift algorithms against severe winter conditions, heavy slush, and sub-zero roads."
    },
    {
      year: "Q2 2026",
      title: "Canadian Validation Cohort",
      desc: "Officially launched our refundable early reservation window to secure critical hardware pilot slots. This cohort helps determine local manufacturing allocation quotas before serial production lines are stabilized."
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full animate-in fade-in duration-350 select-none">
      
      {/* Back Button Row */}
      <div className="mb-10 text-left">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4-5 py-2 rounded-xl bg-white border border-slate-205 text-slate-700 hover:text-indigo-650 font-bold hover:shadow-md hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Pre-Order Hub</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="space-y-6 text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase font-black text-indigo-700 bg-indigo-50/80 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
          <Landmark className="w-3.5 h-3.5" />
          Our Mission &amp; Identity • Canada
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
          We believe inside your vehicle is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">sovereign space.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Astrateq Gadgets is an pioneering automotive hardware &amp; software developer based in Ontario. We build passive offline intelligence suites that elevate safety and diagnostics without trading your privacy.
        </p>
      </div>

      {/* Main Grid: Narrative & Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        {/* Text Area */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            How we’re fundamentally redefining vehicle diagnostics
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Most modern connected vehicular devices act as telemetry spies. They stream continuous location logs, cabin audio streams, and physical accelerations directly to overseas databases. In our view, that data belongs exclusively to you—the driver.
          </p>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            That is why we built Astrateq. Our DriveGuard suite translates diagnostic data using physical isolation line separators, providing you complete mechanical awareness of your car’s state while housing face fatigue detection processors locally inside the unit.
          </p>
          <div className="p-5 rounded-2xl bg-slate-100/60 border border-slate-200/50 flex gap-4">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0 self-start">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 mb-1">Conceptualized in Canada</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Designed to survive the toughest conditions. From freezing winter temperatures along the Jasper-Banff peak passes to dense urban environments in downtown Toronto, Astrateq stands as a solid, secure standard in reliable vehicle intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Mock Card representing local computation */}
        <div className="lg:col-span-5">
          <div className="bg-slate-950 border border-slate-800 rounded-[2.2rem] p-7 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1.2px,transparent_1.2px)] opacity-[0.12] [background-size:20px_20px] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded">
                  ASTRATEQ HARDWARE LAB
                </span>
                <span className="text-slate-500 text-xs font-mono">v1.07</span>
              </div>

              {/* Schematic Mock */}
              <div className="w-full aspect-video rounded-2xl border border-slate-800/80 bg-slate-900/80 mt-2 p-4 flex flex-col justify-between font-mono text-[10px] text-indigo-400">
                <div className="flex justify-between border-b border-indigo-950 pb-2">
                  <span className="text-white">COGNITIVE ENGINE</span>
                  <span className="animate-pulse flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping inline-block" />PASSIVE LOOP</span>
                </div>
                <div className="space-y-1 my-3 text-left">
                  <div className="flex justify-between text-slate-400">
                    <span>STEERING DEVIATION:</span>
                    <span className="text-white font-bold">100% LOCAL</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>OBD COMPUTE SPEED:</span>
                    <span className="text-emerald-400 font-bold">12ms AT EDGE</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>DATA BROADCASTS:</span>
                    <span className="text-rose-500 font-bold underline">0 OUTWARD PORT ACTIVE</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-500 text-left border-t border-indigo-950 pt-1.5">
                  🛡️ Physical Air-Gap Line Active.
                </div>
              </div>

              <div className="space-y-2 text-left pt-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
                  <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Sovereign Security Framework</span>
                </div>
                <p className="text-[11.5px] text-slate-450 leading-relaxed font-mono">
                  Tested and proven. Independent security evaluations confirm our firmware contains zero external cloud dependency or covert backdoors.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* The Core Pillars */}
      <div className="mb-20 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Our Core Engineering Principles</h2>
          <p className="text-sm text-slate-500 font-semibold leading-relaxed">
            Every component we build, line of code we flash, and material we choose is bound to three core covenants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-[2rem] p-7 text-left space-y-4 hover:shadow-lg transition-shadow">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 self-start inline-block">
                {p.icon}
              </div>
              <h3 className="text-base font-black text-slate-950 tracking-tight">{p.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="mb-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Our Road to Release</h2>
          <p className="text-sm text-slate-500 font-semibold leading-relaxed">
            From simple blueprint mockups to extreme condition pilot validations. Here is our story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-[2rem] p-7 text-left space-y-4 relative">
              <span className="text-base font-black font-mono text-indigo-600 block">{m.year}</span>
              <h3 className="text-base font-black text-slate-950 tracking-tight">{m.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Pledge Badge */}
      <div className="bg-white border-2 border-indigo-500/15 rounded-[2.5rem] p-8 sm:p-12 mb-16 text-center overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-70 pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Our Pre-Launch Guarantee Policy</h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Your $40 CAD deposit reserves your hardware slot and early pilot pricing. It is held securely and is <strong>fully refundable at any time, instantly, in one single click</strong>. We do not use your reservation deposits to fund engineering; they serve strictly to guarantee real vehicle demand.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onScrollToSection('pricing')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-extrabold text-sm transition-all duration-300"
            >
              Reserve Early Spot — $40 CAD
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer"
            >
              View Dashboard Concepts
            </button>
          </div>
        </div>
      </div>

      {/* Support / Contact details */}
      <div className="border-t border-slate-200/70 pt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-slate-400" />
          <span>Need technical inquiries? Reach out to <strong className="text-indigo-600 font-bold">concierge@astrateqgadgets.ca</strong></span>
        </div>
        <div>
          <span>Conceptualized in Toronto, Ontario, Canada 🍁</span>
        </div>
      </div>

    </section>
  );
}
