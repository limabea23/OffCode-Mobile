import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';
import Card from '../components/Card';
import Constants from 'expo-constants';
import loadingGif from '../assets/public/loading.gif';
import { useNavigation } from '@react-navigation/native';

export default function Noticias() {
  const navigation = useNavigation();
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const flatListRef = useRef(null);
  const { apiUrl, apiImg, apiKey } = Constants.expoConfig.extra;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}posts`, {
        headers: { 'x-api-key': apiKey }
      });
      const allPosts = response.data.posts || response.data;

      setPosts(allPosts);
      setResultados(allPosts);
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

  const getAnexoImage = (anexo) => {
    if (!anexo || anexo.trim().toLowerCase() === 'null') {
      return null;
    }
    return { uri: `${apiImg}/${anexo}` };
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Image
          source={loadingGif}
          style={{ width: 60, height: 60 }}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header busca={busca} onBuscaChange={handleBusca} />
      <FlatList
        ref={flatListRef}
        data={resultados}
        keyExtractor={(item, idx) => item.id_post?.toString() ?? idx.toString()}
        renderItem={({ item: post, index: idx }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PostDetalhes', {post, apiImg})} >
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
            anexos={
              getAnexoImage(post.anexo) && (
                <Image
                  source={getAnexoImage(post.anexo)}
                  style={styles.anexoImage}
                  resizeMode="cover"
                />
              )
            }
            likes={Number(post.quantidade_curtidas)}
          />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={{ alignItems: 'center', margin: 16 }}>
            <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 8 }}>
              Você chegou ao fim dos posts.
            </Text>
            <TouchableOpacity
              style={styles.upButton}
              onPress={() => {
                flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
              }}
            >
              <Ionicons name="arrow-up-circle" size={36} color="#8000ff" />
            </TouchableOpacity>
          </View>
        }
        ListHeaderComponent={<NewsSection />}
        contentContainerStyle={styles.scrollContent}
      />
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
  anexoImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 8,
  },
  upButton: {
    marginTop: 8,
    alignItems: 'center',
  },
});