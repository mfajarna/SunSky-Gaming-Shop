import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import { Provider, useSelector } from 'react-redux';
import Route from './route/Route';
import AnimationLoader from './utils/loader/AnimationLoader';
import store from './utils/redux/store';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const MainApp = () => {
  const{isLoading} = useSelector(state => state.globalReducer);

  return(
    <NavigationContainer>
      <Route />
      {isLoading && <AnimationLoader />}
    </NavigationContainer>
  )
}


const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
      
  )
}

export default App

const styles = StyleSheet.create({})
