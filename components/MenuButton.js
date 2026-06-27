import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function MenuButton({pressed, title, icon, custom}) {
    return (
    <TouchableOpacity 
    onPress={pressed} 
    style={[style.container, custom]}>
        {icon}
        <Text style={{
            color:'black', 
            fontSize:12,
            textAlign:'center'}}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        borderRadius:10,
        marginVertical:10,
        elevation:5
    }
})