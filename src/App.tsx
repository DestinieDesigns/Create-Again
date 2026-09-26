import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';

// Home sections
import { HeroSection } from './components/home/HeroSection';
import { HomeHubCards } from './components/home/HomeHubCards';
import { CreationChooserModal } from './components/home/CreationChooserModal';
import { FeaturedWhatComesNextCard } from './components/home/FeaturedWhatComesNextCard';
import { ContinueSessionCard } from './components/home/ContinueSessionCard';
import { PickYourVibeSection } from './components/home/PickYourVibeSection';
import { CreativeJourneyStatsSection } from './components/home/CreativeJourneyStatsSection';
import { RecentCreationsSection } from './components/home/RecentCreationsSection';
import { UnfinishedIdeasSection } from './components/home/UnfinishedIdeasSection';
import { FaithContentCard } from './components/home/FaithContentCard';
import { CreativeThemesSection } from './components/home/CreativeThemesSection';
import { ThemeChooserModal } from './components/theme/ThemeChooserModal';
import { FirstTimeExperienceModal } from './components/home/FirstTimeExperienceModal';
import { WhatIsCreateAgainModal } from './components/home/WhatIsCreateAgainModal';
import { getThemeById } from './data/themes';

// Mode 1 components
import { Mode1SetupModal } from './components/mode1/Mode1SetupModal';
import { Mode1ActiveView } from './components/mode1/Mode1ActiveView';
import { Mode1CompletionView } from './components/mode1/Mode1CompletionView';
import { PathwayChooserModal } from './components/pathway/PathwayChooserModal';
import { CharacterProgressionModal } from './components/character/CharacterProgressionModal';
import { CharacterDesignModal } from './components/character/CharacterDesignModal';
import { CharacterDesignActiveView } from './components/character/CharacterDesignActiveView';
import { CharacterDesignCompletionView } from './components/character/CharacterDesignCompletionView';
import {
  CHARACTER_DESIGN_STAGES,
  CharacterDesignStage,
  CharacterSpark,
} from './data/characterDesignStages';
import { ChallengeMeModal } from './components/challenge/ChallengeMeModal';
import { ChallengeItem } from './data/challenges';

// Chibi Character Journey system
import { useChibiStorage } from './hooks/useChibiStorage';
import { ChibiLandingView } from './components/chibi/ChibiLandingView';
import { ChibiActiveJourneyView } from './components/chibi/ChibiActiveJourneyView';
import { ChibiCharacterSheetView } from './components/chibi/ChibiCharacterSheetView';
import { ChibiStoryContinuationModal } from './components/chibi/ChibiStoryContinuationModal';
import { MyCharactersModal } from './components/chibi/MyCharactersModal';
import { ChibiChallengesModal } from './components/chibi/ChibiChallengesModal';
import { ChibiHowItWorksModal } from './components/chibi/ChibiHowItWorksModal';
import { ChibiPartLibraryModal } from './components/chibi/ChibiPartLibraryModal';
import { ChibiChallenge } from './data/chibiChallenges';
import { ChibiJourneyStageId } from './types/chibi';

// Other modals / views
import { WarmUpModal } from './components/warmup/WarmUpModal';
import { CreativeChaosModal } from './components/chaos/CreativeChaosModal';
import { IDontKnowModal } from './components/stuck/IDontKnowModal';
import { CollectionView } from './components/collection/CollectionView';
import { ProgressView } from './components/progress/ProgressView';
import { SettingsModal } from './components/settings/SettingsModal';
import { PromptTestSuiteModal } from './components/testing/PromptTestSuiteModal';
import { VisualReferenceMasterSheetModal } from './components/visual/VisualReferenceMasterSheetModal';
import { MASTER_VISUAL_REFERENCES } from './data/masterPromptSheet';
import { CreativePrompt } from './types/prompt';

// Storage and Prompt selector
import { useCreateAgainStorage } from './hooks/useCreateAgainStorage';
import { getNextRandomPrompt, recordRecentPromptId } from './utils/promptSelector';
import { MODE1_PROMPTS } from './data/mode1Prompts';
import { AdventureType, CreativePathwayId, Prompt, CharacterSkill } from './types/prompt';
import { Mode1Session, SavedCreation } from './types/session';

