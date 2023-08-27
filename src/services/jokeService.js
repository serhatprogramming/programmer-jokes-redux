import axios from "axios";

const backendUrl = "http://localhost:3001/jokes";

const getJokes = async () => {
  const response = await axios.get(backendUrl);
  return response.data;
};

const createJoke = async (newJoke) => {
  const response = await axios.post(backendUrl, newJoke);
  return response.data;
};

const updateJoke = async (jokeId, updatedJoke) => {
  const response = await axios.put(`${backendUrl}/${jokeId}`, updatedJoke);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getJokes,
  createJoke,
  updateJoke,
};
