import React from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';

const Header = () => {
  return(
    <View style= {{flex:1, backgroundColor:'#232428' }}>
        <View style={styles.header}>
            <TextInput>

            </TextInput>
        </View>

    </View>

  );
};

export default Header;

const styles = StyleSheet.create({
 header:{
     flex:1,
     backgroundColor:'##00695c'
 }
});
