import axios from 'axios';

export const elevenlabsClient = axios.create({
  baseURL: 'https://api.elevenlabs.io/v1',
  headers: {
    'xi-api-key': process.env.ELEVENLABS_API_KEY,
    'Content-Type': 'application/json'
  },
  responseType: 'arraybuffer'
});
