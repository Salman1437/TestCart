import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
//  import HomeScreen from '../screens/HomeScreen';
 import DetailScreen from '../screens/DetailsScreen';
import { Item } from '../types/Item';
import RestaurantListScreen from '../screens/RestaurantListScreen';
import MenuScreen from '../screens/MenuScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import CartScreen from '../screens/CartScreen';
import MapScreen from '../screens/MapScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Restaurants: undefined;
  Menu: { restaurantId: string };
  Cart: undefined;
  Checkout: undefined;
  Detail: { item: Item };
  Map: { latitude: number; longitude: number; name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown : false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
       
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantListScreen}/>
      <Stack.Screen name="Menu" component={MenuScreen}/>
      <Stack.Screen name='Cart' component={CartScreen}/>
      <Stack.Screen name="Checkout" component={CheckoutScreen}/>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
