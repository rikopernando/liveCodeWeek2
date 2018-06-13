import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import { StackNavigator, createStackNavigator } from 'react-navigation' 
import LoginScreen from './screens/Login' 
import HomeScreen from './screens/Home' 
 
const App = createStackNavigator({ 
    Login : { screen : LoginScreen }, 
    Home : { screen : HomeScreen } 
},{ 
    initialRouteName : 'Login' 
}) 
 
 
export default App 

