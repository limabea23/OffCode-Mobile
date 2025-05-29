import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Edit from "../pages/Edit"; 
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    );
}