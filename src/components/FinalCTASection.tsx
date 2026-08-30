import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, DownloadCloud, Sparkles, Flame, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { BundleConfig } from '../types';

interface FinalCTAProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ config, onBuyClick }) => {
  return (
    <section className="relative py-20 px-4 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-lime-500/15 via-yellow-400/10 to-lime-500/15 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Urgent Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.2)] mb-6">
          <Flame className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-xs sm:text-sm font-black text-yellow-300 uppercase tracking-wider">
            LAST CHANCE FOR ₹29 LAUNCH PRICE
          </span>
        </div>

        {/* Required Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
          <span className="text-yellow-400 text-glow-yellow">GET 1300+ AI REELS</span> <br className="hidden sm:inline" />
          <span className="text-white">&amp; STORIES FOR </span>
          <span className="text-lime-400 text-glow-lime">ONLY ₹29</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Unlock 300+ AI Hulk Action Reels + 1000+ AI Story Reels Bonus. Lifetime Google Drive access with 100% watermark-free commercial rights.
        </p>

        {/* Big Offer Box Card */}
        <div className="rounded-3xl bg-[#0c0c0c] border border-lime-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(163,230,53,0.2)] max-w-xl mx-auto mb-8">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="text-left">
              <span className="text-xs font-bold text-gray-400 uppercase">Complete Package Value</span>
              <div className="text-sm font-black text-gray-300 line-through">Total Worth ₹2,499</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-yellow-400 text-black uppercase">
                97% Instant Discount
              </span>
              <div className="text-2xl sm:text-3xl font-black text-lime-400 font-display text-glow-lime">
                ₹{config.price} ONLY
              </div>
            </div>
          </div>

          {/* Core Feature Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs text-gray-200 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <span>300+ AI Hulk 4K Reels</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>1000+ AI Story Reels Bonus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <span>No Watermark / 1080p HD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
              <span>Instant Google Drive Access</span>
            </div>
          </div>

          {/* Required Large Final BUY NOW Button */}
          <button
            onClick={onBuyClick}
            className="w-full py-5 px-8 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black text-lg sm:text-2xl uppercase italic tracking-wider shadow-[0_0_40px_rgba(163,230,53,0.5)] hover:shadow-[0_0_60px_rgba(163,230,53,0.7)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
          >
            <Zap className="w-7 h-7 fill-black" />
            <span>BUY NOW FOR ₹29</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Secure Guarantee & Payment Badges */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <Lock className="w-3.5 h-3.5 text-lime-400" />
              <span>256-Bit Encrypted Secure Checkout</span>
              <span className="text-gray-600">•</span>
              <span className="text-lime-400">Instant Access Link</span>
            </div>

            {/* Indian Payment Icons representation */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold mt-1">
              <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-white">Google Pay</span>
              <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-indigo-400">PhonePe</span>
              <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-cyan-400">Paytm UPI</span>
              <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-yellow-400">Cards</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
