import React from 'react';
import { motion } from 'motion/react';
import { Video, Gift, CheckCircle2, Film, Sparkles, Smartphone, Download, Zap, Layers, Volume2 } from 'lucide-react';
import { BundleConfig } from '../types';

interface WhatYouGetProps {
  config: BundleConfig;
  onBuyClick: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetProps> = ({ config, onBuyClick }) => {
  const items = [
    {
      icon: Video,
      title: '300+ AI HULK Reels',
      highlight: 'CORE VIRAL PACK',
      badgeColor: 'border-lime-400/40 text-lime-400 bg-lime-950/60',
      description: 'Super high-energy 4K AI Hulk videos featuring cybernetic transformations, neon city titan battles, ground-shattering action, and unstoppable viral hooks.',
      perks: ['Ultra High Definition 1080x1920 MP4', '60 FPS Ultra-Smooth Motion', 'Pre-synced with Viral High-Energy Drops']
    },
    {
      icon: Gift,
      title: '🎁 Bonus: 1000+ AI Story Reels',
      highlight: 'FREE WORTH ₹1499',
      badgeColor: 'border-yellow-400/50 text-yellow-300 bg-yellow-950/60',
      description: 'Massive library of cinematic mystery, motivational, fantasy, and sci-fi AI storytelling reels tailored for 90%+ average watch time and algorithm boosts.',
      perks: ['Engaging narrative visual loops', 'High retention storytelling frames', 'Zero extra charge included with ₹29 pack']
    },
    {
      icon: Film,
      title: 'Ready-to-Post Videos',
      highlight: 'ZERO EDITING NEEDED',
      badgeColor: 'border-lime-400/40 text-lime-300 bg-white/5',
      description: 'No complicated video editing software required. Download directly to your smartphone or laptop, add your handle or sound, and publish immediately.',
      perks: ['100% Watermark-Free Files', 'Uncompressed crisp audio & video', 'Standard MP4 format works on all phones']
    },
    {
      icon: Smartphone,
      title: 'Perfect for Instagram Reels & YouTube Shorts',
      highlight: 'ALGORITHM OPTIMIZED',
      badgeColor: 'border-yellow-400/40 text-yellow-300 bg-white/5',
      description: 'Strict 9:16 vertical ratio designed to trigger Instagram explore recommendation and YouTube Shorts algorithm feed loops for fast follower growth.',
      perks: ['Instagram Reels & Stories', 'YouTube Shorts & Community Posts', 'Facebook Reels & WhatsApp Statuses']
    },
    {
      icon: Download,
      title: 'Instant Digital Access After Purchase',
      highlight: 'LIFETIME ACCESS',
      badgeColor: 'border-lime-400/40 text-lime-300 bg-white/5',
      description: 'No waiting! Instant automated redirection to Google Drive link right after UPI or Card checkout. Save the files to your personal drive or cloud storage forever.',
      perks: ['Direct Google Drive 1-Click Link', 'Organized categorised folders', 'Lifetime access & future reel updates']
    }
  ];

  return (
    <section className="relative py-16 px-4 bg-[#050505]">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-lime-500/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-lime-400/30 text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            WHAT YOU <span className="text-lime-400 text-glow-lime">GET INSIDE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Everything you need to build, grow, and monetize a viral theme page without showing your face or spending hours editing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden border transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-lime-950/20 via-[#0a0a0a] to-[#0a0a0a] border-lime-400/40 shadow-[0_0_30px_rgba(163,230,53,0.15)] hover:border-lime-400 hover:shadow-[0_0_40px_rgba(163,230,53,0.25)]'
                    : 'bg-[#0e0e0e] border-white/5 hover:border-lime-400/40 hover:bg-[#121212]'
                } ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Subtle Neon Top Highlight */}
                {isFeatured && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner ${
                      index === 1 
                        ? 'bg-yellow-950/60 border-yellow-500/40 text-yellow-300' 
                        : 'bg-lime-950/80 border-lime-400/40 text-lime-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-white mb-2.5 font-display tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-white/5 space-y-2 mt-auto">
                  {item.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA banner inside What You Get */}
        <div className="mt-10 p-6 rounded-2xl bg-[#0a0a0a] border border-lime-400/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_20px_rgba(163,230,53,0.1)]">
          <div className="text-left">
            <h4 className="text-lg font-black text-white uppercase font-display">
              Ready to download all 1300+ AI Reels?
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Get instant Google Drive access link immediately after ₹29 payment.
            </p>
          </div>
          <button
            onClick={onBuyClick}
            className="px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm uppercase italic tracking-wider transition-all shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:scale-105 active:scale-95 shrink-0"
          >
            CLAIM NOW FOR ₹29
          </button>
        </div>

      </div>
    </section>
  );
};
