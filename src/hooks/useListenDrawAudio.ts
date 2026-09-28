import { useState, useEffect, useCallback, useRef } from 'react';
import { ListenDrawVoiceStyle } from '../types/listenDraw';

export interface ListenDrawAudioHook {
  isSupported: boolean;
  isSpeaking: boolean;
  currentCaption: string | null;
  lastSpokenInstruction: string | null;
  speak: (text: string, onEnd?: () => void) => void;
  replayLast: () => void;
  stop: () => void;
  setVoiceStyle: (style: ListenDrawVoiceStyle) => void;
}

/**
 * Audio companion hook for Listen & Draw mode.
 * - Handles SpeechSynthesis events: onstart, onend, onerror
 * - Implements voice personalities (Calm, Guided, Think Fast, Minimal)
 * - Has fallback safety timer to ensure the session state machine never freezes
 *   even if browser SpeechSynthesis fails to trigger onend
 */
export function useListenDrawAudio(initialStyle: ListenDrawVoiceStyle = 'calm'): ListenDrawAudioHook {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentCaption, setCurrentCaption] = useState<string | null>(null);
  const [lastSpokenInstruction, setLastSpokenInstruction] = useState<string | null>(null);
  const [voiceStyle, setVoiceStyle] = useState<ListenDrawVoiceStyle>(initialStyle);

  const styleRef = useRef<ListenDrawVoiceStyle>(initialStyle);
  styleRef.current = voiceStyle;

  const currentCallbackRef = useRef<(() => void) | null>(null);
  const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const clearSafetyTimeout = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clearSafetyTimeout();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    setIsSpeaking(false);
    setCurrentCaption(null);
    currentCallbackRef.current = null;
  }, [clearSafetyTimeout]);

  const speak = useCallback(
    (text: string, onEnd?: () => void) => {
      if (!text || typeof window === 'undefined') {
        if (onEnd) onEnd();
        return;
      }

      if (!('speechSynthesis' in window)) {
        setCurrentCaption(text);
        // Fallback if not supported: wait estimated reading time then finish
        const waitMs = Math.max(1500, text.split(' ').length * 300);
        setTimeout(() => {
          if (onEnd) onEnd();
        }, waitMs);
        return;
      }

      try {
        window.speechSynthesis.cancel();
        clearSafetyTimeout();

        // Clean text of markdown/technical symbols
        const cleanText = text
          .replace(/[*_#`~[\]]/g, '')
          .replace(/\s+/g, ' ')
          .trim();

        if (!cleanText) {
          if (onEnd) onEnd();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);

        // Configure speech rate & pitch based on personality
        switch (styleRef.current) {
          case 'calm':
            utterance.rate = 0.88; // Unhurried, reassuring
            utterance.pitch = 0.96;
            break;
          case 'guided':
            utterance.rate = 0.96; // Clear, instructional
            utterance.pitch = 1.0;
            break;
          case 'think-fast':
            utterance.rate = 1.08; // Upbeat, energetic
            utterance.pitch = 1.02;
            break;
          case 'minimal':
            utterance.rate = 0.98;
            utterance.pitch = 1.0;
            break;
          default:
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
        }

        // Voice picking
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(
          (v) =>
            v.lang.startsWith('en') &&
            (v.name.includes('Natural') ||
              v.name.includes('Samantha') ||
              v.name.includes('Karen') ||
              v.name.includes('Daniel') ||
              v.name.includes('Google US English') ||
              v.name.includes('en-US'))
        ) || voices.find((v) => v.lang.startsWith('en'));

        if (preferred) {
          utterance.voice = preferred;
        }

        currentCallbackRef.current = onEnd || null;

        const handleSpeechFinished = () => {
          clearSafetyTimeout();
          setIsSpeaking(false);
          const cb = currentCallbackRef.current;
          currentCallbackRef.current = null;
          if (cb) {
            cb();
          }
        };

        utterance.onstart = () => {
          setIsSpeaking(true);
          setCurrentCaption(cleanText);
          setLastSpokenInstruction(cleanText);
        };

        utterance.onend = () => {
          handleSpeechFinished();
        };

        utterance.onerror = () => {
          handleSpeechFinished();
        };

        // Safety fallback timer: in case utterance.onend gets dropped by browser engine
        const estimatedDurationMs = Math.max(2000, (cleanText.length / 12) * 1000 + 3500);
        safetyTimeoutRef.current = setTimeout(() => {
          handleSpeechFinished();
        }, estimatedDurationMs);

        window.speechSynthesis.speak(utterance);
      } catch {
        setIsSpeaking(false);
        if (onEnd) onEnd();
      }
    },
    [clearSafetyTimeout]
  );

  const replayLast = useCallback(() => {
    if (lastSpokenInstruction) {
      speak(lastSpokenInstruction);
    }
  }, [lastSpokenInstruction, speak]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    isSupported,
    isSpeaking,
    currentCaption,
    lastSpokenInstruction,
    speak,
    replayLast,
    stop,
    setVoiceStyle,
  };
}
