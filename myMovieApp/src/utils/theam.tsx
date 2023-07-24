import {PixelRatio} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

export const colour = {
  primary: '#795548',
  black: '#000000',
  white: '#ffffff',
  contectText: '#9E9E9E',
};

export const fontSizes = {
  s: getFontSize(14),
  m: getFontSize(16),
  l: getFontSize(18),
  xl: getFontSize(20),
};

//error messages for error component
export const errorMessages = {
  movieListNotFound: 'Something Went Wrong With The Movie List or API KEY',
  movieDetailNotFound: 'Something Went Wrong With The Movie Detail or API KEY',
};

export const ratingConst = 10;

//header titles for all screens
export const headerTitle = {
  movieListScreen: 'Movie List',
  movieDetailScreen: 'Movie Details',
  backButtonTitle: 'BACK',
};
