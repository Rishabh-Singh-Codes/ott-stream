import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../../utils/constants";

const VideoTitle = ({ title, overview }) => {
  const logo = useSelector((store) => store.movies.trailerLogo);

  return (
    <div className="w-screen aspect-video absolute">
      <div className="md:bg-gradient-to-r md:from-black/60 w-screen aspect-video md:w-1/3 md:h-screen pt-20 md:pt-48  px-6 md:px-16">
        {logo ? (
          <img
            src={`${POSTER_URL}${logo.file_path}`}
            alt={title}
            className="w-1/6 md:w-full max-h-56"
          />
        ) : (
          <h1 className="font-black text-lg md:text-6xl text-white">{title}</h1>
        )}
        <p className="hidden md:block text-lg font-semibold mt-4 text-white">
          {overview.length > 150 ? `${overview.slice(0, 150)}...` : overview}
        </p>
        <div className="flex gap-4 mt-8 items-center">
          <button className="h-10 md:py-4 px-4 md:px-8 bg-gray-100 font-semibold text-black text-xs md:text-lg flex items-center rounded-md hover:bg-gray-300">
            <FaPlay className="mr-2 text-xs md:text-xl" />
            Play
          </button>
          <button className="h-10 py-0 md:py-4 px-4 md:px-8 bg-gray-600 font-semibold text-xs md:text-lg text-white flex items-center rounded-md hover:bg-gray-700">
            <MdOutlineInfo className="mr-2 text-xl" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
