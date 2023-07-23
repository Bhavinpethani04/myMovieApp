import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {InMovieDetailsKeys} from './slices';

// export const fetchPopularMovie = createAsyncThunk(
//   'getPopularMovieList/fetchPopularMovie',
//   async () => {
//     // try {
//     //   const response = await axios.get(
//     //     `https://api.themoviedb.org/3/movie/popular?api_key=5157cb6e03ac68af35126151027a1eaf`,
//     //   );
//     //   return response;
//     // } catch (error) {
//     //   return error;
//     // }

//     const res = fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=5157cb6e03ac68af35126151027a1eaf`,
//       // `https://api.themoviedb.org/3/movie/popular?api_key=5157cb6e03ac68af3512627a1eaf`,
//     ).then(data => data.json());
//     return res;
//   },
// );

export const fetchPopularMovie = createAsyncThunk(
  'getPopularMovieList/fetchPopularMovie',
  async (data, thunkApi) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5157cb6e03ac68af35126151027a1eaf`,
      );
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

// export const fetchMovieDetails = createAsyncThunk(
//   'getMovieDetailsInfo/fetchMovieDetails',
//   async (movieId: number) => {
//     // try {
//     //   const response = await axios.get(
//     //     `https://api.themoviedb.org/3/movie/447365`,
//     //   );
//     //   return response;
//     // } catch (error) {
//     //   return error;
//     // }
//     const res = fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=5157cb6e03ac68af35126151027a1eaf`,
//     ).then(data => data.json());
//     return res;
//   },
// );

export const fetchMovieDetails = createAsyncThunk(
  'getMovieDetailsInfo/fetchMovieDetails',
  async (movieId: number, thunkApi) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=5157cb6e03ac68af35126151027a1eaf`,
      );
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
