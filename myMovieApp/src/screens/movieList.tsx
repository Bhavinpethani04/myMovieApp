import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {movieListStyle} from '../styles/movieListStyle';
import {ScreenProp} from '../route/types';
import MoviePoster from '../component/moviePoster';
import Loader from '../component/loader';
import ErrorMessage from '../component/errorMessage';
import {fetchPopularMovie} from '../redux/services';
import {useReduxDispatch, useReduxSelector} from '../redux/store';

type ItemProps = {id: string; poster_path: string};

function MovieList({navigation}: ScreenProp): JSX.Element {
  // const [movieList, setMovieList] = useState<ItemProps[]>([]);

  const popularMovies = useReduxSelector(
    (state: any) => state.popularMovie.popularMovies,
  );
  const loading = useReduxSelector((state: any) => state.popularMovie.loading);
  const error = useReduxSelector((state: any) => state.popularMovie.error);

  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={'Something Went Wrong with Movie List'} />;
  }

  return (
    <View style={movieListStyle.container}>
      <FlatList
        data={popularMovies}
        renderItem={({item}) => (
          <MoviePoster posterImage={item.poster_path} movieId={item.id} />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={movieListStyle.columnWrapper}
      />
    </View>
  );
}

export default MovieList;
