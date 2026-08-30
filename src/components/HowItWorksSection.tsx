import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, CreditCard, Download, ArrowRight, CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react';
import { BundleConfig } from '../types';

interface HowItWorksProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ config, onBuyClick }) => {
  const steps = [
    {
      step: '1',
      icon: MousePointerClick,
      title: 'Click Buy Now',
      subtitle: 'TAP ANY GREEN BUTTON',
      description: 'Tap on the "GET INSTANT ACCESS" or "BUY NOW" button to open the instant secure payment checkout.',
      accent: 'border-yellow-400 text-yellow-400 bg-yellow-950/40'
    },
    {
      step: '2',
      icon: CreditCard,
      title: 'Complete Payment',
      subtitle: 'FAST UPI & CARDS (₹29)',
      description: 'Pay just ₹29 securely using Google Pay, PhonePe, Paytm, UPI QR, or any Debit/Credit Card / Netbanking.',
      accent: 'border-lime-400 text-lime-400 bg-lime-950/40'
    },
    {
      step: '3',
      icon: Download,
      title: 'Get Instant Access',
      subtitle: 'LIFETIME GOOGLE DRIVE LINK',
      description: 'You are immediately redirected to the direct Google Drive access portal with all 1300+ videos ready to download.',
      accent: 'border-yellow-400 text-yellow-400 bg-yellow-950/40'
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>3 Simple Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            HOW IT <span className="text-lime-400 text-glow-lime">WORKS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Automated 24/7 digital delivery. Takes less than 45 seconds from payment to downloading your files.
          </p>
        </div>

        {/* Steps Cards Grid with Connecting Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-6 bg-[#0c0c0c] border border-white/5 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-black border-2 border-lime-400/60 flex items-center justify-center font-display font-black text-white text-base shadow-[0_0_10px_rgba(163,230,53,0.3)]">
                    {item.step}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-lime-400 tracking-wider uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-white font-display mt-0.5 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  <span>100% Automated Delivery</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Gateways / Support Trust Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0c0c0c] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-950/80 border border-lime-400/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-lime-400" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                All Major Indian Payment Methods Supported
              </div>
              <div className="text-[11px] text-gray-400">
                Google Pay • PhonePe • Paytm • UPI Apps • Cards • NetBanking
              </div>
            </div>
          </div>

          <button
            onClick={onBuyClick}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs sm:text-sm uppercase italic tracking-wider transition-all shadow-[0_0_20px_rgba(163,230,53,0.35)] shrink-0"
          >
            START NOW FOR ₹29
          </button>
        </div>

      </div>
    </section>
  );
};
