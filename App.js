import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Noticias from './pages/Noticias'; 
import Duvidas from './pages/Duvidas';
import Post from './pages/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <Post />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});