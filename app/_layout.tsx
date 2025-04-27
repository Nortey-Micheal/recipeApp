import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <>
        <StatusBar translucent={theme.statusbar} networkActivityIndicatorVisible={true} />
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.background},
            headerTintColor: theme.textPrimary
        }}>
            <Stack.Screen name='index' options={{title: 'Recipes', headerShown: false}}/>
            <Stack.Screen name='recipes/jollof' options={{title: 'Jollof'}}/>
            <Stack.Screen name='recipes/kokonte' options={{title: 'Kokonte'}}/>
            <Stack.Screen name='recipes/omotuo' options={{title: 'Omotuo'}}/>
            <Stack.Screen name='recipes/waakye' options={{title: 'Waakye'}}/>
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})