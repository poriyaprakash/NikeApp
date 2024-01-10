import React from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation/>
        <StatusBar style='auto' />
      </View>
    </Provider>
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
