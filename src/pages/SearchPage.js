import React, {useEffect,useState } from 'react';
import {View, Text, StyleSheet,TouchableOpacity,TextInput,FlatList} from 'react-native';
import city_name from '../city_name.json';
import CityName from '../components/CityName';


const SearchPage = (props) => {
const [searchValue, setSearchValue]=useState("");
const [displayList, setDisplayList]=useState([]);
  
  const goingPress = () => props.navigation.navigate('RestaurantPage')

  const renderListItem = ({item}) => <CityName text={item} myPress={goingPress}/>

  useEffect(() => {
    setDisplayList(city_name)
  },[])

  useEffect(() =>{
      const filteredValue = city_name.filter(item => {
        const text = searchValue.toUpperCase();
        const cityTitle = item.city.toUpperCase();

        return cityTitle.indexOf(text) > -1 ;
      })
      setDisplayList(filteredValue)
  },[searchValue])
  return(
    <View style= {{flex:1 }}>   
      <View style={styles.header}>

        <View style= {{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('LoginPage')}>
            <Text style= {{color:'white'}}>Back</Text></TouchableOpacity>  
          <Text style= {{marginLeft:130,color:'white',marginBottom:30}}>Search</Text> 
        </View> 
        
        <TextInput style={styles.userInput} placeholder='   Enter a city' 
        onChangeText={(value) => setSearchValue(value)} ></TextInput>
        

      </View>
      <FlatList 
      keyExtractor={(_,index) => index.toString()}
      data={displayList}
      renderItem={renderListItem}     
      />
     
    </View>

  );
};

export default SearchPage;

const styles =StyleSheet.create({
  header:{
  backgroundColor:'#277e6d',
  padding:15,
  
  },
  userInput:{
  backgroundColor:'white',
  borderRadius:10,
    

  }

})