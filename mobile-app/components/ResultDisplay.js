import React from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';

export default function ResultDisplay({ gesture, audioUrl }) {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
    await sound.playAsync();
  };

  if (audioUrl) playSound();

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18 }}>Detected: {gesture}</Text>
    </View>
  );
}
