import { View, Text } from 'react-native'
import React from 'react'
import StatusButton from '../components/StatusButton'

export default function HistoryScreen() {
  return (
    <View style={{
      backgroundColor:'#efefef'
    }}>
      <Text style={{
        margin:10,
        fontSize:18,
        fontWeight:'bold',
        padding:20
      }}>Riwayat/Status Pengajuan</Text>
      <View style={{
        marginHorizontal:30
      }}>
        <View style={{margin:10}}>
          <StatusButton title={'Pengajuan Masuk'} fill={'blue'}/>
        </View>
        <View style={{margin:10}}>
          <StatusButton title={'Pengajuan Diterima'} fill={'green'}/>
        </View>
        <View style={{margin:10}}>
          <StatusButton title={'Pengajuan Ditolak'} fill={'red'}/>
        </View>
      
      </View>
    </View>
  )
}