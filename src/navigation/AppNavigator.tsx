import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
 import HomeScreen from '../screens/HomeScreen';
 import DetailScreen from '../screens/DetailsScreen';
import { Item } from '../types/Item';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Detail: { item: Item };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown : false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
