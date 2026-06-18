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
      bgGrad: 'from-[#0B1510] via-[#070D0A] to-[#040605]',
      borderColor: 'border-emerald-500/30 group-hover:border-emerald-400/80',
      badgeStyle: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      labelColor: 'text-emerald-400',
      shadowGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.06)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.22)]',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-400/40',
      tagBg: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20',
      neonGlow: 'bg-gradient-to-b from-emerald-500/40 via-emerald-500/10 to-transparent',
      ambientRef: 'bg-emerald-500/10'
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      badge: "Edge Architecture",
      label: 'Offline-First Philosophy',
      desc: 'Zero-cloud dependence for vital scans.',
      details: 'Read, diagnose, and reset standard OBD-II trouble codes completely offline. Engineered to perform in remote regions and underground garages.',
      statusColor: 'bg-cyan-400',
      statusText: 'No Signal Needed',
      bgGrad: 'from-[#0B1417] via-[#060D0F] to-[#030506]',
      borderColor: 'border-cyan-500/30 group-hover:border-cyan-400/80',
      badgeStyle: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      labelColor: 'text-cyan-400',
      shadowGlow: 'shadow-[0_0_20px_rgba(6,182,212,0.06)] group-hover:shadow-[0_0_35px_rgba(6,182,212,0.22)]',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-400/40',
      tagBg: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20',
      neonGlow: 'bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent',
      ambientRef: 'bg-cyan-500/10'
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      badge: "Zero Subscription",
      label: 'Permanent Ownership Model',
      desc: 'No monthly paywalls or hidden costs planned.',
      details: 'We firmly reject the software-as-a-service subscription paradigm. Buy physical hardware once, control your vehicle health diagnostics forever.',
      statusColor: 'bg-blue-400',
      statusText: '100% Free Updates',
      bgGrad: 'from-[#0A111A] via-[#050A10] to-[#030508]',
      borderColor: 'border-blue-500/30 group-hover:border-blue-400/80',
      badgeStyle: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      labelColor: 'text-blue-400',
      shadowGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.06)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.22)]',
      iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:border-blue-400/40',
      tagBg: 'text-blue-300 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20',
      neonGlow: 'bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent',
      ambientRef: 'bg-blue-500/10'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />,
      badge: "Quality Guarantee",
      label: '3-Year Warranty Goal',
      desc: 'Engineered to withstand harsh Canadian environments.',
      details: 'From brutal winter cold starts to intense summer heat loads. Premium solid-state materials warrant absolute, lasting structural endurance.',
      statusColor: 'bg-indigo-400',
      statusText: 'Canadian Support',
      bgGrad: 'from-[#10101C] via-[#080811] to-[#040408]',
      borderColor: 'border-indigo-500/30 group-hover:border-indigo-400/80',
      badgeStyle: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      labelColor: 'text-indigo-400',
      shadowGlow: 'shadow-[0_0_20px_rgba(99,102,241,0.06)] group-hover:shadow-[0_0_35px_rgba(99,102,241,0.22)]',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-400/40',
      tagBg: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20',
      neonGlow: 'bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent',
      ambientRef: 'bg-indigo-500/10'
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-400" />,
      badge: "Canadian Edge",
      label: 'Proudly Canadian Company',
      desc: 'Based out of beautiful Toronto, ON.',
      details: 'Designed, evaluated, and customer-supported locally. We serve high-standard drivers and maintain absolute alignment with national transit laws.',
      statusColor: 'bg-rose-400',
      statusText: 'Local Transit Rules',
      bgGrad: 'from-[#170E11] via-[#0D0709] to-[#060405]',
      borderColor: 'border-rose-500/30 group-hover:border-rose-400/80',
      badgeStyle: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      labelColor: 'text-rose-400',
      shadowGlow: 'shadow-[0_0_20px_rgba(244,63,94,0.06)] group-hover:shadow-[0_0_35px_rgba(244,63,94,0.22)]',
      iconBg: 'bg-rose-500/10 border-rose-500/20 group-hover:border-rose-400/40',
      tagBg: 'text-rose-300 bg-rose-500/10 border-rose-500/20 group-hover:bg-rose-500/20',
      neonGlow: 'bg-gradient-to-b from-rose-500/40 via-rose-500/10 to-transparent',
      ambientRef: 'bg-rose-500/10'
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
        
        {/* Premium-Style Top Header Banner */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase text-slate-300 tracking-wider">
              Quality Assurance Benchmarks
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight leading-tight">
            Privacy-first vehicle intelligence designed so your driving data stays under your control.
          </h2>
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
              className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl h-full relative transition-all duration-300 ${item.shadowGlow}`}
            >
              {/* Card Background Layers */}
              {/* Behind-Card Ambient Soft Glow Aura */}
              <div className={`absolute -inset-2 rounded-[24px] ${item.ambientRef} blur-xl opacity-35 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`} />

              {/* Glowing Outline Layer */}
              <div className={`absolute -inset-px rounded-2xl ${item.neonGlow} opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              {/* Card True Backdrop Base */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${item.bgGrad} border ${item.borderColor} pointer-events-none transition-all duration-300`} />

              {/* Inner High-tech Hardware Bevel Indicator */}
              <div className="absolute inset-0 bg-transparent rounded-2xl border border-white/[0.02] group-hover:border-white/[0.06] pointer-events-none transition-colors duration-300" />

              {/* Card Content (Relative stacked above) */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full">
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

                  <p className="text-xs text-slate-300 mt-4 leading-relaxed font-normal">
                    {item.details}
                  </p>
                </div>

                {/* Status Indicator Bar */}
                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono flex items-center gap-1.5 ">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor} animate-pulse`} />
                    {item.statusText}
                  </span>
                  <span className={`text-[10px] font-black ${item.tagBg} px-2.5 py-1 rounded transition-colors group-hover:scale-105 duration-300`}>
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

