import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraFeed from '../components/CameraFeed';
import GestureOverlay from '../components/GestureOverlay';
import VoiceOutput from '../components/VoiceOutput';

const HomeScreen = () => {
  const [gesture, setGesture] = useState('');
  
  return (
    <View style={styles.container}>
      <CameraFeed onGesture={(g) => setGesture(g)} />
      <GestureOverlay gesture={gesture} />
      <VoiceOutput text={gesture} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' }
});

export default HomeScreen;
