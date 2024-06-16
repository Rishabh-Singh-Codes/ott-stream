import { POSTER_URL } from "../../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie) return;

  const { poster_path, original_title } = movie;

  return (
    <>
      {poster_path && (
        <div className="min-w-36 md:min-w-60 mr-2 rounded-md py-6 hover:scale-105 transition hover:cursor-pointer">
          <img
            src={`${POSTER_URL}${poster_path}`}
            alt={original_title}
            className="w-full rounded-md"
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
