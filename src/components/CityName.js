import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';

const CityName = (props) => {
  return(
        <View >
            <TouchableOpacity style={styles.card} onPress={props.myPress}>
            <Text>{props.text.city}</Text>
            </TouchableOpacity>
        </View>

  );
};

export default CityName;

const styles = StyleSheet.create({
 card:{
     backgroundColor:'white',
     margin:5,
     borderRadius:5,
     padding:10,
     borderBottomWidth:2,
     borderColor:'#e0e0e0'

 }
});
