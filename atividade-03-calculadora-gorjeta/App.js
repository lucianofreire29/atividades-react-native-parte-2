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
  const [valorConta, setValorConta] = useState('');
  const [porcentagem, setPorcentagem] = useState('10');
  const [gorjeta, setGorjeta] = useState(0);
  const [total, setTotal] = useState(0);

  function calcularGorjeta() {
    const conta = parseFloat(valorConta.replace(',', '.')) || 0;
    const percentual = parseFloat(porcentagem.replace(',', '.')) || 0;

    const valorGorjeta = conta * (percentual / 100);
    const valorTotal = conta + valorGorjeta;

    setGorjeta(valorGorjeta);
    setTotal(valorTotal);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Text style={styles.icone}>🌱</Text>
        <Text style={styles.titulo}>Calculadora de Gorjeta</Text>
        <Text style={styles.subtitulo}>Restaurante Sustentável</Text>

        <Text style={styles.label}>Valor da conta</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 120,00"
          keyboardType="decimal-pad"
          value={valorConta}
          onChangeText={setValorConta}
        />

        <Text style={styles.label}>Porcentagem da gorjeta (%)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex.: 10"
          keyboardType="decimal-pad"
          value={porcentagem}
          onChangeText={setPorcentagem}
        />

        <TouchableOpacity style={styles.botao} onPress={calcularGorjeta}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>
            Gorjeta: R$ {gorjeta.toFixed(2).replace('.', ',')}
          </Text>
          <Text style={styles.total}>
            Total: R$ {total.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef7f0',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    elevation: 4,
  },
  icone: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f5130',
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5f6f64',
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263b2c',
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: '#b7c9bc',
    backgroundColor: '#f9fcfa',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 17,
    marginBottom: 18,
  },
  botao: {
    backgroundColor: '#2e7d46',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    backgroundColor: '#eef7f0',
    borderRadius: 12,
    padding: 18,
    marginTop: 22,
  },
  textoResultado: {
    fontSize: 18,
    color: '#263b2c',
    textAlign: 'center',
    marginBottom: 7,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f6a38',
    textAlign: 'center',
  },
});
