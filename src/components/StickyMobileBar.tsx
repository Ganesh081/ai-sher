import React from 'react';
import { Zap } from 'lucide-react';
import { BundleConfig } from '../types';

interface StickyMobileProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileProps> = ({ config, onBuyClick }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden p-3 bg-[#050505]/95 backdrop-blur-xl border-t border-lime-400/40 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <button
        onClick={onBuyClick}
        className="w-full h-12 px-5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm uppercase italic tracking-wider flex items-center justify-between shadow-[0_0_25px_rgba(163,230,53,0.6)] active:scale-95 transition-all"
      >
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 fill-black" />
          <span>BUY NOW & GET ACCESS</span>
        </div>
        <div className="flex items-center gap-2 font-display text-base">
          <span className="text-black/60 line-through text-xs font-normal">₹{config.originalPrice}</span>
          <span className="bg-black text-yellow-300 px-2.5 py-1 rounded text-xs font-black">
            ₹{config.price}
          </span>
        </div>
      </button>
    </div>
  );
};
