import React from 'react' 
import { View, Text, StyleSheet } from 'react-native' 
import PapanUlar from '../components/PapanUlar' 
 
class Home extends React.Component { 
     
    static navigationOptions = { 
        title : 'Home' 
    } 
 
    constructor(props) { 
        super(props) 
    } 
     
    render () { 
         
        const namaPemain = `Nama Pemain : ${this.props.navigation.getParam('user')}` 
        const jumlahPapan = [4,3,2,1] 
 
        return ( 
            <View style={ {paddingBottom : 10 } }>        
            <Text>{namaPemain} </Text> 
            { 
                jumlahPapan.map(data => { 
                return ( 
                         <PapanUlar dataPapan={data} /> 
                        ) 
                }) 
            } 
            </View> 
            
       ) 
    } 
} 
 
export default Home 
