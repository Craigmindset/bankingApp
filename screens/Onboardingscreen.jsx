import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const Onboardingscreen = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
    onSkip={() => navigation.navigate("Home")}
    onDone={() => navigation.replace("Home")}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding1.jpg')} className="w-[300px] h-[300px] object-contain" />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding2.jpg')} className="w-[300px] h-[300px]"/>,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/boarding3.jpg')}className="w-[300px] h-[300px]" />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    
  ]}
/>
  )
}

export default Onboardingscreen