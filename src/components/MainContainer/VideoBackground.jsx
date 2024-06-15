import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, title, poster }) => {
  useMovieTrailer(movieId);
  const video = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="w-screen">
      {video ? (
        // <></>
        <iframe
        className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&rel=0&cc_load_policy=1&loop=1&playlist=${video.key}`}
          title={title}
          allow="autoplay*; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        // <iframe
        // title="scs"
        //   src={`//www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
        //   name="youtube embed"
        //   allow="autoplay; encrypted-media"
        //   allowfullscreen
        // ></iframe>
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt="poster"
            className="h-screen object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
