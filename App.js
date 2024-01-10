import React from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation/>
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
