import { View, Text } from 'react-native'
import Card from '../components/Card'
import MenuButton from '../components/MenuButton'
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();
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
      <Text style={{
        fontSize:30,
        marginStart:30,
        marginBottom:40,
        fontWeight:'bold'
      }}>
        Home
      </Text>
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        justifyContent:'space-around'
      }}>
        <Card>
        <FontAwesome
        name={'list'}
        size={50}
        color={'white'}
        style={{alignSelf:'center'}}
        />
          <MenuButton 
          title="Daftar Ruangan" pressed={() => navigation.navigate("List")}/>
        </Card>
        <Card>
          <AntDesign
          name={'schedule'}
          size={50}
          color={'white'}
          style={{alignSelf:'center'}}
          />
          <MenuButton 
          title="Jadwal Ruangan" pressed={() => navigation.navigate("Schedule")}/>
        </Card>
        <Card>
          <AntDesign
          name={'form'}
          size={50}
          color={'white'}
          style={{alignSelf:'center'}}
          />
          <MenuButton 
          title="Form Pengajuan" pressed={() => navigation.navigate("Form")}/>
        </Card>
        <Card>
          <AntDesign
          name={'history'}
          size={50}
          color={'white'}
          style={{alignSelf:'center'}}
          />
          <MenuButton 
          title="Status Pengajuan" pressed={() => navigation.navigate("History")}/>
        </Card>
        
        
        
      </View>
    </View>
  )
}