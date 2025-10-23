import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Timer from './src/components/Timer';
import ButtonDebug from './src/components/ButtonDebug';
import styles from './src/styles/GeralStyle';
import { useState } from 'react';

export default function App() {

  const [modo, setModo] = useState('trabalho');
  const [debugAtivo, setDebugAtivo] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Pomodoro Timer 🍅</Text>

      <Timer modo={modo} setModo={setModo} debugAtivo={debugAtivo} />

      {/*<ButtonDebug onPress = { () => { setDebugAtivo(true); setTimeout(() => setDebugAtivo(false), 100); }} />*/}

      <Text style={styles.footer}>Tempo padrão: 25 minutos</Text>
    </View>
  );

}

