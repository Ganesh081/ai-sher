import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, Sparkles, Flame, ShieldCheck, DownloadCloud, Play, ArrowRight, Star, Upload, Image as ImageIcon, X } from 'lucide-react';
import { BundleBox3D } from './BundleBox3D';
import { BundleConfig } from '../types';

interface HeroSectionProps {
  config: BundleConfig;
  onBuyClick: () => void;
  onImageUpdate?: (url: string) => void;
  onHeaderImageUpdate?: (url: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onBuyClick, onImageUpdate, onHeaderImageUpdate }) => {
  const headerFileInputRef = useRef<HTMLInputElement | null>(null);

  const handleHeaderImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onHeaderImageUpdate) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onHeaderImageUpdate(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="relative pt-6 pb-12 sm:pb-16 px-4 overflow-hidden bg-gradient-to-br from-black via-black to-lime-900/10">
      {/* Dynamic Background Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-b from-lime-500/15 via-emerald-900/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-yellow-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Main Grid: Copy on Left/Top, 3D Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Sales Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Hidden Input for Headline Image Upload */}
            <input
              ref={headerFileInputRef}
              type="file"
              accept="image/*"
              onChange={handleHeaderImageUpload}
              className="hidden"
            />

            {config.headerImageUrl ? (
              /* Custom Uploaded Headline Banner Image */
              <div className="relative w-full max-w-lg">
                <div className="rounded-2xl overflow-hidden border border-lime-400/60 shadow-[0_0_35px_rgba(163,230,53,0.35)] bg-black">
                  <img
                    src={config.headerImageUrl}
                    alt="AI Hulk Reels Bundle"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ) : (
              <>
                {/* Top Trending Opportunity Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 bg-yellow-400 text-black text-[11px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                >
                  <span>Massive Opportunity</span>
                </motion.div>

                {/* Main Vibrant Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.88] font-black uppercase italic tracking-tighter text-white font-display"
                >
                  🔥 300+ AI <br />
                  <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                    HULK REELS
                  </span> <br />
                  BUNDLE
                </motion.h1>

                {/* Subheadline with Accent Border */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-lg border-l-2 border-lime-400 pl-4 leading-relaxed"
                >
                  Ready-to-post viral AI videos for <span className="text-white font-bold">Instagram Reels</span> &amp; <span className="text-white font-bold">YouTube Shorts</span>. Built for maximum engagement.
                </motion.p>
              </>
            )}

            {/* Free Mega Bonus Included Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="w-full max-w-xl bg-emerald-500/10 border border-emerald-500/30 p-4 sm:p-5 rounded-2xl flex items-center justify-between group shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            >
              <div className="text-left">
                <span className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.2em] mb-1 block">
                  Free Mega Bonus Included
                </span>
                <p className="text-xl sm:text-2xl font-black text-white font-display">
                  🎁 1000+ AI STORY REELS
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  1300+ Total High-Retention Reels ready to explode your views!
                </p>
              </div>
              <div className="text-emerald-400 text-2xl sm:text-3xl font-black font-display shrink-0 ml-3">
                FREE
              </div>
            </motion.div>

            {/* Price Row & CTA Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-1"
            >
              <div className="flex sm:flex-col items-baseline sm:items-start gap-2 shrink-0">
                <span className="text-gray-500 line-through text-lg sm:text-xl font-bold">₹{config.originalPrice}</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-lime-400 tracking-tighter font-display drop-shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                  ₹{config.price}
                </span>
              </div>

              {/* Bold Lime Action Button */}
              <button
                onClick={onBuyClick}
                className="flex-1 w-full h-16 sm:h-20 px-6 bg-lime-400 hover:bg-lime-300 text-black font-black text-xl sm:text-2xl rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_15px_40px_rgba(163,230,53,0.3)] uppercase italic flex items-center justify-center gap-2 font-display"
              >
                <Zap className="w-6 h-6 fill-black" />
                <span>Get Instant Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Instant reassurance micro-copy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[11px] sm:text-xs text-gray-400 font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                Instant Google Drive Link
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-yellow-400" />
                No Watermark
              </span>
              <span className="flex items-center gap-1.5">
                <DownloadCloud className="w-4 h-4 text-lime-400" />
                Direct 1080p Download
              </span>
            </div>

          </div>

          {/* Right Column: 3D Visual Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <BundleBox3D config={config} onImageUpdate={onImageUpdate} />
          </div>

        </div>

        {/* The Full Package Trust Bar Strip */}
        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col space-y-1">
            <span className="text-lime-400 font-black text-2xl font-display">1300+</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Total HD Reels</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col space-y-1">
            <span className="text-yellow-400 font-black text-2xl font-display">95%</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Time Saved</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col space-y-1">
            <span className="text-lime-400 font-black text-2xl font-display">1080p</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">60FPS HD Quality</span>
          </div>
          <div className="p-4 rounded-2xl bg-[#111] border border-white/5 flex flex-col space-y-1">
            <span className="text-emerald-400 font-black text-2xl font-display">0 Sec</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Instant Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
