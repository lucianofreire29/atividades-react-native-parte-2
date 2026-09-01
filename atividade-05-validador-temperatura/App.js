import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [temperatura, setTemperatura] = useState('');
  const [resultado, setResultado] = useState(null);

  const verificarPermissao = () => {
    const valor = parseFloat(temperatura.replace(',', '.'));

    if (Number.isNaN(valor)) {
      setResultado('invalido');
      return;
    }

    setResultado(valor <= 37.5 ? 'liberado' : 'atencao');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Text style={styles.titulo}>Totem de Acesso</Text>
        <Text style={styles.subtitulo}>Informe sua temperatura corporal</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex.: 36,5"
          keyboardType="decimal-pad"
          value={temperatura}
          onChangeText={(texto) => {
            setTemperatura(texto);
            setResultado(null);
          }}
        />

        <TouchableOpacity style={styles.botao} onPress={verificarPermissao}>
          <Text style={styles.textoBotao}>Verificar Permissão</Text>
        </TouchableOpacity>

        {resultado === 'liberado' && (
          <View style={[styles.mensagem, styles.liberado]}>
            <Text style={styles.textoMensagem}>Acesso Liberado</Text>
          </View>
        )}

        {resultado === 'atencao' && (
          <View style={[styles.mensagem, styles.atencao]}>
            <Text style={styles.textoMensagem}>
              Atenção: Procure orientação médica
            </Text>
          </View>
        )}

        {resultado === 'invalido' && (
          <View style={[styles.mensagem, styles.invalido]}>
            <Text style={styles.textoMensagem}>Digite uma temperatura válida.</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f7',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 24,
    elevation: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#243447',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#66788a',
    marginTop: 6,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#b8c4cf',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#f9fbfc',
  },
  botao: {
    backgroundColor: '#276ef1',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 22,
    padding: 16,
    borderRadius: 10,
  },
  liberado: {
    backgroundColor: '#2e7d32',
  },
  atencao: {
    backgroundColor: '#c62828',
  },
  invalido: {
    backgroundColor: '#6b7280',
  },
  textoMensagem: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
