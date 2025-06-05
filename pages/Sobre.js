import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from 'react-native';
import Carousel from "react-native-reanimated-carousel";
import Flipcard from '../components/Flipcard';

export default function Sobre() { 
  const data = [
  { id: 1, image: require('../assets/public/anacarolina.png'), name:'Ana Carolina', funcao:'Scrum Master', github: 'https://github.com/AnaCarolinaFreitas', linkedin: 'https://www.linkedin.com/in/ana-carolina-garcia-freitas-4907b52b1/', email: 'mailto:ana.c.freitas35@aluno.senai.br'},
  { id: 2, image: require('../assets/public/anajulia.png'), name:'Ana Julia', funcao:'Desenvolvedora', github: 'https://github.com/anajudemattei', linkedin: 'https://www.linkedin.com/in/ana-julia-pinheiro-demattei-b40929368/', email: 'mailto:ana.demattei@aluno.senai.br' },
  { id: 3, image: require('../assets/public/beatriz.png'), name:'Beatriz', funcao:'Desenvolvedora', github: 'https://github.com/limabea23', linkedin: 'https://www.linkedin.com/in/beatriz-lima-74145430a/', email: 'mailto:beatriz.lima14@aluno.senai.br' },
  { id: 4, image: require('../assets/public/bernardo.png'), name:'Bernardo', funcao:'Desenvolvedor', github: 'https://github.com/Bernardo1401', linkedin: 'https://www.linkedin.com/in/bernardo-gabriel-de-moraes-marques-146b222b1/', email: 'mailto:bernardo.g.marques@aluno.senai.br' },
  { id: 5, image: require('../assets/public/caio.png'), name:'Caio', funcao:'Product Owner', github: 'https://github.com/CaioGabDev', linkedin: 'https://www.linkedin.com/in/caio-lacerda-062b222b1/', email: 'mailto:caio.g.silva20@aluno.senai.br' },
  { id: 6, image: require('../assets/public/luana.png'), name:'Luana', funcao:'Desenvolvedora', github: 'https://github.com/domeneghetti', linkedin: 'https://www.linkedin.com/in/luana-domeneghetti-827b1b2b1/', email: 'mailto:luana.domeneghetti@aluno.senai.br' },
];  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.capa} source={require('../assets/public/fotocapa.png')} />
        <View style={styles.linhaHorizontal} />
      </View>

      <ScrollView>
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
              <Flipcard image={item.image} name={item.name} funcao={item.funcao} github={item.github} linkedin={item.linkedin} email={item.email} />
            </View>
          )}
          />
      </View>

      </ScrollView>
      <StatusBar style="light" />
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
    width: 370,
    height: 200,
  },
  linhaHorizontal: {
    width: '100%', 
    height: 2,
    backgroundColor: '#fff', 
    alignSelf: 'center', 
    marginTop: 5, 
  },
  header: {
    width: '100%', 
    position: 'relative',
    height: 220,
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
    left: 5,
  },
  conteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 60,
  },
});