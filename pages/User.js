import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Conexoes from './components/Conexoes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Image style={styles.capa} source={require('./assets/public/fotocapa.png')} />
      </View>

      <View style={styles.perfil}>
        <Image style={styles.pic} source={require('./assets/public/fotoprofile.png')} />
        <Text style={styles.p}>Nome</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.p}>@username</Text>
        <Text style={styles.p}>Empresa / Pessoal</Text>
        <Text style={styles.p}>Biografia</Text>
        <Text style={styles.p}>Transformamos ideias em soluções inovadoras 🚀 | Tecnologia, criatividade e impacto 🌐 | Conectando pessoas e oportunidades no Off Code 💡</Text>
        <Conexoes />
      </View>

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
  },
  header: {
    
  },
  capa: {
    width: 500,
    height: 500,
    marginTop: 10,
  },
  pic: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 500,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  botao: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 30,
    alignItems: "center",
    backgroundColor: '#8c52ff',
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
});