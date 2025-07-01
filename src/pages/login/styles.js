import { StyleSheet } from "react-native";


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
  img: {
    width: "105%",
    height: "72%",

  },
  imgV: {
    width: '10%',
    height: '75%',
  },
  VV: {
    paddingLeft: 5,
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',


  },
  login: {
    flex: 0.7,
    width: '80%',
    alignItems: 'flex-start',


  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    height: 50,
    height: "100%",
    width: '100%',
    padding: 10,
    textAlign: 'center',
    color:'#000000'
  },
  botao: {

    height: '30%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',


  },
  titulo: {
    flex: 0.9,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

  },
  alinhamento: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },

  quad: {
    flex: 0.9,
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    paddingTop: 40,
    gap: 30,


  },
});
