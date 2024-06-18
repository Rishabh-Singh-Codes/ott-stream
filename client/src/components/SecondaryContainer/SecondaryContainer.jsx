import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return;

  return (
    <div className="pl-6 md:pl-16 md:-mt-44 relative">
      {movies?.latestMovies && (
        <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
      )}
      {movies?.topRatedMovies && (
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      )}
      {movies?.popularTvSeries && (
        <MovieList title={"Popular Series"} movies={movies?.popularTvSeries} />
      )}
      {movies?.popularMovies && (
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      )}
      {movies?.topRatedTvSeries && (
        <MovieList
          title={"Top Rated Series"}
          movies={movies?.topRatedTvSeries}
        />
      )}
    </div>
  );
};

export default SecondaryContainer;
