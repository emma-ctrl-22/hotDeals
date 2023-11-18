import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, change this if not
import ProductList from '../AdminScreens/ProductList';
import AllRequest from '../AdminScreens/AllRequest';
import AddProduct from '../AdminScreens/AddProduct';


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

const AdminTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shops"
      screenOptions={screenOptions}
      tabBarActiveTint
    >
      <Tab.Screen
        name="Product List"
        component={ProductList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color=
            'white' size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Request List"
        component={AllRequest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-flame" color=
            "orange" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Product"
        component={AddProduct}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cart" color="white" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
