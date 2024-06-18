import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { POSTER_URL } from "../../utils/constants";

const VideoBackground = ({ movieId, title, poster }) => {
  useMovieTrailer(movieId);
  const video = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="w-screen">
      {video ? (
        // Trailer
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&rel=0&controls=0&loop=1&playlist=${video.key}`}
          // src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&rel=0&cc_load_policy=1&loop=1&playlist=${video.key}`}
          title={title}
          allow="autoplay*; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        // Poster
          <img
            src={`${POSTER_URL}${poster}`}
            alt={title}
            className="h-screen object-contain w-screen"
          />
      )}
    </div>
  );
};

export default VideoBackground;
