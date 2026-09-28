import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, X } from 'lucide-react';

interface MoreInfoDrawerProps {
  category?: string;
  difficulty?: string;
  theme?: string;
  skills?: string[];
  tags?: string[];
  promptId?: string;
  whyThisPrompt?: string;
  className?: string;
}

export const MoreInfoDrawer: React.FC<MoreInfoDrawerProps> = ({
  category,
  difficulty,
  theme,
  skills,
  tags,
  promptId,
  whyThisPrompt,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 text-xs text-[#8A8A82] hover:text-[#16171A] transition-colors py-1 px-2.5 rounded-lg hover:bg-[#F4F4F0]"
        aria-expanded={isOpen}
      >
        <Info className="w-3.5 h-3.5 text-[#8A8A82]" />
        <span>More</span>
        {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>

      {isOpen && (
        <div className="mt-3 p-4 bg-[#FAF9F5] border border-[#E5E5DE] rounded-2xl text-left text-xs max-w-md mx-auto space-y-2.5 animate-in fade-in duration-150 shadow-2xs">
          {whyThisPrompt && (
            <div>
              <span className="font-semibold text-[#16171A]">Why this prompt:</span>
              <p className="text-[#686862] mt-0.5 leading-relaxed">{whyThisPrompt}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-[#EFEFEA]">
            {category && (
              <div>
                <span className="text-[#8A8A82]">Category:</span>{' '}
                <span className="font-semibold text-[#16171A] capitalize">{category}</span>
              </div>
            )}
            {difficulty && (
              <div>
                <span className="text-[#8A8A82]">Difficulty:</span>{' '}
                <span className="font-semibold text-[#16171A] capitalize">{difficulty}</span>
              </div>
            )}
            {theme && (
              <div>
                <span className="text-[#8A8A82]">Theme:</span>{' '}
                <span className="font-semibold text-[#16171A] capitalize">{theme}</span>
              </div>
            )}
            {skills && skills.length > 0 && (
              <div>
                <span className="text-[#8A8A82]">Skills:</span>{' '}
                <span className="font-semibold text-[#16171A]">{skills.join(', ')}</span>
              </div>
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className="pt-1 text-[10px] text-[#8A8A82] flex flex-wrap gap-1">
              {tags.map((t) => (
                <span key={t} className="px-1.5 py-0.5 rounded bg-white border border-[#E5E5DE]">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
