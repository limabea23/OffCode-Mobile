import React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import User from "../pages/User"; 
import Edit from "../pages/Edit"; 

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name="User" component={User} /> 
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    );
}