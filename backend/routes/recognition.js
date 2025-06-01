const express = require('express');
const router = express.Router();
const { convertGestureToSpeech } = require('../controllers/recognitionController');

router.post('/', convertGestureToSpeech);

module.exports = router;
