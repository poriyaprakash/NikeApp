//import liraries
import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import ProductScreen from './src/Screens/ProductScreen';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <ProductScreen/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
