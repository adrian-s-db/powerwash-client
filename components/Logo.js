import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import logo from '../assets/logo.png'

import { useFonts, Offside_400Regular } from '@expo-google-fonts/offside';


const Logo = () => {
  let [fontsLoaded] = useFonts({
    Offside_400Regular,
  });

  if (!fontsLoaded) {
    return (<View style={{backgroundColor: '#1a68c7'}}/>)
  }
  else {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{height:100, width:100}}/>
        <Text style={styles.appLogo}>powerwash</Text>
      </View>
    )
  }
}

export default Logo

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  appLogo: {
    fontSize: 50,
    fontFamily: 'Offside_400Regular',
    color: '#01abf6',
  },
});