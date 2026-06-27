import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Card({children, custom}) {
    return (
    <View style={[style.container, custom]}>
        {children}
    </View>
)}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#ffff",
        justifyContent:'center',
        padding:20,
        borderRadius:15,
        marginVertical:10
    }
})