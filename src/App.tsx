import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Home sections
import { HeroSection } from './components/home/HeroSection';
import { CreationChooserModal } from './components/home/CreationChooserModal';
import { FeaturedWhatComesNextCard } from './components/home/FeaturedWhatComesNextCard';
import { ContinueSessionCard } from './components/home/ContinueSessionCard';
import { PickYourVibeSection } from './components/home/PickYourVibeSection';
import { CreativeJourneyStatsSection } from './components/home/CreativeJourneyStatsSection';
import { RecentCreationsSection } from './components/home/RecentCreationsSection';
import { UnfinishedIdeasSection } from './components/home/UnfinishedIdeasSection';
import { FaithContentCard } from './components/home/FaithContentCard';

// Mode 1 components
import { Mode1SetupModal } from './components/mode1/Mode1SetupModal';
import { Mode1ActiveView } from './components/mode1/Mode1ActiveView';
import { Mode1CompletionView } from './components/mode1/Mode1CompletionView';

// Other modals / views
import { WarmUpModal } from './components/warmup/WarmUpModal';
import { CreativeChaosModal } from './components/chaos/CreativeChaosModal';
import { IDontKnowModal } from './components/stuck/IDontKnowModal';
import { CollectionView } from './components/collection/CollectionView';
import { ProgressView } from './components/progress/ProgressView';
import { SettingsModal } from './components/settings/SettingsModal';
import { PromptTestSuiteModal } from './components/testing/PromptTestSuiteModal';

// Storage and Prompt selector
import { useCreateAgainStorage } from './hooks/useCreateAgainStorage';
import { getNextRandomPrompt, recordRecentPromptId } from './utils/promptSelector';
import { MODE1_PROMPTS } from './data/mode1Prompts';
import { AdventureType, Prompt } from './types/prompt';
import { Mode1Session, SavedCreation } from './types/session';

export default function App() {
  const {
    activeSession,
    saveActiveSession,
    savedCreations,
    saveCreation,
    stats,
    trackSessionStart,
    settings,
    updateSettings,
    clearAllData,
  } = useCreateAgainStorage();

  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<'home' | 'what-comes-next' | 'what-comes-next-completed' | 'collection' | 'progress'>('home');

  // Modal states
  const [isChooserOpen, setIsChooserOpen] = useState(false);
  const [isMode1SetupOpen, setIsMode1SetupOpen] = useState(false);
  const [isWarmUpOpen, setIsWarmUpOpen] = useState(false);
  const [isChaosOpen, setIsChaosOpen] = useState(false);
  const [isDontKnowOpen, setIsDontKnowOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTestSuiteOpen, setIsTestSuiteOpen] = useState(false);

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
      // If prompt wasn't cached, pick next
      const nextP = getNextRandomPrompt(activeSession);
      setCurrentPrompt(nextP);
    }
  }, [activeSession]);

  // Start a new Mode 1 Session
  const handleStartMode1 = (duration: number | null, difficulty: AdventureType) => {
    setIsMode1SetupOpen(false);

    const newSession: Mode1Session = {
      id: 'session-' + Date.now(),
      sessionSeed: 'seed-' + Math.random().toString(36).substring(2),
      startedAt: Date.now(),
      timerDuration: duration,
      timerStartedAt: duration ? Date.now() : undefined,
      difficulty,
      usedPromptIds: [],
      promptHistory: [],
      completed: false,
      stuckUsed: 0,
    };

    const firstPrompt = getNextRandomPrompt(newSession);
    newSession.currentPromptId = firstPrompt.id;

    saveActiveSession(newSession);
    setCurrentPrompt(firstPrompt);
    trackSessionStart();
    setCurrentTab('what-comes-next');
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
        shownAt: activeSession.promptHistory.length === 0 ? activeSession.startedAt : (activeSession.promptHistory[activeSession.promptHistory.length - 1]?.completedAt || now),
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

    // Calculate strictly next prompt (never pre-computed!)
    const nextP = getNextRandomPrompt(updatedSession);
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

  // Handle mode chooser selection
  const handleSelectMode = (mode: 'what-comes-next' | 'warm-up' | 'chaos' | 'dont-know') => {
    if (mode === 'what-comes-next') {
      setIsMode1SetupOpen(true);
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
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2723] flex flex-col font-sans selection:bg-[#E06D53] selection:text-white">
      {/* Top Navigation Bar */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenCreateChooser={() => setIsChooserOpen(true)}
        unfinishedSessionExists={!!(activeSession && !activeSession.completed)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: Active Mode 1 Drawing Session */}
        {currentTab === 'what-comes-next' && activeSession && currentPrompt ? (
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
          <div className="space-y-4">
            {/* 1. Hero Section */}
            <HeroSection
              onStartCreating={() => setIsChooserOpen(true)}
              onDontKnowWhatToDraw={() => setIsDontKnowOpen(true)}
            />

            {/* 2. Unfinished Session Card (Only shows if unfinished session exists) */}
            <ContinueSessionCard
              session={activeSession}
              onContinue={() => setCurrentTab('what-comes-next')}
              onStartNew={() => setIsMode1SetupOpen(true)}
            />

            {/* 3. Featured Signature Mode (What Comes Next?) */}
            <FeaturedWhatComesNextCard
              onStartMystery={() => setIsMode1SetupOpen(true)}
            />

            {/* 4. Quick Start / Pick Your Vibe */}
            <PickYourVibeSection
              onQuickStart={handleQuickStart}
              onSurpriseMe={handleSurpriseMe}
              onLetsCreate={handleLetsCreate}
              onWarmUp={handleWarmUp}
            />

            {/* 5. Creative Journey User Statistics */}
            <CreativeJourneyStatsSection
              stats={stats}
              onViewDetailedJourney={() => setCurrentTab('progress')}
            />

            {/* 6. Recent Creations Sketchbook Grid */}
            <RecentCreationsSection
              creations={savedCreations}
              onOpenCreate={() => setIsChooserOpen(true)}
              onViewAll={() => setCurrentTab('collection')}
            />

            {/* 7. Unfinished Ideas encouragement */}
            <UnfinishedIdeasSection
              session={activeSession}
              onResume={() => setCurrentTab('what-comes-next')}
              onNew={() => setIsMode1SetupOpen(true)}
            />

            {/* 8. Optional Faith Content Card */}
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

      <Mode1SetupModal
        isOpen={isMode1SetupOpen}
        onClose={() => setIsMode1SetupOpen(false)}
        onStartSession={handleStartMode1}
      />

      <WarmUpModal
        isOpen={isWarmUpOpen}
        onClose={() => setIsWarmUpOpen(false)}
        onFinishWarmUp={() => {
          // Increment warmup stats
        }}
      />

      <CreativeChaosModal
        isOpen={isChaosOpen}
        onClose={() => setIsChaosOpen(false)}
        onStartChaosDrawing={handleStartChaosDrawing}
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

      {/* Minimalist Warm Paper Footer */}
      <Footer
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenTests={() => setIsTestSuiteOpen(true)}
      />
    </div>
  );
}
