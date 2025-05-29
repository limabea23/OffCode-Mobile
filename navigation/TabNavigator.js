import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Noticias from "../pages/Noticias";
import Duvidas from "../pages/Duvidas";
import Post from "../pages/Post";
import User from "../pages/User";
import Sobre from "../pages/Sobre";

import Icon from "react-native-vector-icons/Ionicons"; 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Noticias" screenOptions={{ headerShown: false, tabBarActiveTintColor: '#8c52ff', }}>

            <Tab.Screen name="Noticias" component={Noticias}  options={{tabBarIcon: () => ( 
                <FontAwesome5 name="newspaper" size={24} color="black" />
            ),
            }} />

        <Tab.Screen name="Duvidas" component={Duvidas}  options={{tabBarIcon: () => (
                <AntDesign name="questioncircleo" size={24} color="black" />
            ),
            }} />

        <Tab.Screen name="Post" component={Post}  options={{tabBarIcon: () => (
                <AntDesign name="pluscircleo" size={24} color="black" />
            ),
            }} />

        <Tab.Screen name="User" component={User}  options={{tabBarIcon: () => (
                <FontAwesome5 name="user-circle" size={24} color="black" />
            ),
            }} />

        <Tab.Screen name="Sobre" component={Sobre}  options={{tabBarIcon: () => (
                <AntDesign name="team" size={24} color="black" />
            ),
            }} />

        </Tab.Navigator>
    );
}