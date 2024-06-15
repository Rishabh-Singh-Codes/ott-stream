import { useDispatch } from "react-redux";
import { FETCH_MOVIES_OPTIONS } from "../utils/constants";
import { addLatestMovies } from "../utils/moviesSlice";
import { useEffect, useRef } from "react";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  const hasFetchedMovies = useRef(false);

  const getMovies = async () => {
    const stringifiedData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      FETCH_MOVIES_OPTIONS
    );
    const data = await stringifiedData.json();
    dispatch(addLatestMovies(data.results));
  };

  useEffect(() => {
    if (!hasFetchedMovies.current) {
      getMovies();
      hasFetchedMovies.current = true;
    }
  }, [dispatch]);
};

export default useLatestMovies;
