import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet,TextInput,FlatList} from 'react-native';
import RestaurantName from '../restaurant_name.json'
import RestaurantCard from '../components/RestaurantCard'


const RestaurantPage = (props) => {

    const renderListRestaurant = ({item}) => {
      return(
    
    <RestaurantCard product={item} 
    onSelect={() => props.navigation.navigate('ReservationPage', { selectedRestaurant: item })}/>
      )}

    return(
        <View style= {{flex:1 }}>   
        <View style={styles.header}>
          <View style= {{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SearchPage')}><Text style= {{color:'white'}}>Back</Text></TouchableOpacity>  
            <Text style= {{marginLeft:117,color:'white',marginBottom:30}}>Restaurants</Text> 
          </View> 
          
          <Text style={styles.text} > Restaurants in Paris</Text>
          <Text style={styles.textBottom} >  9 Restaurants </Text>
        </View>

     <FlatList 
      keyExtractor={(_,index) => index.toString()}
      data={RestaurantName}
      renderItem={renderListRestaurant}
      ItemSeparatorComponent={() => <View style={{ borderWidth: 1, marginVertical: 5, borderColor: '#bdbdbd' }} />}     
      />
       
      </View>
    );
  };
  
  export default RestaurantPage;
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
    }

  
  })