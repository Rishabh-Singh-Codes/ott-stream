import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pl-16 pt-60 absolute bg-gradient-to-r from-black/40">
      <div className="w-1/3">
        <h1 className="font-black text-6xl text-white">{title}</h1>
        <p className="text-lg font-semibold mt-4 text-white">
          {overview.length > 200 ? `${overview.slice(0, 200)}...` : overview}
        </p>
        <div className="flex gap-4 mt-8 items-center">
          <button className="h-10 px-8 bg-gray-100 font-semibold text-lg flex items-center rounded-md hover:bg-gray-300">
            <FaPlay className="mr-2 text-xl" />
            Play
          </button>
          <button className="h-10 py-4 px-8 bg-gray-600 font-semibold text-lg text-white flex items-center rounded-md hover:bg-gray-700">
            <MdOutlineInfo className="mr-2 text-xl" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
