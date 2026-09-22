import React from 'react';
import { BookOpen } from 'lucide-react';

interface FaithContentCardProps {
  enabled: boolean;
}

export const FaithContentCard: React.FC<FaithContentCardProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 my-8">
      <div className="rounded-3xl bg-[#F6F4ED] border-2 border-[#DCD5C4] p-6 sm:p-8 subtle-shadow text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE3D2] text-[#695E4F] text-xs font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Create With Purpose</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D2723] tracking-tight">
          God gave you creativity to reflect His beauty.
        </h3>

        <blockquote className="mt-3 text-sm sm:text-base text-[#574D43] italic max-w-xl mx-auto font-handwriting text-xl leading-relaxed">
          “And I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills—to make artistic designs...”
        </blockquote>

        <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[#8A7D6E] font-mono-code">
          — Exodus 31:3
        </div>
      </div>
    </section>
  );
};
