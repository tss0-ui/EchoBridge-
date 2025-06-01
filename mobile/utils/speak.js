import axios from 'axios';
import { Audio } from 'expo-av';

const ELEVENLABS_API_KEY = process.env.EXPO_PUBLIC_ELEVENLABS_API_KEY;

export async function speak(text) {
  const response = await axios.post(
    'https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID',
    {
      text,
      voice_settings: {
        stability: 0.7,
        similarity_boost: 0.75
      }
    },
    {
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    }
  );

  const soundObject = new Audio.Sound();
  await soundObject.loadAsync({ uri: `data:audio/mp3;base64,${Buffer.from(response.data).toString('base64')}` });
  await soundObject.playAsync();
}
