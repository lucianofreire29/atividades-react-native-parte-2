import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [participantes, setParticipantes] = useState(0);

  const entrou = () => {
    if (participantes < 15) {
      setParticipantes(participantes + 1);
    }
  };

  const saiu = () => {
    if (participantes > 0) {
      setParticipantes(participantes - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clube de Leitura</Text>
      <Text style={styles.subtitulo}>Controle de participantes</Text>

      <View style={styles.contadorBox}>
        <Text style={styles.numero}>{participantes}</Text>
        <Text style={styles.limite}>de 15 leitores</Text>
      </View>

      {participantes === 15 && (
        <Text style={styles.aviso}>Limite máximo de 15 pessoas atingido!</Text>
      )}

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoEntrou]}
          onPress={entrou}
        >
          <Text style={styles.textoBotao}>Entrou +1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, styles.botaoSaiu]}
          onPress={saiu}
        >
          <Text style={styles.textoBotao}>Saiu -1</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f1ea",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3f3a34",
  },
  subtitulo: {
    fontSize: 16,
    color: "#6b6258",
    marginTop: 6,
    marginBottom: 30,
  },
  contadorBox: {
    width: 220,
    padding: 28,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    alignItems: "center",
    elevation: 4,
  },
  numero: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#3f3a34",
  },
  limite: {
    fontSize: 16,
    color: "#6b6258",
  },
  aviso: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#b42318",
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  botaoEntrou: {
    backgroundColor: "#2e7d32",
  },
  botaoSaiu: {
    backgroundColor: "#b42318",
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
