import { useState, useEffect } from "react";
import { Text, View, Image, Pressable,ImageBackground } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Conta() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('Usuario')
      .then(valores => {
        if (valores) {
          const dados = JSON.parse(valores);
          setNome(dados.nome);
          setIdade(dados.idade);
          setEmail(dados.Email);
          const senhaOculta = dados.Senha.replace(/./g, "*");
          setSenha(senhaOculta);
        }
      })
      .catch(error => {
        console.error("Erro ao carregar usuário:", error);
      });
  }, []);

  return (
 
      <ImageBackground source={require('./img/Fundo conta.png')} style={styles.container}>
           <Pressable onPress={() => navigation.navigate('Home')} style={{flex:0.9,width:'100%',alignItems:'center',justifyContent:'center'}}>
        <View style={styles.informacoes}>
          <View style={styles.foto}>
            <Image style={styles.img} resizeMode='contain' source={require('./img/User.png')} />
          </View>

          <View style={styles.dados}>
            <Text style={styles.lb}>Nome</Text>
            <Text style={styles.infos}>{nome}</Text>
          </View>

          <View style={styles.dados}>
            <Text style={styles.lb}>Idade</Text>
            <Text style={styles.infos}>{idade}</Text>
          </View>

          <View style={styles.dados}>
            <Text style={styles.lb}>Email</Text>
            <Text style={styles.infos}>{email}</Text>
          </View>

          <View style={styles.dados}>
            <Text style={styles.lb}>Senha</Text>
            <Text style={styles.infos}>{senha}</Text>
          </View>
        </View>

        <View style={styles.volt}>
          
        
         
        </View>
         </Pressable>
      </ImageBackground>
     
  );
}
