import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text,TextInput,StyleSheet,TouchableOpacity,Dimensions,Image} from 'react-native';

const Buttons = (props) => {
  return(
    <View style= {{flex:0.4}}>
       <TouchableOpacity style={[styles.btn,{backgroundColor: props.color === undefined ? '#277e6d': props.color }]} onPress={props.myPress} ><Text style={styles.text}>{props.title}</Text>
       </TouchableOpacity>
    </View>

  );
};

export default Buttons;

const styles = StyleSheet.create({
  btn:{
     backgroundColor:'#277e6d',
     padding:12,
     marginHorizontal:20,
     borderRadius:10,
     alignItems:'center',
     justifyContent:'center'
},
 text:{
     color:'white',
     alignItems:'center'
 }
 
});
