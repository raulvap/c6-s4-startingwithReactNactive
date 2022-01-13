import React from 'react';

import {View, Text} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 50, color: 'white', textAlign: 'center'}}>
        Hola Raul
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
