import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // Add more jokes here
];

const createJoke = (jokeText) => ({
  id: Math.random().toString(36).substring(7),
  joke: jokeText,
  votes: 0,
  favorite: false,
});

const jokeSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    addJoke: (state, action) => {
      const newJoke = createJoke(action.payload);
      state.push(newJoke);
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
