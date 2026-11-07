import React from 'react';
import { TESTIMONIALS, PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { Star, CheckCircle, TrendingUp, Sparkles, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onBuyClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onBuyClick }) => {
  return (
    <section className="relative py-20 bg-[#030611] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-500/30 text-xs font-mono-code font-bold tracking-wider text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL CREATOR EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white">
            Created for Beginners.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
              Proven Results.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how aspiring creators are creating cinematic AI videos and growing audiences with the SHER video method.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Views Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="w-3 h-3" />
                    {item.views}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <span>{item.name}</span>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                    )}
                  </div>
                  <p className="text-slate-400 font-mono-code text-[11px]">{item.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
