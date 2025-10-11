import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/components/Timer';
import ButtonDebug from './src/components/ButtonDebug';
import { useState } from 'react';

export default function App() {

  const [modo, setModo] = useState('trabalho');
  const [debugAtivo, setDebugAtivo] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Pomodoro Timer</Text>

      <Timer modo={modo} setModo={setModo} debugAtivo={debugAtivo} />

      {/*<ButtonDebug onPress = { () => { setDebugAtivo(true); setTimeout(() => setDebugAtivo(false), 100); }} />*/}

      <Text style={styles.footer}>Tempo padrão: 25 minutos</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#aaa',
  },
});