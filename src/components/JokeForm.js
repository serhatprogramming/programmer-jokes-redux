import { useDispatch } from "react-redux";
import { addJoke } from "../reducers/jokeReducer";

import jokeService from "../services/jokeService";

const JokeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jokeText = event.target.joke.value;
    const addedJoke = await jokeService.createJoke({
      joke: jokeText,
      votes: 0,
      favorite: false,
    });
    dispatch(addJoke(addedJoke));
    event.target.joke.value = "";
  };

  return (
    <div>
      <h3>Why not another joke?</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a new joke" name="joke" />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};

export default JokeForm;
