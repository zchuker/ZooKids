

import { View, Pressable, Image, ImageBackground, } from 'react-native';
import styles from './styles';
import { useState,useEffect } from 'react';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { useAudio } from '../musica/index'; 




export default function Escolha() {
  const navigation = useNavigation();
  const { playSom,mutar,mutado } = useAudio();

  const [animaT,setAnimaT] =useState("bounceInDown");
  const [animaB,setAnimaB] =useState("bounceInUp")



useEffect(() => {
  
    playSom();

  }, []);
  
const pagina=(tela)=>{ 
  setAnimaT("bounceOutUp");
  setAnimaB("bounceOutDown")
  
  setTimeout(()=>{
    navigation.navigate(tela)
},550)

}
  

  return (
    <ImageBackground source={require('./img/Fundo teste.png')} style={styles.container}>
      <View style={styles.musica} >
        <Pressable onPress={mutar}>
          <Image style={styles.icon} resizeMode="contain"  source={mutado ?  require('./img/mute.png') : require('./img/volume-up.png')  } />
        </Pressable>
      </View>
      <Animatable.View style={styles.imgLogo} animation={animaT}>
        <Image style={styles.img} resizeMode="contain" source={require('./img/Bem vindo.png')} />
      </Animatable.View>

      <Animatable.View animation={animaB} style={styles.aliBotao} >
        <Pressable style={styles.botao} onPress={() => pagina('Login')} >
          <Image style={styles.imgB} resizeMode="contain" source={require('./img/Login.png')} />
        </Pressable>

        <Pressable style={styles.botao} onPress={() => pagina('Registro')}>
          <Image style={styles.imgB} resizeMode="contain" source={require('./img/Registro.png')} />
        </Pressable>
      </Animatable.View>


    </ImageBackground>
  );
}