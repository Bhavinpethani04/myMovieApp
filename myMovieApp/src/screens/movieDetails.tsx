import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {movieDetailsStyle} from '../styles/movieDetailsStyle';
import {MovieDetailScreenProps} from '../route/routeTypes';
import {useReduxDispatch, useReduxSelector} from '../redux/store';
import {fetchMovieDetails} from '../redux/services';
import moment from 'moment';
import Loader from '../component/loader';
import ErrorMessage from '../component/errorMessage';
import {errorMessages, ratingConst} from '../utils/theam';
import {BASE_URL_MOVIE_POSTER, IMAGE_SIZE} from '../redux/constants';

function MovieDetails({route}: MovieDetailScreenProps): JSX.Element {
  const loading = useReduxSelector(state => state.movieDetails.loading);
  const movieDetails = useReduxSelector(
    state => state.movieDetails.movieDetails,
  );
  const error = useReduxSelector(state => state.movieDetails.error);
  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(route.params.movieId));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={errorMessages.movieDetailNotFound} />;
  }

  return (
    <View style={movieDetailsStyle.container}>
      {/* movie title */}
      <View style={movieDetailsStyle.movieTitleView}>
        <Text style={movieDetailsStyle.movieTitleText}>
          {movieDetails.original_title}
        </Text>
      </View>

      {/* movie poster and rating info */}
      <View style={movieDetailsStyle.moviePosterImageRatingInfoView}>
        <Image
          style={movieDetailsStyle.posterImage}
          source={{
            uri: `${BASE_URL_MOVIE_POSTER}${IMAGE_SIZE}/${movieDetails.poster_path}`,
          }}
        />
        <View style={movieDetailsStyle.ratingReleaseDateInfoView}>
          <Text style={movieDetailsStyle.dateTextStyle}>
            {moment(movieDetails.release_date).format('LL')}
          </Text>
          <Text style={movieDetailsStyle.ratingTextStyle}>
            {movieDetails.vote_average.toFixed(1)} / {ratingConst}
          </Text>
        </View>
      </View>

      <Text style={movieDetailsStyle.movieInfoText}>
        {movieDetails.overview}
      </Text>
    </View>
  );
}

export default MovieDetails;
