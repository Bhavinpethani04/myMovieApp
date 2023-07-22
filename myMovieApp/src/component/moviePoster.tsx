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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

type MoviePosterProps = {
  posterImage: string;
};

const MoviePoster = (props: MoviePosterProps) => {
  const navigation = useNavigation<NavigateToMovieDetails>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails')}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w185/${props.posterImage}`,
        }}
        style={styles.moviePoster}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  moviePoster: {
    width: windowWidth / 2,
    height: windowHeight / 3,
  },
});

export default MoviePoster;
