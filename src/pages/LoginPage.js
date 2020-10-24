import React from 'react';
import {View, Text, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import Buttons from '../components/Buttons';


const LoginPage = (props) => {
   
  
  return(
<View style= {{flex:1}}>
      <ImageBackground source={require('../images/main.jpg')} style={styles.img}>
        <Text style={styles.text}>Find and book the best restaurants</Text>
        <TouchableOpacity style={styles.loginbtn} 
        onPress={() => props.navigation.navigate('SearchPage')} >
        <Text style={{color:'white',alignItems:'center'}}>Login </Text></TouchableOpacity>
        <Buttons title='Continue with Apple' color='#252429' myPress={() => props.navigation.navigate('SearchPage')}/>
        <Buttons title='Continue with Facebook' color='#395795' />

      </ImageBackground>
 </View>

  );
  
};

export default LoginPage;

const styles =StyleSheet.create({
  img:{flex: 1,
  resizeMode:"cover"
  },
  text:{
    fontSize:40,
    color:'white',
    fontWeight:'100',
    paddingTop:60,
    marginHorizontal:30,
    flex:3
    },
    loginbtn:{
    backgroundColor:'#277e6d',
     padding:12,
     marginHorizontal:20,
     borderRadius:10,
     alignItems:'center',
     justifyContent:'center',
     marginBottom:30
    }

})


