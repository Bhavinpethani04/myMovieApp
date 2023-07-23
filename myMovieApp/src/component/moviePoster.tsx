import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigateToMovieDetails} from '../route/types';
import {BASE_URL_MOVIE_POSTER, IMAGE_SIZE} from '../redux/constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

type MoviePosterProps = {
  posterImage: string;
  movieId: number;
};

const MoviePoster = (props: MoviePosterProps) => {
  const navigation = useNavigation<NavigateToMovieDetails>();

  const goToMovieDetailScreen = () => {
    navigation.navigate('MovieDetails', {movieId: props.movieId});
  };

  return (
    <TouchableOpacity onPress={goToMovieDetailScreen}>
      <Image
        source={{
          uri: `${BASE_URL_MOVIE_POSTER}${IMAGE_SIZE}/${props.posterImage}`,
        }}
        style={styles.moviePoster}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  moviePoster: {
    width: windowWidth / 2,
    height: (windowWidth / 2) * 1.5,
  },
});

export default MoviePoster;
