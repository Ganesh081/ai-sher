import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PAYMENT_URL, DEFAULT_POSTER_URL, COURSE_PRICE } from './data/courseData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { WhyJoinSection } from './components/WhyJoinSection';
import { CurriculumSection } from './components/CurriculumSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [posterUrl, setPosterUrl] = useState<string>(() => {
    const saved = localStorage.getItem('ai_video_course_poster_url_v6');
    if (saved && saved.trim() !== '') {
      return saved;
    }
    return DEFAULT_POSTER_URL;
  });

  const handlePosterUpdate = (newUrl: string) => {
    setPosterUrl(newUrl);
    try {
      localStorage.setItem('ai_video_course_poster_url_v6', newUrl);
    } catch (e) {
      console.warn('LocalStorage quota exceeded or unavailable', e);
    }
  };

  const handleBuyClick = () => {
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#38bdf8', '#fbbf24', '#0284c7']
      });
    } catch (e) {
      // safe fallback
    }

    // Cashfree payment link opens in new tab as specified
    window.open(PAYMENT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#030611] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Fixed Sticky Header */}
      <Navbar onBuyClick={handleBuyClick} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          posterUrl={posterUrl}
          onPosterUpdate={handlePosterUpdate}
          onBuyClick={handleBuyClick}
        />

        {/* What You Will Learn (7 Core Pillars) */}
        <WhatYouWillLearn onBuyClick={handleBuyClick} />

        {/* Why Join (4 Core Pillars + Comparison) */}
        <WhyJoinSection onBuyClick={handleBuyClick} />

        {/* Detailed Curriculum & Syllabus */}
        <CurriculumSection onBuyClick={handleBuyClick} />

        {/* Verified Student Experiences */}
        <TestimonialsSection onBuyClick={handleBuyClick} />

        {/* Dedicated Pricing Master Section */}
        <PricingSection onBuyClick={handleBuyClick} />

        {/* Frequently Asked Questions */}
        <FaqSection onBuyClick={handleBuyClick} />
      </main>

      {/* Footer with Cashfree and Earnings Disclaimers */}
      <Footer onBuyClick={handleBuyClick} />

      {/* Mobile Floating Sticky CTA Bar */}
      <StickyMobileBar onBuyClick={handleBuyClick} />
    </div>
  );
}
