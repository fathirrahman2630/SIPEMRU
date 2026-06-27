import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function DetailScreen() {
  return (
    <View>
      <Text style={{
        fontSize:24, 
        fontWeight:'bold',
        marginTop:20,
        marginLeft:20
      }}>Detail Ruangan</Text>
      <Text>
        Nama Ruangan
      </Text>
      <Text>
        Gedung, Lantai, Zona
      </Text>
      <Text>
        Kapasitas
      </Text>
      <Text>
        Fasiltias Pendukung
      </Text>
      <Button title={'Lihat Jadwal'}/>
      <Button title={'Booking Sekarang'}/>
    </View>
  )
}