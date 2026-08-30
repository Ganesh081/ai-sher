import React from 'react';
import { Mail } from 'lucide-react';
import { BundleConfig } from '../types';

interface FooterProps {
  config: BundleConfig;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings }) => {

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-12 pb-24 sm:pb-12 px-4 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Brand & Mission */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-lime-400 flex items-center justify-center text-black font-black text-sm">
              H
            </div>
            <span className="text-xl font-black text-white font-display tracking-wider uppercase">
              300+ AI HULK <span className="text-lime-400">REELS BUNDLE</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-md">
            India's #1 digital creator store for viral ready-to-post AI video templates & story reels.
          </p>
        </div>

        {/* Quick Contact & Support Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <a
            href={`mailto:${config.supportEmail}`}
            className="flex items-center gap-1.5 hover:text-lime-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-lime-400" />
            <span>Support: {config.supportEmail}</span>
          </a>

          <button
            onClick={onOpenSettings}
            className="text-gray-500 hover:text-gray-300 underline underline-offset-4"
          >
            Configure Gateway &amp; Links
          </button>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-white/5 max-w-2xl mx-auto space-y-2 text-[10px] text-gray-500 leading-relaxed">
          <p>
            Disclaimer: This digital bundle contains royalty-free AI-generated video artworks designed for social media theme pages and content creators. All trademarks and brand references are the property of their respective owners.
          </p>
          <p>
            © {new Date().getFullYear()} AI Viral Bundles. All rights reserved. 256-Bit Encrypted Secure Checkout.
          </p>
        </div>

      </div>
    </footer>
  );
};
