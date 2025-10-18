import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/StartPauseButtonStyle';

export default function StartPauseButton({ isRunning, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.botaoStartPause,
        { backgroundColor: isRunning ? '#f39c12' : '#27ae60' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.textStartPause}>
        {isRunning ? 'Pausar' : 'Iniciar'}
      </Text>
    </TouchableOpacity>
  );
}

