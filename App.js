import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/home';
import Registro from './src/pages/registro';
import Login from './src/pages/login';
import Territorio1 from './src/pages/territorios/1';
import Territorio2 from './src/pages/territorios/2';
import Territorio3 from './src/pages/territorios/3';
import Territorio4 from './src/pages/territorios/4';
import Territorio5 from './src/pages/territorios/5';
import Territorio6 from './src/pages/territorios/6';
import Escolha from "./src/pages/escolha";
import Conta from "./src/pages/conta";
import Splash from "./src/pages/splash/splash";
import { AudioProvider } from './src/pages/musica/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AudioProvider>
      
    <NavigationContainer>
       
      <Stack.Navigator>

       

        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="Conta" component={Conta} />
        <Stack.Screen options={{ headerShown: false }} name="Escolha" component={Escolha} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Registro" component={Registro} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio1" component={Territorio1} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio2" component={Territorio2} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio3" component={Territorio3} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio4" component={Territorio4} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio5" component={Territorio5} />
        <Stack.Screen options={{ headerShown: false }} name="Territorio6" component={Territorio6} />

      
      </Stack.Navigator>
    </NavigationContainer>
    
     </AudioProvider>
  );
}
