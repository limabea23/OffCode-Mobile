import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Conexoes({seguindo, seguidores, postagens}) {
    return (
        <View style={styles.card}>
                    <View style={styles.coluna}>
                        <Text style={styles.p}>SEGUINDO</Text>
                        <Text style={styles.number}>{seguindo}</Text>
                    </View>

                    <View style={styles.linhaVertical} />

                    <View style={styles.coluna}>
                        <Text style={styles.p}>SEGUIDORES</Text>
                        <Text style={styles.number}>{seguidores}</Text>
                    </View>
        
                    <View style={styles.linhaVertical} />

                    <View style={styles.coluna}>
                        <Text style={styles.p}>POSTAGENS</Text>
                        <Text style={styles.number}>{postagens}</Text>
                    </View>
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
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 15,
    },
    p: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 5,
    },
    linhaVertical: {
        width: 1, 
        height: 60,
        backgroundColor: '#fff', 
        alignSelf: 'center', 
        marginTop: 5, 
    },
    number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20,
        marginTop: 2,
    },
})