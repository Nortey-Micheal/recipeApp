import { Image, ImageSourcePropType, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
const OmotuoImage:ImageSourcePropType = require('../../assets/img/omotuo.jpg')

const Omotuo = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Image style={styles.image} source={OmotuoImage}/>
      <View>
        <Text style={[styles.title,{color: theme.textPrimary}]}>Omotuo</Text>
        <Text style={[styles.description,{color: theme.textSecondary}]}>Omo Tuo are soft, smooth balls made from mashed, slightly overcooked rice. They’re usually served with thick, rich soups such as groundnut soup, light soup, or palm nut soup. Their delicate, fluffy texture soaks up the flavors of the soup beautifully, making them a beloved comfort food in Ghanaian homes and celebrations.</Text>
      </View>
    </View>
  )
}

export default Omotuo

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