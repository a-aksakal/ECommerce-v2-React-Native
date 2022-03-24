import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../../screens/ListScreen";

function ListStackScreen() {
  const ListStack = createNativeStackNavigator();

  return (
    <ListStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <ListStack.Screen name="list" component={ListScreen}></ListStack.Screen>
    </ListStack.Navigator>
  );
}

export default ListStackScreen;
