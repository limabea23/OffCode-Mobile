import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Edit from "../pages/Edit"; 
import TabNavigator from "./TabNavigator";
import PostDetalhes from "../pages/PostDetalhes";
import Noticias from "../pages/Noticias";
import Duvidas from "../pages/Duvidas";
import DuvidasDetalhes from "../pages/DuvidasDetalhes";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="PostDetalhes" component={PostDetalhes} />
            <Stack.Screen name="Noticias" component={Noticias} />
            <Stack.Screen name="Duvidas" component={Duvidas} />
            <Stack.Screen name="DuvidasDetalhes" component={DuvidasDetalhes} />
            
        </Stack.Navigator>
    );
}