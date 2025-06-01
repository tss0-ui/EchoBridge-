import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadModel } from '../tfModel';
import { getGestureLabel } from '../../utils/gestureLabels';

function CameraFeed({ setGesture, setAudioUrl }) {
  const videoRef = useRef(null);
  let model = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };

    const detect = async () => {
      if (model.current) {
        const prediction = await model.current.predict(videoRef.current);
        const label = getGestureLabel(prediction);
        if (label) {
          setGesture(label);
          const res = await fetch('http://localhost:5000/api/recognize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gestureLabel: label }),
          });
          const data = await res.json();
          setAudioUrl(data.audioUrl);
        }
      }
    };

    setupCamera().then(() => {
      loadModel().then((loadedModel) => {
        model.current = loadedModel;
        setInterval(detect, 2000);
      });
    });
  }, []);

  return <video ref={videoRef} autoPlay playsInline width="640" height="480" />;
}

export default CameraFeed;
