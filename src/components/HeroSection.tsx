import React, { useState, useRef } from 'react';
import { PAYMENT_URL, COURSE_PRICE, ORIGINAL_PRICE, DISCOUNT_PERCENT, DEFAULT_POSTER_URL } from '../data/courseData';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Play, 
  Star, 
  Flame, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Smartphone, 
  Monitor, 
  Zap,
  Lock
} from 'lucide-react';

interface HeroSectionProps {
  posterUrl: string;
  onPosterUpdate?: (newUrl: string) => void;
  onBuyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  posterUrl,
  onBuyClick
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Cinematic Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[550px] bg-gradient-to-b from-sky-600/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cinematic-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-xs sm:text-sm text-slate-300 shadow-lg shadow-black/50 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold text-amber-400">LIMITED TIME LAUNCH DEAL</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200">Google Gemini Video Workflow</span>
            <span className="text-sky-400 font-bold hidden sm:inline">Only ₹{COURSE_PRICE}</span>
          </div>
        </div>

        {/* Hero Grid: Text & Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white leading-[1.12]">
              Create Amazing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
                AI Videos
              </span>{' '}
              Like{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 text-glow-gold">
                SHER!
              </span>
            </h1>

            {/* Subheadline as specifically requested */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Learn how to create AI videos using <span className="text-sky-300 font-semibold">Google Gemini</span>, edit them, publish Reels and YouTube Shorts, and explore monetization methods.
            </p>

            {/* Price Showcase Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-950/90 via-sky-950/40 to-slate-950/90 border border-amber-500/30 shadow-2xl shadow-black/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-mono-code font-bold tracking-wider text-amber-400">
                      SPECIAL COURSE PRICE
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {DISCOUNT_PERCENT}% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                      ₹{COURSE_PRICE}
                    </span>
                    <span className="text-sm sm:text-base text-slate-400 line-through">
                      ₹{ORIGINAL_PRICE}
                    </span>
                    <span className="text-xs text-sky-400 font-medium">
                      (One-Time Lifetime Access)
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 justify-end text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Digital Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Cashfree 256-bit SSL Secure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onBuyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-xl font-heading font-black text-lg sm:text-xl text-black tracking-wide bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all animate-pulse-cta"
              >
                <Zap className="w-6 h-6 text-black fill-black" />
                <span>BUY NOW – ₹{COURSE_PRICE}</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </a>

              <a
                href="#learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <span>Explore Syllabus</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Feature Highlights Ticker */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-200">Mobile + PC</p>
                  <p className="text-[10px] text-slate-400">Android & iOS</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-200">Google Gemini</p>
                  <p className="text-[10px] text-slate-400">Zero Prior Skills</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-200">Direct Access</p>
                  <p className="text-[10px] text-slate-400">Cashfree Instant</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Poster Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] perspective-1000">
              
              {/* Surrounding Ambient Radial Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/25 via-amber-500/25 to-blue-600/25 rounded-3xl blur-2xl opacity-75 -z-10 animate-pulse" />

              {/* Poster 3D Frame */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'none'
                }}
                className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-gradient-to-b from-slate-900 to-black shadow-2xl shadow-black ring-1 ring-sky-500/30"
              >
                {/* Top Poster Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-heading font-extrabold tracking-wider bg-black/85 text-amber-400 border border-amber-400/50 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    OFFICIAL COURSE POSTER
                  </span>
                </div>

                {/* Enlarge Button */}
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white hover:text-amber-400 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
                  title="Expand Full Poster"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Poster Image */}
                <div className="relative w-full overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer" onClick={onBuyClick}>
                  <img
                    src={posterUrl}
                    alt="AI Video Creation Course - Create Amazing AI Videos Like SHER"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = DEFAULT_POSTER_URL;
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-amber-400/20 pointer-events-none rounded-2xl" />
                </div>
              </div>

              {/* Under-Poster Quality Tag */}
              <div className="mt-3 flex items-center justify-center text-xs text-slate-500">
                <span className="font-mono-code text-[11px] tracking-wide">HD 4K Cinematic Masterclass Poster</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal for Poster Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={posterUrl}
              alt="Course Poster Full Preview"
              className="w-auto max-h-[80vh] rounded-xl object-contain border border-amber-500/40 shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-4">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onBuyClick}
                className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold font-heading text-sm shadow-lg shadow-amber-500/30 transition-all"
              >
                BUY NOW – ₹{COURSE_PRICE}
              </a>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm hover:bg-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
