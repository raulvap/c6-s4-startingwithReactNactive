import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

// Clases 58: creando un componente FAB: floating action button
interface Props {
  // creamos la interface
  title: string;
  position: 'BR' | 'BL';
  onPress: () => void;
}

const Fab = (props: Props) => {
  const {title, onPress, position} = props;

  // Clase 60: creando contenido condicional dependiendo de la plataforma
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'BR' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 31)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity
        // Clase 58: aplicando un estilo condicional
        style={[
          styles.fabLocation,
          position === 'BR' ? styles.right : styles.left,
        ]}
        activeOpacity={0.5}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 40,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',

    // Del generador de sombras:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  fabText: {
    color: '#2b2b2b',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Fab;
