import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';

export default function Post() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('post');
    const [postText, setPostText] = useState('');
    const [codeText, setCodeText] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handlePublish = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPostText('');
            setCodeText('');
            setSelectedImage(null);
            setSelectedLanguage('');
            Toast.show('Publicado com sucesso!', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#6a0dad',
                textColor: '#fff',
            });
        }, 1500);
    };

    const handleAddImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permission.granted) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Noticias')} style={styles.backButton}>
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

                {selectedOption === 'post' && (
                    <>
                     
                        <TextInput
                            style={styles.postTextInput}
                            placeholder="Digite seu post aqui..."
                            placeholderTextColor="#888"
                            multiline
                            value={postText}
                            onChangeText={setPostText}
                        />

                        <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
                            {selectedImage ? (
                                <Image source={{ uri: selectedImage }} style={styles.selectedImageInsideButton} />
                            ) : (
                                <>
                                    <Ionicons name="image-outline" size={40} color="#6a0dad" />
                                    <Text style={styles.addImageText}>Adicionar Foto</Text>
                                </>
                            )}
                        </TouchableOpacity>
                    </>
                )}

                {selectedOption === 'duvida' && (
                    <>
                        <TextInput
                            style={styles.postTextInput}
                            placeholder="Digite sua dúvida aqui..."
                            placeholderTextColor="#888"
                            multiline
                            value={postText}
                            onChangeText={setPostText}
                        />

                        <TextInput
                            style={styles.codeInput}
                            placeholder="Cole ou formate seu código aqui..."
                            placeholderTextColor="#888"
                            multiline
                            value={codeText}
                            onChangeText={setCodeText}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <View style={styles.languageContainer}>
                            <Text style={styles.languageLabel}>SELECIONE A LINGUAGEM UTILIZADA EM SUA DÚVIDA:</Text>
                            <View style={styles.languagePicker}>
                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                                    style={styles.languageInput}
                                >
                                    <Picker.Item label="Selecione uma linguagem" value="" />
                                    <Picker.Item label="JavaScript" value="JavaScript" />
                                    <Picker.Item label="CSS" value="CSS" />
                                    <Picker.Item label="HTML" value="HTML" />
                                </Picker>
                            </View>
                        </View>
                    </>
                )}
            </View>

            <TouchableOpacity
                style={[styles.publishButton, loading || (!postText && selectedOption === 'duvida') ? { opacity: 0.5 } : {}]}
                disabled={loading || (!postText && selectedOption === 'duvida')}
                onPress={handlePublish}
            >
                <Text style={styles.publishText}>
                    {loading ? (selectedOption === 'post' ? 'ADICIONANDO...' : 'PUBLICANDO...') : (selectedOption === 'post' ? 'ADICIONAR' : 'PUBLICAR')}
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
        marginTop: 20, 
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
        height: 90,
        padding: 10,
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
    addImageButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        width: '100%',
        height: 150,
        marginBottom: 20,
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
    codeInput: {
        color: '#000',
        fontSize: 14,
        marginBottom: 20,
        lineHeight: 20,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#6a0dad',
        minHeight: 150,
        backgroundColor: '#d3d3d3',
        borderRadius: 8,
        fontFamily: 'monospace',
    },
    addImageText: {
        marginTop: 10,
        fontSize: 14,
        color: '#555',
    },
    selectedImageInsideButton: {
        width: '100%',
        height: '100%',
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
    languageContainer: {
        marginBottom: 20,
    },
    languagePicker: {
        backgroundColor: '#f9f9f9', 
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
        borderWidth: 0, 
        justifyContent: 'center',
        height: 50, 
    },
    languageInput: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', 
        borderWidth: 0, 
    },
    publishButton: {
        backgroundColor: '#6a0dad',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    publishText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});