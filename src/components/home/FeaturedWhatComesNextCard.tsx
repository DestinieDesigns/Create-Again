import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';

interface FeaturedWhatComesNextCardProps {
  onStartMystery: () => void;
}

export const FeaturedWhatComesNextCard: React.FC<FeaturedWhatComesNextCardProps> = ({
  onStartMystery,
}) => {
  return (
    <section className="max-w-4xl mx-auto px-4 my-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#FAF7F2] border-3 border-[#2D2723] p-6 sm:p-10 paper-card">
        {/* Subtle sketchbook tape decoration at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-6 bg-[#E8DDD1]/90 rotate-1 shadow-xs border border-[#D5C7B7]" />

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
          {/* Left Text */}
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E06D53]/15 text-[#C04D33] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Mode</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2723] tracking-tight">
                WHAT COMES NEXT?
              </h2>
              <p className="text-base sm:text-lg text-[#655A51] mt-1 font-medium">
                Grab your sketchbook. We'll tell you what to draw one step at a time.
              </p>
            </div>

            <p className="text-sm text-[#7A6F66] leading-relaxed">
              You never see future instructions. Just follow the current prompt on your page,
              press <strong>NEXT</strong>, and watch your drawing evolve into something completely unexpected.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#8C7E72]">
              <ShieldAlert className="w-4 h-4 text-[#DDA15E]" />
              <span>Rule: No erase. No restarting. Just add.</span>
            </div>
          </div>

          {/* Right Visual Step Teaser */}
          <div className="flex-1 bg-[#FCFAF6] rounded-2xl p-5 sm:p-6 border-2 border-[#E8E0D5] flex flex-col justify-between gap-4 subtle-shadow">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A7D71] font-mono-code flex items-center justify-between">
              <span>How it unfolds</span>
              <span className="text-[#E06D53]">Step by step</span>
            </div>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-xl border border-[#E8E0D5] shadow-xs">
                <span className="w-5 h-5 rounded-full bg-[#EFE9DF] text-[11px] font-bold flex items-center justify-center text-[#5A4F46]">
                  1
                </span>
                <span className="text-sm font-semibold text-[#2D2723]">
                  Draw three circles.
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-xl border border-[#E8E0D5] shadow-xs">
                <span className="w-5 h-5 rounded-full bg-[#EFE9DF] text-[11px] font-bold flex items-center justify-center text-[#5A4F46]">
                  2
                </span>
                <span className="text-sm font-semibold text-[#2D2723]">
                  Connect two of them.
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-xl border border-[#E8E0D5] shadow-xs">
                <span className="w-5 h-5 rounded-full bg-[#EFE9DF] text-[11px] font-bold flex items-center justify-center text-[#5A4F46]">
                  3
                </span>
                <span className="text-sm font-semibold text-[#2D2723]">
                  Turn the smallest into something alive.
                </span>
              </div>

              {/* Mystery Step */}
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#2D2723] text-[#FAF7F2] font-handwriting text-lg font-bold">
                <span>What happens next?</span>
                <span className="text-xs uppercase font-sans tracking-widest text-[#E5B574]">
                  ???
                </span>
              </div>
            </div>

            <button
              onClick={onStartMystery}
              className="w-full mt-2 py-3 px-5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white font-extrabold text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span>START A MYSTERY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
