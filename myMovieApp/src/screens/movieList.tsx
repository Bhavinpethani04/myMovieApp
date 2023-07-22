import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {movieListStyle} from '../styles/movieListStyle';
import {ScreenProp} from '../route/types';
import MoviePoster from '../component/moviePoster';
import {fetchPopularMovie} from '../redux/services';
import {useReduxDispatch, useReduxSelector} from '../redux/store';

type ItemProps = {id: string; poster_path: string};

function MovieList({navigation}: ScreenProp): JSX.Element {
  // const [movieList, setMovieList] = useState<ItemProps[]>([]);

  const data = useReduxSelector((state: any) => state.popularMovie);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useReduxDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovie()).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View style={movieListStyle.container}>
        <FlatList
          data={data.popularMovies}
          renderItem={({item}) => (
            <MoviePoster posterImage={item.poster_path} />
          )}
          numColumns={2}
          keyExtractor={item => item.id}
          columnWrapperStyle={movieListStyle.columnWrapper}
        />
      </View>
    );
  }
}

export default MovieList;
