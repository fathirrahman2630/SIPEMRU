import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({pressed, title, custom}) {
    return (
        <TouchableOpacity 
        onPress={pressed}
        style={[style.container, custom]}>
            <Text style={{
                color:'white', 
                fontSize:15,
                textAlign:'center'
                }}>
                {title}
            </Text>
        </TouchableOpacity>
)}

const style = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        padding:10,
        borderRadius:20
    }
})