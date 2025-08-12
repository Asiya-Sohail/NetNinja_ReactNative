import {TextInput, useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors'
import React from 'react'

const ThemedTextInput = ({style, ...props}) => {
    const ColorScheme = useColorScheme()
    const theme = Colors[ColorScheme] ?? Colors.light    
  return (
    <TextInput 
        style={[
            {
                backgroundColor : theme.uiBackground,
                color : theme.text,
                padding : 20,
                borderRadius : 6
            },
            style
        ]}
        {...props}
    />
  )
}

export default ThemedTextInput
