import { useDispatch } from "react-redux";
import { addJoke } from "../actions/jokeActions";

const JokeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const jokeText = event.target.joke.value;
    dispatch(addJoke(jokeText));
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
