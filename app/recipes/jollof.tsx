import { Image, ImageSourcePropType, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
const JollofImage:ImageSourcePropType = require('../../assets/img/jollof.jpg')

const Jollof = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Image style={styles.image} source={JollofImage}/>
      <View>
        <Text style={[styles.title,{color: theme.textPrimary}]}>Jollof</Text>
        <Text style={[styles.description,{color: theme.textSecondary}]}>Jollof is a vibrant, spicy West African rice dish cooked in a rich tomato sauce with onions, peppers, and a blend of aromatic spices. It's usually bright orange-red and often served with fried plantains, grilled chicken, beef, or fish. Each spoonful carries a smoky, savory flavor that makes it a party and comfort food favorite across Ghana and beyond.</Text>
      </View>
    </View>
  )
}

export default Jollof

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    width: '100%',
    height: 300
  },
  container: {
    padding: 10,
    height: '100%'
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginVertical: 15
  },
  description: {
    fontSize: 17
  }
})