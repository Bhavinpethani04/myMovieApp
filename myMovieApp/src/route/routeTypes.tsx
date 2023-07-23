import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  MovieList: undefined;
  MovieDetails: {movieId: number};
};

export type ScreenProp = NativeStackScreenProps<AppStackParamList>;

export type NavigateToMovieDetails = StackNavigationProp<AppStackParamList, 'MovieDetails'>;

export type MovieDetailScreenProps = NativeStackScreenProps<AppStackParamList, 'MovieDetails'>;
