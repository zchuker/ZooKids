import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    width: '100%',
    resizeMode: 'cover',
  },

  territorio: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  botoes: {
    flex: 0.9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modal:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)'
  },

  caixa: {
    backgroundColor: '#fff',
    width: '70%',
    flex: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    
  },

  territorioB: {
    width: width * 0.9,
    height: height * 0.2, 
    borderRadius: 20,
  },

  menu: {
    width: '100%',
    flex: 0.1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F5DEB3',
    borderBottomWidth: 3,
    borderBlockColor: 'white',
  },

  tituloP: {
    width: '80%',
    height: '80%',
  },

  titulo: {
    width: '60%',
    justifyContent: 'center',
    alignItems:'center',
  },

  botao: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuA: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuB:{
    height: '100%',
    width: '60%',
  },

  menuC: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
    
  tituloMenu: {
    fontSize: 30,
    color: '#fff',
  },

  esc: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  bEsc: {
    textAlign:'center',
    fontSize: 30,
    borderWidth:0.1,

  },

  box: {
    width: '100%',
    height: 120,
    alignItems: 'center',
  },
  });