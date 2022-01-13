import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador: {contador}</Text>
      {/* <Button title="Click Me" onPress={() => setContador(contador + 1)} /> */}

      {/* <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setContador(contador + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity> */}

      <Fab title="+1" onPress={() => setContador(contador + 1)} position="BL" />

      <Fab title="-1" onPress={() => setContador(contador - 1)} position="BR" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11367a',
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    bottom: 15,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default CounterScreen;
