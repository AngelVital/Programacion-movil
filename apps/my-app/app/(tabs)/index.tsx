import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const mostrarMensaje = () => {
    Alert.alert("¡Hola!", "Has presionado el botón 🎉");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Mi primera app con React Native!</Text>
      <Button title="Presióname" onPress={mostrarMensaje} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
