import React, { useEffect } from 'react';
import { speak } from '../utils/speak';

const VoiceOutput = ({ text }) => {
  useEffect(() => {
    if (text) speak(text);
  }, [text]);

  return null;
};

export default VoiceOutput;
