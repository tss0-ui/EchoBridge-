const axios = require('axios');

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

exports.speakFromText = async (text) => {
  const response = await axios.post(
    'https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID',
    {
      text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    },
    {
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    }
  );

  const audioBuffer = Buffer.from(response.data, 'binary').toString('base64');
  return `data:audio/mpeg;base64,${audioBuffer}`;
};
