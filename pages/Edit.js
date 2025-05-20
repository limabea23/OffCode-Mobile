import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Conexoes from './components/Conexoes';
import Especializacoes from './components/Especializacoes';

import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Image style={styles.capa} source={require('./assets/public/fotocapa.png')} />
        <Image style={styles.pic} source={require('./assets/public/fotoprofile.png')} />
        <View style={styles.linhaHorizontal} />
      </View>


      <View style={styles.perfil}>
        <View style={styles.info}>
        <View style={styles.pen}>
        <Text style={styles.p}>Nome</Text>
        <EvilIcons name="pencil" size={20} color="white" />
        </View>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Editar perfil</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.p}>@username</Text>
        <View style={styles.pen}>
        <Text style={styles.p}> <Text style={styles.pco}>Empresa</Text> / Pessoal</Text>
        <EvilIcons name="pencil" size={20} color="white" />
        </View>
        <View style={styles.pen}>
        <Text style={styles.p}>Biografia</Text>
        <EvilIcons name="pencil" size={20} color="white" />
        </View>
        <Text style={styles.p}>Transformamos ideias em soluções inovadoras 🚀 | Tecnologia, criatividade e impacto 🌐 | Conectando pessoas e oportunidades no Off Code 💡</Text>

        <Conexoes />
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
    marginLeft: 180,
  },
  botao: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#8c52ff',
    marginLeft: 20,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
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
});