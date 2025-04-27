import { Image, Pressable, StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'
import { navigate } from 'expo-router/build/global-state/routing'
import { RecipeType } from '../app'
import { useRouter } from 'expo-router'
import { Colors } from '../constants/Colors'

const Recipe = ({recipe}: {recipe: RecipeType}) => {
    const navigate = useRouter()
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <Pressable style={[styles.pressable,{backgroundColor: theme.background, boxShadow: ` 1px 2px 8px ${theme.textSecondary}`}]} onPress={() => navigate.navigate(`${recipe.route}`)}>
      <Image style={styles.image} source={recipe.image}/>
      <Text style={[styles.text,{color: theme.textPrimary}]} >{recipe.title}</Text>
    </Pressable>
  )
}

export default Recipe

const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'row',
        borderRadius: 10,
        padding: 5,
        height: '20%',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        width: '100%',
        textAlignVertical: 'center',
        marginLeft: 10
    },
    image: {
        borderRadius: 20,
        width: 150,
        height: '100%'
    }
})