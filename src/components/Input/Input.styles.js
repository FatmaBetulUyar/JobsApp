import { Dimensions, StyleSheet} from "react-native";


export default StyleSheet.create({
    container:{
        padding:8,
        margin:10,
        backgroundColor:"#EAEAEA",
        borderRadius:5,
        flexDirection:'row',
        width:Dimensions.get('window').width*0.8,
        marginLeft:40,
        
     
    },
    input:{
        flex:1, 
  
        
    }
})