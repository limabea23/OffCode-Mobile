import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export default function Especializacoes() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Especializações</Text>
            <View style={styles.icons}>
                <View style={styles.plusI}>
                    <AntDesign name="HTML" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <Ionicons name="logo-javascript" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <FontAwesome name="database" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <FontAwesome5 name="css3-alt" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>
                
                <AntDesign name="plus" size={40} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        marginLeft: 5,
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    titulo: {
        fontSize: 15, 
        color: '#fff',
    },
    plusI: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
})