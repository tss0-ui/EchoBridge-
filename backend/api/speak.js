import { synthesizeSpeech } from '@/backend/elevenlabs/textToSpeech';
import fs from 'fs';

export default async function handler(req, res) {
  const { text } = req.body;
  const audioPath = await synthesizeSpeech(text);

  const audio = fs.readFileSync(audioPath);
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Content-Disposition', 'inline; filename="speech.mp3"');
  res.send(audio);
}
