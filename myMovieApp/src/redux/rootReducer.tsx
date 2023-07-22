import {combineReducers} from '@reduxjs/toolkit';
import {getPopularMovieReducer, getMovieDetailsReducer} from './slices';

const rootReducer = combineReducers({
  popularMovie: getPopularMovieReducer,
  movieDetails: getMovieDetailsReducer,
});

export default rootReducer;
