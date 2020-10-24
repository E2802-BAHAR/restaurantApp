import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity, Image, Dimensions} from 'react-native';

const RestaurantCard = (props) => {
  return(
        <View >
            <TouchableOpacity style={styles.container} onPress={() => props.onSelect()}>
                <Image
                source={{uri:props.product.image}}
                style={styles.img}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between'}} > 
                    <View> 
                        <Text style={styles.restaurantName}>{props.product.name}</Text>
                        <Text style={styles.restaurantLocation}>{props.product.location}</Text>
                    </View> 

                        <View style={{flexDirection:'row',marginTop:20}} >
                            <Image source={require('../images/star.png')} style={styles.staricon} /> 
                            <Text style={styles.startext}>{props.product.stars}</Text>
                            <Text style={styles.review}>Review: {props.product.reviews}</Text>
                        </View> 

                    
                       
                
                    
                </View>

            </TouchableOpacity>






        </View>

  );
};

export default RestaurantCard;
const styles=StyleSheet.create({
    img:{
        height:Dimensions.get("window").height/4,
        borderRadius:10
    },
    container:{
        padding:20   
    },
    restaurantName:{
        fontWeight:'bold',
        fontSize:17,
        marginTop:10,
        color:'#000a12'
    },
    restaurantLocation:{
        fontWeight:'bold',
        fontSize:12,
        marginTop:3,
        color:'#000a12'

    },
    staricon:{
       width:Dimensions.get("window").width*0.04,
       height:Dimensions.get("window").height*0.02,
       resizeMode:'contain',
       marginTop:5
    },
    review:{
        fontSize:9,
        color:'#000a12',
        marginLeft:10,
        marginTop:8

    },
    startext:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000a12',
        marginLeft:5

    },
    reservationBtn:{
        backgroundColor:'#f9ad49',
        padding:10,
        borderRadius:10,
        marginTop:22
        
    },
    reservationText:{
        fontSize:10,
        color:'black',
        fontWeight:'bold'
    }


})



