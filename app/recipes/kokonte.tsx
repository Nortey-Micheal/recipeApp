import { Image, ImageSourcePropType, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
const KokonteImage:ImageSourcePropType = require('../../assets/img/kokonte.jpg')

const Kokonte = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Image style={styles.image} source={KokonteImage}/>
      <View>
        <Text style={[styles.title,{color: theme.textPrimary}]}>Kokonte</Text>
        <Text style={[styles.description,{color: theme.textSecondary}]}>Kokonte is a traditional Ghanaian dish made from dried and pounded cassava flour. It's usually brownish or grey in color and has a dense, slightly stretchy texture when cooked. Often eaten with hearty soups like groundnut (peanut) soup or palm nut soup, Kokonte is cherished for its deep, earthy taste and satisfying, filling nature. It's sometimes affectionately nicknamed "Lafu" in parts of Ghana.</Text>
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