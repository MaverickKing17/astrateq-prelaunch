import { Shield, Lock, Award, PhoneCall } from 'lucide-react';

export default function RiskReversal() {
  const credentials = [
    {
      title: '60-Day Risk-Free Trial Guarantee Goal',
      desc: 'Test Astrateq Gadgets inside your vehicle completely risk-free for 60 days once shipped. If you aren’t 100% satisfied with the safety alerts, return for full deposit restitution.',
      icon: <Award className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Our Privacy-First Architecture Promise',
      desc: 'No personal tracks, logs, video loops, or travel diagnostics are loaded, cached, or transferred online. Your information is locked strictly inside local sandboxes.',
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Local Support Team Commitment',
      desc: 'Enjoy rapid, non-outsourced support from dedicated hardware engineering desks in Canada. We provide responsive troubleshooting directly relative to your specific vehicle model.',
      icon: <PhoneCall className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Robust 3-Year Warranty Objective',
      desc: 'Built to exceed standard consumer grading. We guarantee high-impact resistance, extreme temperature endurance, and seamless component operation for years.',
      icon: <Shield className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <section id="trust-guarantees" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section layout containing details and big visual guarantee seal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Block: Direct high-integrity declarations */}
          <div className="lg:col-span-8 text-left space-y-8 animate-fade-in">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
                Absolute Reassurance
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                An Automotive Safety Partnership Built on Real Trust
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl font-semibold">
                Building a hardware startup represents major responsibility. We hold ourselves to rigorous development standpoints, avoiding artificial jargon or deceptive prelaunch promises. Here is what we permanently commit to:
              </p>
            </div>

            {/* List credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-400 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-800 leading-snug">
                      {cred.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal mt-1 font-medium">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Premium Seal vector Graphic design */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative group select-none">
              
              {/* Pulsing Backlight Atmosphere */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-rose-500 to-amber-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
              
              {/* Outer Rotational Starburst Pattern (Simulated via overlay border offset) */}
              <div className="absolute inset-[-12px] border border-dashed border-indigo-500/10 rounded-full animate-spin [animation-duration:80s] group-hover:border-indigo-500/20" />
              
              {/* Golden/Rose Metallic Ring */}
              <div className="relative w-[310px] h-[310px] rounded-full bg-gradient-to-tr from-indigo-600 via-rose-500 to-amber-400 p-[3px] shadow-[0_20px_50px_rgba(99,102,241,0.15)] group-hover:shadow-[0_30px_60px_rgba(244,63,94,0.25)] group-hover:scale-105 active:scale-98 transition-all duration-500 ease-out">
                
                {/* Embedded Inner Shield Badge Content in White Ceramic-like layout */}
                <div className="w-full h-full rounded-full bg-white backdrop-blur-md p-6 flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Subtle Vector Background grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-35" />
                  
                  {/* Spinning Dashed Gauge Tracker */}
                  <div className="absolute inset-3 border-2 border-dashed border-slate-100 rounded-full animate-spin [animation-duration:35s]" />
                  <div className="absolute inset-5 border-2 border-dashed border-indigo-500/15 rounded-full animate-spin [animation-duration:50s] [animation-direction:reverse]" />
                  
                  {/* Floating Shield with Glowing Halo */}
                  <div className="relative mb-3.5 mt-2">
                    <div className="absolute -inset-2.5 bg-indigo-500/10 rounded-full blur-lg animate-ping [animation-duration:3s]" />
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-50 via-white to-rose-50 border border-indigo-100 flex items-center justify-center shadow-inner relative z-10">
                      <Shield className="w-8 h-8 text-indigo-600 drop-shadow-[0_2.5px_5px_rgba(99,102,241,0.3)] animate-pulse" />
                    </div>
                    {/* Tiny premium shield star indicators */}
                    <span className="absolute -top-1.5 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                    </span>
                  </div>

                  {/* Header */}
                  <p className="text-[10px] font-mono font-black text-rose-500 uppercase tracking-[0.2em] leading-none mb-1.5">
                    Official Escrow Guarantee
                  </p>

                  {/* Principal Text with visual hierarchy */}
                  <span className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight text-center uppercase leading-tight drop-shadow-sm">
                    60-DAY TRIAL
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-[10.5px] text-indigo-700 font-extrabold tracking-widest px-3.5 py-1 rounded-full uppercase mt-2.5 shadow-sm">
                    100% RISK FREE
                  </span>

                  {/* Legal bullet descriptors */}
                  <p className="text-[9.5px] text-slate-500 text-center max-w-[190px] mt-3 font-semibold leading-relaxed">
                    Pre-order deposits fully refundable on request. Cancel instantly before shipment.
                  </p>

                  {/* Astrateq branding stamp on circular axis */}
                  <div className="absolute bottom-5 text-[8px] font-mono font-black text-slate-400 tracking-widest uppercase">
                    Astrateq Gadgets Guard
                  </div>

                </div>
              </div>

              {/* Floating Verified Badge at the bottom center */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900 to-indigo-950 border-2 border-white px-4 py-1.5 rounded-full text-[10px] text-white font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-xl hover:scale-105 transition-transform duration-300">
                <span>🇨🇦</span>
                <span>Verified Canadian Startup</span>
              </div>

            </div>
          </div>

          {/* Close main grid columns layout block */}
        </div>

      </div>
    </section>
  );
}
