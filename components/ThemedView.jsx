import { StyleSheet, useColorScheme, View } from 'react-native'
import {Colors} from '../constants/Colors'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false , ...props}) => {
    const ColorScheme = useColorScheme()
    const theme = Colors[ColorScheme] ?? Colors.light
    const insets = useSafeAreaInsets()

    if (!safe) return (
    <View 
        style={[{
          backgroundColor : theme.background,
          paddingTop : insets.top,
          paddingBottom : insets.bottom
        }, style]}
        {...props}
    />
  )


  return (
    <View 
        style={[{backgroundColor : theme.background}, style]}
        {...props}
    />
  )
}

export default ThemedView

const styles = StyleSheet.create({})