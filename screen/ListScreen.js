import { View, Text, TextI } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import MenuButton from '../components/MenuButton'
import Card from '../components/Card'

export default function ListScreen() {
    return (
        <View>
            <Text style={{
            fontSize:24,
            fontWeight:'bold',
            marginStart:60,
            marginVertical:40,
            color:'blue'
            }}>
                Smart Space
            </Text>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                justifyContent:'flex-start',
                marginLeft:20
            }}>
            <Button title={'Zona A'}/>
            <Button title={'Zona B'}/>
            </View>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                marginHorizontal:30,
                justifyContent:'space-evenly'
            }}>
            <Text style={{
                fontSize:14,
                marginTop:20
            }}>
                Lantai
            </Text>
                <MenuButton title={'1'}/>
                <MenuButton title={'2'}/>
                <MenuButton title={'3'}/>
                <MenuButton title={'4'}/>
                <MenuButton title={'5'}/>
                <MenuButton title={'6'}/>
                <MenuButton title={'7'}/>
                <MenuButton title={'8'}/>
            </View>
            <Card>
                <Text>
                    Ruangan 201
                </Text>
            </Card>
            <Card>
                <Text>
                    Ruangan 202
                </Text>
            </Card>
            <Card>
                <Text>
                    Ruangan 203
                </Text>
            </Card>
            <Card>
                <Text>
                    Ruangan 204
                </Text>
            </Card>
            <Card>
                <Text>
                    Ruangan 205
                </Text>
            </Card>
        </View>
)
}