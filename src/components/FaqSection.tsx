import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';
import { BundleConfig } from '../types';

interface FaqProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ config, onBuyClick }) => {
  const [openId, setOpenId] = useState<string>('f1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  const handleWhatsApp = () => {
    const cleanNum = config.whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent('Hi! I have a question regarding the 300+ AI Hulk Reels Bundle.')}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-16 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
            FREQUENTLY ASKED <span className="text-lime-400 text-glow-lime">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Everything you need to know before grabbing your bundle for just ₹29.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-10">
          {FAQS.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0c0c0c] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-lime-950/60 border border-lime-400/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-lime-400 text-black border-transparent' : 'text-lime-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 24/7 Email Support Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-lime-950/30 via-[#0c0c0c] to-black border border-lime-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-lime-400 text-black flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.4)] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Still have a question?</div>
              <div className="text-xs text-gray-400">Our customer support team is available via email: {config.supportEmail}</div>
            </div>
          </div>

          <a
            href={`mailto:${config.supportEmail}`}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <span>Email Support</span>
          </a>
        </div>

      </div>
    </section>
  );
};
