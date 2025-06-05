import React, {useEffect, useState} from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator, Alert, Image} from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';
import DoubtSession from '../components/DoubtSession';
import Constants from 'expo-constants';


export default function Duvidas() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <DoubtSession style={styles.carouselContainer} />
                <Card
                    userName={
                        <View style={styles.userInfo}>
                            <View style={styles.userCircle} />
                            <Text style={styles.userName}>NOME USUÁRIO</Text>
                        </View>
                    }
                    content="Aqui vai um post da primeira dúvida. Este é um exemplo de texto."
                    style={styles.cardContainer}
                />
                <Card
                    userName={
                        <View style={styles.userInfo}>
                            <View style={styles.userCircle} />
                            <Text style={styles.userName}>NOME USUÁRIO</Text>
                        </View>
                    }
                    content="Aqui vai um post da segunda dúvida. Este é um exemplo de texto."
                    style={styles.cardContainer}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        flexGrow: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    userCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#000',
        marginRight: 8,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});