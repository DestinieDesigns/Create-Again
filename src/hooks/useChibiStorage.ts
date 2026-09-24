import { useState, useEffect, useCallback } from 'react';
import {
  ChibiCharacter,
  ChibiProgressStats,
  ChibiPreferences,
  ChibiJourneyStageId,
} from '../types/chibi';
import { CHIBI_JOURNEY_STAGES } from '../data/chibiJourneyData';

const CHARACTERS_KEY = 'createAgain.chibiCharacters';
const ACTIVE_KEY = 'createAgain.activeChibiCharacter';
const PROGRESS_KEY = 'createAgain.chibiProgress';
const PREFS_KEY = 'createAgain.chibiPreferences';

const DEFAULT_STATS: ChibiProgressStats = {
  charactersStarted: 0,
  charactersCompleted: 0,
  characterSheetsCompleted: 0,
  expressionsPracticed: 0,
  posesPracticed: 0,
  animalsCreated: 0,
  creaturesCreated: 0,
  scenesCreated: 0,
  storiesCreated: 0,
};

const DEFAULT_PREFS: ChibiPreferences = {
  journeyMode: 'guided',
  skillLevel: 'beginner',
};

export function useChibiStorage() {
  const [activeCharacter, setActiveCharacter] = useState<ChibiCharacter | null>(() => {
    try {
      const stored = localStorage.getItem(ACTIVE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [savedCharacters, setSavedCharacters] = useState<ChibiCharacter[]>(() => {
    try {
      const stored = localStorage.getItem(CHARACTERS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [stats, setStats] = useState<ChibiProgressStats>(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY);
      return stored ? { ...DEFAULT_STATS, ...JSON.parse(stored) } : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  });

  const [preferences, setPreferences] = useState<ChibiPreferences>(() => {
    try {
      const stored = localStorage.getItem(PREFS_KEY);
      return stored ? { ...DEFAULT_PREFS, ...JSON.parse(stored) } : DEFAULT_PREFS;
    } catch {
      return DEFAULT_PREFS;
    }
  });

  // Sync state to localStorage
  useEffect(() => {
    try {
      if (activeCharacter) {
        localStorage.setItem(ACTIVE_KEY, JSON.stringify(activeCharacter));
      } else {
        localStorage.removeItem(ACTIVE_KEY);
      }
    } catch (err) {
      console.error('Failed to sync active character:', err);
    }
  }, [activeCharacter]);

  useEffect(() => {
    try {
      localStorage.setItem(CHARACTERS_KEY, JSON.stringify(savedCharacters));
    } catch (err) {
      console.error('Failed to sync saved characters:', err);
    }
  }, [savedCharacters]);

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(stats));
    } catch (err) {
      console.error('Failed to sync chibi stats:', err);
    }
  }, [stats]);

  useEffect(() => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(preferences));
    } catch (err) {
      console.error('Failed to sync chibi preferences:', err);
    }
  }, [preferences]);

  // Start new character
  const startNewCharacter = useCallback((initialProps?: Partial<ChibiCharacter>) => {
    const newChar: ChibiCharacter = {
      id: 'chibi-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      completedStages: [],
      currentStage: 'idea',
      ...initialProps,
    };
    setActiveCharacter(newChar);
    setStats((prev) => ({
      ...prev,
      charactersStarted: prev.charactersStarted + 1,
    }));
    return newChar;
  }, []);

  // Update active character properties
  const updateActiveCharacter = useCallback((updates: Partial<ChibiCharacter>) => {
    setActiveCharacter((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        ...updates,
        updatedAt: Date.now(),
      };
    });
  }, []);

  // Stage advancement & completion
  const advanceToNextStage = useCallback(() => {
    setActiveCharacter((prev) => {
      if (!prev) return null;
      const currentIdx = CHIBI_JOURNEY_STAGES.findIndex((s) => s.id === prev.currentStage);
      const currentStageId = prev.currentStage as ChibiJourneyStageId;

      const completed = prev.completedStages.includes(currentStageId)
        ? prev.completedStages
        : [...prev.completedStages, currentStageId];

      const nextStage =
        currentIdx < CHIBI_JOURNEY_STAGES.length - 1
          ? CHIBI_JOURNEY_STAGES[currentIdx + 1].id
          : 'character-sheet';

      return {
        ...prev,
        completedStages: completed,
        currentStage: nextStage,
        updatedAt: Date.now(),
      };
    });
  }, []);

  // Jump to or revisit a stage
  const jumpToStage = useCallback((stageId: ChibiJourneyStageId) => {
    setActiveCharacter((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentStage: stageId,
        updatedAt: Date.now(),
      };
    });
  }, []);

  // Save active character to local collection & update statistics
  const saveActiveToCollection = useCallback(
    (photoDataUrl?: string) => {
      if (!activeCharacter) return null;

      const updatedChar: ChibiCharacter = {
        ...activeCharacter,
        photoDataUrl: photoDataUrl || activeCharacter.photoDataUrl,
        updatedAt: Date.now(),
        completedStages: Array.from(
          new Set([...activeCharacter.completedStages, 'character-sheet'])
        ),
      };

      setSavedCharacters((prev) => {
        const existingIdx = prev.findIndex((c) => c.id === updatedChar.id);
        if (existingIdx >= 0) {
          const next = [...prev];
          next[existingIdx] = updatedChar;
          return next;
        }
        return [updatedChar, ...prev];
      });

      setStats((prev) => ({
        ...prev,
        charactersCompleted: prev.charactersCompleted + 1,
        characterSheetsCompleted: prev.characterSheetsCompleted + 1,
        expressionsPracticed: prev.expressionsPracticed + 3,
        posesPracticed: prev.posesPracticed + 3,
        scenesCreated: prev.scenesCreated + 1,
        storiesCreated: prev.storiesCreated + 1,
      }));

      setActiveCharacter(updatedChar);
      return updatedChar;
    },
    [activeCharacter]
  );

  // Resume or load a character
  const loadCharacter = useCallback((character: ChibiCharacter) => {
    setActiveCharacter(character);
  }, []);

  // Delete saved character
  const deleteCharacter = useCallback((id: string) => {
    setSavedCharacters((prev) => prev.filter((c) => c.id !== id));
    setActiveCharacter((prev) => (prev?.id === id ? null : prev));
  }, []);

  // Toggle favorite
  const toggleFavorite = useCallback((id: string) => {
    setSavedCharacters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
    setActiveCharacter((prev) =>
      prev?.id === id ? { ...prev, isFavorite: !prev.isFavorite } : prev
    );
  }, []);

  // Reset active session
  const resetActiveCharacter = useCallback(() => {
    setActiveCharacter(null);
  }, []);

  // Update preferences
  const updatePreferences = useCallback((prefs: Partial<ChibiPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...prefs }));
  }, []);

  return {
    activeCharacter,
    savedCharacters,
    stats,
    preferences,
    startNewCharacter,
    updateActiveCharacter,
    advanceToNextStage,
    jumpToStage,
    saveActiveToCollection,
    loadCharacter,
    deleteCharacter,
    toggleFavorite,
    resetActiveCharacter,
    updatePreferences,
  };
}
