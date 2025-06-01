import React, { useState } from 'react';
import CameraFeed from './components/CameraFeed';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [gesture, setGesture] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  return (
    <div>
      <h1>EchoBridge Web</h1>
      <CameraFeed setGesture={setGesture} setAudioUrl={setAudioUrl} />
      <ResultDisplay gesture={gesture} audioUrl={audioUrl} />
    </div>
  );
}

export default App;
