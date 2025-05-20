// Componente de card reutilizável
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Card({ userName, content }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(205);
  const [saved, setSaved] = useState(false);
  const [saves, setSaves] = useState(99);

  function handleLike() {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  }

  function handleSave() {
    setSaved(!saved);
    setSaves(saves + (saved ? -1 : 1));
  }

 return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{userName}</Text>
      <Text style={styles.cardContent}>{content}</Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.iconButton} onPress={handleLike}>
          <Ionicons name="heart-outline" size={20} color={liked ? '#8000ff' : '#333'} />
          <Text style={[styles.iconText, liked && { color: '#8000ff' }]}>{likes}</Text>
        </TouchableOpacity>
        <View style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#333" />
          <Text style={styles.iconText}>100</Text>
        </View>
        <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
          <Ionicons name={saved ? "bookmark" : "bookmark-outline"} size={20} color={saved ? "#8000ff" : "#333"} />
          <Text style={[styles.iconText, saved && { color: '#8000ff' }]}>{saves}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
        lineHeight: 20,
        textAlign: 'justify',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 12,
        paddingBottom: 8,
        marginTop: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    iconText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 4,
        borderWidth: 1,
    },
});