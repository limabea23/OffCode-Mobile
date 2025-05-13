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
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    userIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000',
        marginRight: 8,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    cardContent: {
        fontSize: 12,
        color: '#333',
        marginBottom: 16,
        lineHeight: 18,
        textAlign: 'justify',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 8,
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        marginRight: 8,
        flex: 1,
        justifyContent: 'center',
    },
    iconText: {
        marginLeft: 4,
        fontSize: 12,
        color: '#000',
    },
});