import { View, Text } from 'react-native'
import Card from '../components/Card'
import MenuButton from '../components/MenuButton'
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor:'#efefef'
    }}>
      <View style={{backgroundColor:'white'}}>
        <Text style={{
          fontSize:24,
          fontWeight:'bold',
          marginLeft:60,
          marginVertical:30,
          color:'blue'
        }}>
          Smart Space
        </Text>
      </View>
        <Text style={{
          fontSize:30,
          marginLeft:30,
          marginTop:10,
          marginBottom:20,
          fontWeight:'bold'
        }}>
          Home
        </Text>
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        justifyContent:'space-evenly'
      }}>
        <View>
        <MenuButton title={'Daftar Ruangan'} pressed={() => navigation.navigate('List')} 
        icon={ <Feather name="list" size={40} style={{ alignSelf:'center', padding:30, paddingHorizontal:50}}/> }/>
        <MenuButton title={'Jadwal Ruangan'} pressed={() => navigation.navigate('Schedule')} 
        icon={ <Feather name="calendar" size={40} style={{ alignSelf:'center', padding:30}}/> }/>
        </View>
        <View>
        <MenuButton title={'Form Pengajuan'} pressed={() => navigation.navigate('Form')} 
        icon={ <Feather name="edit" size={40} style={{ alignSelf:'center', padding:30, paddingHorizontal:50}}/> }/>
        <MenuButton title={'Status Pengajuan'} pressed={() => navigation.navigate('History')} 
        icon={ <Feather name="bell" size={40} style={{ alignSelf:'center', padding:30}}/> }/>
        </View>
      </View>
    </View>
  )}