import { StatusBar } from 'expo-status-bar';
import {  View, Text, SafeAreaView, } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Onboarding } from './screens';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false) 
{/*--change to False---*/}
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then(value =>{
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else{
        setIsFirstLaunch(false);
        {/*---change to false--*/}
      }
    });
  }, [])

  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
        <Stack.Screen options={{headerShown : false}} name="Onboarding" component={Onboarding}/>

        )} 
        <Stack.Screen options={{headerShown : false}} name="Login" component={Login}/>   
  </Stack.Navigator>
      </NavigationContainer>
   </TailwindProvider> 
  );
}
