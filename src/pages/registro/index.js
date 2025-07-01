import { Text, View, StatusBar, Pressable, Image, TextInput, ImageBackground, Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function registro() {

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [valores, setValores] = useState({
    nome: '',
    idade: '',
    Email: '',
    Senha: '',
  });

  const navigation = useNavigation();

  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [data, setData] = useState(new Date(2000, 0, 1));
  const [mostrar, setMostrar] = useState(false);
  const [animaT, setAnimaT] = useState("bounceInDown");
  const [animaB, setAnimaB] = useState("bounceInUp");
  const [direita, setDireita] = useState('fadeInRight');
  const [esquerda, setEsquerda] = useState('fadeInLeft')
  const [valor, setValor] = useState('Ano de nascimento');

  const pagina = (tela) => {

    setAnimaT("bounceOutUp");
    setAnimaB("bounceOutDown");
    setEsquerda('fadeOutLeft'); 
    setDireita('fadeOutRight');

    setTimeout(() => {
      navigation.navigate(tela)
    }, 580)}
    
  const aoMudar = (event, novaData) => {
    setMostrar(false);
    if (novaData) {
      setData(novaData);
      const dataFormatada = formatarData(novaData);
      setValor(dataFormatada);
      trat("dataAniversario", dataFormatada.trim());
    }
  };

  const formatarData = (data) => {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };


  const trat = (type, text) => {

    if (type === 'dataAniversario') {
      const ano = parseInt(text.substring(6));
      const anoA = new Date().getFullYear();
      const resultado = anoA - ano;


      setValores(prev => ({ ...prev, idade: resultado }));
    } else {
      setValores(prev => ({ ...prev, [type]: text }));
    }


  };

  const salvar = () => {
    const emailValido = regexEmail.test(valores.Email);
    const nomeValido = valores.nome.length > 0;
    const senhaValida = valores.Senha.length >= 4;
    const idadeValida = parseInt(valores.idade) > 0;
    const senhasIguais = valores.Senha === confirmarSenha;



    if (!nomeValido) {

      Alert.alert('Aviso', 'Digite seu nome corretamente')
      return;
    }
    if (!idadeValida) {
      Alert.alert('Aviso', "Coloque uma data inválida");
      return;
    }
    if (!emailValido) {
      Alert.alert('Aviso', "Digite um email inválido");
      return;
    }

    if (!senhaValida) {
      Alert.alert('Aviso', "Senha precisa ter pelo menos 4 caracteres");
      return;
    }
    if (!senhasIguais) {
      Alert.alert('Aviso', "As senhas não coincidem");
      return;
    }

    AsyncStorage.setItem("Usuario", JSON.stringify(valores))
      .then(() => {
        console.log("Os dados foram salvos");
        pagina('Login');

      })
      .catch(erro => {
        console.log("Erro ao armazenar:", erro);
      });
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }}>

        <ImageBackground source={require('./img/fundoRg.png')} style={styles.container}>

          <Pressable style={styles.VV} onPress={() => pagina('Escolha')}>
            <Image style={styles.imgV} resizeMode="contain" source={require('./img/Voltar.png')} />
          </Pressable>

          <Animatable.View style={styles.titulo} animation={animaT}>
            <Image style={styles.imgT} resizeMode="contain" source={require('./img/Titulo Registro.png')} />
          </Animatable.View>

          <View style={styles.registro}>
            <Animatable.View animation={direita}  style={{ width: '88%', height: '13%' }}>
              <TextInput style={styles.input} onChangeText={(text) => trat("nome", text.trim())} placeholder='Digite seu nome completo'></TextInput>
            </Animatable.View>

            <Animatable.View animation={esquerda} style={{ width: '88%', height: '13%' }}>
              <Pressable style={styles.sla} title="Selecionar data" onPress={() => setMostrar(true)} >
                {mostrar && (
                  <DateTimePicker
                    value={data}
                    mode="date"
                    onChange={aoMudar}
                  />
                )}
                <Text style={styles.input2}
                  onChangeText={(valor) => trat("dataAniversario", valor.trim())}
                >
                  {valor}
                </Text>
              </Pressable>
            </Animatable.View>
            <Animatable.View animation={direita} style={{ width: '88%', height: '13%' }}>
              <TextInput style={styles.input} onChangeText={(text) => trat("Email", text.trim())} placeholder='Digite seu email'></TextInput>
            </Animatable.View>

            <Animatable.View animation={esquerda} style={{ width: '88%', height: '13%' }}>
              <TextInput style={styles.input} onChangeText={(text) => trat("Senha", text.trim())} secureTextEntry placeholder='Crie sua senha'></TextInput>
            </Animatable.View>

            <Animatable.View animation={direita} style={{ width: '88%', height: '13%' }}>
              <TextInput style={styles.input} onChangeText={(text) => setConfirmarSenha(text.trim())} secureTextEntry placeholder='Confirme sua senha'></TextInput>
            </Animatable.View>
          </View>

          <Pressable style={styles.botao} onPress={() => (salvar())}>
            <Animatable.Image style={styles.img} resizeMode="contain" animation={animaB} source={require('./img/Entrar.png')} />
          </Pressable>

          <StatusBar style="auto" hidden={true} />
        </ImageBackground>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
}