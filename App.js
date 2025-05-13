import React from 'react';
import { StyleSheet, View } from 'react-native';
import Noticias from './components/Noticias'; 

export default function App() {
    return (
        <View style={styles.container}>
            <Noticias />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});