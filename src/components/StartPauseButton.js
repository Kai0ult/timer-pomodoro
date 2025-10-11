import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function StartPauseButton({ isRunning, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isRunning ? '#f39c12' : '#27ae60' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {isRunning ? 'Pausar' : 'Iniciar'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});