import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPopularMovie = createAsyncThunk(
  'getPopularMovieList/fetchPopularMovie',
  async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5157cb6e03ac68af35126151027a1eaf`,
      );
      return response;
    } catch (error) {
      return error;
    }
  },
);
