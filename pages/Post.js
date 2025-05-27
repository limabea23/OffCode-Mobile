import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Post() {
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
                <View>
                    <Text style={styles.postType}>POST/DÚVIDA</Text>
                </View>
            </View>

             <Text style={styles.h1}>JEDNWJFNDJUNDJUWNDUJWNHHSNDWUDHWIUDHUWRGYEFGYTWEVFUJHESVFBHEFBWHEEBFUWFBWFBWFHBWYUFBGWYEFGBYEFBWYEHFBWHEFBWHBFWHEFBWEFHBWFHEBWYHEFBWHFBHBFW</Text>
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
        width: 315,
        height: 400,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#black',
        
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#black',
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
       

        
    },
    userName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    postType: {
        color: '#8e8e8e',
        fontSize: 14,
        marginTop: 4,
        fontStyle: 'italic', 
        

    },
    postContent: {
        color: '#fff',
        fontSize: 14,
        marginTop: 8,
        lineHeight: 20,
        textAlign: 'justify',   

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

