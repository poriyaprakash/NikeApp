//import liraries
import React from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import ProductScreen from './src/Screens/ProductScreen';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import ShoppingCart from './src/Screens/ShoppingCart';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <ShoppingCart/>
      {/* <ProductDetailsScreen/> */}
      <StatusBar style='auto' />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
