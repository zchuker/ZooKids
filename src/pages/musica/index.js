import React, { createContext, useContext, useEffect, useState } from 'react';
import { Audio as ExpoAudio } from 'expo-av';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [som, setSom] = useState(null);
  const [mutado, setMutado] = useState(false);

  const playSom = async () => {
    if (som) return;

    const { sound: newSound } = await ExpoAudio.Sound.createAsync(
      require('../escolha/img/musica.mp3'),
      { shouldPlay: true, isLooping: true }
    );

    await newSound.setVolumeAsync(0.5);
    setSom(newSound);
    await newSound.playAsync();
  };

  const mutar = async () => {
    if (!som) return;
    const novoVolume = mutado ? 0.5 : 0;
    await som.setVolumeAsync(novoVolume);
    setMutado(!mutado);
  };

  useEffect(() => {
    const prepararAudio = async () => {
      await ExpoAudio.setAudioModeAsync({
        staysActiveInBackground: true,
        shouldDuckAndroid: false,
        interruptionModeAndroid: ExpoAudio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
      });

      playSom();
    };

    prepararAudio();
  }, []);

  useEffect(() => {
    return som
      ? () => {
          som.unloadAsync();
        }
      : undefined;
  }, [som]);

  return (
    <AudioContext.Provider value={{ mutar, mutado,playSom }}>
      {children}
    </AudioContext.Provider>
  );
};
