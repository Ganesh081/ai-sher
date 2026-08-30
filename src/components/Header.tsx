import React, { useState, useEffect } from 'react';
import { Clock, Zap, Settings } from 'lucide-react';
import { BundleConfig } from '../types';

interface HeaderProps {
  config: BundleConfig;
  onOpenSettings: () => void;
  onBuyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenSettings, onBuyClick }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 9, seconds: 59 }; // Auto-reset for perpetual conversion urgency
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050505]/95 border-b border-white/5">
      {/* Top Urgency & Live Visitors Flash Bar */}
      <div className="w-full bg-[#0a0a0a] border-b border-white/5 py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-3">
            {/* Live Viewer Pulsing Badge */}
            <div className="flex items-center space-x-1.5 bg-red-950/40 px-2.5 py-0.5 rounded-full border border-red-500/30">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-red-400 uppercase tracking-widest">
                Live: 1,248 People Viewing
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-yellow-400">
              <Zap className="w-3.5 h-3.5 fill-yellow-400" />
              <span className="text-gray-300">LIMITED OFFER:</span>
              <span className="font-black text-yellow-400">SAVE 97% TODAY</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Urgent Countdown Timer */}
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-0.5 rounded-full border border-lime-400/30 text-lime-400 text-[11px] font-mono font-bold">
              <Clock className="w-3 h-3 text-lime-400" />
              <span>
                {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
              </span>
            </div>

            {/* Quick Settings for Creator/Seller */}
            <button
              onClick={onOpenSettings}
              title="Edit Payment link / WhatsApp / Drive link"
              className="hidden lg:flex items-center gap-1 text-[11px] text-gray-400 hover:text-lime-400 transition-colors px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-lime-400/50"
            >
              <Settings className="w-3 h-3" />
              <span>Seller Config</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.3)]">
            <span className="text-black font-black text-xl">H</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase font-display">
                REEL<span className="text-lime-400">HULK</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(250,204,21,0.25)]">
                1300+ PACK
              </span>
            </div>
            <p className="text-[10px] text-gray-400 hidden sm:block">Instant Digital Delivery • Instagram &amp; YT Shorts</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Quick Buy CTA */}
          <button
            onClick={onBuyClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs sm:text-sm uppercase italic tracking-wider shadow-[0_4px_20px_rgba(163,230,53,0.35)] hover:scale-105 active:scale-95 transition-all"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>BUY NOW ₹29</span>
          </button>
        </div>
      </div>
    </header>
  );
};
