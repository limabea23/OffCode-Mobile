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
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 12,
        color: '#333',
        marginBottom: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        marginLeft: 4,
        fontSize: 12,
        color: '#000',
    },
});

