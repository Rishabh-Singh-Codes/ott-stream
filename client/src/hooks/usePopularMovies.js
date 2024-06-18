import { useDispatch } from "react-redux";
import { FETCH_MOVIES_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect, useRef } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const hasFetchedMovies = useRef(false);

  const getMovies = async () => {
    const stringifiedData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      FETCH_MOVIES_OPTIONS
    );
    const data = await stringifiedData.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    if (!hasFetchedMovies.current) {
      getMovies();
      hasFetchedMovies.current = true;
    }
  }, []);
};

export default usePopularMovies;
