import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {movieDetailsStyle} from '../styles/movieDetailsStyle';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTU3Y2I2ZTAzYWM2OGFmMzUxMjYxNTEwMjdhMWVhZiIsInN1YiI6IjY0Yjk3ODE0YWI2ODQ5MDEzOTE0YzJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h2EERgGPGRFr41SAwks8Ok1UPDwmOAfYep2tXhNgO64',
  },
};

function MovieDetails(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo,setMovieInfo] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/667538', options)
      .then(response => response.json())
      .then(response => {setMovieInfo(response), setIsLoading(false); })
      .catch(err => console.error(err));
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log("-=-=-=-=",movieInfo)

  return (
    <View style={movieDetailsStyle.container}>
      {/* movie title */}
      <View style={movieDetailsStyle.movieTitleView}>
        <Text style={movieDetailsStyle.movieTitleText}>{movieInfo.title}</Text>
      </View>

      {/* movie poster and rating info */}
      <View style={movieDetailsStyle.moviePosterImageRatingInfoView}>
        <Image
          style={movieDetailsStyle.posterImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${movieInfo.poster_path}`,
          }}
        />
        <View style={movieDetailsStyle.ratingReleaseDateInfoView}>
          <Text>{movieInfo.release_date}</Text>
          <Text>10/{movieInfo.vote_average}</Text>
        </View>
      </View>

      <Text style={movieDetailsStyle.movieInfoText}>
        {movieInfo.overview}
      </Text>
    </View>
  );
}

export default MovieDetails;
