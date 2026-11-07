import React, { useState } from 'react';
import { CURRICULUM_MODULES, PAYMENT_URL, COURSE_PRICE } from '../data/courseData';
import { ChevronDown, ChevronUp, PlayCircle, Clock, Award, ArrowRight, BookOpen } from 'lucide-react';

interface CurriculumSectionProps {
  onBuyClick: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onBuyClick }) => {
  const [expandedModule, setExpandedModule] = useState<string>('m1');

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? '' : id);
  };

  return (
    <section id="curriculum" className="relative py-20 bg-[#030611] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-500/30 text-xs font-mono-code font-bold tracking-wider text-sky-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>FULL SYLLABUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white">
            Course{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
              Curriculum & Modules
            </span>
          </h2>
          <p className="text-base text-slate-300">
            6 in-depth video modules packed with actionable walkthroughs, downloadable cheat sheets, and project assets.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {CURRICULUM_MODULES.map((module) => {
            const isOpen = expandedModule === module.id;
            return (
              <div
                key={module.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/40 shadow-xl shadow-black/60'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 font-mono-code font-bold text-sm sm:text-base flex items-center justify-center shrink-0">
                      {module.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {module.duration}
                        </span>
                        <span className="text-[11px] font-medium text-amber-300/80 hidden sm:inline">
                          ★ {module.highlight}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Content / Lessons */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-slate-800/80 space-y-4">
                    <p className="text-sm text-slate-300">
                      {module.description}
                    </p>
                    <div className="space-y-2 pt-2">
                      {module.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/60 text-xs sm:text-sm text-slate-200"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{lesson}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-mono-code shrink-0 ml-2">
                            Video Lesson
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-white text-base sm:text-lg">
              Get Immediate Access To All 6 Modules
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Instant digital download and learning dashboard access on Cashfree checkout.
            </p>
          </div>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBuyClick}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-heading font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all"
          >
            BUY NOW – ₹{COURSE_PRICE}
          </a>
        </div>

      </div>
    </section>
  );
};
