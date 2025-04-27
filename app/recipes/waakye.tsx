import { Image, ImageSourcePropType, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
const WaakyeImage:ImageSourcePropType = require('../../assets/img/waakye.jpg')

const Waakye = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Image style={styles.image} source={WaakyeImage}/>
      <View>
        <Text style={[styles.title,{color: theme.textPrimary}]}>Waakye</Text>
        <Text style={[styles.description,{color: theme.textSecondary}]}>Waakye is a hearty and colorful Ghanaian dish made from rice and beans cooked together, traditionally tinted with dried millet leaves for a slight herbal flavor and a signature brownish hue. It's often served with an array of sides like gari (grated cassava), spaghetti, fried plantains, boiled eggs, and various meats. Waakye is a full meal that captures the bold and communal spirit of Ghanaian cuisine.</Text>
      </View>
    </View>
  )
}

export default Waakye

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