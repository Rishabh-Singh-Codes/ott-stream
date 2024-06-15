import useLatestMovies from "../hooks/useLatestMovies";
import Header from "./Header";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

const Browse = () => {
    useLatestMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
