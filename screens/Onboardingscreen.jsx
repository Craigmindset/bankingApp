import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Onboardingscreen = () => {
  const navigation = useNavigation();

  const DoneButtonComponent =({}) => {
    return(
      <TouchableOpacity onPress={() => navigation.replace("Login")} >
        <View className='bg-black w-30 h-10 mx-4 rounded-full justify-center items-center px-4'>
         <Text className='text-white font-semibold mx-2' > Get Started  </Text>
      </View>
      </TouchableOpacity>
      
     
    )
  }

  return (
    <Onboarding
    onSkip={() => navigation.navigate("Login")}
    onDone={() => navigation.replace("Login")}
    DoneButtonComponent = {DoneButtonComponent}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding1.jpg')} className="w-[300px] h-[300px] object-contain" />,
      title: 'Digital Banking',
      subtitle: 'Enjoy the best of digital banking, fast and realiable user-friendly banking for all your needs',
    },

    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding2.jpg')} className="w-[300px] h-[300px]"/>,
      title: 'E-Wallet',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur dolore officiis repellendus perspiciatis explicabo sint, nulla necessitatibus nobis voluptas mollitia labore laborum, natus accusantium.',
    },

    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding3.jpg')}className="w-[300px] h-[300px]" />,
      title: 'Seamless Banking',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur dolore officiis repellendus perspiciatis explicabo sint, nulla necessitatibus nobis voluptas mollitia labore laborum, natus accusantium.',
    },
    
  ]}
/>
  )
}

export default Onboardingscreen