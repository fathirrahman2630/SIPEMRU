import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ListButton({pressed, title, custom, status}) {
  return (
    <TouchableOpacity onPress={pressed} 
    style={[style.container, custom]}>
        
        <Text style={{
            textAlign:'left',
            fontSize:14,
            color:'black'
        }}>
            {title}
        </Text>
        <Text>
            {status}
        </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        padding:10,
        borderRadius:10,
        marginHorizontal:20,
        elevation:1
    }
})