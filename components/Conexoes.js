import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Conexoes({seguindo, seguidores, postagens}) {
    return (
        <View style={styles.card}>
            <Text style={styles.p}>SEGUINDO</Text>
            <Text style={styles.seguindo}>{seguindo}</Text>
            <Text style={styles.p}>SEGUIDORES</Text>
            <Text style={styles.seguidores}>{seguidores}</Text>
            <Text style={styles.p}>POSTAGENS</Text>
            <Text style={styles.postagens}>{postagens}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
    backgroundColor: '#8c52ff', 
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    maxWidth: 300,
    minHeight: 150,
    },
    p: {
        color: '#fff',
    },
})