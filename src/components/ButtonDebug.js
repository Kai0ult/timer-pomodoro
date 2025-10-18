import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/ButtonDebugStyle'

export default function DebugButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>Debug</Text>
    </TouchableOpacity>
  );
}

