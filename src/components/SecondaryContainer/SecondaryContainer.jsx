import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
    console.log('movies', movies)
  if (!movies) return;

  return (
    <div className="pl-6 md:pl-16 md:-mt-44 relative">
      <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
      <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
      <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
      <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
      <MovieList title={"Latest Movies"} movies={movies?.latestMovies} />
    </div>
  );
};

export default SecondaryContainer;
