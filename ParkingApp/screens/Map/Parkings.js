import React from 'react';
import { View,Text, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';    
import styles from './Styles';

export const parkings = [
    {
        id:1,
        title:"parking 1",
        price:5,
        rating:4.5,
        spots:20,
        free:10,
        coordinate:{
            latitude:30.013264,
            longitude:30.972177
        }
       
    },
    {
        id:2,
        title:"parking 2",
        price:15,
        rating:3.5,
        spots:25,
        free:20,
        coordinate:{
            latitude:30.029807,
            longitude:31.022750
        }
    }
    ,{
        id:3,
        title:"parking 3",
        price:20,
        rating:1.5,
        spots:50,
        free:25,
        coordinate:{
            latitude:30.037074,
            longitude:30.995760
        }
    }
]


const TitleParking = (props)=>{
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <Text style={{fontSize:18}}> x {props.item.spots} {props.item.title}</Text>
            <View style={{borderRadius:6,borderColor:'grey',borderWidth:0.5,padding:4,width:80,marginTop:5}}>
                <Text style={{fontSize:16}}> 05:00 hrs</Text>
            </View>
        </View>
    )
}


const InfoParking = ({iconType,value})=>{
    return (
        <View style={{flex:1,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
            <Ionicons name={iconType} size={18} color="#7D818A"/>
            <Text style={{paddingRight:8}}>{value} </Text>
        </View>
    )
}
const RatingParking = (props)=>{
        return (
            <View style={{flex:0.5,justifyContent:'center'}}>
                    <InfoParking iconType="ios-pricetag"  value={`$ ${props.item.price}`} />
                    <InfoParking iconType="ios-star"  value={props.item.rating} />         
             </View>
        )
}

const SubmitParking = (props)=>{
    return(
        <TouchableOpacity style={styles.buy}>
                
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:24}}>${props.item.price * 2}</Text>
                    <Text style={{color:'#fff'}}>{props.item.price} x hrs</Text>
                </View>
                <View style={{flex:0.5,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:24}}>  > </Text>    
                </View>
                
       </TouchableOpacity>
    )
}

const Parking = (props)=>{
   return (
       <View key={`parking-${props.item.id}`} style={[styles.parking,styles.shadow]}>
            {TitleParking(props)}
            <View style={{flex:1,flexDirection:'row'}}>
                {RatingParking(props)}
                {SubmitParking(props)}
            </View>
       </View>
    )
}


const Parkings = (props)=>{
    return (
        <FlatList horizontal 
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={styles.parkings}
            data={parkings}
            keyExtractor={(park,index)=>`${park.id}`}
            renderItem={(park)=>Parking(park)}
        ></FlatList>
    )
}
export default Parkings;