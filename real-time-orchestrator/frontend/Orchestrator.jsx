import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { detectSignGesture } from './ml/detectGestures';
import { useTextToSpeech } from './useTextToSpeech';

const Orchestrator = () => {
  const webcamRef = useRef(null);
  const [gesture, setGesture] = useState(null);
  const { speak } = useTextToSpeech();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        const result = await detectSignGesture(webcamRef.current.video);
        if (result && result !== gesture) {
          setGesture(result);
          speak(result);
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [gesture, speak]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Webcam
        ref={webcamRef}
        style={{ width: 640, height: 480 }}
        mirrored
        audio={false}
        screenshotFormat="image/jpeg"
      />
      <div className="mt-4 text-2xl font-bold text-indigo-600">
        {gesture ? `Gesture: ${gesture}` : 'Waiting for gesture...'}
      </div>
    </div>
  );
};

export default Orchestrator;
