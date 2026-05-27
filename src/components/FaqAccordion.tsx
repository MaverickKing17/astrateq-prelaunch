import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      category: 'Compatibility',
      q: 'Will ASTRA fit into my older vehicle model?',
      a: 'ASTRA works seamlessly with nearly all 2010 or newer vehicles driven in Canada, using standard OBD-II terminal ports. If your car is petrol, hybrid, or pure EV, the diagnostic connector establishes full connection in under 30 seconds.'
    },
    {
      category: 'Installation',
      q: 'Do I need any specialized tools or mechanic support to set it up?',
      a: 'Absolutely not. Installation is completely plug-and-play. You simply find your OBD-II port (typically located right beneath the steering wheel dashboard), plug the ASTRA unit in, and follow the simple on-screen guidance on your mobile app.'
    },
    {
      category: 'Subscriptions',
      q: 'Is there really no monthly subscription cost planned?',
      a: 'Yes, that is correct. All core driving safety alerts, device telemetry analysis, offline neural processing, and standard mobile companion updates are included in your one-time physical purchase price. We do not lock core vehicle safety behind paywalls.'
    },
    {
      category: 'Privacy',
      q: 'Where does my cabin and road visual footage go?',
      a: 'All processing happens locally on our custom integrated neural edge-computing processor inside the DriveGuard unit. Video streams and cabin snapshots are computed immediately and never uploaded, cached, or distributed to cloud servers. No data leaves your car.'
    },
    {
      category: 'Updates',
      q: 'How are the AI neural models updated over time?',
      a: 'AI model parameters are incrementally refined by our engineering team to better catalog dark snowy lanes, Canadian icy highway patterns, and heavy fog states. These are delivered directly through secure, voluntary firmware syncs inside the companion mobile app.'
    },
    {
      category: 'Support',
      q: 'How do I contact your customer support team?',
      a: 'Our responsive team operates directly out of Vancouver. You can access chat terminals inside your ASTRA companion application, submit questions on our website, or email support@astrateq.com for quick local engineering advice.'
    },
    {
      category: 'Mobile Apps',
      q: 'Does it support multiple family members tracking the same vehicle?',
      a: 'Yes, the ASTRA companion app supports multi-profile setups. You can easily share dashboard metrics, daily safety scores, and diagnostic health logs across your household without extra licensing charges.'
    },
    {
      category: 'Timeline',
      q: 'When does the Summer 2026 shipping period begin?',
      a: 'Production validation runs are currently on schedule. First batch shipping for founding members starts inside the third quarter of 2026. Spot allocation is strictly prioritized based on order deposit queues.'
    }
  ];

  const toggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center animate-fade-in">
        
        {/* Section header */}
        <div className="max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-indigo-650 font-bold block mb-3">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-semibold">
            Everything you need to know about our automotive safety hardware, shipping schedules, and absolute offline privacy guarantees.
          </p>
        </div>

        {/* Accordions layout */}
        <div className="space-y-3 max-w-3xl mx-auto text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-350 shadow-sm hover:border-indigo-400"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500/25"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase font-bold text-indigo-650 bg-indigo-50 border border-indigo-150 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {/* Animated content sliding */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[220px] pb-5 px-6 border-t border-slate-100 pt-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
