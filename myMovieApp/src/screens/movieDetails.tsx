import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {movieDetailsStyle} from '../styles/movieDetailsStyle';
import {MovieDetailScreenProps} from '../route/types';
import {useReduxDispatch, useReduxSelector} from '../redux/store';
import {fetchMovieDetails} from '../redux/services';
import {IMovieDetais, userSelector, InMovieDetailsKeys} from '../redux/slices';
import moment from 'moment';

function MovieDetails({route}: MovieDetailScreenProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const selectedUsers = useReduxSelector(userSelector);
  const movieDetails = useReduxSelector(
    state => state.movieDetails.movieDetails,
  );
  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(route.params.movieId)).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
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
            uri: `https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`,
          }}
        />
        <View style={movieDetailsStyle.ratingReleaseDateInfoView}>
          <Text style={movieDetailsStyle.dateTextStyle}>
            {moment(movieDetails.release_date).format('LL')}
          </Text>
          <Text style={movieDetailsStyle.ratingTextStyle}>
            10 / {movieDetails.vote_average.toFixed(1)}
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
