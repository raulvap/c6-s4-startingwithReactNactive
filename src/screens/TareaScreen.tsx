import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.caja, styles.morado]} />
      <View style={[styles.caja, styles.azul]} />
      <View style={[styles.caja, styles.verde]} />
    </View>
  );
};

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja: {
    borderWidth: 10,
    borderColor: '#fff',
  },
  morado: {
    backgroundColor: '#5856d6',
    width: 100,
    height: 100,
    bottom: 45,
  },
  azul: {
    backgroundColor: '#358cde',
    width: 100,
    height: 100,
  },
  verde: {
    backgroundColor: '#35de5a',
    width: 100,
    height: 100,
    bottom: 45,
    // flex: 4,
  },
});
