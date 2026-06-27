import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import ListScreen from '../screen/ListScreen';
import ScheduleScreen from '../screen/ScheduleScreen';
import FormScreen from '../screen/FormScreen';
import HistoryScreen from '../screen/HistoryScreen';
import DetailScreen from '../screen/DetailScreen';
    
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="List" component={ListScreen} />
                <Stack.Screen name="Schedule" component={ScheduleScreen} />
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="History" component={HistoryScreen} />
                <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    )
}