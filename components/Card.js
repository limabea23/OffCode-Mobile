import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ userName, content }) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{userName}</Text>
            <Text style={styles.cardContent}>{content}</Text>
            <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="heart-outline" size={20} color="#000" />
                    <Text style={styles.iconText}>100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="chatbubble-ellipses-outline" size={20} color="#000" />
                    <Text style={styles.iconText}>100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="bookmark-outline" size={20} color="#000" />
                    <Text style={styles.iconText}>100</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginRight: 12,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
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
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 }, 
    },
    iconText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#333',
    },
});