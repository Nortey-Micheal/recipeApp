import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const KokonteImage:ImageSourcePropType = require('../../assets/img/kokonte.jpg')

const Kokonte = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={KokonteImage}/>
      <View>
        <Text style={styles.title}>Kokonte</Text>
        <Text style={styles.description}>Kokonte is a traditional Ghanaian dish made from dried and pounded cassava flour. It's usually brownish or grey in color and has a dense, slightly stretchy texture when cooked. Often eaten with hearty soups like groundnut (peanut) soup or palm nut soup, Kokonte is cherished for its deep, earthy taste and satisfying, filling nature. It's sometimes affectionately nicknamed "Lafu" in parts of Ghana.</Text>
      </View>
    </View>
  )
}

export default Kokonte

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