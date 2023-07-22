import {combineReducers} from '@reduxjs/toolkit';
import {getPopularMovieReducer} from './slices';

const rootReducer = combineReducers({
  popularMovie: getPopularMovieReducer,
});

export default rootReducer;
