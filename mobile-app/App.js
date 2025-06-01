import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CameraFeed from './components/CameraFeed';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const [gesture, setGesture] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EchoBridge Mobile</Text>
      <CameraFeed setGesture={setGesture} setAudioUrl={setAudioUrl} />
      <ResultDisplay gesture={gesture} audioUrl={audioUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
