import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dashboard from '../pages/Dashboard'
import IntroScreen from '../pages/IntroScreen'
import SplashScreen from '../pages/SplashScreen'

const Stack = createNativeStackNavigator()

const Route = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="IntroScreen"
                component={IntroScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Route

const styles = StyleSheet.create({})
