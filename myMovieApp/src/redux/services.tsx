import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../redux/constants'

export const fetchPopularMovie = createAsyncThunk(
  'getPopularMovieList/fetchPopularMovie',
  async (data, thunkApi) => {
    try {
      const res = await axios.get(
        `${BASE_URL}popular?api_key=5157cb6e03ac68af35126151027a1eaf`,
      );
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchMovieDetails = createAsyncThunk(
  'getMovieDetailsInfo/fetchMovieDetails',
  async (movieId: number, thunkApi) => {
    try {
      const res = await axios.get(
        `${BASE_URL}${movieId}?api_key=5157cb6e03ac68af35126151027a1eaf`,
      );
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
