import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';
import { LIVE_SALES } from '../data/landingData';

export const LiveSalesToast: React.FC = () => {
  const [currentSaleIndex, setCurrentSaleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing first popup
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSaleIndex(prev => (prev + 1) % LIVE_SALES.length);
        setIsVisible(true);
      }, 1500);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const sale = LIVE_SALES[currentSaleIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 sm:bottom-6 left-4 z-40 max-w-[280px] sm:max-w-xs p-3 rounded-2xl bg-[#0c0c0c]/95 backdrop-blur-md border border-lime-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.8)] flex items-center gap-3 text-left"
        >
          <div className="w-8 h-8 rounded-full bg-lime-500/20 border border-lime-400 flex items-center justify-center text-lime-400 shrink-0">
            <Zap className="w-4 h-4 fill-current" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate flex items-center gap-1">
              <span>{sale.name}</span>
              <span className="text-gray-400 text-[10px]">({sale.location})</span>
            </div>
            <div className="text-[11px] text-lime-400 font-semibold truncate">
              Purchased {sale.item} for ₹29
            </div>
            <div className="text-[9px] text-gray-500">{sale.timeAgo} • Verified Download</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
