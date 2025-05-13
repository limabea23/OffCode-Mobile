import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Especializacoes() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Especializações</Text>
            <View style={styles.icons}>
                <AntDesign name="HTML" size={40} color="white" />
                <Ionicons name="logo-javascript" size={40} color="white" />
                <FontAwesome name="database" size={40} color="white" />
                <FontAwesome5 name="css3-alt" size={40} color="white" />
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
        marginTop: 5,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 15, 
        color: '#fff',
    },
})