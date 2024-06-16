import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    popularTvSeries: null,
    topRatedTvSeries: null,
    trailerVideo: null,
    trailerLogo: null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrailerLogo: (state, action) => {
      state.trailerLogo = action.payload;
    },
  },
});

export const {
  addLatestMovies,
  addPopularMovies,
  addTrailerVideo,
  addTrailerLogo,
  addTopRatedMovies,
  addPopularTvSeries,
  addTopRatedTvSeries,
} = moviesSlice.actions;
export default moviesSlice.reducer;
