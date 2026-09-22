import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Sparkles, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CREATIVE_AFFIRMATIONS, CreativeAffirmation } from '../../data/affirmations';

interface CreativeAffirmationProps {
  intervalMs?: number;
  className?: string;
}

export const CreativeAffirmationComponent: React.FC<CreativeAffirmationProps> = ({
  intervalMs = 8000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    return Math.floor(Math.random() * CREATIVE_AFFIRMATIONS.length);
  });
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const nextAffirmation = useCallback(() => {
    setIsRotating(true);
    setCurrentIndex((prev) => (prev + 1) % CREATIVE_AFFIRMATIONS.length);
    setTimeout(() => setIsRotating(false), 450);
  }, []);

  // Automatic rotation on a timer unless hovered
  useEffect(() => {
    if (isPaused || intervalMs <= 0) return;
    const timer = setInterval(() => {
      nextAffirmation();
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, intervalMs, nextAffirmation]);

  const current: CreativeAffirmation = CREATIVE_AFFIRMATIONS[currentIndex];

  return (
    <div
      id="creative-affirmation-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative mx-auto max-w-xl group ${className}`}
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#F6F1E8]/90 border border-[#E4D9C8] p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-[#D5C6B1] hover:bg-[#F8F3EA]">
        {/* Subtle decorative quote watermark */}
        <Quote
          className="absolute -right-2 -bottom-2 w-16 h-16 text-[#E8DDCF]/40 pointer-events-none rotate-12"
          aria-hidden="true"
        />

        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 flex items-center justify-center w-7 h-7 rounded-xl bg-[#EDE4D5] text-[#E06D53]">
            <Sparkles className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0 pr-6 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9C8C7E]">
                Today's Spark
              </span>
              <span className="text-[10px] text-[#B0A294]">•</span>
              <span className="text-[10px] font-semibold text-[#8A7C6E] capitalize">
                {current.focus}
              </span>
            </div>

            <div className="min-h-[48px] sm:min-h-[40px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="text-sm sm:text-base font-semibold text-[#3D352F] leading-snug">
                    "{current.quote}"
                  </p>
                  {current.author && (
                    <span className="block mt-1 text-xs text-[#8A7C6E] font-medium">
                      — {current.author}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Manual shuffle button */}
          <button
            id="rotate-affirmation-button"
            type="button"
            onClick={nextAffirmation}
            title="Next encouraging thought"
            aria-label="Show next creative affirmation"
            className="shrink-0 p-1.5 rounded-lg text-[#8A7C6E] hover:text-[#2D2723] hover:bg-[#EAE0D1] active:scale-95 transition-all"
          >
            <RefreshCw
              className={`w-4 h-4 transition-transform duration-300 ${
                isRotating ? 'rotate-180 text-[#E06D53]' : ''
              }`}
            />
          </button>
        </div>

        {/* Progress dot indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-3 pt-2.5 border-t border-[#EBE1D3]/80">
          {CREATIVE_AFFIRMATIONS.map((aff, index) => (
            <button
              key={aff.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Jump to affirmation ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-5 bg-[#E06D53]'
                  : 'w-1.5 bg-[#D5C6B1] hover:bg-[#BCAB94]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CreativeAffirmationComponent;
