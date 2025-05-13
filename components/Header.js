// Cabeçalho comum a todas as páginas
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
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
        padding: 16,
        backgroundColor: '#000',
    },
    logoContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 16,
    },
    logo: {
        width: 175,
        height: 70,
        marginBottom: 4,
        borderRadius: 10,
        borderWidth: 2,
        
    },
    subtitle: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 180,
        marginRight: 16, 
        height: 40,
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