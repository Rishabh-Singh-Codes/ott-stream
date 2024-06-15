import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  },
});

export const { addLatestMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
