// Cabeçalho comum a todas as páginas
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ value, onBuscaChange }) {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/public/logotipo.png')} 
                    style={styles.logo}
                />
            </View>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    value={value}
                    onChangeText={onBuscaChange}
                    placeholder="Buscar..."
                    placeholderTextColor="#aaa"
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#000',
        marginTop: 20,
        width: '100%',
        padding: 5,
        
    },
    logoContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginRight: 16,
    },
    logo: {
        width: 150,
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
        
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        width: 150,
        height: 40,
        marginRight: '10%',
    },
searchIcon: {
        marginRight: 10,
        color: '#aaa',
    },
searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
});