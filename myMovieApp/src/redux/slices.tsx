import {createSlice, Dictionary, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPopularMovie, fetchMovieDetails} from './services';
import {RootState} from '../redux/store';

interface InPopularMovies {
  loading: boolean;
  popularMovies: [];
  error: string | undefined;
}

const initialStatePopularMovie = {
  loading: false,
  popularMovies: [],
  error: undefined,
} as InPopularMovies;

export const getPopularMovie = createSlice({
  name: 'getPopularMovieList',
  initialState: initialStatePopularMovie,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularMovie.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopularMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.popularMovies = action.payload.results;
    });
    builder.addCase(fetchPopularMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const getPopularMovieReducer = getPopularMovie.reducer;

export interface InMovieDetailsKeys {
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface IMovieDetais {
  loading: boolean;
  movieDetails: InMovieDetailsKeys;
  error: string | undefined;
}

const initialStateMovieDetails = {
  loading: false,
  movieDetails: {
    original_title: '',
    poster_path: '',
    release_date: '',
    vote_average: 0,
    overview: '',
  },
  error: undefined,
} as IMovieDetais;

export const getMovieDetails = createSlice({
  name: 'getMovieDetailsInfo',
  initialState: initialStateMovieDetails,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovieDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state, action: PayloadAction<InMovieDetailsKeys>) => {
        state.loading = false;
        state.movieDetails = action.payload;
      },
    );
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const userSelector = (state: RootState) => state.movieDetails;
export const getMovieDetailsReducer = getMovieDetails.reducer;
