import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ic_arrow } from '../../assets'
import { utils } from '../../utils'
import { normalizeFont } from '../../utils/normalizeFont'

const ButtonGetStarted = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>

            </View>
            <View style={styles.content}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={{ marginRight: 15 }}>
                <Ic_arrow />
             </View>
        </TouchableOpacity>
    )
}

export default ButtonGetStarted

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#52617C',
        height: 41,
        width: 232,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    text:{
        color: 'white',
        fontFamily: utils.fonts.bold,
        fontSize: normalizeFont(17),
        textAlign: 'center'
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25
    }
})
