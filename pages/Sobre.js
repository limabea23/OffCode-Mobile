import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from 'react-native';
import Carousel from "react-native-reanimated-carousel";

export default function Sobre() { 

  const data = [
  { id: 1, image: require('./assets/public/teste.png') },
  { id: 2, image: require('./assets/public/teste.png') },
  { id: 3, image: require('./assets/public/teste.png') },
  { id: 4, image: require('./assets/public/teste.png') },
  { id: 5, image: require('./assets/public/teste.png') },
  { id: 6, image: require('./assets/public/teste.png') },
];  

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

      <View style={styles.carouselContainer}> 
        <Carousel
          width={500}
          height={500}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          />
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
    width: 500,
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
  imageContainer: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});