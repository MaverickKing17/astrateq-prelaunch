import React from 'react';
import { Shield, Database, Lock, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const items = [
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      badge: "Local Security",
      label: 'With Privacy in Mind',
      desc: 'Future PIPEDA-aligned decentralized architecture.',
      details: 'All diagnostic logs, coordinates, and telemetry are processed locally at the vehicle hardware edge. No external tracking, no cloud footprints.',
      statusColor: 'bg-emerald-400',
      statusText: 'Active Protection'
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-600" />,
      badge: "Edge Architecture",
      label: 'Offline-First Philosophy',
      desc: 'Zero-cloud dependence for vital scans.',
      details: 'Read, diagnose, and reset standard OBD-II trouble codes completely offline. Engineered to perform in remote regions and underground garages.',
      statusColor: 'bg-cyan-400',
      statusText: 'No Signal Needed'
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      badge: "Zero Subscription",
      label: 'Permanent Ownership Model',
      desc: 'No monthly paywalls or hidden costs planned.',
      details: 'We firmly reject the software-as-a-service subscription paradigm. Buy physical hardware once, control your vehicle health diagnostics forever.',
      statusColor: 'bg-blue-400',
      statusText: '100% Free Updates'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-600" />,
      badge: "Quality Guarantee",
      label: '3-Year Warranty Goal',
      desc: 'Engineered to withstand harsh Canadian environments.',
      details: 'From brutal winter cold starts to intense summer heat loads. Premium solid-state materials warrant absolute, lasting structural endurance.',
      statusColor: 'bg-indigo-400',
      statusText: 'Canadian Industrial Care'
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-600" />,
      badge: "Canadian Edge",
      label: 'Proudly Canadian Company',
      desc: 'Based out of beautiful Vancouver, BC.',
      details: 'Designed, evaluated, and customer-supported locally. We serve high-standard drivers and maintain absolute alignment with national transit laws.',
      statusColor: 'bg-rose-400',
      statusText: 'Local Transit Standard'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 18,
      },
    },
  };

  return (
    <div id="trust-bar" className="w-full bg-slate-50/50 border-y border-slate-200/60 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative clean background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Apple/Tesla-Style Top Header Banner */}
        <div className="text-center md:text-left mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200/80 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[10px] sm:text-xs font-black uppercase text-slate-700 tracking-wider">
              Quality Assurance Benchmarks
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight leading-tight">
            Designed for drivers who demand absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-950">privacy and physical control.</span>
          </h2>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed font-medium">
            Astrateq is built on physical sovereignty, offline edge computation, and industrial durability. Read how we are setting a premium new standard for Canadian automotive technology.
          </p>
        </div>

        {/* Elegant Bento-style Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
              }}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/60 transition-colors duration-300 hover:border-slate-300 h-full relative"
            >
              {/* Card Header Info */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center group-hover:bg-white group-hover:scale-110 group-hover:border-slate-200 transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 hover:text-slate-500 transition-colors">
                    {item.label}
                  </h3>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-tight group-hover:text-indigo-950 transition-colors">
                    {item.desc}
                  </h4>
                </div>

                <p className="text-xs text-slate-500 mt-4 leading-relaxed font-medium">
                  {item.details}
                </p>
              </div>

              {/* Status Indicator Bar */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor} animate-pulse`} />
                  {item.statusText}
                </span>
                <span className="text-[10px] font-black text-indigo-400 bg-indigo-50/50 hover:bg-indigo-50 px-2 py-0.5 rounded transition-colors group-hover:scale-105 duration-300">
                  VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

