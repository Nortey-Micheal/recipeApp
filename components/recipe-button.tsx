import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { navigate } from 'expo-router/build/global-state/routing'
import { RecipeType } from '../app'
import { useRouter } from 'expo-router'

const Recipe = ({recipe}: {recipe: RecipeType}) => {
    const navigate = useRouter()
  return (
    <Pressable style={styles.pressable} onPress={() => navigate.navigate(`${recipe.route}`)}>
      <Image style={styles.image} source={recipe.image}/>
      <Text style={styles.text} >{recipe.title}</Text>
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
        backgroundColor: '#ffffff',
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
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