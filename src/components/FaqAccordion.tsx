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
      category: 'Pre-Launch',
      q: 'What does pre-launch validation mean?',
      a: 'Astrateq is currently conducting a pre-launch validation and demand feasibility study. This phase enables us to gauge Canadian market interest, compile vehicle configuration portfolios, and lock manufacturing queues prior to final hardware roll-out.'
    },
    {
      category: 'Shipping',
      q: 'Is Astrateq Gadgets currently shipping?',
      a: 'No. We are not shipping hardware immediately. All registrations represent a priority reservation queue position for our upcoming initial production run, securing your priority spot once global assemblies are dispatched.'
    },
    {
      category: 'Billing',
      q: 'Will my card be charged?',
      a: 'No. Since we are operating in a validation trial phase, completing a simulation reservation logs your interest in our registry using Stripe’s secure testing parameters. Zero real monetary charges are processed.'
    },
    {
      category: 'Subscriptions',
      q: 'Will there be a monthly subscription?',
      a: 'No. All core driving safety logic, offline AI diagnostic engines, and companion app dashboards are covered by our permanent ownership model. There are no mandatory monthly subscriptions or paywalled safety alerts.'
    },
    {
      category: 'Data Privacy',
      q: 'Where is my vehicle data stored?',
      a: 'All diagnostic signals and visual sensor streams are processed natively on our custom edge AI microprocessor inside the DriveGuard unit. Your tracking logs and clips are stored on the local physical secure-element and are never transmitted to outside cloud servers.'
    },
    {
      category: 'Installation',
      q: 'Can I install the system myself?',
      a: 'Yes, installation is entirely user-managed and takes under 30 seconds. The hardware transceiver simply plugs directly into the standard OBD-II diagnostic port underneath your steering column, requiring zero tooling or splicing.'
    },
    {
      category: 'Compatibility',
      q: 'Which vehicles will be supported?',
      a: 'Virtually all standard gasoline, diesel, hybrid, and pure electric passenger vehicles manufactured since 2010 are compatible. You can check your specific vehicle shape instantly utilizing our Vehicle Compatibility Preview on this page.'
    },
    {
      category: 'Next Steps',
      q: 'What happens after I join Early Access?',
      a: 'After registering your secure simulated reservation, your placement is locked and a priority technical configuration digest is immediately compiled. We will keep you updated via transparent email logs on engineering milestones, production status, and launch timelines.'
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
