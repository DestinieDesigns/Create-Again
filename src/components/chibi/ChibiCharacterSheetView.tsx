import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Camera,
  Download,
  Share2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Heart,
  Palette,
  Compass,
  Smile,
  Shield,
  Layers,
  Printer,
  ChevronRight,
  FolderHeart,
  FileText,
  Upload,
} from 'lucide-react';
import { ChibiCharacter } from '../../types/chibi';

interface ChibiCharacterSheetViewProps {
  character: ChibiCharacter;
  onSaveToCollection: (photoDataUrl?: string) => void;
  onContinueStory: () => void;
  onCreateAnother: () => void;
  onBackToHome: () => void;
  onRevisitStage: (stageId: any) => void;
}

export const ChibiCharacterSheetView: React.FC<ChibiCharacterSheetViewProps> = ({
  character,
  onSaveToCollection,
  onContinueStory,
  onCreateAnother,
  onBackToHome,
  onRevisitStage,
}) => {
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(
    character.photoDataUrl || null
  );
  const [isSaved, setIsSaved] = useState(false);
  const [isCapturingPhoto, setIsCapturingPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle camera photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        setPhotoDataUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    onSaveToCollection(photoDataUrl || undefined);
    setIsSaved(true);
  };

  const characterTitle = character.name || 'Unnamed Chibi Wanderer';

  return (
    <div className="min-h-full py-6 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto text-[#2D2723]">
      {/* Top Banner Celebration */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBEFEA] text-[#E06D53] text-xs font-bold uppercase tracking-wider border border-[#F5D8CE]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Character Blueprint Complete</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#2D2723]">
          YOU BUILT A CHARACTER.
        </h1>
        <p className="text-sm sm:text-base text-[#6B6158] leading-relaxed">
          Starting with one idea, you gave your character a shape, a face, a
          personality, a world, and a story. Now bring them together onto a
          master sketchbook spread.
        </p>
      </div>

      {/* Model Sheet Planning Spread (Styled like an art studio reference card) */}
      <div className="p-6 sm:p-8 rounded-3xl border-3 border-[#2D2723] bg-[#FAF7F2] paper-card subtle-shadow mb-8 text-left space-y-6">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b-2 border-[#2D2723] gap-4">
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#8A7D71] uppercase">
              Official Chibi Model Sheet
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#2D2723] tracking-tight">
              {characterTitle.toUpperCase()}
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#EFE9DF] text-xs font-bold text-[#2D2723] capitalize">
              {character.customType || character.type || 'Human'}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EFE9DF] text-xs font-bold text-[#E06D53] capitalize">
              {character.customTheme || character.theme || 'Cozy'}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EFE9DF] text-xs font-bold text-[#2D2723] capitalize">
              {character.customPersonality || character.personality || 'Curious'}
            </span>
          </div>
        </div>

        {/* Core Attributes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FCFAF6] p-4 rounded-2xl border border-[#D8CEBE] text-xs">
          <div>
            <span className="text-[#8A7D71] block font-medium">Head & Silhouette</span>
            <span className="font-extrabold text-[#2D2723] capitalize">
              {character.headShape || 'Round'} • {character.silhouette || 'Soft'}
            </span>
          </div>
          <div>
            <span className="text-[#8A7D71] block font-medium">Outfit & Drape</span>
            <span className="font-extrabold text-[#2D2723] capitalize">
              {character.clothing?.outfit || 'Layered garments'}
            </span>
          </div>
          <div>
            <span className="text-[#8A7D71] block font-medium">Key Accessory</span>
            <span className="font-extrabold text-[#2D2723] capitalize">
              {character.accessories?.[0] || 'Handheld item'}
            </span>
          </div>
          <div>
            <span className="text-[#8A7D71] block font-medium">Companion</span>
            <span className="font-extrabold text-[#2D2723] capitalize">
              {character.companion?.nameOrKind || 'None'}
            </span>
          </div>
        </div>

        {/* Structured Drawing Assignments Guide */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E06D53]">
            <FileText className="w-4 h-4" />
            <span>Master Drawing Assignment for Your Sketchbook</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Box 1: Turnarounds */}
            <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-2">
              <div className="font-extrabold text-[#2D2723] text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
                <span>1. THREE-VIEW TURNAROUND</span>
              </div>
              <p className="text-[#6B6158]">
                Draw guide lines with a ruler across your page. Keep the head height identical:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#5C5249]">
                <li><strong>Front View:</strong> Show symmetrical clothing drape & face.</li>
                <li><strong>Profile View:</strong> Show nose, cheek puff, and backpack depth.</li>
                <li><strong>Back View:</strong> Show hood, hair layers, and tail/belt seams.</li>
              </ul>
            </div>

            {/* Box 2: Expressions & Body Language */}
            <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-2">
              <div className="font-extrabold text-[#2D2723] text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
                <span>2. THREE HEADSHOT EXPRESSIONS</span>
              </div>
              <p className="text-[#6B6158]">
                Draw 3 close-up circles showing different emotional states:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#5C5249]">
                <li><strong>Joy / Wonder:</strong> Wide sparkling eyes, lifted brows.</li>
                <li><strong>Surprise / Shock:</strong> Open O-mouth, floating hair tufts.</li>
                <li><strong>Sleepy / Cozy:</strong> Drooped eyelids, soft dimple smile.</li>
              </ul>
            </div>

            {/* Box 3: Story Action & Scene */}
            <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8E0D5] space-y-2">
              <div className="font-extrabold text-[#2D2723] text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E06D53]" />
                <span>3. NARRATIVE STORY MOMENT</span>
              </div>
              <p className="text-[#6B6158]">
                Place them inside their home world ({character.customWorld || character.world || 'their world'}):
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#5C5249]">
                <li>Show them performing: <em>{character.action || 'exploring'}</em>.</li>
                <li>Include companion: <em>{character.companion?.nameOrKind || 'pocket friend'}</em>.</li>
                <li>Add 2 small environment props for depth.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tiny Story Moment Box */}
        <div className="p-4 rounded-2xl bg-[#EFE9DF]/60 border border-[#D8CEBE] text-xs space-y-1">
          <div className="font-mono font-bold text-[#8A7D71] uppercase text-[10px]">
            Story Vignette
          </div>
          <p className="font-medium text-[#2D2723] italic leading-relaxed">
            "{character.name || 'Our hero'} is in {character.customWorld || character.world || 'their cozy corner'}, {character.action || 'observing the quiet morning'}, clutching their {character.accessories?.[0] || 'treasured keepsake'} while {character.companion?.nameOrKind || 'their companion'} stays close."
          </p>
        </div>

        {/* Physical Sketchbook Camera / Photo Attachment Section */}
        <div className="p-5 rounded-2xl bg-[#FCFAF6] border-2 border-dashed border-[#D8CEBE] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#E06D53]" />
              <h3 className="text-sm font-extrabold text-[#2D2723]">
                PHOTOGRAPH YOUR PHYSICAL DRAWING
              </h3>
            </div>
            {photoDataUrl && (
              <span className="text-[11px] font-bold text-[#E06D53] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Photo Attached</span>
              </span>
            )}
          </div>

          <p className="text-xs text-[#6B6158]">
            Snap a picture of your physical sketchbook page or finished digital drawing to keep it safely preserved in your Create Again collection.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2D2723] hover:bg-[#433A34] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <Camera className="w-4 h-4" />
              <span>{photoDataUrl ? 'RETAKE / CHANGE PHOTO' : 'SNAP PHOTO WITH CAMERA'}</span>
            </button>

            {photoDataUrl && (
              <div className="w-20 h-20 rounded-xl border border-[#2D2723] overflow-hidden shadow-xs shrink-0">
                <img
                  src={photoDataUrl}
                  alt="Finished drawing"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-3xl bg-[#FAF7F2] border border-[#E8E0D5] mb-8">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleSaveClick}
            className={`flex-1 sm:flex-none px-6 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
              isSaved
                ? 'bg-[#EFE9DF] text-[#2D2723] border border-[#D8CEBE]'
                : 'bg-[#E06D53] hover:bg-[#CF5E45] text-white shadow-md'
            }`}
          >
            <FolderHeart className="w-4 h-4" />
            <span>{isSaved ? 'SAVED TO COLLECTION' : 'SAVE CHARACTER'}</span>
          </button>

          <button
            onClick={onContinueStory}
            className="flex-1 sm:flex-none px-6 py-3 rounded-2xl bg-[#2D2723] hover:bg-[#433A34] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>CONTINUE THEIR STORY</span>
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onCreateAnother}
            className="flex-1 sm:flex-none px-4 py-3 rounded-2xl border-2 border-[#2D2723] hover:bg-[#EFE9DF] text-[#2D2723] font-extrabold text-xs transition-all"
          >
            CREATE ANOTHER
          </button>
          <button
            onClick={onBackToHome}
            className="flex-1 sm:flex-none px-4 py-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#6B6158] font-bold text-xs transition-all"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};
