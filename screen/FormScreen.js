import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

export default function FormScreen() {
  return (
    <View>
      <Card>
        <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Detail Pengajuan</Text>
        <Text>Nama Organisasi</Text>
        <FormInput placeholder={'Contoh : BEM KM'}/>
        <Text>Nama Penanggung Jawab</Text>
        <FormInput placeholder={'Nama Lengkap'}/>
        <Text>Pilih Ruangan</Text>
        <FormInput placeholder={''}/>
        <Text>Pilih Tanggal</Text>
        <FormInput placeholder={''}/>
        <Text>Jam Mulai</Text>
        <FormInput placeholder={''}/>
        <Text>Jam Selesai</Text>
        <FormInput placeholder={''}/>
        <Text>Deskripsi Kegiatan</Text>
        <FormInput placeholder={'Silahkan tulis deskripsi'}/>
        <Button title={'Submit'} custom={{marginVertical:10}}/>
      </Card>
    </View>
  )
}