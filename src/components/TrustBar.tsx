import React from 'react';
import { Shield, Database, Lock, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const items = [
    {
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      badge: "Local Security",
      label: 'With Privacy in Mind',
      desc: 'Future PIPEDA-aligned decentralized architecture.',
      details: 'All diagnostic logs, coordinates, and telemetry are processed locally at the vehicle hardware edge. No external tracking, no cloud footprints.',
      statusColor: 'bg-emerald-400',
      statusText: 'Active Protection',
      bgGrad: 'from-slate-900/95 to-emerald-950/40 hover:to-emerald-900/50',
      borderColor: 'border-emerald-500/25 hover:border-emerald-400/60',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      labelColor: 'text-emerald-400',
      shadowGlow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-400/40',
      tagBg: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20'
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      badge: "Edge Architecture",
      label: 'Offline-First Philosophy',
      desc: 'Zero-cloud dependence for vital scans.',
      details: 'Read, diagnose, and reset standard OBD-II trouble codes completely offline. Engineered to perform in remote regions and underground garages.',
      statusColor: 'bg-cyan-400',
      statusText: 'No Signal Needed',
      bgGrad: 'from-slate-900/95 to-cyan-950/40 hover:to-cyan-900/50',
      borderColor: 'border-cyan-500/25 hover:border-cyan-400/60',
      badgeStyle: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      labelColor: 'text-cyan-400',
      shadowGlow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-400/40',
      tagBg: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20'
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      badge: "Zero Subscription",
      label: 'Permanent Ownership Model',
      desc: 'No monthly paywalls or hidden costs planned.',
      details: 'We firmly reject the software-as-a-service subscription paradigm. Buy physical hardware once, control your vehicle health diagnostics forever.',
      statusColor: 'bg-blue-400',
      statusText: '100% Free Updates',
      bgGrad: 'from-slate-900/95 to-blue-950/40 hover:to-blue-900/50',
      borderColor: 'border-blue-500/25 hover:border-blue-400/60',
      badgeStyle: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      labelColor: 'text-blue-400',
      shadowGlow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]',
      iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:border-blue-400/40',
      tagBg: 'text-blue-300 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />,
      badge: "Quality Guarantee",
      label: '3-Year Warranty Goal',
      desc: 'Engineered to withstand harsh Canadian environments.',
      details: 'From brutal winter cold starts to intense summer heat loads. Premium solid-state materials warrant absolute, lasting structural endurance.',
      statusColor: 'bg-indigo-400',
      statusText: 'Canadian Support',
      bgGrad: 'from-slate-900/95 to-indigo-950/40 hover:to-indigo-900/50',
      borderColor: 'border-indigo-500/25 hover:border-indigo-400/60',
      badgeStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      labelColor: 'text-indigo-400',
      shadowGlow: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-400/40',
      tagBg: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20'
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      badge: "Canadian Edge",
      label: 'Proudly Canadian Company',
      desc: 'Based out of beautiful Vancouver, BC.',
      details: 'Designed, evaluated, and customer-supported locally. We serve high-standard drivers and maintain absolute alignment with national transit laws.',
      statusColor: 'bg-rose-400',
      statusText: 'Local Transit Rules',
      bgGrad: 'from-slate-900/95 to-rose-950/40 hover:to-rose-900/50',
      borderColor: 'border-rose-500/25 hover:border-rose-400/60',
      badgeStyle: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      labelColor: 'text-rose-400',
      shadowGlow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.25)]',
      iconBg: 'bg-rose-500/10 border-rose-500/20 group-hover:border-rose-400/40',
      tagBg: 'text-rose-300 bg-rose-500/10 border-rose-500/20 group-hover:bg-rose-500/20'
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
    <div id="trust-bar" className="w-full bg-[#070a13] border-y border-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative dark grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] select-none bg-gradient-to-b from-[#070a13] via-[#090e1a] to-[#070a13]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Apple/Tesla-Style Top Header Banner */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase text-slate-300 tracking-wider">
              Quality Assurance Benchmarks
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight leading-tight">
            Designed for drivers who demand absolute <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">privacy and physical control.</span>
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed font-medium">
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
              }}
              className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${item.bgGrad} border ${item.borderColor} transition-all duration-300 ${item.shadowGlow} h-full relative`}
            >
              {/* Card Header Info */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-inner`}>
                    {item.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.badgeStyle} px-2.5 py-1 rounded`}>
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className={`text-xs font-black uppercase tracking-wider ${item.labelColor} filter brightness-90`}>
                    {item.label}
                  </h3>
                  <h4 className="text-sm font-extrabold text-white leading-tight mt-1">
                    {item.desc}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

              {/* Status Indicator Bar */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor} animate-pulse`} />
                  {item.statusText}
                </span>
                <span className={`text-[10px] font-black ${item.tagBg} px-2.5 py-1 rounded transition-colors group-hover:scale-105 duration-300`}>
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

