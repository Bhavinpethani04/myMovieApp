import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPopularMovie} from './services';

interface InPopularMovies {
  popularMovies: [];
}

const initialState = {
  popularMovies: [],
} as InPopularMovies;

export const getPopularMovie = createSlice({
  name: 'getPopularMovieList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularMovie.fulfilled, (state, {payload}) => {
        console.log(payload.data.results)
      state.popularMovies = payload.data.results;
    });
  },
});

export const getPopularMovieReducer = getPopularMovie.reducer;
