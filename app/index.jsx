import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import icedCoffee from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={icedCoffee} resizeMode='cover'>
      <Text style={styles.text}>Coffee Shop</Text>
 </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
flexDirection: 'column',

backgroundColor: '#000000'
  }
  ,
image: {
width: '100%',
height: '100%',
flex: 1,
resizeMode: 'cover',
justifyContent:'center',

}
  ,
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#000000c0',
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
  }
})


export default app