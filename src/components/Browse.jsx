import useLatestMovies from "../hooks/useLatestMovies";
import Header from "./Header";

const Browse = () => {
    useLatestMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
