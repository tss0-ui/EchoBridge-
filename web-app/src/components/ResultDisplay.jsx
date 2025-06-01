import React from 'react';

function ResultDisplay({ gesture, audioUrl }) {
  return (
    <div>
      <h2>Detected Gesture: {gesture}</h2>
      {audioUrl && <audio controls src={audioUrl} autoPlay />}
    </div>
  );
}

export default ResultDisplay;
