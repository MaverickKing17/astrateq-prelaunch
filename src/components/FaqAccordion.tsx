import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Car, 
  Lock, 
  Settings, 
  RefreshCw, 
  Zap, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  badge: string;
  q: string;
  a: string;
  icon: React.ReactNode;
  category: 'vehicle' | 'pricing' | 'installation' | 'privacy';
}

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>("vehicle-fit");

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'vehicle', label: 'Vehicle Fit' },
    { id: 'privacy', label: 'Data & Privacy' },
    { id: 'installation', label: 'Installation' },
    { id: 'pricing', label: 'Pricing & Value' }
  ];

  const faqs: FAQItem[] = [
    {
      id: "vehicle-fit",
      category: "vehicle",
      badge: "VEHICLE FIT",
      q: "Will it work with my vehicle?",
      a: "Yes. Astrateq is compatible with over 98.4% of vehicles driven throughout Canada manufactured since 2010. Fits gasoline, diesel, hybrid, and pure electric passenger vehicles universally.",
      icon: <Car className="w-4 h-4 text-emerald-500" />
    },
    {
      id: "subscription",
      category: "pricing",
      badge: "SUBSCRIPTION CHARGES",
      q: "Does it require a monthly subscription?",
      a: "Absolutely not. We firmly reject the software-as-a-service subscription loop. Buy physical hardware once, unlock diagnostic scanning forever with zero monthly contracts, hidden transfer fees, or subscription paywalls.",
      icon: <Lock className="w-4 h-4 text-indigo-500" />
    },
    {
      id: "install-prep",
      category: "installation",
      badge: "PLUG & PLAY",
      q: "Is the installation process difficult?",
      a: "No, installation is completely user-managed and takes under 30 seconds. The secure transceiver harness clicks directly into the local OBD-II port below your steering column. Zero wire splicing, battery drains, or tools are required.",
      icon: <Settings className="w-4 h-4 text-blue-500" />
    },
    {
      id: "privacy-sovereign",
      category: "privacy",
      badge: "DATA SOVEREIGNTY",
      q: "Will my driving details leave my car?",
      a: "Never. All diagnostic signals, road telemetry, and cabin vehicle files are processed natively inside our local physical hardware edge. Astrateq does not upload, store, or transmit your records to external cloud databases.",
      icon: <ShieldAlert className="w-4 h-4 text-rose-500" />
    },
    {
      id: "regulatory-warranty",
      category: "installation",
      badge: "REGULATORY SAFETY",
      q: "Does utilizing Astrateq affect my manufacturer warranty?",
      a: "No. Astrateq is a passive diagnostic monitoring tool compliant with ICES-003 safety benchmarks. Because it doesn't execute harmful rewrite commands or modify ECU firmware, your vehicle warranty remains fully protected.",
      icon: <CheckCircle2 className="w-4 h-4 text-violet-500" />
    },
    {
      id: "portability-swap",
      category: "vehicle",
      badge: "SWAPPABLE HARNESS",
      q: "Can I migrate the device to a different vehicle?",
      a: "Yes! Simply unplug the transceiver from your steering column and plug it into any other supported passenger vehicle. All calibrated metrics profile sets swap instantly with zero recalibration downtime.",
      icon: <RefreshCw className="w-4 h-4 text-cyan-500" />
    },
    {
      id: "architecture-edge",
      category: "privacy",
      badge: "EDGE INTELLIGENCE",
      q: "How is zero-telemetry achieved technically?",
      a: "We deploy decentralized edge technology. Video signals and safety metrics are calculated within an integrated offline neural processor on the unit itself. No cloud server holds your private geolocation trails.",
      icon: <Zap className="w-4 h-4 text-amber-500" />
    }
  ];

  // Filter FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            faq.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#F9FAFC] via-white to-[#F9FAFC] border-y border-slate-200 relative overflow-hidden">
      {/* Decorative premium radial vector lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-slate-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-indigo-750 text-xs font-bold uppercase tracking-wider mb-4 font-mono shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-650" />
            <span>Interactive Trust Center</span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Clear Answers for High-Class Drivers
          </h2>
          
          <p className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to know about our data sovereign hardware suite. Pure transparency and zero hidden terms.
          </p>

          {/* Interactive Live Search Input */}
          <div className="mt-8 max-w-md mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search specifications, privacy laws, fit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-xs transition-all font-medium text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-450 hover:text-slate-700 font-mono"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 max-w-3xl mx-auto bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-xs">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  // Auto expand first match when switching category
                  const matches = faqs.filter(f => category.id === 'all' || f.category === category.id);
                  if (matches.length > 0) {
                    setExpandedId(matches[0].id);
                  }
                }}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFaqTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-650 rounded-xl shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Layout: Accordion (Left) + Premium Trust Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Side: Modern Interactive Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isExpanded = expandedId === faq.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      key={faq.id}
                      className={`border bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                        isExpanded 
                          ? 'border-indigo-500/50 shadow-md shadow-indigo-500/[0.04]' 
                          : 'border-slate-200 hover:border-slate-350 hover:shadow-xs'
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full px-5 py-4.5 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl border transition-colors ${
                            isExpanded 
                              ? 'bg-indigo-50 border-indigo-150' 
                              : 'bg-slate-50 border-slate-100 group-hover:bg-slate-100'
                          }`}>
                            {faq.icon}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-extrabold text-indigo-600 tracking-wider block mb-1">
                              {faq.badge}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-850 tracking-tight">
                              {faq.q}
                            </h4>
                          </div>
                        </div>

                        <div className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-185 bg-indigo-50 border-indigo-200 text-indigo-600' : 'text-slate-450'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Accordion Content Panel */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ height: { duration: 0.25, ease: "easeInOut" }, opacity: { duration: 0.15 } }}
                          >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 text-slate-650 text-xs sm:text-sm leading-relaxed font-medium">
                              <div className="pl-0 sm:pl-10 text-slate-600 leading-relaxed font-semibold">
                                {faq.a}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-50 border border-slate-200 text-center py-12 px-6 rounded-2xl"
                >
                  <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <p className="text-sm font-bold text-slate-800">No matching questions found.</p>
                  <p className="text-xs text-slate-500 mt-1">Try spelling your query differently or resetting your category filters.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="mt-4 px-4 py-2 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold tracking-wide transition-all"
                  >
                    Reset Filters & Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: High-Class Trust & Direct Support Card */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl relative overflow-hidden sticky top-6">
              {/* Corner decor glows */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-555/30 px-3 py-1 rounded-full text-emerald-400 text-[10px] font-bold tracking-widest uppercase font-mono">
                    🛡️ ACTIVE COHORT ASSURANCE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-4 leading-tight">
                    Premium Safety Standards Verified
                  </h3>
                  <p className="text-xs text-slate-350 leading-relaxed font-semibold mt-2">
                    Astrateq products are manufactured using physical privacy safeguards engineered specifically for Canadian environments.
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-100">Passthrough Read-Only Device</p>
                      <p className="text-[11px] text-slate-400">Never writes system logs or commands to state computers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-100">Anti-Static Safety Coils</p>
                      <p className="text-[11px] text-slate-400">Resistant to temperature flares (-40°C to 85°C).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-100">Zero Subscriber Lockdowns</p>
                      <p className="text-[11px] text-slate-400">All analytics tools are offline, on-card, and open structure.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4.5 space-y-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-indigo-350" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Have a specific request?</p>
                      <p className="text-[10px] text-slate-400">Our engineering hub is here to assist.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('reserve');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-555 hover:from-emerald-600 hover:to-teal-650 text-slate-950 font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Contact Team</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
