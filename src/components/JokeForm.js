import { useDispatch } from "react-redux";
import { addNewJoke } from "../reducers/jokeReducer";

const JokeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jokeText = event.target.joke.value;
    dispatch(addNewJoke(jokeText));
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
