import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Card({children, style}) {
    return (
    <View style={{
        backgroundColor: "#ffffff",
        justifyContent:'center',
        padding:20,
        borderRadius:15,
        marginVertical:10,
        ...style,
    }}>
        {children}
    </View>
)}