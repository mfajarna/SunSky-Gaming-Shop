import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Ic_intro } from '../assets'
import ButtonGetStarted from '../components/Atoms/ButtonGetStarted'
import { utils } from '../utils'
import { normalizeFont } from '../utils/normalizeFont'
import { setLoading } from '../utils/redux/action/global'


const IntroScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(setLoading(true))

        setTimeout(() => {
             setLoading(false)
             navigation.reset({index: 0, routes:[{name: 'Dashboard'}]})
         }, 3000)
    }


    useEffect(() => {
        setLoading(false)
    },[])


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>SUNSKY</Text>
                <Text style={styles.text}>GAMING SHOP</Text>
            </View>
            <View style={styles.content}>
                <Ic_intro  />
                <Text style={styles.desc}>Topup game favoritmu disini dan</Text>
                <Text style={styles.desc}>nikmati layanan yang</Text>
                <Text style={styles.desc}>kami berikan</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ButtonGetStarted text="Get Started" onPress={onSubmit}/>
            </View>
        </View>
    )
} 


export default IntroScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: utils.colors.primary,
        flex: 1,
        paddingHorizontal: 26,
        paddingVertical: 30,
        justifyContent: 'space-between'
    },
    text:{
        fontFamily: utils.fonts.bold,
        color: 'white',
        fontSize: normalizeFont(25)
    },
    desc:{
        fontFamily: utils.fonts.light,
        fontSize: normalizeFont(16),
        color: 'white',
        textAlign: 'center'
    },
    content:{
        marginTop: -100,
        alignItems: 'center'
    }
})
