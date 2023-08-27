import JokeList from "./components/JokeList";
import JokeFilter from "./components/JokeFilter";
import JokeForm from "./components/JokeForm";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchInitJokes } from "./reducers/jokeReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Code Jokes Central: Laugh While You Code</h2>
      <JokeFilter />
      <JokeList />
      <JokeForm />
    </div>
  );
};

export default App;
