import { View, Text , TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import Button from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
    <View style={{
        flex: 1,
        backgroundColor: "#efefef"
    }}>
        <View style={{ backgroundColor:'white', marginBottom:100}}>
        <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 20,
                marginBottom:20,
                padding:10,
                color: 'blue'
            }}>
                Smart Space
        </Text>
        </View>
        <MaterialIcons name='meeting-room' size={50} style={{ alignSelf:'center', marginTop:20}}/>
        <View style={{ marginVertical:20}}>
        <Text style={{
                fontSize: 21,
                textAlign:'center',
                fontWeight: 'bold',
            }}>
                Welcome Back
        </Text>
        <Text style={{
            textAlign:'center',
            marginVertical:10
        }}>
            login to continue
        </Text>
        </View>

        <View>
            <TextInput style={{
            backgroundColor:'white',
            borderColor:'grey',
            padding:14,
            marginVertical:5,
            marginHorizontal:40,
            borderWidth:1,
            borderRadius:10
        }}placeholder='Username'/>
        </View>
        <View>
            <TextInput style={{
                backgroundColor:'white',
                borderColor:'grey',
                marginBottom:10,
                marginHorizontal:40,
                padding:14,
                borderWidth:1,
                borderRadius:10
            }}placeholder='Password'/>
        </View>
        <View style={{ marginVertical:10 }}>
            <Button title="Login" pressed={() => navigation.navigate("Home")} 
            custom={{marginHorizontal:40, marginVertical:10}}/>
        </View>
        
    </View>
)
}