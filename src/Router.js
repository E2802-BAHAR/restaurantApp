// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import RestaurantPage from './pages/RestaurantPage'
import ReservationPage from './pages/ReservationPage'



function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="RestaurantPage" component={RestaurantPage} />
        <Stack.Screen name="ReservationPage" component={ReservationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;