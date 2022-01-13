import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// Clase 67: obteniendo las dimensiones de la pantalla (no cambian al girar la pantalla)
// const {width, height} = Dimensions.get('window');

const DimensionesScreen = () => {
  // Para obtener las dimensiones cuando cambia la pantalla, usamos un hook:
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View
          style={{
            // para agregar cambios adicionales: (el width es el 20% del total) (clase 67, min: 11:00)
            ...styles.cajaAzul,
            width: width * 0.25,
          }}
        />
      </View>
      <Text style={styles.title}>
        W: {width} H: {height}{' '}
      </Text>
    </View>
  );
};

export default DimensionesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    width: '100%',
    height: 450,
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaAzul: {
    backgroundColor: '#008fee',
    height: '50%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});
