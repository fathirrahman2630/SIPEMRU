import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function FormInput(props) {
  return (
    <TextInput {...props}
        style={{
            borderWidth:1,
            borderColor:'gray',
            borderRadius:12,
            padding:10,
            fontSize:16,
            textAlign:'left',
            marginVertical:5
        }}
        
        />
  )
}