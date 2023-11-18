import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs/layout';
import ShopScreen from './screens/ShopScreen';
import HotDealScreen from './screens/HotDealScreen';
import Login from './screens/Login';
import AddDeal from './screens/AddDeal'
import AdminTabs from './AdminTabs/layout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  options={{ headerShown: false }} name="Tabs" component={Tabs}/>
        <Stack.Screen name="ShopScreen" component={ShopScreen}/>
        <Stack.Screen name="Hot Deal" component={HotDealScreen}/>
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login}/>
        <Stack.Screen name="Add Deal" component={AddDeal}/>
        <Stack.Screen name='AdminTabs' component={AdminTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
