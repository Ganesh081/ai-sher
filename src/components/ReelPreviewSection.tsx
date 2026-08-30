import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Flame, Heart, Share2, MessageCircle, Music2, Eye, Sparkles, Zap, Check } from 'lucide-react';
import { REEL_SAMPLES } from '../data/landingData';
import { ReelSample } from '../types';

interface ReelPreviewProps {
  onBuyClick: () => void;
}

export const ReelPreviewSection: React.FC<ReelPreviewProps> = ({ onBuyClick }) => {
  const [activeReelIndex, setActiveReelIndex] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeReel: ReelSample = REEL_SAMPLES[activeReelIndex];

  return (
    <section className="relative py-16 px-4 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-yellow-400/40 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Reel Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            VIRAL QUALITY <span className="text-yellow-400 text-glow-yellow">PREVIEWS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Tap the cards below to see preview themes. High visual retention engineered for millions of views.
          </p>
        </div>

        {/* Interactive Reel Viewer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vertical Smartphone Reel Simulation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] aspect-[9/16] rounded-[36px] bg-black border-4 border-lime-400/50 shadow-[0_0_50px_rgba(163,230,53,0.3)] overflow-hidden flex flex-col justify-between p-4 group">
              
              {/* Dynamic Animated Reel Canvas Backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeReel.gradient} transition-all duration-700`} />
              <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

              {/* Simulated Dynamic Titan Motion Visual */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                  key={activeReel.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col items-center justify-center text-center p-4"
                >
                  {/* Glowing Core Visual */}
                  <div className="relative w-36 h-36 rounded-full bg-lime-500/20 border-2 border-lime-400 flex items-center justify-center shadow-[0_0_30px_#a3e635]">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-lime-500 via-lime-400 to-yellow-300 flex items-center justify-center shadow-lg"
                    >
                      <Zap className="w-10 h-10 text-black fill-black" />
                    </motion.div>

                    {/* Animated Energy Rings */}
                    <div className="absolute inset-0 rounded-full border border-lime-400/40 animate-ping" />
                  </div>

                  <span className="mt-4 px-3 py-1 rounded-full bg-black/90 border border-yellow-400 text-yellow-300 text-xs font-black tracking-wider uppercase shadow-md">
                    {activeReel.title}
                  </span>
                </motion.div>
              </div>

              {/* Reel Top Bar (Header) */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-lime-400 text-black font-black text-xs flex items-center justify-center">
                    H
                  </div>
                  <span className="text-xs font-bold text-white drop-shadow">viral_hulk_official</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-black/60 border border-white/20 text-[10px] text-gray-300 font-semibold backdrop-blur-sm">
                  1080p • 60FPS
                </span>
              </div>

              {/* Reel Right Action Sidebar (Instagram Simulation) */}
              <div className="relative z-10 self-end flex flex-col items-center gap-4 text-white">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                  </div>
                  <span className="text-[10px] font-bold mt-0.5">{activeReel.likes}</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold mt-0.5">3.4K</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold mt-0.5">89K</span>
                </div>

                {/* Vinyl Spin Record */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-950 border-2 border-white/40 flex items-center justify-center shadow"
                >
                  <div className="w-3 h-3 rounded-full bg-lime-400" />
                </motion.div>
              </div>

              {/* Reel Bottom Caption & Audio */}
              <div className="relative z-10 space-y-2 bg-gradient-to-t from-black via-black/80 to-transparent p-2 -m-2 rounded-b-[32px]">
                <div className="flex items-center gap-1.5 text-xs text-yellow-300 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{activeReel.views} Views • High Retention Loop</span>
                </div>
                <p className="text-xs text-gray-200 line-clamp-2 leading-tight">
                  {activeReel.description} #hulk #aiart #viralshorts #trending
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-300 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm truncate">
                  <Music2 className="w-3 h-3 text-lime-400 shrink-0" />
                  <span className="truncate">{activeReel.audioName}</span>
                </div>
              </div>

              {/* Phone Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-full z-20" />
            </div>
          </div>

          {/* Right Column: Interactive Selector List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-left mb-2">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                Select A Theme To Preview:
              </h3>
              <p className="text-xs text-gray-400">
                Each reel is pre-rendered in high definition with seamless looping frames.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {REEL_SAMPLES.map((sample, idx) => {
                const isSelected = activeReelIndex === idx;

                return (
                  <div
                    key={sample.id}
                    onClick={() => setActiveReelIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 text-left relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-lime-950/40 to-[#0e0e0e] border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.25)] scale-[1.02]'
                        : 'bg-[#0c0c0c] border-white/5 hover:border-lime-400/40 hover:bg-[#121212]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded bg-black/80 border border-white/10 text-lime-400">
                        {sample.badge}
                      </span>
                      <span className="text-xs font-bold text-yellow-400 flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-yellow-400" />
                        {sample.views}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white font-display mb-1">
                      {sample.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-3">
                      {sample.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-lime-400" />
                        {sample.category}
                      </span>
                      <span className={`text-[11px] font-bold ${isSelected ? 'text-lime-400' : 'text-gray-500'}`}>
                        {isSelected ? '● Active Preview' : 'Click to View'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Reel Features Card */}
            <div className="p-4 rounded-2xl bg-[#0c0c0c] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  Includes Ready Viral Captions + Top 50 Hashtags
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Save over 100+ hours of rendering and prompt engineering time.
                </div>
              </div>
              <button
                onClick={onBuyClick}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs uppercase italic tracking-wider transition-all shadow-[0_0_15px_rgba(163,230,53,0.35)] shrink-0"
              >
                GET ALL 1300+ REELS FOR ₹29
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
