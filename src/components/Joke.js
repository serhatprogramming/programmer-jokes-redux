import { useDispatch } from "react-redux";
import { upvote, downvote, toggleJokeFavorite } from "../reducers/jokeReducer";

const Joke = ({ joke }) => {
  const dispatch = useDispatch();

  const handleUpvote = async () => {
    dispatch(upvote(joke));
  };

  const handleDownvote = async () => {
    dispatch(downvote(joke));
  };

  const handleToggleFavorite = async () => {
    dispatch(toggleJokeFavorite(joke));
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
