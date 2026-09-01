import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Separar frutas e verduras' },
    { id: '2', titulo: 'Organizar as bancas' },
    { id: '3', titulo: 'Conferir sacolas e embalagens' },
  ]);

  const adicionarTarefa = () => {
    const texto = tarefa.trim();

    if (texto === '') {
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      titulo: texto,
    };

    setTarefas((listaAtual) => [...listaAtual, novaTarefa]);
    setTarefa('');
  };

  const removerTarefa = (id) => {
    setTarefas((listaAtual) =>
      listaAtual.filter((item) => item.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Feira Limpa</Text>
      <Text style={styles.subtitulo}>Checklist antes da abertura</Text>

      <View style={styles.areaEntrada}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChangeText={setTarefa}
          onSubmitEditing={adicionarTarefa}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.itemTarefa}>
            <Text style={styles.icone}>✓</Text>
            <Text style={styles.textoTarefa}>{item.titulo}</Text>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.textoBotaoRemover}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f4',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  areaEntrada: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textoBotaoAdicionar: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: 30,
  },
  itemTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 14,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9e3d9',
  },
  icone: {
    fontSize: 18,
    marginRight: 10,
  },
  textoTarefa: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  botaoRemover: {
    backgroundColor: '#c62828',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  textoBotaoRemover: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
