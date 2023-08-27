import Joke from "./Joke";
import { useSelector } from "react-redux";

const JokeList = () => {
  const programmerJokes = useSelector((state) => state.jokes);
  const filter = useSelector((state) => state.filter);

  const filteredJokes =
    filter === "all"
      ? programmerJokes
      : programmerJokes.filter(
          (joke) => joke.favorite === (filter === "favorites")
        );

  return (
    <div>
      <h3>Programmer Jokes</h3>
      {filteredJokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
