import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLoading } from '../utils/redux/action/global'
import { WebView } from 'react-native-webview';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { SkeletonHome } from '../components/Atoms/SkeletonDashboard';

const Dashboard = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(setLoading(false))
        setTimeout(() => {
            setIsLoading(false)
        },2000)
    },[])

    return (
        <SkeletonContent
            containerStyle={{flex: 1}}
            isLoading={isLoading}
            layout={SkeletonHome}
        >
            <WebView
                source={{ uri: 'https://sunskygamingshop.com/' }}
            />
        </SkeletonContent>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    }
})
