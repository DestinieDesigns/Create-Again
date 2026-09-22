import { useEffect, useState } from 'react';
import { CreativeStats, Mode1Session, SavedCreation, UserSettings } from '../types/session';

const ACTIVE_SESSION_KEY = 'create_again_active_session';
const SAVED_CREATIONS_KEY = 'create_again_saved_creations';
const STATS_KEY = 'create_again_creative_stats';
const SETTINGS_KEY = 'create_again_settings';

const DEFAULT_STATS: CreativeStats = {
  thingsCreated: 0,
  mysteryDrawings: 0,
  warmupsCompleted: 0,
  challengesCompleted: 0,
  creativeSessions: 0,
  daysCreating: 0,
};

const DEFAULT_SETTINGS: UserSettings = {
  enableFaithContent: false,
  hapticFeedback: true,
  ambientSound: false,
};

export function useCreateAgainStorage() {
  const [activeSession, setActiveSessionState] = useState<Mode1Session | null>(() => {
    try {
      const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const [savedCreations, setSavedCreations] = useState<SavedCreation[]>(() => {
    try {
      const raw = localStorage.getItem(SAVED_CREATIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [stats, setStats] = useState<CreativeStats>(() => {
    try {
      const raw = localStorage.getItem(STATS_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  });

  const [settings, setSettingsState] = useState<UserSettings>(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Save active session
  const saveActiveSession = (session: Mode1Session | null) => {
    setActiveSessionState(session);
    try {
      if (session) {
        localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(ACTIVE_SESSION_KEY);
      }
    } catch (e) {
      console.error('Failed to save active session', e);
    }
  };

  // Add a newly finished creation to collection & update stats
  const saveCreation = (creation: SavedCreation) => {
    const updated = [creation, ...savedCreations];
    setSavedCreations(updated);
    try {
      localStorage.setItem(SAVED_CREATIONS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save creation', e);
    }

    // Update stats
    const today = new Date().toISOString().split('T')[0];
    const isNewDay = stats.lastActiveDate !== today;

    const newStats: CreativeStats = {
      ...stats,
      thingsCreated: stats.thingsCreated + 1,
      mysteryDrawings: stats.mysteryDrawings + (creation.mode.includes('What Comes Next') ? 1 : 0),
      creativeSessions: stats.creativeSessions + 1,
      daysCreating: stats.daysCreating + (isNewDay ? 1 : 0),
      lastActiveDate: today,
    };

    setStats(newStats);
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(newStats));
    } catch (e) {
      console.error('Failed to save stats', e);
    }
  };

  // Increment creative session count (e.g. when starting)
  const trackSessionStart = () => {
    const today = new Date().toISOString().split('T')[0];
    const isNewDay = stats.lastActiveDate !== today;

    const newStats: CreativeStats = {
      ...stats,
      creativeSessions: stats.creativeSessions + 1,
      daysCreating: stats.daysCreating + (isNewDay ? 1 : 0),
      lastActiveDate: today,
    };

    setStats(newStats);
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(newStats));
    } catch {
      // ignore
    }
  };

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    const merged = { ...settings, ...newSettings };
    setSettingsState(merged);
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  };

  const clearAllData = () => {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
    localStorage.removeItem(SAVED_CREATIONS_KEY);
    localStorage.removeItem(STATS_KEY);
    localStorage.removeItem('create_again_recent_prompts');
    setActiveSessionState(null);
    setSavedCreations([]);
    setStats(DEFAULT_STATS);
  };

  return {
    activeSession,
    saveActiveSession,
    savedCreations,
    saveCreation,
    stats,
    trackSessionStart,
    settings,
    updateSettings,
    clearAllData,
  };
}
