import React from 'react';
import {
    StyleSheet,
    Dimensions,
    
} from 'react-native';
const {height,width}= Dimensions.get('screen')




export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
       marginTop:25
    },header:{
           flex:0.4 ,
           flexDirection:'row',
           paddingVertical:5,

    },map:{
        flex:3,
    },
    parkings:{
       
        position:'absolute',
        right:0,
        left:5,
        bottom:24,
    },
    parking:{
        flexDirection:'row',
        backgroundColor:"#fff",
        padding:12,
        borderRadius:6,
        marginHorizontal:12,
        width:width - (15*2)
    },
    buy:{
        flex:1,
        backgroundColor:"#B40B15",
        //backgroundColor:"#D25260",
        flexDirection:'row',
        padding:5,
        borderRadius:6
    },marker:{
        flexDirection:'row',
        backgroundColor:'#fff',
        paddingVertical:12,
        paddingHorizontal:24,
        borderRadius:24,
        borderWidth:1,
        overflow: 'hidden' ,
        elevation: 3,
        borderColor:'#fff'
    },
    shadow:{
        backgroundColor:'#fff',
        shadowColor:'black',
        shadowOffset:{
            width:10,
            height:6
        },
        shadowOpacity:0.1,
        elevation: 3,
       
        shadowRadius:4,
 
    }
})