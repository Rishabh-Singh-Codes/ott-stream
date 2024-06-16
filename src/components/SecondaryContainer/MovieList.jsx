import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl font-bold -mb-4">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
