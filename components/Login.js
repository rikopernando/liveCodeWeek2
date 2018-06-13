import React from 'react' 
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, AsyncStorage} from 'react-native' 
 
class Login extends React.Component { 
 
    login = () => { 
        this.props.username == "" ? alert("Silakan Isi Nama Anda, Sebelum Mulai Permainan!") : this.props.login() 
    } 
 
    handleChangeUsername = (username) => { 
     this.props.onChangeUsername(username) 
    } 
 
    render() { 
        return ( 
             
           <KeyboardAvoidingView behavior='padding' style={this.props.styles.wrapper}> 
                 
                <View style={this.props.styles.container} > 
 
                    <Text style={this.props.styles.header}>  Login  </Text> 
 
                    <TextInput  
                        style={this.props.styles.textInput} placeholder='Username' 
                        onChangeText={ this.handleChangeUsername } 
                        value={ this.props.username } 
                        underlineColorAndroid='transparent'  
                    /> 
 
                    <TouchableOpacity 
                        style={this.props.styles.btn} 
                        onPress={this.login}> 
                            <Text style={{fontSize : 18 }}> Login </Text> 
                   </TouchableOpacity> 
 
 
                </View> 
             </KeyboardAvoidingView>  
           
       ) 
    } 
 
} 
 
export default Login 
