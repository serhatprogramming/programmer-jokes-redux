import { createSlice } from "@reduxjs/toolkit";

import jokeService from "../services/jokeService";

const jokeSlice = createSlice({
  name: "jokes",
  initialState: [],
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

// Async action creators
export const fetchInitJokes = () => {
  return async (dispatch) => {
    const jokes = await jokeService.getJokes();
    dispatch(setJokes(jokes));
  };
};

export const addNewJoke = (joke) => {
  return async (dispatch) => {
    const newJoke = { joke, votes: 0, favorite: false };
    const addedJoke = await jokeService.createJoke(newJoke);
    dispatch(addJoke(addedJoke));
  };
};

export const toggleJokeFavorite = (joke) => {
  return async (dispatch) => {
    await jokeService.updateJoke(joke.id, {
      ...joke,
      favorite: !joke.favorite,
    });
    dispatch(toggleFavorite(joke.id));
  };
};

export const downvote = (joke) => {
  return async (dispatch) => {
    await jokeService.updateJoke(joke.id, { ...joke, votes: joke.votes - 1 });
    dispatch(downvoteJoke(joke.id));
  };
};

export const upvote = (joke) => {
  return async (dispatch) => {
    await jokeService.updateJoke(joke.id, { ...joke, votes: joke.votes + 1 });
    dispatch(upvoteJoke(joke.id));
  };
};
