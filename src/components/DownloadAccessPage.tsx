import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Download, CheckCircle2, Gift, Sparkles, Mail, ExternalLink, ShieldCheck, ArrowLeft, Video, Folder, FileText, Zap, BookOpen } from 'lucide-react';
import { BundleConfig } from '../types';

interface DownloadAccessProps {
  config: BundleConfig;
  onBackToLanding: () => void;
}

export const DownloadAccessPage: React.FC<DownloadAccessProps> = ({ config, onBackToLanding }) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a3e635', '#facc15', '#ffffff', '#84cc16']
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  }, []);

  const handleDownload = (type: string) => {
    window.open(config.downloadLink, '_blank');
  };

  const handleWhatsApp = () => {
    const cleanNum = config.whatsappNumber.replace(/[^0-9]/g, '');
    const text = 'Hi! I made the payment for 300+ AI Hulk Reels and I am on the access page.';
    window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white py-10 px-4">
      {/* Dynamic Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lime-500/15 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToLanding}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0c0c] border border-white/10 text-xs text-gray-300 hover:text-white hover:border-lime-400/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Landing Page</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-lime-400 font-bold bg-white/5 px-3 py-1 rounded-full border border-lime-400/30">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span>ORDER VERIFIED &amp; UNLOCKED</span>
          </div>
        </div>

        {/* Success Header Banner */}
        <div className="text-center p-8 rounded-3xl bg-[#0c0c0c] border border-lime-400/40 shadow-[0_0_50px_rgba(163,230,53,0.2)]">
          <div className="w-16 h-16 rounded-full bg-lime-400 text-black flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_#a3e635]">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-black uppercase tracking-wider mb-2 border border-yellow-400/40">
            <Sparkles className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Payment Successful (₹29)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            YOUR DIGITAL ACCESS <span className="text-lime-400 text-glow-lime">IS READY!</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Thank you for purchasing the <strong>300+ AI HULK REELS BUNDLE</strong>. All files and bonuses have been unlocked below for instant download.
          </p>
        </div>

        {/* 3 Main Download Modules Grid */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase font-display flex items-center gap-2">
            <Folder className="w-6 h-6 text-lime-400" />
            <span>Download Your Files:</span>
          </h2>

          {/* Module 1: 300+ Hulk Reels */}
          <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-lime-400/40 shadow-[0_0_25px_rgba(163,230,53,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-lime-950/60 border border-lime-400/50 flex items-center justify-center text-lime-400 shrink-0">
                <Video className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white font-display">
                    300+ AI HULK REELS PACK
                  </span>
                  <span className="px-2 py-0.5 rounded bg-lime-500/20 text-lime-400 text-[10px] font-black border border-lime-400/40">
                    CORE PACK
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  1080x1920 60FPS Full HD • 100% No Watermark • Categorised by Action Themes
                </p>
                <div className="text-[11px] text-lime-400 font-semibold mt-1">
                  Format: High Speed Google Drive Folder (Direct MP4s)
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDownload('hulk')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs sm:text-sm uppercase italic tracking-wider transition-all shadow-[0_0_20px_rgba(163,230,53,0.4)] shrink-0 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>OPEN GOOGLE DRIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 2: 1000+ Story Reels Bonus */}
          <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-yellow-400/40 shadow-[0_0_25px_rgba(250,204,21,0.1)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-yellow-950/60 border border-yellow-400/50 flex items-center justify-center text-yellow-300 shrink-0">
                <Gift className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white font-display">
                    1000+ AI STORY REELS BONUS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-yellow-400 text-black text-[10px] font-black">
                    FREE BONUS
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  High Retention Mystery & Narrative Loops • 90%+ Average Watch Time
                </p>
                <div className="text-[11px] text-yellow-300 font-semibold mt-1">
                  Format: Google Drive Cloud Access (Organized Part 1 to 5)
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDownload('bonus')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs sm:text-sm uppercase italic tracking-wider transition-all shadow-[0_0_20px_rgba(250,204,21,0.4)] shrink-0 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>ACCESS BONUS DRIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Module 3: Viral Blueprint & Hashtags Guide */}
          <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-gray-300 shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white font-display">
                    VIRAL CAPTIONS &amp; 50+ HASHTAGS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300 text-[10px] font-bold">
                    GUIDE
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Copy-paste hooks, Instagram algorithm timing guide & audio selection formula.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDownload('guide')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-yellow-400" />
              <span>VIEW STRATEGY GUIDE</span>
            </button>
          </div>
        </div>

        {/* Step-by-Step Instagram Growth Playbook */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-yellow-400">
            <Zap className="w-5 h-5 fill-current" />
            <h3 className="text-lg font-black uppercase font-display text-white">
              Quick 3-Step Viral Posting Blueprint
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-black border border-white/5">
              <div className="font-bold text-lime-400 mb-1">Step 1: Download to Gallery</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open the Google Drive link, tap any reel, click 3 dots and choose "Send a copy" or "Save to Camera Roll".
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-white/5">
              <div className="font-bold text-yellow-400 mb-1">Step 2: Add Trending Audio</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Upload to Instagram Reels, mute original clip volume, and select a trending audio with the rising arrow ↗ symbol.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-white/5">
              <div className="font-bold text-lime-400 mb-1">Step 3: Post Consistently</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Post 2-3 reels daily at 12:30 PM, 6:00 PM, and 9:00 PM IST for 2 weeks to trigger the algorithm explore feed.
              </p>
            </div>
          </div>
        </div>

        {/* Email Help Support Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-lime-950/20 via-[#0c0c0c] to-black border border-lime-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-lime-400 text-black flex items-center justify-center shrink-0 shadow-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need help with Drive access or downloading?</div>
              <div className="text-xs text-gray-400">Reach our support team anytime at {config.supportEmail}.</div>
            </div>
          </div>

          <a
            href={`mailto:${config.supportEmail}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </div>

      </div>
    </div>
  );
};
