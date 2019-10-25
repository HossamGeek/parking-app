import React from 'react';
import { View,  Text} from 'react-native';
import {Ionicons,Entypo,EvilIcons} from '@expo/vector-icons';    
import styles from './Styles';

const HeaderTitle = (props)=>{
    return(
        <View style={{flex:2,flexDirection:'row',paddingLeft:15}}>
            <View style={{paddingTop:25}}>
                <Ionicons name="ios-navigate" size={24} color="#B40B15"/>
            </View>
            
             <View style={{flexDirection:'column',paddingLeft:15,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:"#7D818A"}}>Detected Location
                </Text>
                <Text style={{fontSize:20,color:"#000",fontWeight:'bold'}}>Egypt, Cairo
                  <Entypo name="chevron-small-down" size={24} color="#000"/>
                </Text>
             </View>
        </View>
    )
}

const HeaderNavbar = (props)=>{
    return (
        <View style={{flex:0.4,paddingTop:15}}>
               <EvilIcons name="navicon" size={45} color="#7D818A"></EvilIcons>
            </View>
    )
}
const Header = (props)=>{
    return (
        <View style={styles.header}>
            {HeaderTitle()}
            {HeaderNavbar()}
        </View>
    )
}
export default Header;