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
                <Text style={styles.subtitle}>A resposta para suas dúvidas está off code.</Text>
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
        width: 50,
        height: 50,
        marginBottom: 4,
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
        width: 200,
        marginRight: 16, 
    },
    searchIcon: {
        marginRight: 8,
        color: '#aaa',
        
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
    },
});