import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function NewsSection() {
    return (
        <View style={styles.newsSection}>
            <Image
                source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.showmetech.com.br%2Fprogramacao-e-codigo-confira-5-sites-para-aprender-a-programar-de-graca%2F&psig=AOvVaw0VnpFyf2EoSCwY5bgfjcii&ust=1747226503204000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCi1cy8oI0DFQAAAAAdAAAAABBC' }}
                style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>NOTÍCIAS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    newsSection: {
        alignItems: 'center',
        marginBottom: 16,
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 10,   
    },
    newsImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',
        shadowColor: '#000',
        
    },
    newsTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
});

