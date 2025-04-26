import { ImageSourcePropType, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Recipe from '../components/recipe-button';
const Waakye: ImageSourcePropType = require('../assets/img/waakye.jpg');
const Kokonte: ImageSourcePropType = require('../assets/img/kokonte.jpg');
const OmoTuo: ImageSourcePropType = require('../assets/img/omotuo.jpg');
const Jollof: ImageSourcePropType = require('../assets/img/jollof.jpg');

export interface RecipeType {
    image: ImageSourcePropType,
    title: string,
    route: string
}

const recipes: RecipeType[] = [
    {
        image: Jollof,
        title: 'Jollof',
        route: '/recipes/jollof'
    },
    {
        image: Kokonte,
        title: 'Kokonte',
        route: '/recipes/kokonte'
    },
    {
        image: Waakye,
        title: 'Waakye',
        route: '/recipes/waakye'
    },
    {
        image: OmoTuo,
        title: 'Omo Tuo',
        route: '/recipes/omotuo'
    },
]

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 40}}>
        <View>
            <Text style={styles.text}>Recipes</Text>
            <View style={styles.recipeContainer}>
                {
                    recipes.map(recipe => (
                        <Recipe key={recipe.title} recipe={recipe}/>
                    ))
                }
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    recipeContainer: {
        gap: 10,
        padding: 15,
        height: '100%',
    },
    text: {
        width: '100%',
        fontWeight: 700,
        textAlign: 'center',
        fontSize: 30
    }
})