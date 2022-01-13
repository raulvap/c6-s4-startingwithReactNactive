import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: 200,
    height: 100,
    borderColor: '#fff',
    borderWidth: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 10,
  },
  cajaVerde: {
    backgroundColor: '#04b82b',
    // width: 100,
    // height: 100,
    borderColor: '#fff',
    borderWidth: 10,
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
