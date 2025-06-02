import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Loading() {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/public/on-off.gif')} />
        <Text style={styles.text}>Carregando...</Text>
        <StatusBar style="auto" />
    </View>
);
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
},
    image: {
    borderRadius: 50,
    borderColor: '#fff',
    width: 250,
    height: 250,
},
    text: {
    color: '#fff',
    fontSize: 25,
}
});
