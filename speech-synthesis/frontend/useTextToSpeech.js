import { useCallback } from 'react';

export const useTextToSpeech = () => {
  const speak = useCallback(async (text) => {
    const res = await fetch('/api/speak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  }, []);

  return { speak };
};
