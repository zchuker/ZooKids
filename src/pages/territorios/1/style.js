import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
      height: '100%',
      resizeMode: 'cover',
    },

    menu: {
      width: '100%',
      flex: 0.1,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#f5a026',
      borderBottomWidth: 3,
      borderBlockColor: 'white',
    },
  
    titulo: {
      width: '60%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    tituloP: {
      width: '100%',
      height: '100%',
      
    },
  
    botao: {
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    voltar: {
      width: '60%',
      height: 42,
    },

    voltarA: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    //Meio

    botoes: {
      flex: 1,
      width: '100%',
    },

    alinhamentoA: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      paddingBottom: 30 
    },

    botaoP: {
      width: '80%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },

    botaoA: {
      width: '100%',
      height: 120,
      borderRadius: 30,
    },

    //Modal

    modal: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6da3af',
      gap: 10,
    },

    fotoB:{
      height: '25%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },

    fotoA: {
      width: '80%',
      height: '100%',
      borderRadius: 50,
    },



    texto: {
      textAlign: 'center',
      color: 'white',
    },

    textos: {
      backgroundColor: '#457d8a',
      width: '100%',
      padding: 20,
    },

    tituloMoN: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#30159e',
    },

    tituloMo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },




    voltarB: {
      height: '10%',
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: 10,
    },

    voltarT: {
      width: '90%',
      height: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: 20,
    },

    voltarC: {
      width: '50%',
      height: '80%',
      borderRadius: 40,
    },


    
  });