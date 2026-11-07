import React from 'react';
import { WHY_JOIN_FEATURES, PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { 
  Users, 
  CheckCircle2, 
  FileCode2, 
  Workflow, 
  ArrowRight, 
  XCircle, 
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';

interface WhyJoinSectionProps {
  onBuyClick: () => void;
}

export const WhyJoinSection: React.FC<WhyJoinSectionProps> = ({ onBuyClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-sky-400" />;
      default:
        return <Zap className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="why-join" className="relative py-20 bg-[#02050e] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 cinematic-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono-code font-bold tracking-wider text-amber-400">
            <span>PROVEN ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 text-glow-blue">
              Join This Course?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Designed for creators who value their time and want a proven, repeatable blueprint to create viral videos without guesswork.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_JOIN_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-2xl p-7 bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group shadow-xl shadow-black/50"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                  {getIcon(feature.iconName)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <span className="inline-block text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {feature.stats}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Traditional Guesswork vs. SHER Course Blueprint */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white text-center">
              The Difference Is Night & Day
            </h3>
            <p className="text-sm text-slate-400 text-center mt-1">
              Stop wasting weeks watching outdated clips when you can have the complete roadmap in 1 hour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Left: Learning on your own */}
            <div className="p-6 sm:p-8 space-y-4 bg-slate-950/60">
              <div className="flex items-center gap-2 text-rose-400 font-heading font-bold text-lg">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Learning On Your Own</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 text-base">✕</span>
                  <span>Wasting hours experimenting with bad prompts that generate deformed characters</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 text-base">✕</span>
                  <span>Inconsistent characters that look completely different in every scene</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 text-base">✕</span>
                  <span>Low video engagement due to poor 3-second hook structure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 text-base">✕</span>
                  <span>No clear roadmap on how to actually monetize or get brand sponsorships</span>
                </li>
              </ul>
            </div>

            {/* Right: With AI Video Course */}
            <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-br from-sky-950/20 via-slate-900 to-slate-950">
              <div className="flex items-center gap-2 text-amber-400 font-heading font-bold text-lg">
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>With AI Video Creation Course</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Copy-paste 50+ tested cinematic prompt formulas with guaranteed results</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Exact character continuity framework used in the viral SHER series</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Viral 9:16 retention pacing for Instagram Reels & YouTube Shorts feeds</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Step-by-step monetization guide: theme pages, clients & digital assets</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Table Bottom Footer Bar */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400">Ready to start today? </span>
              <span className="text-sm font-bold text-white">Full Lifetime Access for only ₹{COURSE_PRICE}</span>
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onBuyClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-heading font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
            >
              <span>JOIN NOW – ₹{COURSE_PRICE}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
