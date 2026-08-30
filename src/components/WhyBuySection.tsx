import React from 'react';
import { motion } from 'motion/react';
import { Clock, Film, DownloadCloud, Wallet, Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BundleConfig } from '../types';

interface WhyBuyProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const WhyBuySection: React.FC<WhyBuyProps> = ({ config, onBuyClick }) => {
  const pillars = [
    {
      icon: Clock,
      title: 'Save Content Creation Time',
      subtitle: 'HOURS OF EDITING SAVED',
      accent: 'border-lime-400 text-lime-400 bg-lime-950/40',
      description: 'Generating AI videos manually in Midjourney, Runway, and Premiere takes 2-3 hours per reel + expensive monthly subscriptions. With this pack, you get 1300+ ready videos instantly in 1 click.',
      stat: 'Save 300+ Hours',
      highlightColor: 'text-lime-400'
    },
    {
      icon: Film,
      title: 'Large Collection of AI-Generated Videos',
      subtitle: '1300+ TOTAL REELS',
      accent: 'border-yellow-400 text-yellow-400 bg-yellow-950/40',
      description: 'Never run out of content to post! You get 300+ AI Hulk Action Reels plus 1000+ AI Story Reels. Post 2-3 reels daily for an entire year without ever stressing about new ideas.',
      stat: '1 Full Year of Content',
      highlightColor: 'text-yellow-400'
    },
    {
      icon: DownloadCloud,
      title: 'Easy to Download and Use',
      subtitle: '1-CLICK GOOGLE DRIVE',
      accent: 'border-lime-400 text-lime-400 bg-lime-950/40',
      description: 'No complicated passwords, zip extractors, or corrupted files. Download straight from Google Drive directly to your Android, iPhone, tablet, or Windows/Mac computer.',
      stat: '100% Mobile Ready',
      highlightColor: 'text-lime-400'
    },
    {
      icon: Wallet,
      title: 'Affordable One-Time Payment',
      subtitle: 'JUST ₹29 • NO RECURRING FEES',
      accent: 'border-yellow-400 text-yellow-400 bg-yellow-950/40',
      description: 'Cheaper than a single cup of tea or street snack! You get full lifetime commercial usage rights for a microscopic investment of just ₹29 with zero monthly recurring charges.',
      stat: 'Only ₹0.02 Per Reel',
      highlightColor: 'text-yellow-400'
    }
  ];

  const comparisons = [
    { feature: 'Cost for AI Tools (Midjourney, Runway, ElevenLabs)', manual: '₹3,500 / month', bundle: '₹29 One-Time Only' },
    { feature: 'Time needed per reel', manual: '2 to 3 Hours', bundle: '0 Seconds (Instant)' },
    { feature: 'Video Quality', manual: 'Trial/Low Resolution', bundle: '1080p 60FPS Full HD' },
    { feature: 'Watermarks', manual: 'Tool Watermarks', bundle: '100% Watermark-Free' },
    { feature: 'Bonus Story Reels', manual: 'None', bundle: '1000+ Free Reels Included' }
  ];

  return (
    <section className="relative py-16 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Why Choose This Bundle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            WHY BUY <span className="text-yellow-400 text-glow-yellow">THIS PACK?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            The smartest shortcut to creating high-retention viral Instagram theme pages with zero technical hassle.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-6 bg-[#0c0c0c] border border-white/5 hover:border-lime-400/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl border ${pillar.accent} flex items-center justify-center shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-full bg-black/80 border border-white/10 ${pillar.highlightColor}`}>
                      {pillar.stat}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-white font-display mt-0.5 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-lime-400 font-bold">
                  <Check className="w-4 h-4 text-lime-400" />
                  <span>Verified Creator Growth Advantage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table Section */}
        <div className="rounded-2xl bg-[#0c0c0c] border border-white/5 p-5 sm:p-7 overflow-x-auto shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
              MANUAL CREATION VS <span className="text-lime-400 text-glow-lime">THIS BUNDLE</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">See why 10,000+ creators choose this instant pack over manual rendering.</p>
          </div>

          <table className="w-full text-left text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="pb-3 font-semibold">Feature / Metric</th>
                <th className="pb-3 font-semibold text-red-400">Making By Yourself</th>
                <th className="pb-3 font-black text-lime-400">300+ AI Hulk Bundle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 text-gray-300 font-medium">{row.feature}</td>
                  <td className="py-3.5 text-gray-400 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{row.manual}</span>
                  </td>
                  <td className="py-3.5 text-yellow-300 font-bold">
                    <div className="flex items-center gap-1.5 text-lime-400">
                      <Check className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{row.bundle}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Button */}
        <div className="text-center mt-10">
          <button
            onClick={onBuyClick}
            className="px-8 py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm sm:text-base uppercase italic tracking-wider shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            🔥 GET INSTANT ACCESS FOR ONLY ₹29
          </button>
        </div>

      </div>
    </section>
  );
};
