import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Post() {
    const [selectedOption, setSelectedOption] = useState('post');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backText}>VOLTAR</Text>
            </TouchableOpacity>

            <View style={styles.postCard}>
                <View style={styles.userInfo}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/50' }}
                        style={styles.userAvatar}
                    />
                    <Text style={styles.userName}>NOME USUÁRIO</Text>
                </View>

                <View style={styles.postHeader}>
                    <Text
                        style={[styles.postType, selectedOption === 'post' && styles.activeText]}
                        onPress={() => setSelectedOption('post')}
                    >
                        POST/
                    </Text>
                    <Text
                        style={[styles.doubtText, selectedOption === 'duvida' && styles.activeText]}
                        onPress={() => setSelectedOption('duvida')}
                    >
                        DÚVIDA
                    </Text>
                </View>

                <Text style={styles.postText}>KEFNMUNUENUNUWDJUIUDHREYTRGHYUJSKQQUSUNHNDBVHBDGHBXNSJMNSENEUHGFNUNDFDGEFWWQQWWQDXLSDXKLCN WHVBXYWHWBSIW</Text>

                <Text style={styles.languageLabel}>SELECIONE A LINGUAGEM UTILIZADA EM SEU POST</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="CSS" value="css" />
                        <Picker.Item label="SQL" value="sql" />
                    </Picker>
                </View>
            </View>

            <TouchableOpacity style={styles.publishButton}>
                <Text style={styles.publishText}>PUBLICAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

        padding: 16,
    },
    backButton: {
        marginBottom: 16,
        padding: 10,
    },
    backText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    postCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        width: '90%',
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        elevation: 3,
        alignSelf: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    postHeader: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    postType: {
        color: '#8e8e8e',
        fontSize: 14,
        fontStyle: 'italic',
    },
    doubtText: {
        color: '#8e8e8e',
        fontSize: 14,
        fontStyle: 'italic',
    },
    activeText: {
        color: '#6a0dad', 
        fontWeight: 'bold',
    },

    languageLabel: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 8,
    },
    pickerContainer: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        marginBottom: 16,
    },
    picker: {
        color: 'black',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        width: '100%',
    },
    publishButton: {
        backgroundColor: '#6a0dad',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
    },
    publishText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});