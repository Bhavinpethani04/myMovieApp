import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const movieListStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
