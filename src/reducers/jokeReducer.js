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

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOKE":
      const newJoke = createJoke(action.payload);
      return [...state, newJoke];
    case "UPVOTE_JOKE":
      return state.map((joke) =>
        joke.id === action.payload ? { ...joke, votes: joke.votes + 1 } : joke
      );
    case "DOWNVOTE_JOKE":
      return state.map((joke) =>
        joke.id === action.payload ? { ...joke, votes: joke.votes - 1 } : joke
      );
    case "TOGGLE_FAVORITE":
      return state.map((joke) =>
        joke.id === action.payload
          ? { ...joke, favorite: !joke.favorite }
          : joke
      );
    default:
      return state;
  }
};

export default jokeReducer;
