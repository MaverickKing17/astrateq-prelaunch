import { Smartphone, Cpu, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect to OBD-II Port',
      desc: 'Plug the ASTRA unit directly into your vehicle’s OBD-II port. High speed connection establishes in seconds with standard plug-and-play simplicity.',
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
    },
    {
      num: '02',
      title: 'Local Edge AI Core Ready',
      desc: 'The integrated neural chip triggers immediately. Everything is processed directly inside the unit at the edge. 100% offline, privacy fully preserved.',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
    },
    {
      num: '03',
      title: 'Real-Time Driver Awareness',
      desc: 'Smart predictive vision grids analyze cabin states and outside conditions. Proactive awareness instantly tracks slips, drowsiness, or ice alerts.',
      icon: <ShieldAlert className="w-5 h-5 text-indigo-600" />,
    },
    {
      num: '04',
      title: 'Family Driving Confidence',
      desc: 'Safe diagnostics are pushed to the companion family app on-demand. Receive daily driving health logs and secure alert summaries anytime.',
      icon: <HeartHandshake className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Background soft gradient orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
            Precision System
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-medium">
            Our Canadian engineering focuses on robust simplicity. Install yourself with zero tools, config, or monthly subscriptions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch max-w-[1100px] mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 text-left relative transition-all duration-300 hover:border-indigo-400 group hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              
              {/* Connector line on larger screens */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_1.5rem)] w-12 h-[1px] bg-gradient-to-r from-indigo-200 to-transparent z-0" />
              )}

              {/* Number and icon badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-extrabold text-slate-200/60 text-4xl leading-none selection:bg-transparent">
                  {step.num}
                </span>
                <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:border-indigo-300 group-hover:bg-indigo-100/50 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text description */}
              <h3 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-indigo-650 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
