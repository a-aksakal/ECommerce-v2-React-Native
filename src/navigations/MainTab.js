import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AccountStackScreen from './stack/AccountStackScreen';
import ListStackScreen from './stack/ListStackScreen';
import {getStoreCart} from '../helper/StorageHelper';
import CartContext from '../store/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const TabMain = () => {
  const Tab = createBottomTabNavigator();
  const {setCart} = useContext(CartContext);
  useEffect(() => {
    getStoreCart().then(data => {
      setCart(data);
    });
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'relative',
            backgroundColor: '#FAFAFA',
            height: 88,
          },
          tabBarItemStyle: {},
          tabBarLabelStyle: {
            color: '#000000',
            fontWeight: '500',
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="List"
          component={ListStackScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons name="menu" color={color} size={30} />
              );
            },
          }}></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={30}
                />
              );
            },
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabMain;
