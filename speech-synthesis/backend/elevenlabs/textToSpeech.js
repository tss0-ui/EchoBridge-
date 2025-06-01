import { elevenlabsClient } from './elevenlabsClient';
import fs from 'fs';
import path from 'path';

export const synthesizeSpeech = async (text, voice = 'Rachel') => {
  const response = await elevenlabsClient.post(`/text-to-speech/${voice}`, {
    text,
    model_id: 'eleven_multilingual_v2',
    voice_settings: {
      stability: 0.4,
      similarity_boost: 0.8
    }
  });

  const audioPath = path.join('/tmp', `speech-${Date.now()}.mp3`);
  fs.writeFileSync(audioPath, response.data);
  return audioPath;
};
