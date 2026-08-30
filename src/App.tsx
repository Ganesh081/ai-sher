import React, { useState, useEffect } from 'react';
import { DEFAULT_CONFIG } from './data/landingData';
import { BundleConfig } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { ReelPreviewSection } from './components/ReelPreviewSection';
import { WhyBuySection } from './components/WhyBuySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { LiveSalesToast } from './components/LiveSalesToast';
import { PaymentModal } from './components/PaymentModal';
import { SellerConfigModal } from './components/SellerConfigModal';
import { DownloadAccessPage } from './components/DownloadAccessPage';

export default function App() {
  const [config, setConfig] = useState<BundleConfig>(() => {
    const saved = localStorage.getItem('ai_hulk_bundle_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.paymentLink || parsed.paymentLink.includes('cosmofeed.com')) {
          parsed.paymentLink = 'https://payments.cashfree.com/forms?code=unlockeverything';
        }
        if (!parsed.productImageUrl || parsed.productImageUrl === '') {
          parsed.productImageUrl = '/hulk_poster.png';
        }
        return { ...DEFAULT_CONFIG, ...parsed };
      } catch (e) {
        console.error(e);
      }
    }
    return DEFAULT_CONFIG;
  });

  const [currentView, setCurrentView] = useState<'landing' | 'access'>('landing');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleSaveConfig = (newConfig: BundleConfig) => {
    setConfig(newConfig);
    localStorage.setItem('ai_hulk_bundle_config', JSON.stringify(newConfig));
  };

  const handleBuyClick = () => {
    const link = config.paymentLink || 'https://payments.cashfree.com/forms?code=unlockeverything';
    window.open(link, '_blank');
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false);
    setCurrentView('access');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-lime-400 selection:text-black">
      {currentView === 'landing' ? (
        <>
          {/* Top Sticky Header */}
          <Header
            config={config}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onBuyClick={handleBuyClick}
          />

          {/* Hero Section */}
          <HeroSection
            config={config}
            onBuyClick={handleBuyClick}
            onImageUpdate={(url) => {
              const updated = { ...config, productImageUrl: url };
              handleSaveConfig(updated);
            }}
            onHeaderImageUpdate={(url) => {
              const updated = { ...config, headerImageUrl: url };
              handleSaveConfig(updated);
            }}
          />

          {/* What You Get Section */}
          <WhatYouGetSection
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* Video Reel Previews */}
          <ReelPreviewSection
            onBuyClick={handleBuyClick}
          />

          {/* Why Buy Section */}
          <WhyBuySection
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* How It Works Section */}
          <HowItWorksSection
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* Real Social Proof Testimonials */}
          <TestimonialsSection />

          {/* Final Strong CTA Section */}
          <FinalCTASection
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* FAQ Accordion */}
          <FaqSection
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* Footer */}
          <Footer
            config={config}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />

          {/* Mobile Bottom Conversion Bar */}
          <StickyMobileBar
            config={config}
            onBuyClick={handleBuyClick}
          />

          {/* Real-time Sales Popup Toast */}
          <LiveSalesToast />
        </>
      ) : (
        /* Post-Purchase Digital Access / Download Portal */
        <DownloadAccessPage
          config={config}
          onBackToLanding={() => {
            setCurrentView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Checkout & Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        config={config}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Seller Gateway Settings Modal */}
      <SellerConfigModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onPreviewAccessPage={() => setCurrentView('access')}
      />
    </div>
  );
}
