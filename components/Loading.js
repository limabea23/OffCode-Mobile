import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function Loading() {
    return (
    <View style={styles.container}>
        <Image source={require('../assets/public/on-off.gif')} style={{height:200,width:200}} autoplay />
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
    text: {
    color: '#fff',
    fontSize: 25,
}
});
