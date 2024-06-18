import { useEffect } from "react";
import { FETCH_MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerLogo, addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const stringifiedTrailerData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      FETCH_MOVIES_OPTIONS
    );
    const trailerData = await stringifiedTrailerData.json();
    const trailers = trailerData.results.filter(
      (vid) => vid.type === "Trailer"
    );
    if (trailers.length) {
      const trailer = trailers[Math.floor(Math.random() * trailers.length)]; // selects random trailer
      dispatch(addTrailerVideo(trailer));
    } else {
      dispatch(addTrailerVideo(trailerData.results[0]));
    }

    const stringifiedImagesData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images?include_image_language=en%2Cnull&language=en-US`,
      FETCH_MOVIES_OPTIONS
    );

    const imagesData = await stringifiedImagesData.json();
    const logos = imagesData?.logos.filter(logo => logo.aspect_ratio >= 1);

    if (logos.length) {
      const logo = logos[Math.floor(Math.random() * logos.length)]; // selects random logo
      dispatch(addTrailerLogo(logo));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
