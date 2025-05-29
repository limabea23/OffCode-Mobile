import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "../pages/User"; 
import Edit from "../pages/Edit"; 
import Post from "../pages/Post";
import Noticias from "../pages/Noticias";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Post" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="User" component={User} /> 
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="Noticias" component={Noticias} />
        </Stack.Navigator>
    );
}