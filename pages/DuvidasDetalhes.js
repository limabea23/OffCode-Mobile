import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import axios from "axios";
import Constants from "expo-constants";

export default function DuvidasDetalhes() {
  const route = useRoute();
  const { duvida, apiImg } = route.params;
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);
  const [saves, setSaves] = useState(1);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { apiUrl, apiKey } = Constants.expoConfig.extra;

  function handleSave() {
    setSaved(!saved);
    setSaves(saves + (saved ? -1 : 1));
  }

  function handleCommentSend() {
    if (comment.trim() !== "") {
      setComment("");
      setShowComment(false);
    }
  }

  useEffect(() => {
    console.log("ID da dúvida:", duvida.id_duvida);
    axios
      .get(`${apiUrl}comments/user/${duvida.id_duvida}`, {
        headers: { "x-api-key": apiKey },
      })
      .then((response) => {
        setComments(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => console.log("Erro ao buscar comentários:", error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons
          name="arrow-left-circle"
          size={36}
          color="#8000ff"
        />
      </TouchableOpacity>
      <View style={styles.containerDuvida}>
        <View style={styles.header}>
          <Image
            source={
              !duvida.foto_perfil ||
              duvida.foto_perfil.trim().toLowerCase() === "null"
                ? require("../assets/public/default-profile.png")
                : { uri: `${apiImg}/${duvida.foto_perfil}` }
            }
            style={styles.userImage}
          />
          <Text style={styles.userName}>{duvida.usuario_nome}</Text>
        </View>
        <Text style={styles.content}>{duvida.conteudo_duvida}</Text>

        {duvida.anexo && duvida.anexo !== "null" && (
          <Image
            source={{ uri: `${apiImg}/${duvida.anexo}` }}
            style={styles.anexoImage}
            resizeMode="cover"
          />
        )}
        <View style={styles.cardFooter}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowComment(!showComment)}
          >
            <Ionicons name="chatbubble-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleSave}>
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={20}
              color={saved ? "#8000ff" : "#fff"}
            />
            <Text style={[styles.iconText, saved && { color: "#8000ff" }]}>
              {saves}
            </Text>
          </TouchableOpacity>
        </View>
        {showComment && (
          <View style={styles.commentBox}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu comentário..."
              value={comment}
              onChangeText={setComment}
            />
            <Button
              title="Enviar"
              onPress={handleCommentSend}
              color="#8000ff"
            />
          </View>
        )}
        <View style={styles.commentsContainer}>
  {(Array.isArray(comments) ? comments : []).map((comentario) => (
    <View key={comentario.id_comentario || comentario.id } style={styles.comment}>
      <View style={styles.header}>
      <Image
            source={
              !duvida.foto_perfil ||
              duvida.foto_perfil.trim().toLowerCase() === "null"
                ? require("../assets/public/default-profile.png")
                : { uri: `${apiImg}/${duvida.foto_perfil}` }
            }
            style={styles.userImage}
          />
          <Text style={styles.usernameComment}>{duvida.usuario_nome}</Text>
      </View>
      <Text style={styles.commentUser}>{comentario.usuario_nome}</Text>
      <Text style={styles.commentContent}>
        {comentario.conteudo_comentario}
      </Text>
    </View>
  ))}
</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  iconText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 8,
    padding: 4,
    borderWidth: 1,
  },
  commentBox: {
    marginTop: 10,
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    padding: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  backButton: {
    marginTop: 30,
    marginBottom: 16,
    padding: 10,
  },
  containerDuvida: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#000",
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  usernameComment: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  content: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
  },
  anexoImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 8,
  },
  commentsContainer: {
    marginTop: 16,
  },
  comment: {
    marginBottom: 12,
    padding: 20,
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
  },
  commentUser: {
    fontWeight: "bold",
    color: "#333",
  },
  commentContent: {
    color: "#555",
    marginTop: 4,
  },
});
