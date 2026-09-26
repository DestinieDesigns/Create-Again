import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  Filter,
  Sparkles,
  Dice5,
  Pencil,
  Check,
  Tag,
  Compass,
  Layers,
} from 'lucide-react';
import {
  ChibiPartReference,
  ChibiPartCategory,
} from '../../types/chibiReference';
import {
  CHIBI_PART_REFERENCES,
  getChibiReferences,
  pickRandomCompatiblePart,
} from '../../data/chibiPartReferences';
import { ChibiPartCard } from './ChibiPartCard';
import { ChibiPartDetailModal } from './ChibiPartDetailModal';

interface ChibiPartLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ChibiPartCategory | 'all';
  selectedPartId?: string;
  onSelectPart?: (part: ChibiPartReference) => void;
  onPracticePart?: (part: ChibiPartReference) => void;
  characterType?: string;
  theme?: string;
}

const CATEGORY_TABS: { id: ChibiPartCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Parts' },
  { id: 'head', label: 'Heads' },
  { id: 'head-angle', label: 'Angles' },
  { id: 'body', label: 'Body Types' },
  { id: 'eye', label: 'Eyes' },
  { id: 'eyebrow', label: 'Eyebrows' },
  { id: 'nose', label: 'Noses' },
  { id: 'mouth', label: 'Mouths' },
  { id: 'hair', label: 'Hair Styles' },
  { id: 'ear', label: 'Ears' },
  { id: 'arm', label: 'Arms' },
  { id: 'hand', label: 'Hands' },
  { id: 'leg', label: 'Legs' },
  { id: 'foot', label: 'Feet' },
  { id: 'tail', label: 'Tails' },
  { id: 'wing', label: 'Wings' },
  { id: 'horn', label: 'Horns' },
  { id: 'antler', label: 'Antlers' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'accessory', label: 'Accessories' },
  { id: 'marking', label: 'Markings' },
  { id: 'special-feature', label: 'Special Features' },
  { id: 'creature-feature', label: 'Creature Features' },
  { id: 'fantasy-feature', label: 'Fantasy Features' },
];

export const ChibiPartLibraryModal: React.FC<ChibiPartLibraryModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  selectedPartId,
  onSelectPart,
  onPracticePart,
  characterType,
  theme,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ChibiPartCategory | 'all'>(
    initialCategory || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [inspectedPart, setInspectedPart] = useState<ChibiPartReference | null>(null);

  // Sync category if initialCategory changes
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filtered pieces
  const filteredParts = useMemo(() => {
    return getChibiReferences({
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      search: searchQuery,
      difficulty: selectedDifficulty === 'all' ? undefined : (selectedDifficulty as any),
      characterType,
      theme,
    });
  }, [selectedCategory, searchQuery, selectedDifficulty, characterType, theme]);

  if (!isOpen) return null;

  // Handle "Choose for Me" random picker
  const handleRandomPick = () => {
    const targetCat = selectedCategory === 'all' ? 'head' : selectedCategory;
    const randomPart = pickRandomCompatiblePart(targetCat, characterType, theme);
    if (randomPart) {
      setInspectedPart(randomPart);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl border border-[#E5E5DE] shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5E5DE] flex items-center justify-between gap-4 bg-[#FBFBFA]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                REUSABLE REFERENCE LIBRARY
              </span>
              <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#EEEEEC] text-[#686862]">
                {filteredParts.length} Pieces
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#16171A] mt-0.5">
              Chibi Character Part Library
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomPick}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] text-xs font-semibold text-[#16171A] transition-colors"
              title="Pick a random compatible piece"
            >
              <Dice5 className="w-3.5 h-3.5 text-[#2752E7]" />
              <span>Choose For Me</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg border border-[#E5E5DE] bg-white hover:bg-[#F4F4F0] flex items-center justify-center text-[#686862] hover:text-[#16171A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-3 sm:p-4 border-b border-[#F0F0EB] bg-white space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A82]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search part name, tags (e.g. fluffy, pointed, cat, robot)..."
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#E5E5DE] bg-[#FBFBFA] text-xs text-[#16171A] focus:outline-none focus:border-[#2752E7] focus:bg-white"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#8A8A82] shrink-0">Level:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="text-xs px-2.5 py-1.5 rounded-lg border border-[#E5E5DE] bg-white text-[#16171A] focus:outline-none focus:border-[#2752E7]"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy (Beginner)</option>
                <option value="medium">Medium</option>
                <option value="hard">Detailed / Hard</option>
              </select>
            </div>
          </div>

          {/* Category Tabs Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                    isActive
                      ? 'bg-[#16171A] text-white shadow-2xs'
                      : 'bg-[#F4F4F0] text-[#686862] hover:bg-[#EEEEEA] hover:text-[#16171A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Parts Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FBFBFA]">
          {filteredParts.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <p className="text-sm font-semibold text-[#16171A]">No parts found</p>
              <p className="text-xs text-[#8A8A82]">
                Try adjusting your search query or selecting "All Parts".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="mt-3 px-3 py-1.5 rounded-lg bg-white border border-[#E5E5DE] text-xs font-semibold text-[#2752E7] hover:bg-[#F4F4F0]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredParts.map((part) => (
                <ChibiPartCard
                  key={part.id}
                  part={part}
                  isSelected={selectedPartId === part.id}
                  onSelect={(p) => {
                    if (onSelectPart) {
                      onSelectPart(p);
                      onClose();
                    } else {
                      setInspectedPart(p);
                    }
                  }}
                  onInspect={(p) => setInspectedPart(p)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Notes */}
        <div className="p-3 sm:p-4 border-t border-[#E5E5DE] bg-white flex items-center justify-between text-xs text-[#8A8A82]">
          <span>
            Click any part to inspect drawing cues. Clean black line art for paper drawing.
          </span>
          <span className="font-mono text-[11px]">Create Again Atelier</span>
        </div>
      </div>

      {/* Part Inspection Drawer */}
      <ChibiPartDetailModal
        part={inspectedPart}
        isOpen={!!inspectedPart}
        onClose={() => setInspectedPart(null)}
        isSelected={inspectedPart ? selectedPartId === inspectedPart.id : false}
        onSelect={(p) => {
          if (onSelectPart) {
            onSelectPart(p);
            onClose();
          }
        }}
        onPractice={onPracticePart}
      />
    </div>
  );
};
