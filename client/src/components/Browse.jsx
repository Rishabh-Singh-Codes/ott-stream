import useLatestMovies from "../hooks/useLatestMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useLatestMovies();
  usePopularMovies();
  useTopRatedMovies();
  usePopularTvSeries();
  useTopRatedTvSeries();

  return (
    <div className="bg-black text-white">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
