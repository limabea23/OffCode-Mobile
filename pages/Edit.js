import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Conexoes from './components/Conexoes';
import Especializacoes from './components/EspecializacoesE';
import Bottom from './components/Button';
import * as ImagePicker from 'expo-image-picker';

import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Edit() {
  const [capaUri, setCapaUri] = useState(null);
  const [profileUri, setProfileUri] = useState(null);

  const handleImagePicker = async (type) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4,4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (type === 'capa') {
        setCapaUri(result.assets[0].uri);
      } else if (type === 'pic') {
        setProfileUri(result.assets[0].uri);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>

        <TouchableOpacity style={styles.photo} onPress={() => handleImagePicker('capa')} >
        <Text style={styles.textoBotao}> Escolher imagem </Text>
        </TouchableOpacity>
        <Image style={styles.capa} source={capaUri ? { uri: capaUri } : require('./assets/public/fotocapablur.png')} />
        
        <TouchableOpacity style={styles.photo2} onPress={() => handleImagePicker('pic')} >
        <Text style={styles.textoBotao2}> Escolher imagem </Text>
        </TouchableOpacity>
        <Image style={styles.pic} source={profileUri ? { uri: profileUri } : require('./assets/public/fotoprofileblur.png')} />
        <View style={styles.linhaHorizontal} />
      </View>


      <View style={styles.perfil}>
        <View style={styles.info}>
        <View style={styles.pen}>
        <TextInput style={styles.input} placeholderTextColor="#fff" placeholder="Nome" />
        <EvilIcons name="pencil" size={20} color="white" />
        </View>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Feito</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.pen}>
          <TextInput style={styles.input} placeholderTextColor="#fff" placeholder="@username" />
        <EvilIcons name="pencil" size={20} color="white" />
        </View>
      
        <View style={styles.pen}>
        <Bottom />
        <EvilIcons name="pencil" size={20} color="white" />
        </View>

        <Text style={styles.p}>Biografia</Text>
        
        <View style={styles.pen}>
        <TextInput style={styles.input} placeholderTextColor="#fff" placeholder="Escreva aqui..." />
        <EvilIcons name="pencil" size={20} color="white" />
        </View>

        <Conexoes seguindo="394" seguidores="3920" postagens="204" />
      </View>

      <View style={styles.linhaHorizontal} />

      <Especializacoes />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    color: '#fff',
    fontSize: 15,
    alignItems: 'center',
    marginLeft: 5,
  },
  pco: {
    color: '#8c52ff',
    fontSize: 15,
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 220,
  },
  capa: {
    width: 400,
    height: 200,
  },
  pic: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 500,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
    position: 'absolute',
    bottom: -50,
    zIndex: 1,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 130,
  },
  botao: {
    padding: 10,
    borderRadius: 10,
    width: 80,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#8c52ff',
    marginLeft: 20,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  linhaHorizontal: {
    width: '100%', 
    height: 2,
    backgroundColor: '#fff', 
    alignSelf: 'center', 
    marginTop: 5, 
},
  perfil: {
  marginTop: 15, 
  flexDirection: 'row',
  alignItems: 'center',
},
  pen: {
    flexDirection: 'row',
    alignItems: 'center',
},
input: {
    color: '#fff', 
    borderRadius: 5,
    width: 100, 
    height: 40, 
    borderColor: '#8c52ff',
    borderWidth: 1, 
},
photo: {
  position: 'absolute',
  top: 100,
  right: 100,
  padding: 10,
  borderRadius: 20,
  transform: [{ translateX: -50 }], 
  zIndex: 2,
},
photo2: {
  position: 'absolute',
  top: 200,
  left: 100,
  padding: 10,
  borderRadius: 20,
  transform: [{ translateX: -50 }], 
  zIndex: 2,
},
textoBotao2: {
  right: 35,
  color: '#fff',
  fontSize: 10,
  fontWeight: 'bold',
},
});