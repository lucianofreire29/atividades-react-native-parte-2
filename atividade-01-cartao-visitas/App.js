import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.foto}
        />

        <Text style={styles.nome}>Luciano Freire</Text>

        <Text style={styles.cargo}>Estudante de Tecnologia</Text>

        <Text style={styles.bio}>
          Estudante da área de tecnologia, com interesse em desenvolvimento de
          sistemas e segurança da informação.
        </Text>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  cartao: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 28,
    borderRadius: 18,
    elevation: 5,
  },

  foto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 6,
    textAlign: "center",
  },

  cargo: {
    fontSize: 17,
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: 18,
    textAlign: "center",
  },

  bio: {
    fontSize: 15,
    color: "#6b7280",
    lineHeight: 22,
    textAlign: "center",
  },
});
