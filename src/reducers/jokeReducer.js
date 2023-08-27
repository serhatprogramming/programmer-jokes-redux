import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    joke: "How do you comfort a JavaScript bug? You console it.",
    votes: 0,
    favorite: false,
  },
  {
    id: 2,
    joke: "Why did the React component go to the doctor? Because it couldn't setState.",
    votes: 0,
    favorite: false,
  },
  {
    id: 3,
    joke: "Programming is 10% writing code and 90% understanding why it's not working",
    votes: 0,
    favorite: false,
  },
  {
    id: 4,
    joke: "What did the database say to the website? Let me handle the queries",
    votes: 0,
    favorite: false,
  },
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
  },
});

export const { addJoke, upvoteJoke, downvoteJoke, toggleFavorite } =
  jokeSlice.actions;
export default jokeSlice.reducer;
