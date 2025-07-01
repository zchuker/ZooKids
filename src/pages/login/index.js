import { Text, View, StatusBar, Pressable, Image, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const [animaT, setAnimaT] = useState("bounceInDown");
  const [animaB, setAnimaB] = useState("bounceInUp");
  const [direita, setDireita] = useState('fadeInRight');
  const [esquerda, setEsquerda] = useState('fadeInLeft')

  const pagina = (tela) => {
    setAnimaT("bounceOutUp");
    setAnimaB("bounceOutDown");
    setEsquerda('fadeOutLeft');
    setDireita('fadeOutRight');


    setTimeout(() => {
      navigation.navigate(tela)
    }, 550)
  }

  const recuperar = () => {
    AsyncStorage.getItem('Usuario')

      .then(valores => {
        if (valores !== null) {
          let a = false
          let b = false
          const dados = JSON.parse(valores)
          console.log(email)

          if (email == dados.Email) {
            a = true
          } else if (a == false) {
            setMensagemErro('Preencha o campo de email corretamente ');
          }
          if (senha == dados.Senha) {
            b = true
          } else if (b == false) {
            setMensagemErro('Preencha o campo de senha corretamente ');
          }
          if (a && b) {
            pagina('Home')

          } else if (a == false && b == false) {
            setMensagemErro('Preencha todos os campos corretamente');
          }

        } else {
          setMensagemErro("Usuario não encontrado")
        }

      })
      .catch(error => {
        console.error("Erro");
      })
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }}>


        <ImageBackground source={require('./img/fundoRg.png')} style={styles.container}>

          <Pressable style={styles.VV} onPress={() => pagina('Escolha')}>
            <Image style={styles.imgV} resizeMode="contain" source={require('./img/Voltar.png')} />
          </Pressable>

          <View style={styles.alinhamento}>

            <View style={styles.titulo}>

              <Animatable.Image resizeMode="contain" animation={animaT} style={styles.img} source={require('./img/Titulo Login.png')} ></Animatable.Image>

            </View>

          </View>

          <View style={styles.login}>

            <View style={styles.quad}>

              <Animatable.View animation={direita} style={{ width: '88%', height: '13%' }}>
                <TextInput style={styles.input} onChangeText={setEmail} placeholder='Digite seu Email'></TextInput>
              </Animatable.View>

              <Animatable.View animation={esquerda} style={{ width: '88%', height: '13%' }}>
                <TextInput style={styles.input} secureTextEntry onChangeText={setSenha} placeholder='Digite sua senha'></TextInput>
              </Animatable.View>

              {mensagemErro !== '' && (<Text style={{ textAlign: 'center', width: '100%', marginTop: 3, fontSize: 20,marginBottom:-40 }}>{mensagemErro}</Text>)}

              <Pressable style={styles.botao} onPress={() => (recuperar())} >
                <Animatable.Image animation={animaB} resizeMode="contain" style={styles.img} source={require('./img/Entrar.png')} ></Animatable.Image>
              </Pressable>

            </View>

          </View>

          <StatusBar style="auto" hidden={true} />
        </ImageBackground>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}