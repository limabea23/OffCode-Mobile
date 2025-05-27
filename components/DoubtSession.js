import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function DoubtSession() {
    const images = [
        { id: '1', uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D' },
        { id: '2', uri: 'https://blog.convisoappsec.com/wp-content/uploads/2017/05/83256-revisao-de-codigo-de-ti-saiba-como-fazer-e-a-importancia-de-revisar-1200x900.jpg' },
        { id: '3', uri: 'https://media.istockphoto.com/id/537331500/pt/foto/fundo-abstrato-tecnologia-de-c%C3%B3digo-de-programa%C3%A7%C3%A3o-de-deve-software.jpg?s=612x612&w=0&k=20&c=8Q1G7JeiWFFYn0ErWNsYzq3lBuutUT5S8kbcBfpiQyw=' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <View style={styles.doubtSession}>
            <View style={styles.carousel}>
                <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>{"<"}</Text>
                </TouchableOpacity>
                <Image
                    source={{ uri: images[currentIndex].uri }}
                    style={styles.Image}
                />
                <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>{">"}</Text>
                </TouchableOpacity>
            </View> 
            <Text style={styles.newsTitle}>DÚVIDAS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    doubtSession: {
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
    Image: {
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