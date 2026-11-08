import React from 'react';
import { PAYMENT_URL, COURSE_PRICE, ORIGINAL_PRICE, DISCOUNT_PERCENT } from '../data/courseData';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Clock, 
  Flame, 
  DownloadCloud, 
  ArrowRight,
  CreditCard
} from 'lucide-react';

interface PricingSectionProps {
  onBuyClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBuyClick }) => {
  const features = [
    '50 Ready-Made Sheru Reels (High-Quality MP4)',
    'Complete Step-by-Step Training PDF Guide',
    'Copy-Paste AI Prompts (Google Gemini + ChatGPT)',
    'Full Video Tutorial (From Zero to Viral AI Reel)',
    'Bonus Scripts, Story Ideas & Character Prompts',
    'Mobile (CapCut/VN) & PC Video Editing Workflows',
    'Viral Reel Ideas & Instagram Growth Playbook',
    'Instant Digital Download & Lifetime Access'
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#02050f] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/15 via-sky-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cinematic-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono-code font-bold tracking-wider text-amber-400">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>UNBEATABLE VALUE OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-glow-gold">
              Pricing
            </span>
          </h2>
          <p className="text-base text-slate-300">
            One tiny investment. Lifetime skill that can generate endless viral content.
          </p>
        </div>

        {/* Pricing Master Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-slate-900/95 via-slate-950 to-black border-2 border-amber-400/50 shadow-2xl shadow-black ring-1 ring-sky-500/30 overflow-hidden">
          
          {/* Top Corner Ribbon */}
          <div className="absolute -top-1 right-8">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-heading font-black text-xs uppercase tracking-wider py-1.5 px-4 rounded-b-xl shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>{DISCOUNT_PERCENT}% OFF LAUNCH</span>
            </div>
          </div>

          <div className="space-y-8">
            
            {/* Header info */}
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-sky-400">
                FULL DIGITAL ACCESS
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white">
                AI Video Creation Course
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                Master cinematic AI videos with Google Gemini, edit like a pro, and publish viral Reels & Shorts.
              </p>
            </div>

            {/* Price Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-sky-950/40 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="text-xs font-mono-code text-slate-400 uppercase font-semibold">
                  SPECIAL INTRODUCTORY PRICE
                </div>
                <div className="flex items-baseline gap-3 mt-1 justify-center sm:justify-start">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-amber-400 text-glow-gold">
                    Only ₹{COURSE_PRICE}
                  </span>
                  <span className="text-xl text-slate-500 line-through">
                    ₹{ORIGINAL_PRICE}
                  </span>
                </div>
                <p className="text-xs text-sky-400 mt-1">
                  Pay once, own forever · No monthly subscriptions
                </p>
              </div>

              {/* Payment Trust Badges */}
              <div className="flex flex-col items-center sm:items-end gap-2 text-xs text-slate-300">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                  <DownloadCloud className="w-4 h-4" />
                  <span>Instant Digital Course Access</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Cashfree 256-Bit SSL Encrypted</span>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono-code font-bold tracking-wider text-slate-400 uppercase">
                EVERYTHING INCLUDED IN THIS ₹{COURSE_PRICE} COURSE:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-amber-400" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Large Primary Action Button */}
            <div className="pt-4 space-y-4">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onBuyClick}
                className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-8 rounded-2xl font-heading font-black text-xl sm:text-2xl text-black tracking-wide bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all animate-pulse-cta"
              >
                <Zap className="w-6 h-6 text-black fill-black" />
                <span>GET INSTANT ACCESS</span>
                <ArrowRight className="w-6 h-6 text-black" />
              </a>

              {/* Cashfree Payment Methods Icons & Assurance */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span className="font-medium text-slate-300">
                    Secured by Cashfree Payments
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono-code text-[11px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">UPI</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">GPay</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">PhonePe</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Paytm</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Cards</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
