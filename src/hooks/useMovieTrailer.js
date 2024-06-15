import { useEffect } from "react";
import { FETCH_MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const stringifiedData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      FETCH_MOVIES_OPTIONS
    );
    const data = await stringifiedData.json();
    const trailers = data.results.filter((vid) => vid.type === "Trailer");
    if (trailers.length) {
      const trailer =
        trailers[Math.floor(Math.random() * trailers.length)]; // selects random trailer
      dispatch(addTrailerVideo(trailer));
    } else {
      dispatch(addTrailerVideo(data.results[0]));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
