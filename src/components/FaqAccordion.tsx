import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ShieldAlert, Car, Lock, Settings, RefreshCw, Zap } from 'lucide-react';

interface FAQCard {
  q: string;
  a: string;
  icon: React.ReactNode;
  badge: string;
}

export default function FaqAccordion() {
  const trustFAQs: FAQCard[] = [
    {
      badge: "VEHICLE FIT",
      q: "Will it work with my vehicle?",
      a: "Yes. Astrateq is compatible with over 98.4% of vehicles driven throughout Canada manufactured since 2010. Fits gasoline, diesel, hybrid, and pure electric passenger vehicles universally.",
      icon: <Car className="w-5 h-5 text-indigo-600" />
    },
    {
      badge: "PRICING",
      q: "Does it require a subscription?",
      a: "Absolutely not. We firmly reject the software-as-a-service subscription loop. Buy physical hardware once, unlock diagnostic scanning forever with zero monthly contracts or paywalls.",
      icon: <Lock className="w-5 h-5 text-emerald-600" />
    },
    {
      badge: "INSTALLATION",
      q: "Is installation difficult?",
      a: "No, installation is completely user-managed and takes under 30 seconds. The secure transceiver harness clicks directly into the local OBD-II port below your steering column. Zero wire splicing or tools required.",
      icon: <Settings className="w-5 h-5 text-blue-600" />
    },
    {
      badge: "DATA SECURITY",
      q: "Will my data leave my vehicle?",
      a: "Never. All diagnostic signals, road telemetry, and cabin windshield video files are processed natives inside the physical hardware edge. Astrateq hosts zero outer database cloud storage streams.",
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />
    },
    {
      badge: "REGULATORY",
      q: "Does it affect my warranty?",
      a: "No. Astrateq is a passive diagnostic monitoring device (ICES-003 compliant). It does not write, rewrite commands, or hack your engine ECU. Your vehicle warranty is protected under Canada Consumer Protection.",
      icon: <CheckCircle2 className="w-5 h-5 text-violet-600" />
    },
    {
      badge: "PORTABILITY",
      q: "Can I move it to another vehicle?",
      a: "Yes! Simply unplug the transceiver harness from your steering column and move it to any standard compatible passenger vehicle in under 10 seconds. Your sync files remain secured on the card.",
      icon: <RefreshCw className="w-5 h-5 text-cyan-600" />
    },
    {
      badge: "ARCHITECTURE",
      q: "How does privacy work?",
      a: "By coordinating decentralized edge computing. Visual streams and diagnostic frames are analyzed locally in our offline neural processor, and synchronized on-device. No central servers ever hold your coordinates or clips.",
      icon: <Zap className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FAFBFD] border-y border-slate-200 relative overflow-hidden">
      {/* Structural background highlights mimicking high-class security terminals */}
      <div className="absolute top-1/4 right-[5%] w-[45%] h-[45%] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200/80 px-4 py-2 rounded-full text-indigo-950 text-xs font-black uppercase tracking-widest mb-4 font-mono shadow-xs">
            <HelpCircle className="w-4 h-4 text-indigo-650 animate-pulse" />
            Objection Removal & Trust Center
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-4">
            Clear Answers for High-Class Drivers
          </h2>
          
          <p className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to know about our data sovereign hardware suite. Transparent, concise, and easy to scan.
          </p>
        </div>

        {/* 2-Column Bento grid representation of trust cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {trustFAQs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border-2 border-slate-105 rounded-2.5xl p-6 sm:p-8 hover:border-indigo-400 group transition-all duration-300 shadow-sm hover:shadow-indigo-600/[0.02] flex flex-col justify-between text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[9px] font-mono font-black text-slate-400 tracking-wider hover:text-indigo-600 uppercase">
                    {faq.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-105 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-indigo-755 transition-colors">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
