import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {colour} from '../utils/theam';

//Common dsiplay loader function
const Loader = () => {
  return (
    <ActivityIndicator
      style={styles.loading}
      size="large"
      color={colour.primary}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
