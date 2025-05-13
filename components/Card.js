// Componente de card reutilizável
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ userName, content }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{userName}</Text>
            <Text style={styles.cardContent}>{content}</Text>
            <View style={styles.cardFooter}>
                <View style={styles.iconButton}>
                    <Ionicons name="heart-outline" size={20} color="#333" />
                    <Text style={styles.iconText}>100</Text>
                </View>
                <View style={styles.iconButton}>
                    <Ionicons name="chatbubble-outline" size={20} color="#333" />
                    <Text style={styles.iconText}>100</Text>
                </View>
                <View style={styles.iconButton}>
                    <Ionicons name="bookmark-outline" size={20} color="#333" />
                    <Text style={styles.iconText}>100</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
        lineHeight: 20,
        textAlign: 'justify',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 12,
        paddingBottom: 8,
        marginTop: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    iconText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 4,
        borderWidth: 1,
    },
});