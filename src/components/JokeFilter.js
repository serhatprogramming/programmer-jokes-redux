import { useDispatch } from "react-redux";
import { setFilter } from "../actions/filterActions";

const JokeFilter = () => {
  const dispatch = useDispatch();

  const onFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setFilter(selectedValue));
  };

  return (
    <div className="joke-filter">
      <span>
        <strong>Filter Jokes </strong>
      </span>
      <select onChange={onFilterChange}>
        <option value="all">All Jokes</option>
        <option value="favorites">My Favorites</option>
      </select>
    </div>
  );
};

export default JokeFilter;
