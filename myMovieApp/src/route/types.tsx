import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  MovieList: undefined;
  MovieDetails: undefined;
};

export type ScreenProp = NativeStackScreenProps<AppStackParamList>;

export type NavigateToMovieDetails = StackNavigationProp<AppStackParamList, 'MovieDetails'>;
