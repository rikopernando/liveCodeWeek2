import React from 'react' 
import { View , Text , StyleSheet, Button} from 'react-native' 
 
 
class PapanUlar extends React.Component { 
 
    constructor(props) { 
        super(props) 
    } 
 
    render () { 
        
        const jumlahPapan = [5,4,3,2,1] 
 
        let papanKotak = (this.props.dataPapan * 5) 
 
        if (papanKotak % 2 == 0){ 
        var papanUlar = papanKotak + 1 
        }else{ 
        var papanUlar = (papanKotak - 5 ) 
        } 
 
 
        return ( 
            <View style={styles.container }> 
            { 
                jumlahPapan.map(data => { 
                return ( 
                        <View style={styles.papan} >  
                        <Text style={ { fontSize : 18 } }> {  
                        papanKotak % 2 == 0 ? papanUlar -= 1 : papanUlar += 1 
                        }</Text> 
                        </View> 
                        ) 
                }) 
            } 
 
            </View> 
       ) 
    } 
 
} 
 
const styles = StyleSheet.create({ 
       container : { 
        flex : 1, 
        flexDirection : 'row', 
        justifyContent : 'center', 
        paddingTop : 40 
       }, 
       papan : { 
        padding : 10, 
        width : 50, 
        height : 50, 
        backgroundColor : 'skyblue' 
       } 
}) 
 
export default PapanUlar 
