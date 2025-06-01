import React, { useRef, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { View } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { loadModel } from '../tfModel';

const TensorCamera = cameraWithTensors(Camera);

export default function CameraFeed({ setGesture, setAudioUrl }) {
  const cameraRef = useRef(null);
  let modelRef = useRef(null);

  useEffect(() => {
    const prepare = async () => {
      await tf.ready();
      modelRef.current = await loadModel();
    };
    prepare();
  }, []);

  const handleCameraStream = (images) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      if (modelRef.current && nextImageTensor) {
        const prediction = await modelRef.current.predict(nextImageTensor);
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
      requestAnimationFrame(loop);
    };
    loop();
  };

  return (
    <View style={{ width: 320, height: 240 }}>
      <TensorCamera
        ref={cameraRef}
        style={{ width: 320, height: 240 }}
        type={Camera.Constants.Type.front}
        onReady={handleCameraStream}
        autorender
      />
    </View>
  );
}
