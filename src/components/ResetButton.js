import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/ResetButtonStyle';

export default function ResetButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.botaoReset} onPress={onPress}>
      <Text style={styles.botaoTexto}>Reiniciar</Text>
    </TouchableOpacity>
  );
}

