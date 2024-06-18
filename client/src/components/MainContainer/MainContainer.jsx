import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.latestMovies);
  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * movies?.length)]; //selects random movie
  // const mainMovie = movies[17]; //selects random movie
  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} title={original_title} poster={backdrop_path}/>
    </div>
  );
};

export default MainContainer;