export default function App() {
  const {
    activeSession,
    saveActiveSession,
    savedCreations,
    saveCreation,
    deleteCreation,
    stats,
    trackSessionStart,
    settings,
    updateSettings,
    clearAllData,
    selectedThemeId,
    updateSelectedTheme,
  } = useCreateAgainStorage();

  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<
    | 'home'
    | 'what-comes-next'
    | 'what-comes-next-completed'
    | 'collection'
    | 'progress'
    | 'chibi-journey'
  >('home');

  // First-time visit and offline states
  const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(() => {
    try {
      return !localStorage.getItem('create_again_welcomed');
    } catch {
      return false;
    }
  });
  const [isWhatIsModalOpen, setIsWhatIsModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleFirstTimeChoice = (flowId: 'dont-know' | 'character' | 'practice' | 'experiment' | 'skills') => {
    try {
      localStorage.setItem('create_again_welcomed', 'true');
    } catch {}
    setIsFirstTimeOpen(false);
    if (flowId === 'character') {
      handleStartNewChibi();
    } else if (flowId === 'dont-know') {
      setIsDontKnowOpen(true);
    } else if (flowId === 'practice') {
      setIsWarmUpOpen(true);
    } else if (flowId === 'experiment') {
      setIsChaosOpen(true);
    } else if (flowId === 'skills') {
      setIsCharacterProgressionOpen(true);
    }
  };

  const handleCloseFirstTime = () => {
    try {
      localStorage.setItem('create_again_welcomed', 'true');
    } catch {}
    setIsFirstTimeOpen(false);
  };

  // Modal states
  const [isChooserOpen, setIsChooserOpen] = useState(false);
  const [isMode1SetupOpen, setIsMode1SetupOpen] = useState(false);
  const [isPathwayChooserOpen, setIsPathwayChooserOpen] = useState(false);
  const [isCharacterProgressionOpen, setIsCharacterProgressionOpen] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState<CreativePathwayId>('open');
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isChaosOpen, setIsChaosOpen] = useState(false);
  const [isDontKnowOpen, setIsDontKnowOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTestSuiteOpen, setIsTestSuiteOpen] = useState(false);
  const [isMasterSheetOpen, setIsMasterSheetOpen] = useState(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isCharacterDesignModalOpen, setIsCharacterDesignModalOpen] = useState(false);
  const [isCharacterDesignActive, setIsCharacterDesignActive] = useState(false);
  const [characterDesignStageIndex, setCharacterDesignStageIndex] = useState(0);
  const [characterDesignSpark, setCharacterDesignSpark] = useState<CharacterSpark | null>(null);
  const [characterDesignTimerDuration, setCharacterDesignTimerDuration] = useState<number | null>(null);
  const [characterDesignStartedAt, setCharacterDesignStartedAt] = useState<number | null>(null);
  const [characterDesignFinished, setCharacterDesignFinished] = useState(false);
  const [isOfflineDismissed, setIsOfflineDismissed] = useState(false);

  // Chibi Character Journey System state & storage
  const {
    activeCharacter: activeChibiCharacter,
    savedCharacters: savedChibiCharacters,
    stats: chibiStats,
    preferences: chibiPreferences,
    startNewCharacter: startNewChibiCharacter,
    updateActiveCharacter: updateActiveChibiCharacter,
    advanceToNextStage: advanceChibiStage,
    jumpToStage: jumpToChibiStage,
    saveActiveToCollection: saveActiveChibiToCollection,
    loadCharacter: loadChibiCharacter,
    deleteCharacter: deleteChibiCharacter,
    toggleFavorite: toggleChibiFavorite,
    updatePreferences: updateChibiPreferences,
  } = useChibiStorage();

  const [isChibiJourneyActive, setIsChibiJourneyActive] = useState(false);
  const [isChibiSheetActive, setIsChibiSheetActive] = useState(false);
  const [isMyCharactersOpen, setIsMyCharactersOpen] = useState(false);
  const [isChibiChallengesOpen, setIsChibiChallengesOpen] = useState(false);
  const [isChibiHowItWorksOpen, setIsChibiHowItWorksOpen] = useState(false);
  const [isChibiStoryModalOpen, setIsChibiStoryModalOpen] = useState(false);
  const [isPartLibraryOpen, setIsPartLibraryOpen] = useState(false);

  const handleStartNewChibi = () => {
    startNewChibiCharacter();
    setIsChibiJourneyActive(true);
    setIsChibiSheetActive(false);
    setCurrentTab('chibi-journey');
  };

  const handleContinueChibi = () => {
    if (activeChibiCharacter) {
      if (activeChibiCharacter.completedStages.includes('character-sheet')) {
        setIsChibiSheetActive(true);
        setIsChibiJourneyActive(false);
      } else {
        setIsChibiJourneyActive(true);
        setIsChibiSheetActive(false);
      }
      setCurrentTab('chibi-journey');
    } else {
      handleStartNewChibi();
    }
  };

  const handleChibiNextStage = () => {
    advanceChibiStage();
  };

  const handleChibiCompleteJourney = () => {
    advanceChibiStage();
    setIsChibiJourneyActive(false);
    setIsChibiSheetActive(true);
  };

  const handleSaveChibiCreation = (photoDataUrl?: string) => {
    const saved = saveActiveChibiToCollection(photoDataUrl);
    if (saved) {
      saveCreation({
        id: 'creation-chibi-' + Date.now(),
        title: (saved.name || 'Original Character') + ' (Chibi Model Sheet)',
        mode: 'Chibi Character Journey',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        timestamp: Date.now(),
        completedAt: Date.now(),
        promptCount: saved.completedStages.length || 20,
        photoDataUrl: photoDataUrl || saved.photoDataUrl,
        difficulty: 'character-builder',
        pathway: 'character-creator',
        themeId: saved.theme,
        durationMinutes: 20,
        reflection: 'fun',
      });
    }
  };

  const handleStartChallengeChibi = (challenge: ChibiChallenge) => {
    startNewChibiCharacter({
      customSilhouette: challenge.title,
    });
    setIsChibiJourneyActive(true);
    setIsChibiSheetActive(false);
    setCurrentTab('chibi-journey');
  };


  // Active Mode 1 state
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [finishedSession, setFinishedSession] = useState<Mode1Session | null>(null);

  // Initialize currentPrompt if returning to an active session
  useEffect(() => {
    if (activeSession && !activeSession.completed) {
      if (activeSession.currentPromptId) {
        const found = MODE1_PROMPTS.find((p) => p.id === activeSession.currentPromptId);
        if (found) {
          setCurrentPrompt(found);
          return;
        }
      }
      // If prompt wasn't cached, pick next respecting pathway and theme
      const nextP = getNextRandomPrompt(activeSession, MODE1_PROMPTS, activeSession.pathway, activeSession.themeId);
      setCurrentPrompt(nextP);
    }
  }, [activeSession]);

  // Select a pathway and proceed to adventure setup
  const handleSelectPathway = (pathwayId: CreativePathwayId) => {
    setSelectedPathway(pathwayId);
    setIsPathwayChooserOpen(false);
    setIsMode1SetupOpen(true);
  };

  // Start a new Mode 1 Session
  const handleStartMode1 = (
    duration: number | null,
    difficulty: AdventureType,
    pathway: CreativePathwayId = selectedPathway,
    themeId?: string | null
  ) => {
    setIsMode1SetupOpen(false);

    const activeThemeToUse = themeId !== undefined ? themeId : selectedThemeId;

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: duration,
      timerStartedAt: duration ? Date.now() : undefined,
      difficulty,
      pathway,
      themeId: activeThemeToUse || undefined,
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
    };

    const firstPrompt = getNextRandomPrompt(newSession, MODE1_PROMPTS, pathway, activeThemeToUse);
    newSession.currentPromptId = firstPrompt.id;

    saveActiveSession(newSession);
    setCurrentPrompt(firstPrompt);
    trackSessionStart();
    setCurrentTab('what-comes-next');
  };

  // Change theme mid-session in Mode 1
  const handleChangeSessionTheme = (newThemeId: string) => {
    updateSelectedTheme(newThemeId);
    if (!activeSession) return;
    const updated: Mode1Session = {
      ...activeSession,
      themeId: newThemeId,
    };
    saveActiveSession(updated);
  };

  // Advance to Next Prompt in Mode 1
  const handleNextPrompt = useCallback(() => {
    if (!activeSession || !currentPrompt) return;

    // Record the current prompt into history with completion timestamp
    const now = Date.now();
    const updatedHistory = [
      ...activeSession.promptHistory,
      {
        promptId: currentPrompt.id,
        category: currentPrompt.category,
        text: currentPrompt.text,
        shownAt:
          activeSession.promptHistory.length === 0
            ? activeSession.startedAt
            : activeSession.promptHistory[activeSession.promptHistory.length - 1]?.completedAt ||
              now,
        completedAt: now,
      },
    ];
    const updatedUsed = [...activeSession.usedPromptIds, currentPrompt.id];
    recordRecentPromptId(currentPrompt.id);

    const updatedSession: Mode1Session = {
      ...activeSession,
      usedPromptIds: updatedUsed,
      promptHistory: updatedHistory,
    };

    // Calculate strictly next prompt using pathway and theme filter (never pre-computed!)
    const nextP = getNextRandomPrompt(updatedSession, MODE1_PROMPTS, updatedSession.pathway, updatedSession.themeId);
    updatedSession.currentPromptId = nextP.id;

    saveActiveSession(updatedSession);
    setCurrentPrompt(nextP);
  }, [activeSession, currentPrompt, saveActiveSession]);

  // Finish active Mode 1 Session
  const handleFinishMode1 = () => {
    if (!activeSession || !currentPrompt) return;

    const finishTime = Date.now();
    const finalHistory = [...activeSession.promptHistory];
    if (!finalHistory.find((p) => p.promptId === currentPrompt.id)) {
      finalHistory.push({
        promptId: currentPrompt.id,
        category: currentPrompt.category,
        text: currentPrompt.text,
        shownAt: finalHistory.length === 0 ? activeSession.startedAt : (finalHistory[finalHistory.length - 1]?.completedAt || finishTime),
        completedAt: finishTime,
      });
      recordRecentPromptId(currentPrompt.id);
    }

    const completedSession: Mode1Session = {
      ...activeSession,
      completed: true,
      completedAt: finishTime,
      promptHistory: finalHistory,
      usedPromptIds: [...new Set([...activeSession.usedPromptIds, currentPrompt.id])],
    };

    saveActiveSession(null); // Clear from active unfinished
    setFinishedSession(completedSession);
    setCurrentTab('what-comes-next-completed');
  };

  // Timer modifiers for active session
  const handleExtendTimer = (extraSeconds: number) => {
    if (!activeSession) return;
    const updated: Mode1Session = {
      ...activeSession,
      timerExtraSeconds: (activeSession.timerExtraSeconds || 0) + extraSeconds,
    };
    saveActiveSession(updated);
  };

  const handleRemoveTimer = () => {
    if (!activeSession) return;
    const updated: Mode1Session = {
      ...activeSession,
      timerDuration: null,
      timerStartedAt: undefined,
    };
    saveActiveSession(updated);
  };

  const handlePauseToggle = (isPaused: boolean) => {
    // Session state tracking if needed
  };

  const handleUseStuck = () => {
    if (!activeSession) return;
    saveActiveSession({
      ...activeSession,
      stuckUsed: activeSession.stuckUsed + 1,
    });
  };

  // Saving creation to permanent collection
  const handleSaveCreation = (creation: SavedCreation) => {
    saveCreation(creation);
  };

  // Quick Start Actions from Vibe section
  const handleQuickStart = () => {
    handleStartMode1(120, 'tiny-mystery');
  };

  const handleSurpriseMe = () => {
    setIsChaosOpen(true);
  };

  const handleLetsCreate = () => {
    setIsMode1SetupOpen(true);
  };

  const handleWarmUp = () => {
    setIsWarmUpOpen(true);
  };

  // Handling specific starter prompt from "I Don't Know What To Draw"
  const handleStartSpecificPrompt = (promptText: string) => {
    // Start custom short session with this starter
    const customPrompt: Prompt = {
      id: 'custom-' + Date.now(),
      category: 'START',
      text: promptText,
      weight: 1,
      difficulty: 'easy',
      tags: ['starter', 'mood'],
      goodForBeginning: true,
      goodForMiddle: false,
      goodForEnding: false,
      requiresPreviousDrawing: false,
    };

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: 300,
      timerStartedAt: Date.now(),
      difficulty: 'tiny-mystery',
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
      currentPromptId: customPrompt.id,
    };

    saveActiveSession(newSession);
    setCurrentPrompt(customPrompt);
    trackSessionStart();
    setCurrentTab('what-comes-next');
  };

  // Starting a Chaos drawing directly
  const handleStartChaosDrawing = (comboText: string) => {
    const chaosPrompt: Prompt = {
      id: 'chaos-' + Date.now(),
      category: 'CHAOS',
      text: comboText,
      weight: 1,
      difficulty: 'medium',
      tags: ['chaos', 'random'],
      goodForBeginning: true,
      goodForMiddle: true,
      goodForEnding: false,
      requiresPreviousDrawing: false,
    };

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: 600,
      timerStartedAt: Date.now(),
      difficulty: 'chaos',
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
      currentPromptId: chaosPrompt.id,
    };

    saveActiveSession(newSession);
    setCurrentPrompt(chaosPrompt);
    trackSessionStart();
    setCurrentTab('what-comes-next');
  };

  // Handle starting a session from a Character Skill
  const handleStartSkillSession = (skill: CharacterSkill) => {
    const promptDifficulty: 'easy' | 'medium' | 'hard' =
      skill.difficulty === 'beginner' ? 'easy' : skill.difficulty === 'advanced' ? 'hard' : 'medium';

    const skillPrompt: Prompt = {
      id: `skill-prompt-${skill.id}-${Date.now()}`,
      category: 'START',
      text: skill.writtenExercise,
      subtext: `Character Creator Skill ${skill.skillNumber}: ${skill.title}`,
      weight: 1,
      difficulty: promptDifficulty,
      tags: [...skill.tags, 'character-creator'],
      goodForBeginning: true,
      goodForMiddle: true,
      goodForEnding: false,
      requiresPreviousDrawing: false,
      visualReference: skill.visualReference,
    };

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: 300,
      timerStartedAt: Date.now(),
      difficulty: 'tiny-mystery',
      pathway: 'character-creator',
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
      currentPromptId: skillPrompt.id,
    };

    saveActiveSession(newSession);
    setCurrentPrompt(skillPrompt);
    trackSessionStart();
    setCurrentTab('what-comes-next');
  };

  // Handle starting a challenge drawing session
  const handleStartChallenge = (challenge: ChallengeItem, timerSeconds: number | null) => {
    const visualRef = {
      id: `ref-challenge-${challenge.id}`,
      type: 'shape' as const,
      altText: challenge.title,
      title: challenge.title,
      description: challenge.description,
      contextHint: challenge.tip,
    };

    const challengePrompt: Prompt = {
      id: `challenge-${challenge.id}-${Date.now()}`,
      category: 'CHALLENGE',
      text: challenge.prompt,
      subtext: challenge.tip,
      explanation: `${challenge.description}${challenge.visualCue ? ` Starting cue: ${challenge.visualCue}` : ''}`,
      weight: 1,
      difficulty: challenge.difficulty === 'easy' ? 'easy' : challenge.difficulty === 'medium' ? 'medium' : 'hard',
      tags: ['challenge', challenge.difficulty],
      goodForBeginning: true,
      goodForMiddle: true,
      goodForEnding: false,
      requiresPreviousDrawing: false,
      visualReference: visualRef,
    };

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: timerSeconds,
      timerStartedAt: timerSeconds ? Date.now() : undefined,
      difficulty: challenge.difficulty === 'easy' ? 'tiny-mystery' : challenge.difficulty === 'medium' ? 'short-adventure' : 'deep-dive',
      pathway: 'open',
      themeId: selectedThemeId || 'none',
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
      currentPromptId: challengePrompt.id,
    };

    saveActiveSession(newSession);
    setCurrentPrompt(challengePrompt);
    trackSessionStart();
    setIsChallengeModalOpen(false);
    setCurrentTab('what-comes-next');
  };

  // Character Design Mode handlers
  const handleStartCharacterWorkshop = (timerSeconds: number | null, startingStage: number = 0) => {
    setCharacterDesignStageIndex(startingStage);
    setCharacterDesignSpark(null);
    setCharacterDesignTimerDuration(timerSeconds);
    setCharacterDesignStartedAt(Date.now());
    setIsCharacterDesignActive(true);
    setCharacterDesignFinished(false);
    setIsCharacterDesignModalOpen(false);
    trackSessionStart();
  };

  const handleStartCharacterSpark = (spark: CharacterSpark, timerSeconds: number | null) => {
    setCharacterDesignStageIndex(0);
    setCharacterDesignSpark(spark);
    setCharacterDesignTimerDuration(timerSeconds);
    setCharacterDesignStartedAt(Date.now());
    setIsCharacterDesignActive(true);
    setCharacterDesignFinished(false);
    setIsCharacterDesignModalOpen(false);
    trackSessionStart();
  };

  const handleStartCharacterSpecificStage = (stage: CharacterDesignStage, timerSeconds: number | null) => {
    setCharacterDesignStageIndex(stage.stageNumber - 1);
    setCharacterDesignSpark(null);
    setCharacterDesignTimerDuration(timerSeconds);
    setCharacterDesignStartedAt(Date.now());
    setIsCharacterDesignActive(true);
    setCharacterDesignFinished(false);
    setIsCharacterDesignModalOpen(false);
    trackSessionStart();
  };

  const handleCharacterDesignNextStage = () => {
    setCharacterDesignStageIndex((prev) => prev + 1);
  };

  const handleCharacterDesignPrevStage = () => {
    setCharacterDesignStageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleCharacterDesignFinish = () => {
    setIsCharacterDesignActive(false);
    setCharacterDesignFinished(true);
  };

  const handleCharacterDesignLeave = () => {
    setIsCharacterDesignActive(false);
    setCharacterDesignFinished(false);
    setCurrentTab('home');
  };

  const handleSaveCharacterCreation = (creationData: Omit<SavedCreation, 'id' | 'timestamp'>) => {
    const fullCreation: SavedCreation = {
      ...creationData,
      id: 'character-' + Date.now(),
      timestamp: Date.now(),
    };
    saveCreation(fullCreation);
  };

  // Launch a focused drawing session directly from the Master Prompt Sheet
  const handlePracticeMasterPrompt = (prompt: CreativePrompt) => {
    const visualRef = MASTER_VISUAL_REFERENCES[prompt.id] || {
      id: `ref-${prompt.id}`,
      type: prompt.visualReference.type as any,
      title: prompt.visualReference.title || prompt.prompt,
      description: prompt.explanation,
      svgContent: prompt.visualReference.svgContent,
      altText: prompt.visualReference.altText,
      examples: prompt.visualReference.examples,
      whatToNotice: prompt.visualReference.whatToNotice,
      challenge: prompt.visualReference.challenge,
      beginnerTerms: prompt.visualReference.beginnerTerms,
      beginnerFriendly: true,
      tags: prompt.tags,
    };

    const sessionPrompt: Prompt = {
      id: prompt.id,
      text: prompt.prompt,
      explanation: prompt.explanation,
      category: prompt.category as any,
      difficulty: prompt.difficulty,
      tags: prompt.tags,
      visualReference: visualRef,
      examples: prompt.visualReference.examples,
      whatToNotice: prompt.visualReference.whatToNotice,
      challenge: prompt.visualReference.challenge,
      beginnerTerms: prompt.visualReference.beginnerTerms,
      goodForBeginning: true,
      goodForMiddle: true,
      goodForEnding: false,
      requiresPreviousDrawing: false,
      weight: 10,
    };

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: 300,
      timerStartedAt: Date.now(),
      difficulty: 'tiny-mystery',
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
      currentPromptId: sessionPrompt.id,
    };

    saveActiveSession(newSession);
    setCurrentPrompt(sessionPrompt);
    trackSessionStart();
    setIsMasterSheetOpen(false);
    setCurrentTab('what-comes-next');
  };

  // Handle mode chooser selection
  const handleSelectMode = (
    mode:
      | 'what-comes-next'
      | 'chibi-journey'
      | 'character-design'
      | 'warm-up'
      | 'chaos'
      | 'dont-know'
      | 'pathways'
      | 'character-progression'
      | 'master-sheet'
      | 'part-library'
  ) => {
    if (mode === 'what-comes-next') {
      setIsMode1SetupOpen(true);
    } else if (mode === 'chibi-journey') {
      setCurrentTab('chibi-journey');
      setIsChibiJourneyActive(false);
      setIsChibiSheetActive(false);
    } else if (mode === 'part-library') {
      setIsPartLibraryOpen(true);
    } else if (mode === 'character-design') {
      setIsCharacterDesignModalOpen(true);
    } else if (mode === 'master-sheet') {
      setIsMasterSheetOpen(true);
    } else if (mode === 'pathways') {
      setIsPathwayChooserOpen(true);
    } else if (mode === 'character-progression') {
      setIsChallengeModalOpen(true);
    } else if (mode === 'warm-up') {
      setIsWarmUpOpen(true);
    } else if (mode === 'chaos') {
      setIsChaosOpen(true);
    } else if (mode === 'dont-know') {
      setIsDontKnowOpen(true);
    }
  };

  // Navigation router
  const handleNavigate = (tab: string) => {
    if (tab === 'home') {
      setCurrentTab('home');
    } else if (tab === 'chibi-journey') {
      setCurrentTab('chibi-journey');
      setIsChibiJourneyActive(false);
      setIsChibiSheetActive(false);
    } else if (tab === 'character-design') {
      setIsCharacterDesignModalOpen(true);
    } else if (tab === 'master-sheet') {
      setIsMasterSheetOpen(true);
    } else if (tab === 'what-comes-next') {
      if (activeSession && !activeSession.completed) {
        setCurrentTab('what-comes-next');
      } else {
        setIsMode1SetupOpen(true);
      }
    } else if (tab === 'practice') {
      setIsWarmUpOpen(true);
    } else if (tab === 'challenges') {
      setIsChaosOpen(true);
    } else if (tab === 'collection') {
      setCurrentTab('collection');
    } else if (tab === 'progress') {
      setCurrentTab('progress');
    } else if (tab === 'settings') {
      setIsSettingsOpen(true);
    } else if (tab === 'part-library') {
      setIsPartLibraryOpen(true);
    }
  };

  // Check if actively in a drawing session to hide navigation and maximize paper presence
  const isDrawingSession =
    (currentTab === 'what-comes-next' && !!(activeSession && currentPrompt)) ||
    isCharacterDesignActive ||
    (currentTab === 'chibi-journey' && isChibiJourneyActive);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#16171A] flex flex-col font-sans selection:bg-[#2752E7] selection:text-white">
      {/* Offline Status Alert Banner */}
      {!isOnline && !isOfflineDismissed && (
        <div
          role="status"
          aria-live="polite"
          className="bg-white border-b border-[#E5E5DE] text-[#16171A] px-4 py-2 text-xs font-semibold text-center flex items-center justify-center gap-3 shadow-2xs"
        >
          <span className="font-mono-code text-[11px] text-[#2752E7]">OFFLINE MODE</span>
          <span className="font-normal text-[#686862]">
            Your drawing session continues locally without interruption.
          </span>
          <button
            onClick={() => setIsOfflineDismissed(true)}
            className="px-2.5 py-1 rounded-md bg-[#16171A] hover:bg-[#2C2D32] text-white text-[11px] font-semibold transition-colors ml-1"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Top Navigation Bar (Hidden during active drawing session) */}
      {!isDrawingSession && (
        <Header
          currentTab={currentTab}
          onNavigate={handleNavigate}
          onOpenCreateChooser={() => setIsChooserOpen(true)}
          onOpenMasterSheet={() => setIsMasterSheetOpen(true)}
          onOpenWarmUp={() => setIsWarmUpOpen(true)}
          onOpenChaos={() => setIsChaosOpen(true)}
          onOpenChallenge={() => setIsChallengeModalOpen(true)}
          onOpenCharacterDesign={() => setIsCharacterDesignModalOpen(true)}
          onOpenChibiJourney={() => {
            setCurrentTab('chibi-journey');
            setIsChibiJourneyActive(false);
            setIsChibiSheetActive(false);
          }}
          onOpenPartLibrary={() => setIsPartLibraryOpen(true)}
          onOpenPathways={() => setIsPathwayChooserOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          unfinishedSessionExists={!!(activeSession && !activeSession.completed)}
        />
      )}

      {/* Main Content Area */}
      <main className={isDrawingSession ? 'flex-1' : 'flex-1 pb-16 md:pb-0'}>
        {/* VIEW: Chibi Character Journey System */}
        {currentTab === 'chibi-journey' && isChibiJourneyActive && activeChibiCharacter ? (
          <ChibiActiveJourneyView
            character={activeChibiCharacter}
            preferences={chibiPreferences}
            onUpdateCharacter={updateActiveChibiCharacter}
            onNextStage={handleChibiNextStage}
            onJumpToStage={jumpToChibiStage}
            onExitToLanding={() => {
              setIsChibiJourneyActive(false);
              setIsChibiSheetActive(false);
            }}
            onCompleteJourney={handleChibiCompleteJourney}
          />
        ) : currentTab === 'chibi-journey' && isChibiSheetActive && activeChibiCharacter ? (
          <ChibiCharacterSheetView
            character={activeChibiCharacter}
            onSaveToCollection={handleSaveChibiCreation}
            onContinueStory={() => setIsChibiStoryModalOpen(true)}
            onCreateAnother={handleStartNewChibi}
            onBackToHome={() => setCurrentTab('home')}
            onRevisitStage={(stg) => {
              jumpToChibiStage(stg);
              setIsChibiSheetActive(false);
              setIsChibiJourneyActive(true);
            }}
          />
        ) : currentTab === 'chibi-journey' ? (
          <ChibiLandingView
            activeCharacter={activeChibiCharacter}
            savedCharacters={savedChibiCharacters}
            stats={chibiStats}
            preferences={chibiPreferences}
            onStartNew={handleStartNewChibi}
            onContinue={handleContinueChibi}
            onOpenMyCharacters={() => setIsMyCharactersOpen(true)}
            onOpenChallenges={() => setIsChibiChallengesOpen(true)}
            onOpenHowItWorks={() => setIsChibiHowItWorksOpen(true)}
            onOpenPartLibrary={() => setIsPartLibraryOpen(true)}
            onUpdatePreferences={updateChibiPreferences}
            onBackToHome={() => setCurrentTab('home')}
          />
        ) : isCharacterDesignActive ? (
          <CharacterDesignActiveView
            currentStageIndex={characterDesignStageIndex}
            totalStages={CHARACTER_DESIGN_STAGES.length}
            spark={characterDesignSpark}
            timerDuration={characterDesignTimerDuration}
            onNextStage={handleCharacterDesignNextStage}
            onPrevStage={handleCharacterDesignPrevStage}
            onFinish={handleCharacterDesignFinish}
            onLeave={handleCharacterDesignLeave}
          />
        ) : characterDesignFinished ? (
          /* VIEW: Character Design Completion & Reflection */
          <CharacterDesignCompletionView
            stagesCompleted={characterDesignStageIndex + 1}
            totalStages={CHARACTER_DESIGN_STAGES.length}
            spark={characterDesignSpark}
            durationMinutes={
              characterDesignStartedAt
                ? Math.max(1, Math.round((Date.now() - characterDesignStartedAt) / 60000))
                : 1
            }
            onSaveToCollection={handleSaveCharacterCreation}
            onTryAnother={() => {
              setCharacterDesignFinished(false);
              setIsCharacterDesignModalOpen(true);
            }}
            onViewCollection={() => {
              setCharacterDesignFinished(false);
              setCurrentTab('collection');
            }}
            onDoneForNow={() => {
              setCharacterDesignFinished(false);
              setCurrentTab('home');
            }}
          />
        ) : currentTab === 'what-comes-next' && activeSession && currentPrompt ? (
          <Mode1ActiveView
            session={activeSession}
            currentPrompt={currentPrompt}
            onNextPrompt={handleNextPrompt}
            onFinishSession={handleFinishMode1}
            onExtendTimer={handleExtendTimer}
            onRemoveTimer={handleRemoveTimer}
            onPauseToggle={handlePauseToggle}
            onUseStuck={handleUseStuck}
            onExitToHome={() => setCurrentTab('home')}
            onChangeTheme={handleChangeSessionTheme}
          />
        ) : currentTab === 'what-comes-next-completed' && finishedSession ? (
          /* VIEW 2: Mode 1 Session Completion & Reflection */
          <Mode1CompletionView
            session={finishedSession}
            onSaveToCollection={handleSaveCreation}
            onTryAnother={() => {
              setFinishedSession(null);
              setIsMode1SetupOpen(true);
            }}
            onViewCollection={() => {
              setFinishedSession(null);
              setCurrentTab('collection');
            }}
            onDoneForNow={() => {
              setFinishedSession(null);
              setCurrentTab('home');
            }}
          />
        ) : currentTab === 'collection' ? (
          /* VIEW 3: Sketchbook Collection */
          <CollectionView
            creations={savedCreations}
            onOpenCreate={() => setIsChooserOpen(true)}
            onBackToHome={() => setCurrentTab('home')}
            onDeleteCreation={deleteCreation}
          />
        ) : currentTab === 'progress' ? (
          /* VIEW 4: Creative Journey Progress */
          <ProgressView
            stats={stats}
            onBackToHome={() => setCurrentTab('home')}
            onStartDrawing={() => setIsChooserOpen(true)}
          />
        ) : (
          /* VIEW 5: Home Screen Central Hub */
          <div className="app-container space-y-6">
            {/* 1. Hero Section */}
            <HeroSection
              onStartCreating={() => setIsChooserOpen(true)}
              onOpenMasterSheet={() => setIsMasterSheetOpen(true)}
              onOpenWhatIs={() => setIsWhatIsModalOpen(true)}
              onOpenChibiJourney={() => {
                setCurrentTab('chibi-journey');
                setIsChibiJourneyActive(false);
                setIsChibiSheetActive(false);
              }}
            />

            {/* 2. Unfinished Session Card (Only shows if unfinished session exists) */}
            <ContinueSessionCard
              session={activeSession}
              onContinue={() => setCurrentTab('what-comes-next')}
              onStartNew={() => setIsMode1SetupOpen(true)}
            />

            {/* 3. Section 8 Home Hub Cards: WHAT COMES NEXT?, I DON'T KNOW WHAT TO DRAW, CHIBI JOURNEY, QUICK ACTIVITIES */}
            <HomeHubCards
              onStartWhatComesNext={() => {
                setSelectedPathway('open');
                setIsMode1SetupOpen(true);
              }}
              onOpenDontKnow={() => setIsDontKnowOpen(true)}
              onOpenCharacterDesign={() => setIsCharacterDesignModalOpen(true)}
              onOpenChibiJourney={() => {
                setCurrentTab('chibi-journey');
                setIsChibiJourneyActive(false);
                setIsChibiSheetActive(false);
              }}
              onOpenChibiChallenges={() => setIsChibiChallengesOpen(true)}
              onOpenMyCharacters={() => setIsMyCharactersOpen(true)}
              activeChibiCharacterName={activeChibiCharacter?.name || (activeChibiCharacter && activeChibiCharacter.completedStages.length > 0 ? 'Your Character' : undefined)}
              activeChibiStageCount={activeChibiCharacter?.completedStages.length || 0}
              onOpenWarmUp={() => setIsWarmUpOpen(true)}
              onOpenChaos={() => setIsChaosOpen(true)}
              onOpenChallenge={() => setIsChallengeModalOpen(true)}
              onOpenPartLibrary={() => setIsPartLibraryOpen(true)}
            />

            {/* 4. Creative Themes Section (Universal Theme System) */}
            <CreativeThemesSection
              selectedThemeId={selectedThemeId || 'none'}
              onSelectTheme={(themeId) => updateSelectedTheme(themeId)}
              onOpenThemeModal={() => setIsThemeModalOpen(true)}
              onStartWithTheme={(themeId) => {
                updateSelectedTheme(themeId);
                handleStartMode1(300, 'tiny-mystery', selectedPathway, themeId);
              }}
            />

            {/* 5. Quick Start / Pick Your Vibe */}
            <PickYourVibeSection
              onQuickStart={handleQuickStart}
              onSurpriseMe={handleSurpriseMe}
              onLetsCreate={handleLetsCreate}
              onWarmUp={handleWarmUp}
            />

            {/* 6. Creative Journey User Statistics */}
            <CreativeJourneyStatsSection
              stats={stats}
              onViewDetailedJourney={() => setCurrentTab('progress')}
            />

            {/* 7. Recent Creations Sketchbook Grid */}
            <RecentCreationsSection
              creations={savedCreations}
              onOpenCreate={() => setIsChooserOpen(true)}
              onViewAll={() => setCurrentTab('collection')}
            />

            {/* 8. Unfinished Ideas encouragement */}
            <UnfinishedIdeasSection
              session={activeSession}
              onResume={() => setCurrentTab('what-comes-next')}
              onNew={() => setIsMode1SetupOpen(true)}
            />

            {/* 9. Optional Faith Content Card */}
            <FaithContentCard enabled={settings.enableFaithContent} />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <CreationChooserModal
        isOpen={isChooserOpen}
        onClose={() => setIsChooserOpen(false)}
        onSelectMode={handleSelectMode}
      />

      <ThemeChooserModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        selectedThemeId={selectedThemeId || 'none'}
        onSelectTheme={(themeId) => updateSelectedTheme(themeId)}
      />

      <PathwayChooserModal
        isOpen={isPathwayChooserOpen}
        onClose={() => setIsPathwayChooserOpen(false)}
        selectedPathway={selectedPathway}
        onSelectPathway={handleSelectPathway}
        onOpenProgression={() => {
          setIsPathwayChooserOpen(false);
          setIsCharacterProgressionOpen(true);
        }}
      />

      {/* 22-Skill Character Creator Progression Track */}
      <CharacterProgressionModal
        isOpen={isCharacterProgressionOpen}
        onClose={() => setIsCharacterProgressionOpen(false)}
        onStartSkillSession={handleStartSkillSession}
      />

      {/* 9-Stage Character Design Workshop & Spark Modal */}
      <CharacterDesignModal
        isOpen={isCharacterDesignModalOpen}
        onClose={() => setIsCharacterDesignModalOpen(false)}
        onStartFullWorkshop={handleStartCharacterWorkshop}
        onStartSparkSession={handleStartCharacterSpark}
        onStartSpecificStage={handleStartCharacterSpecificStage}
      />

      {/* Chibi Character Journey Modals */}
      <MyCharactersModal
        isOpen={isMyCharactersOpen}
        onClose={() => setIsMyCharactersOpen(false)}
        characters={savedChibiCharacters}
        onSelectCharacter={(char) => {
          loadChibiCharacter(char);
          setIsChibiSheetActive(true);
          setIsChibiJourneyActive(false);
          setCurrentTab('chibi-journey');
          setIsMyCharactersOpen(false);
        }}
        onDeleteCharacter={deleteChibiCharacter}
        onToggleFavorite={toggleChibiFavorite}
        onStartNew={handleStartNewChibi}
      />

      <ChibiChallengesModal
        isOpen={isChibiChallengesOpen}
        onClose={() => setIsChibiChallengesOpen(false)}
        onStartChallengeJourney={handleStartChallengeChibi}
      />

      <ChibiHowItWorksModal
        isOpen={isChibiHowItWorksOpen}
        onClose={() => setIsChibiHowItWorksOpen(false)}
      />

      <ChibiPartLibraryModal
        isOpen={isPartLibraryOpen}
        onClose={() => setIsPartLibraryOpen(false)}
        onPracticePart={(part) => {
          handleStartSpecificPrompt(
            `Practice drawing this chibi part: ${part.name}. ${part.description}`
          );
        }}
      />

      {activeChibiCharacter && (
        <ChibiStoryContinuationModal
          isOpen={isChibiStoryModalOpen}
          onClose={() => setIsChibiStoryModalOpen(false)}
          character={activeChibiCharacter}
        />
      )}

      {/* Challenge Me Modal (Progressive Skill Missions) */}
      <ChallengeMeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
        onStartChallenge={handleStartChallenge}
      />

      <Mode1SetupModal
        isOpen={isMode1SetupOpen}
        onClose={() => setIsMode1SetupOpen(false)}
        onStartSession={handleStartMode1}
        pathway={selectedPathway}
        onChangePathway={() => {
          setIsMode1SetupOpen(false);
          setIsPathwayChooserOpen(true);
        }}
      />

      <WarmUpModal
        isOpen={isWarmUpOpen}
        onClose={() => setIsWarmUpOpen(false)}
        onFinishWarmUp={() => {
          // Increment warmup stats
        }}
        themeId={selectedThemeId}
      />

      <CreativeChaosModal
        isOpen={isChaosOpen}
        onClose={() => setIsChaosOpen(false)}
        onStartChaosDrawing={handleStartChaosDrawing}
        themeId={selectedThemeId}
      />

      <IDontKnowModal
        isOpen={isDontKnowOpen}
        onClose={() => setIsDontKnowOpen(false)}
        onStartSpecificPrompt={handleStartSpecificPrompt}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={updateSettings}
        onClearAllData={clearAllData}
        onOpenTestSuite={() => setIsTestSuiteOpen(true)}
      />

      <PromptTestSuiteModal
        isOpen={isTestSuiteOpen}
        onClose={() => setIsTestSuiteOpen(false)}
      />

      {/* 30-Section Prompt + Visual Example Master Sheet Explorer */}
      <VisualReferenceMasterSheetModal
        isOpen={isMasterSheetOpen}
        onClose={() => setIsMasterSheetOpen(false)}
        onSelectPrompt={handlePracticeMasterPrompt}
      />

      {/* First-Time Experience Onboarding Modal (Point 2 & 3) */}
      <FirstTimeExperienceModal
        isOpen={isFirstTimeOpen}
        onClose={handleCloseFirstTime}
        onOpenWhatIs={() => setIsWhatIsModalOpen(true)}
        onSelectFlow={handleFirstTimeChoice}
      />

      {/* What is Create Again? Explanation Modal */}
      <WhatIsCreateAgainModal
        isOpen={isWhatIsModalOpen}
        onClose={() => setIsWhatIsModalOpen(false)}
        onStartCreating={() => setIsChooserOpen(true)}
      />

      {/* Minimalist Warm Paper Footer (Hidden during active drawing session) */}
      {!isDrawingSession && (
        <Footer
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenTests={() => setIsTestSuiteOpen(true)}
        />
      )}

      {/* Mobile Bottom Navigation Bar (Hidden during active drawing session) */}
      {!isDrawingSession && (
        <MobileBottomNav
          currentTab={currentTab}
          onNavigate={handleNavigate}
          onOpenCreateChooser={() => setIsChooserOpen(true)}
          onOpenChibiJourney={() => {
            setCurrentTab('chibi-journey');
            setIsChibiJourneyActive(false);
            setIsChibiSheetActive(false);
          }}
          activeChibiExists={!!(activeChibiCharacter && activeChibiCharacter.completedStages.length > 0)}
          unfinishedSessionExists={!!(activeSession && !activeSession.completed)}
        />
      )}
    </div>
  );
}
