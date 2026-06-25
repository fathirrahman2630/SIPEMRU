import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({pressed, title}) {
    return (
        <TouchableOpacity 
        onPress={pressed}
        style={{
            backgroundColor:'blue',
            padding:10,
            borderRadius:20,
            marginVertical:20,
            marginHorizontal:10
            }}>
            <Text style={{
                color:'white', 
                fontSize:15,
                textAlign:'center'
                }}>
                {title}
            </Text>
        </TouchableOpacity>
)
}