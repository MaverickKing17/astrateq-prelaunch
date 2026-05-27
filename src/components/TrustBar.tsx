import { Shield, Database, Lock, CheckCircle2, MapPin } from 'lucide-react';

export default function TrustBar() {
  const items = [
    {
      icon: <Lock className="w-4 h-4 text-indigo-650" />,
      label: 'Designed with Privacy in Mind',
      desc: 'Future PIPEDA-aligned architecture.',
    },
    {
      icon: <Database className="w-4 h-4 text-indigo-650" />,
      label: 'Local Canadian Data Philosophy',
      desc: 'Offline first. Edge computing focus.',
    },
    {
      icon: <Shield className="w-4 h-4 text-indigo-650" />,
      label: 'No Subscriptions Planned',
      desc: 'Standard ownership support model.',
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-indigo-650" />,
      label: '3-Year Warranty Goal',
      desc: 'Engineered for absolute durability.',
    },
    {
      icon: <MapPin className="w-4 h-4 text-indigo-650" />,
      label: 'Proudly Canadian Company',
      desc: 'Based out of beautiful Vancouver.',
    },
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 gap-y-8 items-stretch md:divide-x md:divide-slate-100">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start text-center md:text-left px-4 group transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/60 flex items-center justify-center mb-3 group-hover:border-indigo-200 group-hover:bg-indigo-100/50 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-wide block leading-snug">
                {item.label}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-normal font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
