import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';

export default function Post({ navigation }) {
    const [selectedOption, setSelectedOption] = useState('post');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [postText, setPostText] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePublish = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPostText('');
            Toast.show('Publicado com sucesso!', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#6a0dad',
                textColor: '#fff',
            });
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back-circle-outline" size={32} color="#fff" style={{ marginRight: 8 }} />
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

                <TextInput
                    style={styles.postTextInput}
                    placeholder="Digite sua dúvida ou post aqui..."
                    placeholderTextColor="#888"
                    multiline
                    value={postText}
                    onChangeText={setPostText}
                />

                <Text style={styles.languageLabel}>SELECIONE A LINGUAGEM UTILIZADA EM SEU POST:</Text>
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

            <TouchableOpacity
                style={[styles.publishButton, loading || !postText ? { opacity: 0.5 } : {}]}
                disabled={loading || !postText}
                onPress={handlePublish}
            >
                <Text style={styles.publishText}>
                    {loading ? 'PUBLICANDO...' : 'PUBLICAR'}
                </Text>
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
        flexDirection: 'row',
        alignItems: 'center',
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
        borderBottomColor: '#000',
        height: 80,
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
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        height: 40,
        marginLeft: 5,
    },
    postTextInput: {
        color: '#555',
        fontSize: 14,
        marginBottom: 20,
        lineHeight: 20,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        minHeight: 80,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
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
        textDecorationLine: 'underline',
    },
    languageLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
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
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
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