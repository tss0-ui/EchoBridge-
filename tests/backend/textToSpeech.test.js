import { synthesizeSpeech } from '../../elevenlabs/textToSpeech';
import fs from 'fs';

test('synthesizes audio for given text', async () => {
  const text = 'Hello from EchoBridge!';
  const audioPath = await synthesizeSpeech(text);
  expect(fs.existsSync(audioPath)).toBe(true);
  fs.unlinkSync(audioPath); // cleanup
});
