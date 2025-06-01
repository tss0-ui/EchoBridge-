const { speakFromText } = require('../services/elevenlabsService');

exports.convertGestureToSpeech = async (req, res) => {
  try {
    const { gestureLabel } = req.body;
    const text = `You signed: ${gestureLabel}`;
    const audioUrl = await speakFromText(text);
    res.json({ text, audioUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
