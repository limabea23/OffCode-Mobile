 // Seção específica para notícias
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NewsSection() {
    return (
        <View style={styles.newsSection}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.iconLeft}>
                    <Ionicons name="chevron-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' }}
                    style={styles.newsImage}
                />
                <TouchableOpacity style={styles.iconRight}>
                    <Ionicons name="chevron-forward" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <Text style={styles.newsTitle}>NOTÍCIAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newsSection: {
        alignItems: 'center',
        marginBottom: 16,
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
    },
    newsImage: {
        width: 350,
        height: 200,
        borderRadius: 10,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',

    },
    iconLeft: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },
    iconRight: {
        position: 'absolute',
        right: 10,
        zIndex: 1,
    },
    newsTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
});