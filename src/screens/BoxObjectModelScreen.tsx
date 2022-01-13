import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva pantalla Box Object</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
  },
  title: {
    fontSize: 20,
    // backgroundColor: 'aqua',
  },
});

export default BoxObjectModelScreen;
