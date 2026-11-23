import React from 'react';
import { PAYMENT_URL, COURSE_PRICE, ORIGINAL_PRICE, DISCOUNT_PERCENT } from '../data/courseData';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

interface StickyMobileBarProps {
  onBuyClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onBuyClick }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#030611]/95 backdrop-blur-xl border-t border-amber-500/30 p-3 shadow-2xl shadow-black">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-400">
              SPECIAL PRICE
            </span>
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
              {DISCOUNT_PERCENT}% OFF
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-heading font-black text-white">
              ₹{COURSE_PRICE}
            </span>
            <span className="text-xs text-slate-500 line-through">
              ₹{ORIGINAL_PRICE}
            </span>
          </div>
        </div>

        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onBuyClick}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-extrabold text-sm tracking-wide text-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-lg shadow-amber-500/30 active:scale-95 transition-all"
        >
          <Zap className="w-4 h-4 fill-black" />
          <span>BUY NOW – ₹{COURSE_PRICE}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
