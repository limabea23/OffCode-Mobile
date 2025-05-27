 // Página principal de duvidas
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card'
import DoubtSession from '../components/DoubtSession';


export default function Duvidas () {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <DoubtSession />
                <Card
                    userName="NOME USUÁRIO"
                    content="Aqui vai um post da primeira duvida. Este é um exemplo de texto."
                />
                <Card
                    userName="NOME USUÁRIO"
                    content="Aqui vai um post da segunda duvida. Este é um exemplo de texto."
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 40,
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderRadius: 10,
        borderWidth: 2,
    },
    content: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
        borderRadius: 10,  
        borderWidth: 2, 

        
    },
    cardsContainer: {
        marginTop: 16,
        padding: 10,
        backgroundColor: '#000',    
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

