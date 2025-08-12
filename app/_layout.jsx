import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot , Stack} from 'expo-router'
import {Colors} from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
  const ColorScheme = useColorScheme()
  const theme = Colors[ColorScheme] ?? Colors.light
  return (
    // <View style={{flex : 1}}>
    /* <Slot /> */
      // <Stack />
    <UserProvider>
      <StatusBar value='auto'/>
      <Stack screenOptions={{
        headerStyle : {backgroundColor : theme.navBackground},
        headerTintColor : theme.title
      }}>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(dashboard)' options={{headerShown: false}}/>
        <Stack.Screen name ='index' options={{title : 'Home'}}/>
      </Stack>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})