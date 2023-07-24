import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colour, fontSizes} from '../utils/theam';

type ErrorMessageProps = {
  message: string;
};

//Common display error message function 
const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <View style={styles.errorMessageView}>
      <Text style={styles.errorMessageText}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessageView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessageText: {
    color: colour.contectText,
    fontSize: fontSizes.l,
    width:'80%',
    alignItems:'center'
  },
});

export default ErrorMessage;
