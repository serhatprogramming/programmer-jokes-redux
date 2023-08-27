export const addJoke = (jokeText) => ({
  type: "ADD_JOKE",
  payload: jokeText,
});

export const upvoteJoke = (jokeId) => ({
  type: "UPVOTE_JOKE",
  payload: jokeId,
});

export const downvoteJoke = (jokeId) => ({
  type: "DOWNVOTE_JOKE",
  payload: jokeId,
});

export const toggleFavorite = (jokeId) => ({
  type: "TOGGLE_FAVORITE",
  payload: jokeId,
});
