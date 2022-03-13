import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function Miniplayer({ youtubeID, title }) {
  const buttonRef = useRef();
  const divRef = useRef();

  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${youtubeID}`;

  useEffect(() => {
    if (!status) {
      divRef.current.style.display = "none";
      buttonRef.current.style.display = "block";
    } else {
      buttonRef.current.style.display = "none";
      divRef.current.style.display = "block";
    }
  }, [status]);

  return (
    <div>
      <button
        className="fixed w-16 h-16 bg-purple-400 rounded-full right-4 bottom-24 hover:bg-purple-500"
        ref={buttonRef}
        onClick={() => setStatus(true)}
      >
        <span className="mx-5 my-5 material-icons-outlined">
          play_circle_filled
        </span>
      </button>

      <div className="fixed bg-white w-80 right-10 bottom-24 " ref={divRef}>
        <button
          className="absolute bg-red-300 rounded-full hover:bg-red-500 -right-2 -top-2"
          onClick={() => setStatus(false)}
        >
          <span className="m-1 material-icons-outlined"> close </span>
        </button>
        <div className="m-3">
          <ReactPlayer
            url={videoUrl}
            width="300px"
            height="168px"
            playing={status}
            controls
          />
          <p className="mt-2">{title}</p>
        </div>
      </div>
    </div>
  );
}
