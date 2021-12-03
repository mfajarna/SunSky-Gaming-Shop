import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IL_Logo } from '../assets/illustration'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('IntroScreen')
        },2000)
    },[])

    return (
        <View style={styles.container}>
            <Image source={IL_Logo}/>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
