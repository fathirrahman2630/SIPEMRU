import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function MenuButton({pressed, title}) {
    return (
    <TouchableOpacity 
            onPress={pressed}
            style={{
                backgroundColor:'#ffffff',
                padding:10,
                borderRadius:10,
                marginVertical:10,
                elevation:1
                }}>
                <Text style={{
                    color:'black', 
                    fontSize:15,
                    textAlign:'center'
                    }}>
                    {title}
                </Text>
            </TouchableOpacity>
    )
}