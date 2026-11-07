import React from 'react';
import { PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { Sparkles, ShieldCheck, Lock, DownloadCloud, AlertCircle } from 'lucide-react';

interface FooterProps {
  onBuyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBuyClick }) => {
  return (
    <footer className="relative bg-[#010309] border-t border-slate-900 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 3 Assurance Blocks as specifically requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-slate-900">
          
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                Secure Payment via Cashfree
              </h5>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Transactions are processed through Cashfree Payments with bank-grade 256-bit encryption. UPI, Cards & NetBanking supported.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <DownloadCloud className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                Instant Digital Course Access
              </h5>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Digital course access after successful payment. All video modules, downloadable prompts, and editing resources are unlocked immediately.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-white text-sm">
                Transparent Disclaimer
              </h5>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Earnings are not guaranteed and depend on content quality, platform eligibility and audience growth.
              </p>
            </div>
          </div>

        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-black fill-black" />
              </div>
              <span className="font-heading font-black tracking-wide text-white text-base">
                AI Video Creation Course
              </span>
            </div>
            <p className="text-slate-500 text-xs max-w-md">
              The premier masterclass for creating cinematic AI videos like SHER with Google Gemini, mobile & PC timeline editing, and viral reach.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
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
              Pricing (₹{COURSE_PRICE})
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              FAQs
            </a>
          </div>
        </div>

        {/* Full Required Legal Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 text-center space-y-2">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-slate-400">Disclaimer:</strong> Earnings are not guaranteed and depend on content quality, platform eligibility and audience growth. This educational training provides production techniques and creative workflows. All brand trademarks (Google Gemini, Instagram, YouTube, CapCut) belong to their respective owners.
          </p>
          <p className="text-[11px] text-slate-600 font-mono-code">
            © {new Date().getFullYear()} AI Video Creation Course. All rights reserved. Secure payment via Cashfree.
          </p>
        </div>

      </div>
    </footer>
  );
};
