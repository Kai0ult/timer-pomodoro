import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';
import StartPauseButton from '../components/StartPauseButton';
import ResetButton from '../components/ResetButton';
import styles from '../styles/TimerStyle';

export default function Timer({ modo, setModo, debugAtivo }) {
  const [tempoRestante, setTempoRestante] = useState(25 * 60);
  const [estaAtivo, setEstaAtivo] = useState(false);
  const [soundObj, setSoundObj] = useState(null); // ⚠️ guarda o som do alarme

  // 🔔 Função para tocar o som de alarme
  async function tocarAlarme() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/alarm.mp3')
      );
      setSoundObj(sound); // salva o som no estado
      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
          setSoundObj(null); // limpa o estado quando terminar
        }
      });
    } catch (error) {
      console.log('Erro ao tocar o som:', error);
    }
  }

  // ⏱ Controle do timer
  useEffect(() => {
    let intervalo = null;

    if (estaAtivo && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      tocarAlarme();

      if (modo === 'trabalho') {
        setModo('descanso');
        setTempoRestante(5 * 60);
      } else {
        setModo('trabalho');
        setTempoRestante(25 * 60);
      }
      setEstaAtivo(false);
    }

    return () => clearInterval(intervalo);
  }, [estaAtivo, tempoRestante, modo]);

  // ⏳ Debug
  useEffect(() => {
    if (debugAtivo) {
      setTempoRestante(1);
    }
  }, [debugAtivo]);

  // ⏏ Função para Start/Pause
  const handleStartPause = async () => {
    // se o som estiver tocando, para ele imediatamente
    if (soundObj) {
      await soundObj.stopAsync();
      await soundObj.unloadAsync();
      setSoundObj(null);
    }
    setEstaAtivo(!estaAtivo);
  };

  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
  const segundos = String(tempoRestante % 60).padStart(2, '0');

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{minutos}:{segundos}</Text>

      <View style={styles.botoes}>
        <StartPauseButton
          isRunning={estaAtivo}
          onPress={handleStartPause} // ⚠️ usa a nova função
        />
        <ResetButton
          onPress={() => {
            setEstaAtivo(false);
            setTempoRestante(modo === 'trabalho' ? 25 * 60 : 5 * 60);
          }}
        />
      </View>
    </View>
  );
}