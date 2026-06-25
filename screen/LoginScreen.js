import { View, Text , TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import Button from '../components/Button';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
    <View style={{
        flex: 1,
        justifyContent: "flex-start",
        padding: 20,
        backgroundColor: "#ffffff"
    }}>
        
        <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 20,
                marginBottom:130,
                color: 'blue'
            }}>
                Smart Space
        </Text>

        <Card>
        <Text style={{
                fontSize: 21,
                textAlign:'center',
                fontWeight: 'bold',
                marginTop:100,
                marginBottom:20
            }}>
                Welcome Back
        </Text>
        <Text style={{
            textAlign:'center',
            marginVertical:20
        }}>
            Sign in to continue
        </Text>
        <View><TextInput style={{
            backgroundColor:'white',
            borderColor:'black',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            padding:14,
            marginTop:10
        }}placeholder='Username'/>
        </View>
        <View>
            <TextInput style={{
                backgroundColor:'white',
                borderColor:'black',
                borderBottomRightRadius:10,
                borderBottomLeftRadius:10,
                padding:14
            }}placeholder='Password'/>
        </View>
        
        <Button title="Login" pressed={() => navigation.navigate("Home")}/>
        </Card>
        
    </View>
)
}