import { useState, useEffect, useCallback, useRef } from 'react';

export interface QuietVoiceState {
  isSupported: boolean;
  isSpeaking: boolean;
  hasSpoken: boolean;
  currentCaption: string | null;
  speak: (text: string) => void;
  replay: () => void;
  stop: () => void;
}

/**
 * Section 19: Quiet Voice Companion Hook
 * Speaks the drawing instruction once, then silence.
 * No continuous narration. Simple controls.
 */
export function useQuietVoice(initialText?: string): QuietVoiceState {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false);
  const [currentCaption, setCurrentCaption] = useState<string | null>(null);
  const lastSpokenTextRef = useRef<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    setIsSpeaking(false);
    setCurrentCaption(null);
  }, []);

  const speak = useCallback((text: string) => {
    if (!text || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    try {
      window.speechSynthesis.cancel();

      // Clean the text of markdown or special syntax for friendly natural speech
      const cleanText = text
        .replace(/[*_#`~[\]]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.95; // Slightly slower, calm cadence
      utterance.pitch = 1.0;

      // Select warm natural voice if available
      const voices = window.speechSynthesis.getVoices();
      const friendlyVoice = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') ||
            v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            v.name.includes('Daniel') ||
            v.name.includes('Google US English'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (friendlyVoice) {
        utterance.voice = friendlyVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentCaption(cleanText);
        setHasSpoken(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      lastSpokenTextRef.current = cleanText;
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  }, []);

  const replay = useCallback(() => {
    if (lastSpokenTextRef.current) {
      speak(lastSpokenTextRef.current);
    } else if (initialText) {
      speak(initialText);
    }
  }, [speak, initialText]);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
        } catch {}
      }
    };
  }, []);

  return {
    isSupported,
    isSpeaking,
    hasSpoken,
    currentCaption,
    speak,
    replay,
    stop,
  };
}
