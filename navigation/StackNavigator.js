import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Duvidas from "../pages/Duvidas";
import Noticias from "../pages/Noticias";
import Post from "../pages/Post";
import User from "../pages/User";
import Sobre from "../pages/Sobre";
import Edit from "../pages/Edit";

const Tab = createBottomTabNavigator();

export default function StackNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Noticias"
            screenOptions={{
                
            }
