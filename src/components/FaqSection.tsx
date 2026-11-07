import React, { useState } from 'react';
import { FAQS, PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onBuyClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onBuyClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#02050e] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono-code font-bold tracking-wider text-slate-300">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Everything you need to know about the AI Video Creation Course and accessing your materials.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-sky-500/40 shadow-lg shadow-black/40'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Still deciding? At only ₹{COURSE_PRICE}, you get the entire Google Gemini video production blueprint.
          </p>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-heading font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
          >
            <span>ENROLL NOW FOR ₹{COURSE_PRICE}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>

      </div>
    </section>
  );
};
