import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.caja, styles.uno]}>Flex 1</Text>
      <Text style={[styles.caja, styles.dos]}>Flex 2</Text>
      <Text style={[styles.caja, styles.tres]}>Flex 3</Text>
      <Text style={[styles.caja, styles.uno]}>Flex 1</Text>
      <Text style={[styles.caja, styles.dos]}>Flex 2</Text>
      <Text style={[styles.caja, styles.tres]}>Flex 3</Text>
      <Text style={[styles.caja, styles.uno]}>Flex 1</Text>
      <Text style={[styles.caja, styles.dos]}>Flex 2</Text>
      <Text style={[styles.caja, styles.tres]}>Flex 3</Text>
      <Text style={[styles.caja, styles.tres]}>Flex 3</Text>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 500,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    fontSize: 30,
    color: '#fff',
    padding: 15,
  },
  uno: {
    backgroundColor: '#e4062b',
    // flex: 2,
  },
  dos: {
    backgroundColor: '#2460e0',
    // flex: 3,
  },
  tres: {
    backgroundColor: '#47f3ff',
    // flex: 5,
  },
});
