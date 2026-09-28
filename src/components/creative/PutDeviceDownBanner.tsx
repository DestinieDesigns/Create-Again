import React from 'react';
import { Pencil, Smartphone } from 'lucide-react';

interface PutDeviceDownBannerProps {
  onStartDrawing?: () => void;
  instruction?: string;
  className?: string;
}

/**
 * Section 8: "PUT THE DEVICE DOWN" Moment
 * Encourages the user to stop looking at the screen, pick up pencil, and create.
 */
export const PutDeviceDownBanner: React.FC<PutDeviceDownBannerProps> = ({
  onStartDrawing,
  instruction = 'Make your mark on the page. Return here when you are ready for what comes next.',
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl border border-[#E5E5DE] bg-white p-6 sm:p-7 text-center max-w-lg mx-auto shadow-2xs space-y-4 ${className}`}
    >
      <div className="flex items-center justify-center gap-3 text-[#2752E7]">
        <div className="w-10 h-10 rounded-xl bg-[#EFF3FF] flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-[#2752E7]" />
        </div>
        <span className="text-sm font-semibold text-[#8A8A82]">→</span>
        <div className="w-10 h-10 rounded-xl bg-[#16171A] text-white flex items-center justify-center">
          <Pencil className="w-5 h-5" />
        </div>
      </div>

      <div className="space-y-1.5">
        <h3 className="font-display text-lg sm:text-xl font-bold text-[#16171A]">
          You've got what you need.
        </h3>
        <p className="text-xs sm:text-sm text-[#686862] max-w-sm mx-auto leading-relaxed">
          Put the device down. Pick up your pencil. Create.
        </p>
      </div>

      <div className="pt-2 text-[11px] text-[#8A8A82] border-t border-[#F0F0EB]">
        {instruction}
      </div>

      {onStartDrawing && (
        <button
          onClick={onStartDrawing}
          className="w-full py-3.5 px-6 rounded-xl bg-[#16171A] text-white font-semibold text-sm hover:bg-[#2C2D32] transition-colors shadow-2xs active:scale-98"
        >
          Start Drawing Now
        </button>
      )}
    </div>
  );
};
