import { useDispatch } from "react-redux";
import { FETCH_MOVIES_OPTIONS } from "../utils/constants";
import { addPopularTvSeries } from "../utils/moviesSlice";
import { useEffect, useRef } from "react";

const usePopularTvSeries = () => {
  const dispatch = useDispatch();
  const hasFetchedMovies = useRef(false);

  const getMovies = async () => {
    const stringifiedData = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      FETCH_MOVIES_OPTIONS
    );
    const data = await stringifiedData.json();
    dispatch(addPopularTvSeries(data.results));
  };

  useEffect(() => {
    if (!hasFetchedMovies.current) {
      getMovies();
      hasFetchedMovies.current = true;
    }
  }, []);
};

export default usePopularTvSeries;
