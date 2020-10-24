import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet,TextInput,FlatList,Image, Dimensions} from 'react-native';
const ReservationPage = (props) => {
  const reservationData = props.route.params.selectedRestaurant
    
    return(
    <View >
        <View style={styles.header}>
          <View style= {{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantPage')}><Text style= {{color:'white'}}>Back</Text></TouchableOpacity>  
            <Text style= {{marginLeft:100,color:'white',marginBottom:30}}>Make Reservation</Text> 
          </View> 
          
          <Text style={styles.text} > {reservationData.name}</Text>
          <Text style={styles.textBottom} >{reservationData.motto}</Text>
        </View>

        <View  style={styles.container}>
          <Image
          source={{uri:reservationData.image}}
          style={styles.img}
          />
          <View style={{flexDirection:'row',justifyContent:'space-between'}} > 
              <View> 
                  <Text style={styles.restaurantName}>{reservationData.name}</Text>
                  <Text style={styles.restaurantLocation}>{reservationData.location}</Text>
              </View>   

              <View style={{flexDirection:'row',marginTop:15}} >
                  <Image source={require('../images/star.png')} style={styles.staricon} /> 
                  <Text style={styles.startext}>{reservationData.stars}</Text>
                  <Text style={styles.review}>Review: {reservationData.reviews}</Text>
              </View>  
                   
          </View>  
        </View>


        <View style={{marginTop:20}}>
        <View style={styles.contactCard}>
          <Image source={require('../images/pin.png')} style={styles.icons}/>
          <Text style={styles.contactText}>{reservationData.location}</Text>  
       </View>
       
        <View style={styles.contactCard}>
          <Image source={require('../images/home.png')} style={styles.icons}/>
          <Text style={styles.contactText}>{reservationData.address}</Text>
        </View>

        <View style={styles.contactCard}><Image source={require('../images/phone-call.png')} style={styles.icons}/><Text style={styles.contactText}>{reservationData.phone}</Text></View>
        </View>


        <TouchableOpacity style={styles.submit}><Text style={{color:'white',fontWeight:'bold',alignSelf:'center'}}>Make Reservation</Text></TouchableOpacity>
  </View>
  );
};
        
  
  export default ReservationPage;

  const styles =StyleSheet.create({
  header:{
  backgroundColor:'#277e6d',
  padding:15,  
  },
  text:{
  color:'white',
  fontSize:20,
  textAlign:'center',
      
  },
  textBottom:{
  fontSize:12,
  color:'white',
  textAlign:'center'
  },
  
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
  contactCard:{
    backgroundColor:'#e0e0e0',
    width:Dimensions.get("window").width*0.9,
    marginVertical:5,
    padding:10,
    borderRadius:5,
    alignSelf:'center',
    flexDirection:'row'
  },
  contactText:{
    marginLeft:10,
    fontSize:12
  },
  icons:{
    width:Dimensions.get("window").width*0.04,
     height:Dimensions.get("window").height*0.02,
     resizeMode:'contain',
     marginTop:5

  },
  submit:{
    backgroundColor:'#277e6d',
    width:Dimensions.get("window").width*0.4,
    padding:10,
    borderRadius:5,
    alignSelf:'center',
    marginTop:100
  }


  })