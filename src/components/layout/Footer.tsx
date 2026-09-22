import React from 'react';
import { Sparkles, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSettings: () => void;
  onOpenTests: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSettings, onOpenTests }) => {
  return (
    <footer className="border-t border-[#E8E0D5] bg-[#FAF7F2] py-12 mt-16 text-[#6B6158]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E0D5]">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-extrabold text-base tracking-tight text-[#2D2723]">
                CREATE AGAIN
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#EFE9DF] text-[#70645B] font-medium">
                Sketchbook Companion
              </span>
            </div>
            <p className="text-sm font-handwriting text-[#5A5047] text-lg mt-1">
              Start somewhere. Add something. See what happens.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <button
              onClick={onOpenSettings}
              className="text-[#655A51] hover:text-[#2D2723] transition-colors"
            >
              Settings
            </button>
            <span className="text-[#D6CCBF]">•</span>
            <button
              onClick={onOpenTests}
              className="flex items-center gap-1 text-[#655A51] hover:text-[#2D2723] transition-colors"
            >
              <Terminal className="w-3 h-3 text-[#E06D53]" />
              <span>Prompt Test Suite</span>
            </button>
            <span className="text-[#D6CCBF]">•</span>
            <span className="text-[#877C72]">
              Physical Sketchbook First
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A7E74]">
          <p>
            Your page is the canvas. The human is always the artist.
          </p>
          <p className="flex items-center gap-1 font-handwriting text-base">
            No erasing. No restarting. Just add.
          </p>
        </div>
      </div>
    </footer>
  );
};
