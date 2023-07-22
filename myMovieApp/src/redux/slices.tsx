import {createSlice, Dictionary, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPopularMovie, fetchMovieDetails} from './services';
import {RootState} from '../redux/store';

interface InPopularMovies {
  popularMovies: [];
}

const initialStatePopularMovie = {
  popularMovies: [],
} as InPopularMovies;

export const getPopularMovie = createSlice({
  name: 'getPopularMovieList',
  initialState: initialStatePopularMovie,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularMovie.fulfilled, (state, action) => {
      state.popularMovies = action.payload.results;
    });
  },
});

export const getPopularMovieReducer = getPopularMovie.reducer;

// export interface InMovieDetailsKeys {
//   original_title?: string;
//   poster_path: string;
//   release_date: string;
//   vote_average: number;
//   overview: string;
// }

// export interface IMovieDetais {
//   movieDetails: Array<InMovieDetailsKeys>;
// }

// const initialStateMovieDetails = {
//   movieDetails: [],
// } as IMovieDetais;

// export const getMovieDetails = createSlice({
//   name: 'getMovieDetailsInfo',
//   initialState: initialStateMovieDetails,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchMovieDetails.fulfilled, (state, {payload}) => {
//       state.movieDetails = payload.data;
//     });
//   },
// });

// export const userSelector = (state: RootState) => state.movieDetails;
// export const getMovieDetailsReducer = getMovieDetails.reducer;

export interface InMovieDetailsKeys {
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface IMovieDetais {
  movieDetails: InMovieDetailsKeys;
}

const initialStateMovieDetails = {
  movieDetails: {
    original_title: '',
    poster_path: '',
    release_date: '',
    vote_average: 0,
    overview: '',
  },
} as IMovieDetais;

export const getMovieDetails = createSlice({
  name: 'getMovieDetailsInfo',
  initialState: initialStateMovieDetails,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state, action: PayloadAction<InMovieDetailsKeys>) => {
        console.log('payload', action.payload);
        state.movieDetails = action.payload;
      },
    );
  },
});

export const userSelector = (state: RootState) => state.movieDetails;
export const getMovieDetailsReducer = getMovieDetails.reducer;
