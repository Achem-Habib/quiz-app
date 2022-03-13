import { Link } from "react-router-dom";

export default function Video({ title, id, noq }) {
  return (
    <div className="w-auto max-w-md bg-white border hover:bg-cyan-200 hover:border-cyan-400">
      <Link to={`/quiz/${id}`} state={{ videoTitle: title }}>
        <div className="w-auto mx-2 mt-2">
          <img
            src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
          />
        </div>
        <h1 className="mx-2 mt-2 font-bold text-purple-800 text-md">{title}</h1>
        <div className="flex justify-between mx-2 my-4">
          <span>{noq} Questions</span>
          <span>Total points: {noq * 5}</span>
        </div>
      </Link>
    </div>
  );
}
