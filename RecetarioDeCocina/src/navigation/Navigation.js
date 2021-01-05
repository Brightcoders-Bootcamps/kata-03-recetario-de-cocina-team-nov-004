import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { View } from 'react-native';

const Stack = createStackNavigator();


export default function HomeStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "home" component={Home}  options={{headerShown: false,}} />
            <Stack.Screen name = "detail" component={Detail} />
        </Stack.Navigator>
    )
}
