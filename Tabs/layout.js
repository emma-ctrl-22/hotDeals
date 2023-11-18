import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, change this if not

import Homescreen from '../screens/Homescreen';
import TabTwo from '../screens/TabTwo';
import TabThree from '../screens/TabThree';

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    height: '11%',
    position: 'absolute',
    elevation: 0.1,
    backgroundColor: 'dodgerblue',
    width: '95%',
    bottom: '0.5%',
    left: '2%',
    borderRadius: '13',
  },
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shops"
      screenOptions={screenOptions}
      tabBarActiveTint
    >
      <Tab.Screen
        name="Shops"
        component={Homescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color=
            'white' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Hot Deals"
        component={TabTwo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-flame" color=
            "orange" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={TabThree}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cart" color="white" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
