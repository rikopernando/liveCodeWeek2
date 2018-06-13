import React from 'react' 
import { StyleSheet } from 'react-native' 
import Login from '../components/Login' 
 
class LoginScreen extends React.Component { 
 
    constructor(){ 
        super() 
        this.state = { 
            username : '' 
        } 
    } 
 
  onChangeUsername = (username) => { 
    this.setState({username}) 
  } 
 
    login = () => { 
       this.props.navigation.navigate('Home',{ user : this.state.username }) 
    } 
 
    render() { 
            return ( 
                    <Login username={this.state.username} 
                        onChangeUsername={this.onChangeUsername} 
                        styles={styles}  
                        login={this.login} /> 
                   )  
    } 
} 
 
const styles = StyleSheet.create({ 
        wrapper : { 
            flex : 1 
        }, 
        container : { 
            flex : 1, 
            alignItems : 'center', 
            justifyContent : 'center', 
            backgroundColor : '#483D8B', 
            paddingLeft : 40, 
            paddingRight : 40 
        }, 
        header : { 
            fontSize : 24, 
            marginBottom : 60, 
            color : '#fff', 
            fontWeight : 'bold' 
        }, 
        textInput : { 
            alignSelf : 'stretch', 
            padding : 16, 
            marginBottom : 20, 
            backgroundColor : '#fff' 
        }, 
        btn : { 
            alignSelf : 'stretch', 
            backgroundColor : '#FFD700', 
            padding : 20, 
            alignItems : 'center' 
      } 
  }) 
 
export default LoginScreen 
