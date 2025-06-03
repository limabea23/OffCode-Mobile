import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Header({ busca, onBuscaChange }) {
    const navigation = useNavigation();
    const route = useRoute();

    const destino = route.name === 'Noticias' ? 'Duvidas' : 'Noticias';

    return (
        <View style={styles.header}>
            <View style={styles.topRow}>
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
                        value={busca}
                        onChangeText={onBuscaChange}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.switchButton}
                onPress={() => navigation.navigate(destino)}
            >
                <Text style={styles.switchButtonText}>
                    {destino === 'Duvidas' ? 'Ir para Dúvidas' : 'Ir para Notícias'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        marginTop: 20,
        padding: 16,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    logo: {
        width: 195,
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 180,
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
    switchButton: {
        marginTop: 18,
        backgroundColor: '#8000ff',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    switchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
});