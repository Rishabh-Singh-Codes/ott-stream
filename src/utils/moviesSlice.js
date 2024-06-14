import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    latestMovies: null,
  },
  reducers: {
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
  },
});

export const { addLatestMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
