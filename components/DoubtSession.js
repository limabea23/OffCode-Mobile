import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DoubtSection() {
    const navigation = useNavigation();
    const route = useRoute();

    const image = { uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' };

    const handleArrow = (direction) => {
        if (direction === 'left' && route.name === 'Duvidas') {
            navigation.navigate('Noticias');
        }
        if (direction === 'right' && route.name === 'Duvidas') {
            navigation.navigate('Post');
        }
    };

    return (
        <View style={styles.newsSection}>
            <View style={styles.carousel}>
                <TouchableOpacity
                    onPress={() => handleArrow('left')}
                    style={styles.arrowButton}
                >
                    <Text style={styles.arrowText}>{"<"}</Text>
                </TouchableOpacity>
                <Image
                    source={image}
                    style={styles.newsImage}
                />
                <TouchableOpacity
                    onPress={() => handleArrow('right')}
                    style={styles.arrowButton}
                >
                    <Text style={styles.arrowText}>{">"}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.newsTitle}>DÚVIDAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    newsSection: {
        alignItems: 'center',
        marginBottom: 16,
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    carousel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    newsImage: {
        width: 300, 
        height: 180, 
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',
    },
    arrowButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 10, 
    },
    arrowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    newsTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        textAlign: 'center',
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
});