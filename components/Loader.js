import { View, StyleSheet, Image } from 'react-native';
import React from 'react';

import loader from '../assets/loader.gif'

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <Image source={loader} style={styles.loaderGif} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a68c7',
  },
  loaderGif: {
    height: 150,
    width: 150,
  },
});
