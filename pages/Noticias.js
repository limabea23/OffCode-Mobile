// Página principal de notícias
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Card from '../components/Card';

const usuarios = [
    { nome: 'Ana Silva' },
    { nome: 'Bruno Souza' },
    { nome: 'Carlos Oliveira' },
    { nome: 'Daniela Lima' },
    { nome: 'Eduardo Santos' },
];

export default function Noticias() {
    const [busca, setBusca] = useState('');
    const [resultados, setResultados] = useState(usuarios);

    const handleBusca = (texto) => {
        setBusca(texto);
        if (texto.trim() === '') {
            setResultados(usuarios);
        } else {
            setResultados(
                usuarios.filter(u =>
                    u.nome.toLowerCase().includes(texto.toLowerCase())
                )
            );
        }
    };

    return (
        <View style={styles.container}>
            <Header busca={busca} onBuscaChange={handleBusca} />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Resultados da busca */}
                {busca.length > 0 && (
                    <View style={styles.resultadosBox}>
                        {resultados.length > 0 ? (
                            resultados.map((usuario, idx) => (
                                <View key={idx} style={styles.resultadoItem}>
                                    <Text style={styles.resultadoNome}>{usuario.nome}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.resultadoNome}>Nenhum usuário encontrado.</Text>
                        )}
                    </View>
                )}
                <NewsSection />
                <Card
                    userName={
                        <View style={styles.userInfo}>
                            <View style={styles.userCircle} />
                            <Text style={styles.userName}>NOME USUÁRIO</Text>
                        </View>
                    }
                    content="Aqui vai o conteúdo do primeiro post ou notícia. Este é um exemplo de texto."
                    style={styles.cardContainer}
                />
                <Card
                    userName={
                        <View style={styles.userInfo}>
                            <View style={styles.userCircle} />
                            <Text style={styles.userName}>NOME USUÁRIO</Text>
                        </View>
                    }
                    content="Aqui vai o conteúdo do segundo post ou notícia. Este é um exemplo de texto."
                    style={styles.cardContainer}
                />
                <Card
                    userName={
                        <View style={styles.userInfo}>
                            <View style={styles.userCircle} />
                            <Text style={styles.userName}>NOME USUÁRIO</Text>
                        </View>
                    }
                    content="Aqui vai o conteúdo do terceiro post ou notícia. Este é um exemplo de texto."
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
    scrollContent: {
        flexGrow: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: 'center', 
    },
    resultadosBox: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    resultadoItem: {
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 10,
        marginVertical: 4,
    },
    resultadoNome: {
        color: '#222',
        fontSize: 16,
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