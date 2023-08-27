import { useDispatch } from "react-redux";
import {
  upvoteJoke,
  downvoteJoke,
  toggleFavorite,
} from "../reducers/jokeReducer";

import jokeService from "../services/jokeService";

const Joke = ({ joke }) => {
  const dispatch = useDispatch();

  const handleUpvote = async () => {
    await jokeService.updateJoke(joke.id, { ...joke, votes: joke.votes + 1 });
    dispatch(upvoteJoke(joke.id));
  };

  const handleDownvote = async () => {
    await jokeService.updateJoke(joke.id, { ...joke, votes: joke.votes - 1 });
    dispatch(downvoteJoke(joke.id));
  };

  const handleToggleFavorite = async () => {
    await jokeService.updateJoke(joke.id, {
      ...joke,
      favorite: !joke.favorite,
    });
    dispatch(toggleFavorite(joke.id));
  };

  return (
    <div>
      <p>{joke.joke}</p>
      <div>
        <button onClick={handleUpvote}>Upvote</button>
        <span> {joke.votes} </span>
        <button onClick={handleDownvote}>Downvote</button>
      </div>
      <div>
        <span>
          <em>{joke.favorite ? "Favorite Joke " : ""}</em>
        </span>
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleToggleFavorite}
        >
          {joke.favorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Joke;
