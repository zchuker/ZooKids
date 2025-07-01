import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { Text, View, Modal, Pressable, Image, ImageBackground, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { useAudio } from '../musica/index';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Home() {
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const { playSom, mutar, mutado } = useAudio();
  const [visivel1, setVisivel1] = useState(false);
  const [animaT,setAnimaT] =useState("fadeInRight");
  const [animaT2,setAnimaT2] =useState("fadeInLeft");

  const pagina = (tela) => {
    setAnimaT("fadeOutRight");
    setAnimaT2("fadeOutLeft")

    setTimeout(() => {
      navigation.navigate(tela)
    }, 500)
  }

  const Exibir1 = () => {
    setVisivel1(true)
  }
  useEffect(() => {

    playSom();

  }, []);

  const abrirPaginaExterna = () => {
    Linking.openURL('https://ingressos.zoologico.com.br/?utm_source=google&utm_content=cid|21288890589|gid|165438531594|kwid|kwd-462107190130&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfpB3tJupD4Sm97b0OWRJyFnyAY6SJXmltDUFKe4Z-bvmF3hVe3EzGxoCHB4QAvD_BwE');
  };

  const sobre = () => {
    Linking.openURL('https://zoologico.com.br/');
  };
  const local = () => {
    Linking.openURL('https://www.google.com.br/maps/place/Zool%C3%B3gico+de+S%C3%A3o+Paulo/@-23.6508725,-46.6230244,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b3001f4883d:0xb7f1ba1b449ce36a!8m2!3d-23.6508725!4d-46.6204495!16s%2Fm%2F0vzsqy6?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D');
  };
  const Exibir = () => {
    setVisivel(true)
  };
  const Conta = () => {
    setVisivel(false)
    navigation.navigate('Conta')

  };
  const Voltar = () => {
    AsyncStorage.clear();
    navigation.navigate('Splash')
  };

  return (
    <ImageBackground source={require('../../../assets/Fundo home 2.png')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable style={styles.menuA} onPress={() => Voltar()} ><Image resizeMode="contain" style={styles.menuB} source={require('../../../assets/Saida.png')} /></Pressable>
        </View>

        <View style={styles.titulo}>
          <Image style={styles.tituloP} resizeMode="contain" source={require('../../../assets/Menu titulo.png')} />
        </View>
        <View style={styles.botao}>
          <Pressable onPress={() => Exibir()} style={styles.menuA}><Image style={styles.menuB} resizeMode="contain" source={require('../../../assets/Menu.png')} /></Pressable>
        </View>
      </View>

      <View style={{ flex: 1, width: '100%' }}>


        <ScrollView contentContainerStyle={styles.botoes} style={{ flex: 1 }}>
          <Animatable.View style={styles.box} animation={animaT} >
            <Pressable onPress={() => pagina('Territorio1')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 1.png')} /></Pressable>
          </Animatable.View>

          <Animatable.View style={styles.box} animation={animaT2} delay={200}>
            <Pressable onPress={() => pagina('Territorio2')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 2.png')} /></Pressable>
          </Animatable.View>

          <Animatable.View style={styles.box} animation={animaT} delay={500}>
            <Pressable onPress={() =>pagina('Territorio3')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 3.png')} /></Pressable>
          </Animatable.View>

          <Animatable.View style={styles.box} animation={animaT2} delay={700}>
            <Pressable onPress={() => pagina('Territorio4')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 4.png')} /></Pressable>
          </Animatable.View>

          <Animatable.View style={styles.box} animation={animaT} delay={900}>
            <Pressable onPress={() =>pagina('Territorio5')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 5.png')} /></Pressable>
          </Animatable.View>

          <Animatable.View style={styles.box} animation={animaT2} delay={1200}>
            <Pressable onPress={() =>pagina('Territorio6')} style={styles.territorio}><Image resizeMode="contain" style={styles.territorioB} source={require('../../../assets/Território 6.png')} /></Pressable>
          </Animatable.View>

        </ScrollView>

      </View>
      <Modal visible={visivel} transparent animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.caixa}>
            <View style={styles.menuC}>
              <Text style={styles.tituloMenu}>MENU</Text>
            </View>
            <View style={styles.esc}>
              <Pressable onPress={() => Conta()}><Text style={styles.bEsc}>Conta</Text></Pressable>
              <Pressable onPress={mutar}>
                {mutado ? <Text style={styles.bEsc} >Desmutar</Text> : <Text style={styles.bEsc}>Mutar</Text>}
              </Pressable>
              <Pressable onPress={() => local()}><Text style={styles.bEsc}>Como Chegar</Text></Pressable>
              <Pressable onPress={() => sobre()}><Text style={styles.bEsc}>Sobre</Text></Pressable>
              <Pressable onPress={() => abrirPaginaExterna()}><Text style={styles.bEsc}>Ingressos</Text></Pressable>
              <Pressable onPress={() => setVisivel(false)}><Text style={styles.bEsc}>Sair</Text></Pressable>
            </View>
          </View>
        </View>
      </Modal>


      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}

