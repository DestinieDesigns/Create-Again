import React, { useState } from 'react';
import {
  X,
  FolderHeart,
  Heart,
  Trash2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Calendar,
  Image as ImageIcon,
  CheckCircle2,
} from 'lucide-react';
import { ChibiCharacter } from '../../types/chibi';

interface MyCharactersModalProps {
  isOpen: boolean;
  onClose: () => void;
  characters: ChibiCharacter[];
  onSelectCharacter: (character: ChibiCharacter) => void;
  onDeleteCharacter: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onStartNew: () => void;
}

export const MyCharactersModal: React.FC<MyCharactersModalProps> = ({
  isOpen,
  onClose,
  characters,
  onSelectCharacter,
  onDeleteCharacter,
  onToggleFavorite,
  onStartNew,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');
  const [selectedCharacterDetail, setSelectedCharacterDetail] =
    useState<ChibiCharacter | null>(null);

  if (!isOpen) return null;

  const filteredCharacters = characters.filter((c) =>
    activeTab === 'favorites' ? c.isFavorite : true
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="My Chibi Characters"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2D2723]/65 backdrop-blur-xs animate-fadeIn text-[#2D2723]"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border-3 border-[#2D2723] paper-card subtle-shadow flex flex-col overflow-hidden text-left max-h-[92vh]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FBEFEA] text-[#E06D53] flex items-center justify-center font-bold">
              <FolderHeart className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A7D71]">
                Sketchbook Archive
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D2723]">
                MY CHIBI CHARACTERS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onStartNew();
              }}
              className="px-3.5 py-1.5 rounded-xl bg-[#E06D53] hover:bg-[#CF5E45] text-white text-xs font-bold transition-all shadow-xs"
            >
              + NEW CHARACTER
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE9DF] text-[#6B6158]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-5 py-2.5 border-b border-[#F0EBE1] bg-[#FCFAF6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#2D2723] text-white'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              All Characters ({characters.length})
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'favorites'
                  ? 'bg-[#E06D53] text-white'
                  : 'text-[#6B6158] hover:text-[#2D2723]'
              }`}
            >
              Favorites ({characters.filter((c) => c.isFavorite).length})
            </button>
          </div>
        </div>

        {/* Character Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredCharacters.length === 0 ? (
            <div className="py-12 text-center max-w-sm mx-auto space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EFE9DF] text-[#8A7D71] mx-auto flex items-center justify-center">
                <FolderHeart className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#2D2723]">
                {activeTab === 'favorites'
                  ? 'No favorites yet'
                  : 'No characters built yet'}
              </h3>
              <p className="text-xs text-[#6B6158]">
                {activeTab === 'favorites'
                  ? 'Heart characters in your collection to view them here.'
                  : 'Start your first guided chibi journey to build an original character from scratch.'}
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartNew();
                }}
                className="px-4 py-2 rounded-xl bg-[#E06D53] text-white font-extrabold text-xs shadow-xs"
              >
                START A CHARACTER
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="p-4 rounded-2xl border-2 border-[#2D2723] bg-[#FCFAF6] paper-card subtle-shadow flex flex-col justify-between hover:border-[#E06D53] transition-all text-left"
                >
                  <div className="space-y-2">
                    {/* Card Top: Photo Thumbnail or Silhouette Badge */}
                    <div className="w-full aspect-[16/9] rounded-xl bg-[#FAF7F2] border border-[#D8CEBE] overflow-hidden relative flex items-center justify-center">
                      {char.photoDataUrl ? (
                        <img
                          src={char.photoDataUrl}
                          alt={char.name || 'Chibi sketch'}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-2">
                          <span className="text-2xl block mb-1">🌱</span>
                          <span className="text-[10px] font-mono text-[#8A7D71] uppercase">
                            {char.silhouette || 'Character'} Blueprint
                          </span>
                        </div>
                      )}

                      {/* Favorite button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(char.id);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-xs"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            char.isFavorite
                              ? 'fill-[#E06D53] text-[#E06D53]'
                              : 'text-[#8A7D71]'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Character Title & Details */}
                    <div>
                      <h4 className="text-base font-extrabold text-[#2D2723]">
                        {char.name || 'Unnamed Wanderer'}
                      </h4>
                      <p className="text-[11px] text-[#6B6158] capitalize">
                        {char.customType || char.type || 'Human'} •{' '}
                        {char.customTheme || char.theme || 'Cozy'} •{' '}
                        {char.customPersonality || char.personality || 'Curious'}
                      </p>
                    </div>

                    {/* Prop & World snippet */}
                    <div className="p-2 rounded-lg bg-[#EFE9DF]/50 text-[11px] text-[#5C5249] space-y-0.5">
                      <div>
                        <strong>Key Prop:</strong> {char.accessories?.[0] || 'Keepsake'}
                      </div>
                      <div>
                        <strong>World:</strong> {char.customWorld || char.world || 'Everyday'}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 mt-3 border-t border-[#E8E0D5] flex items-center justify-between">
                    <span className="text-[10px] text-[#8A7D71] flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(char.createdAt).toLocaleDateString()}</span>
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onDeleteCharacter(char.id)}
                        className="p-1.5 rounded-lg text-[#8A7D71] hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete character"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          onSelectCharacter(char);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#2D2723] hover:bg-[#433A34] text-white text-xs font-bold flex items-center gap-1"
                      >
                        <span>VIEW SHEET</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
