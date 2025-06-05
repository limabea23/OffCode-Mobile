import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

export default function Flipcard({ image, name, funcao, github, linkedin, email }) {
    const [flipped, setFlipped] = useState(false);
    const rotateY = useSharedValue(0);

    const flipCard = () => {
        setFlipped(!flipped);
        rotateY.value = withTiming(flipped ? 0 : 180, { duration: 400 });
    };

    const handleGithubPress = () => {
        if (github) {
            Linking.openURL(github);
        }
    };

    const handleLinkedinPress = () => {
        if (linkedin) {
            Linking.openURL(linkedin);
        }
    };

    const handleEmailPress = () => {
        if (email) {
            Linking.openURL(email);
        }
    };

    const frontAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value}deg` }],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        width: '100%',
    }));

    const backAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateY: `${rotateY.value + 180}deg` }],
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#8C52FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }));

    return (
        <TouchableWithoutFeedback onPress={flipCard}>
            <View style={{ width: 300, height: 450, marginTop: 15}}>
                <Animated.View style={frontAnimatedStyle}>
                    <Image source={image} style={styles.image} />
                </Animated.View>
                <Animated.View style={backAnimatedStyle}>
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
                    <Text style={{ color: '#fff', fontSize: 20 }}>{funcao}</Text>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Parte da equipe OffCode</Text>
                    <View style={styles.icons}>
                        <AntDesign name="github" size={40} color="white" onPress={handleGithubPress} />
                        <AntDesign name="linkedin-square" size={40} color="white" onPress={handleLinkedinPress} />
                        <MaterialCommunityIcons name="email" size={40} color="white" onPress={handleEmailPress} />
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
image: {
    width: 300,
    height: 450,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#864FF4',
},
icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 15,
},
});