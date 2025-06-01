import { useState } from 'react';
import axios from 'axios';

export const useSpeechSynthesis = () => {
  const [isLoading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const speak = async (text) => {
    setLoading(true);
    try {
      const res = await axios.post('/api/speak', { text }, { responseType: 'blob' });
      const blob = new Blob([res.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);

      const audio = new Audio(url);
      audio.play();
    } catch (err) {
      console.error("Speech synthesis failed", err);
    } finally {
      setLoading(false);
    }
  };

  return { speak, isLoading, audioUrl };
};
