import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    resizeMode: 'cover',
  },

  informacoes: {
    flex: 0.9,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: "space-around",
  },

  dados: {
    width: '100%',
    alignItems: 'center',
  },

  foto: {
    width: "80%",
    height: "40%"
  },

  img: {
    width: '100%',
    height: '100%',
  },

  lb: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  
  },

  infos: {
    textAlign: 'center',
    fontSize: 25,
    width:'100%', 
  
  },

  volt:{
    width: "100%",
    flex: 0.06,
    alignItems: 'center',
    justifyContent: "flex-end",
    marginTop: "10%",
  },

  voltB: {
    width: "30%",
    height: "100%",
  },

  bot: {
    width: "100%",
    height: "100%",
  },

});
