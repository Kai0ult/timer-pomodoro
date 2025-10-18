import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import StartPauseButton from '../components/StartPauseButton';
import ResetButton from '../components/ResetButton';
import styles from '../styles/TimerStyle';

export default function Timer({ modo, setModo, debugAtivo }) {
  const [tempoRestante, setTempoRestante] = useState(25 * 60);
  const [estaAtivo, setEstaAtivo] = useState(false);

  useEffect(() => {
    let intervalo = null;

    if (estaAtivo && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
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

  useEffect(() => {
    if (debugAtivo) {
      setTempoRestante(1);
    }
  }, [debugAtivo]);

  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
  const segundos = String(tempoRestante % 60).padStart(2, '0');

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{minutos}:{segundos}</Text>

      <View style={styles.botoes}>
        <StartPauseButton
          isRunning={estaAtivo}
          onPress={() => setEstaAtivo(!estaAtivo)}
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

