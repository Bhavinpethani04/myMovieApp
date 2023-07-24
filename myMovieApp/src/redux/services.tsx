import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../redux/constants';
import {API_KEY} from '@env';

//API call for Popular Movie List
export const fetchPopularMovie = createAsyncThunk(
  'getPopularMovieList/fetchPopularMovie',
  async (data, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}popular?api_key=${API_KEY}`);
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

//API call for get Particular Movie Details with Movie ID
export const fetchMovieDetails = createAsyncThunk(
  'getMovieDetailsInfo/fetchMovieDetails',
  async (movieId: number, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}${movieId}?api_key=${API_KEY}`);
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
