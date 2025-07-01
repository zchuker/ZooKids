import {StyleSheet} from "react-native"



export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      width: '100%', 
      height: '100%',
      resizeMode: 'cover',
      gap:20,
    },
    registro: {
      flex: 1,
      width:'80%',
      alignItems: 'center',
      justifyContent: 'center',
      padding:5,
      gap:45,
    },
    sla:{ 
      height:'100%',
      width:'100%%'
    },
    input:{ 
        borderWidth:1,
        borderRadius:10,
        height:"100%",
        width:'100%',
        fontSize:18,
        padding:10,
        textAlign:'center',
        backgroundColor: '#fff',
        color:'#000000'
        

    }, 
    input2:{ 
        borderWidth:1,
        borderRadius:10,
        height:"100%",
        width:'100%',
        fontSize:18,
        paddingTop:'6%',
        backgroundColor: '#fff',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
    }, 
    botao:{ 
        height:'18%',
        width:'70%',
        justifyContent:'flex-start', 
        alignItems:'center', 
        display:'flex', 
        flexDirection:'column',
     
   },
    titulo:{ 
        alignItems:'center',
        height:'19%',
        width:'87%',
    },
    img:{ 
      width:"70%",
      height:"85%",
    },
     imgT:{ 
      width:"95%",
      height:"98%",
    },
    imgV:{ 
      paddingLeft:50,
      width:'10%',
      height:'75%',
     },
     VV:{ 
      
       width:'100%',
       height:'5%',
       justifyContent:'center',
       alignItems:'flex-start',
       
      
       
     },
  });
  