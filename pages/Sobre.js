import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Image style={styles.capa} source={require('./assets/public/fotocapa.png')} />
        <View style={styles.linhaHorizontal} />
      </View>

      <View style={styles.card}>
        <Text style={styles.h1}>Conheça Quem Está por Trás do Código</Text>
        <Text style={styles.p}>Nosso time de desenvolvedores une talento e inovação para transformar ideias em soluções digitais eficientes.</Text>
      </View>

      <View style={styles.carrossel}>
        <View style={styles.conteudo}>
          <AntDesign name="left" size={24} color="white" />
          <Image style={styles.pic} source={require('./assets/public/teste.png')} />
          <AntDesign name="right" size={24} color="white" />
        </View>
      </View>

      <View style={styles.example}>
        
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
    fontSize: 15,
    marginLeft: 5,
  },
  h1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  capa: {
    width: 400,
    height: 200,
  },
  linhaHorizontal: {
    width: '100%', 
    height: 2,
    backgroundColor: '#fff', 
    alignSelf: 'center', 
    marginTop: 5, 
  },
  card: {
    backgroundColor: '#382166', 
    borderRadius: 10,
    maxWidth: 350,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
  },
  carrossel: {
    marginTop: 20,
    alignItems: 'center',
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});