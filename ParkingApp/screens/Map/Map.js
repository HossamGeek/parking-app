import React from 'react';
import {View,Text} from 'react-native';
import MapView from 'react-native-maps';
import styles from './Styles';
import  Header  from './Header';
import Parkings,{parkings} from './Parkings';

const {Marker} = MapView;

const MarkerMap = ({parking})=>{
    return (
        <Marker  coordinate ={parking.coordinate} >
                
            <View style={[styles.marker,styles.shadow]}>
            
                <Text style={{fontWeight:"bold",color:"#B40B15"}}>${parking.price} </Text>
                <Text style={{color:"grey"}}>({parking.free}/{parking.spots}) </Text>
                
            </View>
         </Marker>
    )
}
const Map = (props)=>{
   return ( 
        <View style={styles.container}>  
            <Header/>
            <MapView  initialRegion={{
                    latitude: 30.038367,
                    longitude: 30.974930,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={styles.map}>
                    {parkings.map(parking=>(
                        <MarkerMap key={`marker-${parking.id}`} parking={parking}/>
                    ))}
             </MapView>
             <Parkings/>
        </View>
    )
}






export default Map;