import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const GestureOverlay = ({ gesture }) => (
  <View style={styles.overlay}>
    <Text style={styles.text}>{gesture || 'Waiting for gesture...'}</Text>
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 20,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    backgroundColor: '#000a',
    padding: 10,
    borderRadius: 10,
  },
});

export default GestureOverlay;
