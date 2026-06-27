import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function StatusButton({pressed, title, fill}) {
  return (
    <TouchableOpacity onPress={pressed} style={{
        padding:20,
        backgroundColor: fill,
        borderRadius:15
    }}>
        <Text style={{
            fontSize:14,
            fontWeight:'bold',
            color:'white'
        }}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}