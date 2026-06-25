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
    
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="List" component={ListScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Schedule" component={ScheduleScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Form" component={FormScreen} options={{headerShown: false}}/>
                <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}