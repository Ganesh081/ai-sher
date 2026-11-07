import React, { useState, useEffect } from 'react';
import { PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { Sparkles, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface NavbarProps {
  onBuyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBuyClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030611]/90 backdrop-blur-md border-b border-sky-950/60 shadow-xl shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-black fill-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-wider text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
              AI VIDEO COURSE
              <span className="text-[10px] uppercase font-mono-code font-bold tracking-widest px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                SHER
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Google Gemini & Cinematic Mastery
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#learn" className="hover:text-amber-400 transition-colors">
            What You'll Learn
          </a>
          <a href="#why-join" className="hover:text-amber-400 transition-colors">
            Why Join
          </a>
          <a href="#curriculum" className="hover:text-amber-400 transition-colors">
            Curriculum
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQs
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-semibold">Special Offer: ₹{COURSE_PRICE}</span>
          </div>

          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="relative inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm tracking-wide text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>BUY NOW – ₹{COURSE_PRICE}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </header>
  );
};
