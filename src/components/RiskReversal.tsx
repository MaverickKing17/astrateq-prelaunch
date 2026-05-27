import { Shield, Lock, Award, HeartHandshake, PhoneCall } from 'lucide-react';

export default function RiskReversal() {
  const credentials = [
    {
      title: '60-Day Risk-Free Trial Guarantee Goal',
      desc: 'Test ASTRA inside your vehicle completely risk-free for 60 days once shipped. If you aren’t 100% satisfied with the safety alerts, return for full deposit restitution.',
      icon: <Award className="w-5 h-5 text-brand-cyan" />,
    },
    {
      title: 'Our Privacy-First Architecture Promise',
      desc: 'No personal tracks, logs, video loops, or travel diagnostics are loaded, cached, or transferred online. Your information is locked strictly inside local sandboxes.',
      icon: <Lock className="w-5 h-5 text-brand-cyan" />,
    },
    {
      title: 'Local Support Team Commitment',
      desc: 'Enjoy rapid, non-outsourced support from dedicated hardware engineering desks in Canada. We provide responsive troubleshooting directly relative to your specific vehicle model.',
      icon: <PhoneCall className="w-5 h-5 text-brand-cyan" />,
    },
    {
      title: 'Robust 3-Year Warranty Objective',
      desc: 'Built to exceed standard consumer grading. We guarantee high-impact resistance, extreme temperature endurance, and seamless component operation for years.',
      icon: <Shield className="w-5 h-5 text-brand-cyan" />,
    },
  ];

  return (
    <section id="trust-guarantees" className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section layout containing details and big visual guarantee seal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Block: Direct high-integrity declarations */}
          <div className="lg:col-span-8 text-left space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-indigo-400 font-bold block mb-3">
                Absolute Reassurance
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                An Automotive Safety Partnership Built on Real Trust
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl font-semibold">
                Building a hardware startup represents major responsibility. We hold ourselves to rigorous development standpoints, avoiding artificial jargon or deceptive prelaunch promises. Here is what we permanently commit to:
              </p>
            </div>

            {/* List credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-800/40 border border-white/10 hover:border-indigo-500/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/5 border border-brand-cyan/10 flex items-center justify-center shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white leading-snug">
                      {cred.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-normal mt-1 font-medium">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Premium Seal vector Graphic design */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-square bg-slate-900/40 border border-indigo-500/25 rounded-full flex flex-col items-center justify-center shadow-2xl p-6 group hover:border-indigo-500 transition-all duration-300">
              
              {/* Spinning borders */}
              <div className="absolute inset-2 border border-dashed border-indigo-500/10 rounded-full animate-spin [animation-duration:40s] group-hover:border-indigo-500/30" />
              <div className="absolute inset-5 border border-white/5 rounded-full" />

              <Shield className="w-12 h-12 text-cyan-400 mb-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]" />
              <span className="text-xs font-display font-black text-white tracking-wider text-center uppercase">
                60-DAY TRIAL
              </span>
              <span className="text-[10px] text-cyan-400 font-bold tracking-widest mt-1 uppercase text-center">
                100% Risk Free
              </span>
              <p className="text-[9px] text-gray-400 text-center max-w-[150px] mt-2 font-medium leading-normal">
                Pre-order deposits fully refundable on request. Cancel anytime before Summer shipping.
              </p>

              <div className="absolute -bottom-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-[9px] text-indigo-400 font-bold tracking-wider uppercase">
                🇨🇦 Verified Canadian Startup
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
