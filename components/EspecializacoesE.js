import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

export default function Especializacoes() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Especializações</Text>
            <View style={styles.icons}>
                <View style={styles.plusI}>
                    <AntDesign name="HTML" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <Ionicons name="logo-javascript" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <FontAwesome name="database" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>

                <View style={styles.plusI}>
                    <FontAwesome5 name="css3-alt" size={40} color="white" />
                    <Feather name="x" size={10} color="white" />
                </View>
                
                
                <View style={styles.pickerContainer}>
                <AntDesign name="plus" size={32} color="black" style={styles.plusIcon} />
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="CSS" value="css" />
                        <Picker.Item label="SQL" value="sql" />
                        <Picker.Item label="HTML5" value="html5" />
                        <Picker.Item label="C++" value="c++" />
                        <Picker.Item label="TypeScript" value="typescript" />
                        <Picker.Item label="C#" value="c#" />
                    </Picker>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        marginLeft: 5,
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        margin: 10,
        marginLeft: -5,
    },
    titulo: {
        fontSize: 15, 
        color: '#fff',
    },
    plusI: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    pickerContainer: {
        backgroundColor: '#8c52ff',
        height: 40,
        width: 40,
        backgroundColor: 'white',
        fontSize: 16,
    },
    picker: {
        marginTop: 1,
        alignContent: 'center',
        width: 40,
        height: 40,
        textAlign: 'center',
        opacity: 0.01,
    },
    plusIcon: {
        position: 'absolute',
        top: 4,
        left: 3,
        zIndex: 1,
    },
})