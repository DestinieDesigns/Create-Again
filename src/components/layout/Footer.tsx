import React from 'react';
import { Terminal, Settings } from 'lucide-react';

interface FooterProps {
  onOpenSettings: () => void;
  onOpenTests: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSettings, onOpenTests }) => {
  return (
    <footer className="border-t border-[#E5E5DE] bg-[#FBFBFA] py-12 mt-20 text-[#686862]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E5E5DE]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-[#16171A]">
                Create Again
              </span>
              <span aria-hidden="true" className="text-[#CDCDC4]">·</span>
              <span className="text-xs text-[#686862]">
                Drawing Companion & Atelier
              </span>
            </div>
            <p className="text-xs text-[#8A8A82] mt-1">
              Start somewhere. Add something. See what happens.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={onOpenSettings}
              className="text-[#686862] hover:text-[#16171A] transition-colors"
            >
              Preferences
            </button>
            <span aria-hidden="true" className="text-[#CDCDC4]">·</span>
            <button
              onClick={onOpenTests}
              className="flex items-center gap-1 text-[#686862] hover:text-[#16171A] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Test Suite</span>
            </button>
            <span aria-hidden="true" className="text-[#CDCDC4]">·</span>
            <span className="text-[#8A8A82]">
              Physical-Paper First
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8A82]">
          <p>
            Your page is the canvas. The human hand is the artist.
          </p>
          <p className="text-[#686862]">
            No erasing required. Just add the next mark.
          </p>
        </div>
      </div>
    </footer>
  );
};
