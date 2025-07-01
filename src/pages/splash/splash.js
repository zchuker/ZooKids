import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function Splash() {
    const navigation = useNavigation()
  
    useEffect(() => {
      setTimeout(async () => {
        try {
          const login = await AsyncStorage.getItem('Usuario');
  
          if (login === null) {
          
            navigation.navigate('Escolha');
          } else {
           
            navigation.navigate('Home');
          }
        } catch (error) {
          console.error('Erro ao recuperar login:', error);
          navigation.navigate('Login');
        }
      }, 2000);
    }, [navigation]);
    return (
      <View style={styles.container}>
       <View style={styles.tangotango}> 
        <Image style={styles.img2} resizeMode='contain' source={require('./img/1f9a7.gif')} ></Image>
     
       </View>
       <View  style={{width:'100%',paddingLeft:'5%'}}>
           <ActivityIndicator size="large" color="#ffffff"/>
       </View>
        
      </View>
    );
}