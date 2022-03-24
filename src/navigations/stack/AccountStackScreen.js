import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../screens/AccountScreen";
import ProfileScreen from "../../screens/ProfileScreen";

function AccountStackScreen() {
  const AccountStack = createNativeStackNavigator();

  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen
        name="account"
        component={AccountScreen}
      ></AccountStack.Screen>
      <AccountStack.Screen
        name="profile"
        component={ProfileScreen}
      ></AccountStack.Screen>
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;
