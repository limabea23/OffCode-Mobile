import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button() {
    const [selectedOption, setSelectedOption] = useState("Empresa");

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === "Empresa" && styles.selectedOption,
                ]}
                onPress={() => setSelectedOption("Empresa")}
            >
                <Text
                    style={[
                        styles.text,
                        selectedOption === "Empresa" && styles.selectedText,
                    ]}
                >
                    Empresa
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.option,
                    selectedOption === "Pessoal" && styles.selectedOption,
                ]}
                onPress={() => setSelectedOption("Pessoal")}
            >
                <Text
                    style={[
                        styles.text,
                        selectedOption === "Pessoal" && styles.selectedText,
                    ]}
                >
                    Pessoal
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#8c52ff',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    selectedOption: {
        backgroundColor: '#8c52ff',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    selectedText: {
        color: '#fff',
    },
});