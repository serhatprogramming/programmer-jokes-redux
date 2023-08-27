import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // Add more jokes here
];

const jokeSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    addJoke: (state, action) => {
      state.push(action.payload);
    },
    upvoteJoke: (state, action) => {
      const jokeId = action.payload;
      const joke = state.find((j) => j.id === jokeId);
      if (joke) {
        joke.votes += 1;
      }
    },
    downvoteJoke: (state, action) => {
      const jokeId = action.payload;
      const joke = state.find((j) => j.id === jokeId);
      if (joke) {
        joke.votes -= 1;
      }
    },
    toggleFavorite: (state, action) => {
      const jokeId = action.payload;
      const joke = state.find((j) => j.id === jokeId);
      if (joke) {
        joke.favorite = !joke.favorite;
      }
    },
    setJokes: (state, action) => {
      return action.payload;
    },
  },
});

export const { addJoke, upvoteJoke, downvoteJoke, toggleFavorite, setJokes } =
  jokeSlice.actions;
export default jokeSlice.reducer;
