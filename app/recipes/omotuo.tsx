import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const OmotuoImage:ImageSourcePropType = require('../../assets/img/omotuo.jpg')

const Omotuo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={OmotuoImage}/>
      <View>
        <Text style={styles.title}>Omotuo</Text>
        <Text style={styles.description}>Omo Tuo are soft, smooth balls made from mashed, slightly overcooked rice. They’re usually served with thick, rich soups such as groundnut soup, light soup, or palm nut soup. Their delicate, fluffy texture soaks up the flavors of the soup beautifully, making them a beloved comfort food in Ghanaian homes and celebrations.</Text>
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
    padding: 10
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