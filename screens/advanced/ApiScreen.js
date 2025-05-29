import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import axios from "axios";

export default function PostDetails() {
  const [post, setPost] = useState(null); 
  const [usuarios, setUsuarios] = useState([]); 
  const [comentarios, setComentarios] = useState([]); 
  const [curtidas, setCurtidas] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postId = 1; // Substitua pelo ID do post ou dúvida

        const [postRes, comentariosRes, curtidasRes, usuariosRes] =
          await Promise.all([
            axios.get(`https://localhost:3000/posts/${postId}`),
            axios.get(`https://localhost:3000/posts/${postId}/comentarios`), 
            axios.get(`https://localhost:3000/posts/${postId}/curtidas`), 
            axios.get("https://localhost:3000/usuarios"), 
            ]);

        setPost(postRes.data);
        setComentarios(comentariosRes.data);
        setCurtidas(curtidasRes.data);
        setUsuarios(usuariosRes.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const SkeletonCard = () => (
    <View style={styles.skeleton} />
  );

  const UsuarioCard = ({ usuario }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{usuario.nome}</Text>
      <Text style={styles.email}>{usuario.email}</Text>
    </View>
  );

  const ComentarioCard = ({ comentario }) => (
    <View style={styles.card}>
      <Text style={styles.name}>Comentário:</Text>
      <Text style={styles.text}>{comentario.texto}</Text>
    </View>
  );

  const CurtidaCard = ({ curtida }) => (
    <View style={styles.card}>
      <Text style={styles.name}>Curtido por:</Text>
      <Text style={styles.text}>{curtida.usuario}</Text>
    </View>
  );

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>📄 Detalhes do Post</Text>

      {loading ? (
     
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <SkeletonCard />}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View>
          
          {post && (
            <View style={styles.postContainer}>
              <Text style={styles.postTitle}>{post.titulo}</Text>
              <Text style={styles.postContent}>{post.conteudo}</Text>
            </View>
          )}

       
          <Text style={styles.sectionHeader}>💬 Comentários</Text>
          <FlatList
            data={comentarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ComentarioCard comentario={item} />}
            contentContainerStyle={styles.list}
          />

         
          <Text style={styles.sectionHeader}>👍 Curtidas</Text>
          <FlatList
            data={curtidas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CurtidaCard curtida={item} />}
            contentContainerStyle={styles.list}
          />


          <Text style={styles.sectionHeader}>👤 Usuários</Text>
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <UsuarioCard usuario={item} />}
            contentContainerStyle={styles.list}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 12,
    marginLeft: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  skeleton: {
    height: 100,
    backgroundColor: "#333",
    marginVertical: 8,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  email: {
    fontSize: 14,
    color: "#aaaaaa",
  },
  text: {
    fontSize: 14,
    color: "#aaaaaa",
  },
  postContainer: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  postContent: {
    fontSize: 16,
    color: "#aaaaaa",
    marginTop: 8,
  },
});