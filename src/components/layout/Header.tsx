import React, { useState } from 'react';
import {
  Menu,
  X,
  Settings,
  Sparkles,
  ArrowRight,
  FolderHeart,
  Compass,
  Play,
  HelpCircle,
  Trophy,
  Layers,
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenCreateChooser: () => void;
  onOpenMasterSheet?: () => void;
  onOpenSettings?: () => void;
  onOpenWarmUp?: () => void;
  onOpenChaos?: () => void;
  onOpenChallenge?: () => void;
  onOpenPathways?: () => void;
  onOpenWhatComesNext?: () => void;
  onOpenCharacterDesign?: () => void;
  onOpenChibiJourney?: () => void;
  onOpenPartLibrary?: () => void;
  unfinishedSessionExists: boolean;
  mobileMenuOpen?: boolean;
  onToggleMobileMenu?: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenCreateChooser,
  onOpenMasterSheet,
  onOpenSettings,
  onOpenWarmUp,
  onOpenChaos,
  onOpenChallenge,
  onOpenPathways,
  onOpenWhatComesNext,
  onOpenCharacterDesign,
  onOpenChibiJourney,
  onOpenPartLibrary,
  unfinishedSessionExists,
  mobileMenuOpen: controlledMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);

  const isMenuOpen = controlledMobileMenuOpen !== undefined ? controlledMobileMenuOpen : internalMenuOpen;
  const setMenuOpen = (val: boolean) => {
    if (onToggleMobileMenu) {
      onToggleMobileMenu(val);
    } else {
      setInternalMenuOpen(val);
    }
  };

  const handleNav = (tab: string) => {
    if (tab === 'settings') {
      if (onOpenSettings) onOpenSettings();
    } else if (tab === 'practice') {
      if (onOpenWarmUp) onOpenWarmUp();
      else onNavigate('practice');
    } else if (tab === 'challenges') {
      if (onOpenChallenge) onOpenChallenge();
      else if (onOpenChaos) onOpenChaos();
      else onNavigate('challenges');
    } else if (tab === 'create') {
      onOpenCreateChooser();
    } else if (tab === 'master-sheet') {
      if (onOpenMasterSheet) onOpenMasterSheet();
    } else {
      onNavigate(tab);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E5E5DE]">
      <div className="app-container h-16 flex items-center justify-between">
        {/* Zone 1: Single Text Element Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -ml-2 rounded-lg text-[#16171A] hover:bg-[#F2F2ED] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5 stroke-[2]" /> : <Menu className="w-5 h-5 stroke-[2]" />}
          </button>

          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-left group transition-opacity hover:opacity-85"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#16171A]" aria-hidden="true" />
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#16171A]">
              Create Again
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 Clean Text Nav Links with Single-Line Labels */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => handleNav('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'home'
                ? 'text-[#16171A] bg-[#EEEEEA]'
                : 'text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
            }`}
          >
            Studio
          </button>

          <button
            onClick={() => handleNav('what-comes-next')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'what-comes-next'
                ? 'text-[#16171A] bg-[#EEEEEA]'
                : 'text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
            }`}
          >
            What Comes Next
          </button>

          <button
            onClick={() => {
              if (onOpenChibiJourney) onOpenChibiJourney();
              else handleNav('chibi-journey');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'chibi-journey'
                ? 'text-[#2752E7] bg-[#EFF3FF] font-bold'
                : 'text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
            }`}
          >
            Chibi Atelier
          </button>

          <button
            onClick={() => {
              if (onOpenPartLibrary) onOpenPartLibrary();
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0] flex items-center gap-1.5"
            title="Browse all 197+ individual character part references"
          >
            <Layers className="w-3.5 h-3.5 text-[#2752E7]" />
            <span>Part Library</span>
          </button>

          <button
            onClick={() => handleNav('collection')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'collection'
                ? 'text-[#16171A] bg-[#EEEEEA]'
                : 'text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
            }`}
          >
            Archive
          </button>

          <button
            onClick={() => handleNav('progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              currentTab === 'progress'
                ? 'text-[#16171A] bg-[#EEEEEA]'
                : 'text-[#686862] hover:text-[#16171A] hover:bg-[#F4F4F0]'
            }`}
          >
            Progress
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2">
          {unfinishedSessionExists && (
            <button
              onClick={() => handleNav('what-comes-next')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F4F0] hover:bg-[#EAEAE4] text-[#16171A] text-xs font-semibold border border-[#E5E5DE] transition-colors"
              title="Resume drawing session"
            >
              <span className="w-2 h-2 rounded-full bg-[#2752E7] animate-pulse" />
              <span className="hidden sm:inline">Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={onOpenCreateChooser}
            className="px-3.5 py-1.5 rounded-lg bg-[#16171A] text-white text-xs font-semibold hover:bg-[#2C2D32] transition-colors shadow-2xs flex items-center gap-1.5 min-h-[36px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6EEFF]" />
            <span>New Session</span>
          </button>

          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg text-[#686862] hover:text-[#16171A] hover:bg-[#F2F2ED] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Settings"
              title="Studio Settings"
            >
              <Settings className="w-4 h-4 stroke-[1.8]" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5DE] bg-[#FBFBFA] px-4 py-4 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                currentTab === 'home' ? 'bg-[#EEEEEA] text-[#16171A]' : 'text-[#686862] hover:bg-[#F2F2ED]'
              }`}
            >
              Studio Home
            </button>
            <button
              onClick={() => handleNav('what-comes-next')}
              className={`px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                currentTab === 'what-comes-next' ? 'bg-[#EEEEEA] text-[#16171A]' : 'text-[#686862] hover:bg-[#F2F2ED]'
              }`}
            >
              What Comes Next
            </button>
            <button
              onClick={() => {
                if (onOpenChibiJourney) onOpenChibiJourney();
                else handleNav('chibi-journey');
              }}
              className={`px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                currentTab === 'chibi-journey' ? 'bg-[#EFF3FF] text-[#2752E7]' : 'text-[#686862] hover:bg-[#F2F2ED]'
              }`}
            >
              Chibi Character Atelier
            </button>
            <button
              onClick={() => {
                if (onOpenPartLibrary) onOpenPartLibrary();
                setMenuOpen(false);
              }}
              className="px-3 py-2.5 rounded-lg text-left text-sm font-semibold text-[#686862] hover:bg-[#F2F2ED] transition-colors flex items-center justify-between"
            >
              <span>Part Reference Library</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#EEEEEC] text-[#686862]">197 parts</span>
            </button>
            <button
              onClick={() => handleNav('collection')}
              className={`px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                currentTab === 'collection' ? 'bg-[#EEEEEA] text-[#16171A]' : 'text-[#686862] hover:bg-[#F2F2ED]'
              }`}
            >
              Archive & Collection
            </button>
            <button
              onClick={() => handleNav('progress')}
              className={`px-3 py-2.5 rounded-lg text-left text-sm font-semibold transition-colors ${
                currentTab === 'progress' ? 'bg-[#EEEEEA] text-[#16171A]' : 'text-[#686862] hover:bg-[#F2F2ED]'
              }`}
            >
              Progress & Stats
            </button>
          </div>

          <div className="pt-2 border-t border-[#E5E5DE] flex items-center justify-between text-xs text-[#686862]">
            <button
              onClick={() => handleNav('practice')}
              className="py-1.5 hover:text-[#16171A]"
            >
              Warm-Up Practice
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('challenges')}
              className="py-1.5 hover:text-[#16171A]"
            >
              Creative Chaos
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('master-sheet')}
              className="py-1.5 hover:text-[#16171A]"
            >
              500 Prompts
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
