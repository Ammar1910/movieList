import { AllMovies } from "../types/moviesTypes";
const initalValue = { movies: [], pageCount: 0 };
export const movieReducer = (state = initalValue, action) => {
  switch (action.type) {
    case AllMovies:
      return { movies: action.data,pageCount : action.pages };
    default:
      return state;
  }
};
