import { StatusBar } from 'expo-status-bar';
import {  View, Text, SafeAreaView, } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Onboarding } from './screens';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name="Onboarding" component={Onboarding}/> 
        <Stack.Screen options={{headerShown : false}} name="Home" component={Home}/>   
  </Stack.Navigator>
      </NavigationContainer>
   </TailwindProvider> 
  );
}
