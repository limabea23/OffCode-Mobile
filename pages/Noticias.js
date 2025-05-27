
 // Página principal de notícias
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Card from '../components/Card';


export default function Noticias() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.content}>
                <NewsSection />
                <Card
                    userName="NOME USUÁRIO"
                    content="Aqui vai o conteúdo do primeiro post ou notícia. Este é um exemplo de texto."
                />
                <Card
                    userName="NOME USUÁRIO"
                    content="Aqui vai o conteúdo do segundo post ou notícia. Este é um exemplo de texto."
                />
                <Card
                    userName="NOME USUÁRIO"
                    content="Aqui vai o conteúdo do terceiro post ou notícia. Este é um exemplo de texto."
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000',
        borderRadius: 10,   
        
    },
    cardsContainer: {
        marginTop: 16,
        padding: 10,
        backgroundColor: '#000',    
        borderRadius: 10,
        borderWidth: 2,
    },
});

