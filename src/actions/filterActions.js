export const setFilter = (filterType) => {
  return {
    type: "SET_FILTER",
    payload: filterType,
  };
};
