import { View, Text, Dimensions, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.26;

const Login = () => {
  return (
    <SafeAreaView className="relative flex-1 bg-blue-700 " >
      <Animatable.View
      animation="bounceIn"
     

      className='flex-1 justify-center items-center'>
      <Image source={require('../assets/welcome.png')} className="w-full h-full object-contain" />
      </Animatable.View>
      <Animatable.View 
      animation="fadeInUpBig"
      delay={1500}

      className='bg-white flex-2 h-[350px] rounded-tr-[30px] rounded-tl-[30] ustify-center items-center'>
        <Text className='text-black font-bold text-[40px] mt-5 mx-5 text-center '> Welcome to Scotiabank </Text>
        <Image source={{uri: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30160258/2_big7.png'}} className='w-[140px] h-[140px]'/>
        
        <View className='items-end mt-3'>
        <TouchableOpacity onPress={() => alert('click')}>
          <LinearGradient colors={['#08d4c4', '#01ab9d',]} className='w-[150px] h-[40px] justify-center items-center mx-10 mt-2 flex-row rounded-[50px]'>
              <Text className='font-semibold'> Get Started</Text>
              <MaterialIcons name='navigate-next'color="#f0f" size={20} />
          </LinearGradient>
        </TouchableOpacity>
        </View>
        
      </Animatable.View>

      
    </SafeAreaView>
    
  )
}

export default Login