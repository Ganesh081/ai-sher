import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, TrendingUp, Users, Instagram, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-yellow-400/40 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Creator Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight">
            WHAT CREATORS <span className="text-yellow-400 text-glow-yellow">ARE SAYING</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Real feedback from creators who grew theme pages and got viral reach using these AI reels.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-[#0c0c0c] border border-white/5 hover:border-lime-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* 5 Stars + Follower Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-lime-950/60 border border-lime-400/40 text-lime-400">
                    {t.followersGain}
                  </span>
                </div>

                {/* Testimonial Review Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Creator Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-black text-sm flex items-center justify-center border border-white/20 shadow`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 fill-lime-400/20" />
                  </div>
                  <div className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Instagram className="w-3 h-3 text-pink-400" />
                    <span>{t.handle}</span>
                    <span className="text-gray-600">• {t.timeframe}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
