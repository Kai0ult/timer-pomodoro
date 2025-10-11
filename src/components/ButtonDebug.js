import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DebugButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>Debug</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#2c2f3a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  texto: {
    color: '#bbb',
    fontSize: 16,
    fontWeight: 'bold',
  },
});