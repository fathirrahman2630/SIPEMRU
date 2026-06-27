import { View, Text, TextI } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Button from '../components/Button'
import MenuButton from '../components/MenuButton'
import Card from '../components/Card'
import ListButton from '../components/ListButton'

export default function ListScreen() {
    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor:'#efefef'
        }}>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'flex-start',
                marginLeft:20,
                marginTop:10
            }}>
                <Button title={'Zona A'} custom={{marginHorizontal:5}}/>
                <Button title={'Zona B'} />
            </View>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                marginHorizontal:30
            }}>
                <Text style={{
                    fontSize:14,
                    marginTop:20
                }}>
                    Lantai
                </Text>
                <MenuButton title={'1'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'2'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'3'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'4'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'5'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'6'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'7'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
                <MenuButton title={'8'} 
                custom={{ marginHorizontal:2, padding:11, borderColor:'grey', borderWidth:1}}/>
            </View>
            <ListButton title={'Ruangan 201'} pressed={() => navigation.navigate('Detail')}
                custom={{marginHorizontal:30, marginVertical:5}} status={'Available'}/>
            <ListButton title={'Ruangan 202'} pressed={() => navigation.navigate('Detail')}
                custom={{marginHorizontal:30, marginVertical:5}} status={'Available'}/>
            <ListButton title={'Ruangan 203'} pressed={() => navigation.navigate('Detail')}
                custom={{marginHorizontal:30, marginVertical:5}} status={'Available'}/>
            <ListButton title={'Ruangan 204'} pressed={() => navigation.navigate('Detail')}
                custom={{marginHorizontal:30, marginVertical:5}}status={'Available'}/>
            <ListButton title={'Ruangan 205'} pressed={() => navigation.navigate('Detail')}
                custom={{marginHorizontal:30, marginVertical:5}}status={'Available'}/>
        </View>
)
}