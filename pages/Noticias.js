import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator, Alert, Image } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Card from '../components/Card';
import Constants from 'expo-constants';

export default function Noticias() {
    const [busca, setBusca] = useState('');
    const [resultados, setResultados] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { apiUrl, apiImg, apiKey } = Constants.expoConfig.extra;

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                `${apiUrl}posts`, {
                headers: { 'x-api-key': apiKey }
            });
            setPosts(response.data);
            setResultados(response.data);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
            Alert.alert('Erro', 'Erro ao carregar os posts.');
        } finally {
            setLoading(false);
        }
    };

    const handleBusca = (texto) => {
        setBusca(texto);
        if (texto.trim() === '') {
            setResultados(posts);
        } else {
            setResultados(
                posts.filter(p =>
                    p.conteudo_post.toLowerCase().includes(texto.toLowerCase()) ||
                    p.usuario_nome.toLowerCase().includes(texto.toLowerCase())
                )
            );
        }
    };

    const getUserImage = (foto_perfil) => {
        if (!foto_perfil || foto_perfil.trim().toLowerCase() === 'null') {
            return require('../assets/public/default-profile.png');
        }
        return { uri: `${apiImg}/${foto_perfil}` };
    };

    return (
      <View style={styles.container}>
        <Header busca={busca} onBuscaChange={handleBusca} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <>
              {busca.length > 0 && (
                <View style={styles.resultadosBox}>
                  {resultados.length > 0 ? (
                    resultados.map((post, idx) => (
                      <View
                        key={post.id_post ?? idx}
                        style={styles.resultadoItem}
                      >
                        <Text style={styles.resultadoNome}>
                          {post.usuario_nome} - {post.conteudo_post}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.resultadoNome}>
                      Nenhum post encontrado.
                    </Text>
                  )}
                </View>
              )}

              <NewsSection />

              {posts.map((post, idx) => {
                return (
                  <Card
                    key={post.id_post ?? idx}
                    header={
                      <View style={styles.userInfo}>
                        <Image
                          source={getUserImage(post.foto_perfil)}
                          style={styles.userImage}
                        />
                        <Text style={styles.userName}>{post.usuario_nome}</Text>
                      </View>
                    }
                    content={post.conteudo_post}
                    likes={Number(post.quantidade_curtidas)} 
                  />
                );
              })}
            </>
          )}
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
        // alignItems: 'center',
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
    userImage: {
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
