import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';
import Constants from 'expo-constants';
import { FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import DoubtSession from '../components/DoubtSession';
import loadingGif from '../assets/public/loading.gif';
import { useNavigation } from '@react-navigation/native';

export default function Duvidas() {
  const navigation = useNavigation();
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [duvidas, setDuvidas] = useState([]);
  const flatListRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const { apiUrl, apiImg, apiKey } = Constants.expoConfig.extra;

  useEffect(() => {
    console.log("Buscando dúvidas em:", `${apiUrl}duvidas`);
    console.log("API KEY:", apiKey);
    fetchDuvidas();
  }, []);

  const fetchDuvidas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}duvidas`, {
        headers: { 'x-api-key': apiKey }
      });
      const allDuvidas = response.data.duvidas || response.data;
      setDuvidas(allDuvidas);
      setResultados(allDuvidas);
    } catch (error) {
      console.error('Erro ao buscar dúvidas:', error);
      Alert.alert('Erro', 'Erro ao carregar as dúvidas.');
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  console.log("Buscando dúvidas em:", `${apiUrl}duvidas`);
  fetchDuvidas();
}, []);

  const handleBusca = (texto) => {
    setBusca(texto);
    if (texto.trim() === '') {
      setResultados(duvidas);
    } else {
      setResultados(
        duvidas.filter(p =>
          (p.conteudo_duvida || '').toLowerCase().includes(texto.toLowerCase()) ||
          (p.usuario_nome || '').toLowerCase().includes(texto.toLowerCase())
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
      <Header value={busca} onBuscaChange={handleBusca} />
      <FlatList
        ref={flatListRef}
        data={resultados}
        keyExtractor={(item, idx) => (item.id_duvida ? item.id_duvida.toString() : idx.toString())}
        renderItem={({ item: duvida, index: idx }) => (
          <TouchableOpacity
                      onPress={() => navigation.navigate('DuvidasDetalhes', {duvida, apiImg})} >
          <Card
            key={duvida.id_duvida ?? idx}
            header={
              <View style={styles.userInfo}>
                <Image
                  source={getUserImage(duvida.foto_perfil)}
                  style={styles.userCircle}
                />
                <Text style={styles.userName}>{duvida.usuario_nome}</Text>
              </View>
            }
            content={duvida.conteudo_duvida}
            anexos={getAnexoImage(duvida.anexo) && (
              <Image
                source={getAnexoImage(duvida.anexo)}
                style={styles.anexoImage}
                resizeMode="cover"
              />
            )}
            likes={Number(duvida.quantidade_curtidas)}
          />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={{ alignItems: 'center', margin: 16 }}>
            <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 8 }}>
              Você chegou ao fim das dúvidas.
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
        ListHeaderComponent={<DoubtSession />}
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