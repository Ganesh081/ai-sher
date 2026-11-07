import React, { useState } from 'react';
import { LEARN_TOPICS, PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { 
  Clapperboard, 
  Sparkles, 
  Terminal, 
  Drama, 
  Sliders, 
  Smartphone, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Copy, 
  CheckCheck,
  Video,
  Play
} from 'lucide-react';

interface WhatYouWillLearnProps {
  onBuyClick: () => void;
}

export const WhatYouWillLearn: React.FC<WhatYouWillLearnProps> = ({ onBuyClick }) => {
  const [copied, setCopied] = useState(false);

  const samplePrompt = `Cinematic 4k shot of a majestic royal cyber lion (SHER) with glowing golden armor and sapphire blue optics, standing on a misty cyberpunk cliff in Neo-Tokyo, dramatic thunderstorm lighting, volumetric blue fog, slow camera zoom, photorealistic 8k render, octane render style --ar 9:16`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard':
        return <Clapperboard className="w-6 h-6 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-sky-400" />;
      case 'Drama':
        return <Drama className="w-6 h-6 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-sky-400" />;
      default:
        return <Video className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="learn" className="relative py-20 bg-[#030611] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-xs font-mono-code font-bold tracking-wider text-sky-400">
            <span>CURRICULUM BREAKDOWN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white">
            What You Will{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-glow-gold">
              Learn
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A comprehensive, battle-tested curriculum designed to take you from total novice to creating viral, monetizable AI video content.
          </p>
        </div>

        {/* 7 Core Learning Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARN_TOPICS.map((topic, index) => {
            const isSpecial = index === 0 || index === 3;
            return (
              <div
                key={topic.id}
                className={`relative group rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSpecial
                    ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/40 shadow-xl shadow-amber-500/5 hover:border-amber-400'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/90 shadow-lg shadow-black/40'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-code font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-800/80 text-amber-300 border border-slate-700">
                      STEP 0{topic.id}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-400">
                      {topic.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                      {getIcon(topic.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300/90 leading-relaxed mt-2">
                    {topic.description}
                  </p>
                </div>

                {/* Bottom Verification Checkmark */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Practical hands-on exercise included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Feature Box: The Gemini Prompt Formula */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-950 via-sky-950/50 to-slate-950 border border-sky-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono-code font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BONUS PROMPT PACK</span>
              </div>
              <h3 className="text-2xl font-heading font-black text-white">
                The Secret "SHER" Prompt Recipe
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Inside the course, you get 50+ master prompts with exact camera angles, lighting descriptors, and negative prompt formulas that trigger cinematic 4K AI video generations instantly.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onBuyClick}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Unlock all 50+ prompts for ₹{COURSE_PRICE}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono-code text-xs relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>Gemini-Prompt-Recipe.txt</span>
                  </span>
                  <button
                    onClick={handleCopyPrompt}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Sample</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-amber-200/90 leading-relaxed select-all">
                  "{samplePrompt}"
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Section Mid CTA */}
        <div className="mt-14 text-center">
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-black text-lg text-black tracking-wide bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>START LEARNING NOW – ONLY ₹{COURSE_PRICE}</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </a>
          <p className="text-xs text-slate-400 mt-2">
            Instant digital access delivered immediately upon payment.
          </p>
        </div>

      </div>
    </section>
  );
};
