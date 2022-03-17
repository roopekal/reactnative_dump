import React from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import SettingScreen from "./components/SettingScreen";
import ListScreen from "./components/ListScreen";
import LoginScreen from "./components/LoginScreen";

const firebaseConfig = {
  apiKey: "AIzaSyBLUSWYPj_xdl_Ol7dCqBa6F0nVWtlTpT4",
  authDomain: "com.roopekal.multiShopping",
  databaseURL:
    "https://multishop-1001d-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "multishop-1001d",
  storageBucket: "multishop-1001d.appspot.com",
  messageSenderId: "610857375104",
};

firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Lists" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
