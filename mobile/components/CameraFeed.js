import React, { useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { View } from 'react-native';
import { classifyGesture } from '../utils/inference';

const CameraFeed = ({ onGesture }) => {
  const cameraRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync({ base64: true });
        const gesture = await classifyGesture(photo.base64);
        onGesture(gesture);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={Camera.Constants.Type.front} />
    </View>
  );
};

export default CameraFeed;
