import { AllMovies } from "../types/moviesTypes";
import axios from "axios";
//
export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2c3f9845e1521d2c20b54dc98e9af208&language=ar`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2c3f9845e1521d2c20b54dc98e9af208&query=${word}&language=ar`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getMoviepagin = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2c3f9845e1521d2c20b54dc98e9af208&language=ar&page=${page}`
    );
    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
