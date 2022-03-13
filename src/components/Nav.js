import { Link } from "react-router-dom";
import img from "../assets/images/logo-bg.png";
import { useAuth } from "../contexts/AuthContext";

export default function Nav() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="flex justify-between bg-white sticky top-0 py-2">
      <Link to="/" className="flex space-x-2  ml-4">
        <img className="h-10 my-1" src={img} alt="logo" />
        <span className="my-auto font-bold text-lg text-cyan-700">
          Learn with Achem
        </span>
      </Link>

      {currentUser ? (
        <>
          <div className="flex gap-x-2 my-auto mr-6">
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span className="text-sky-700">{currentUser.displayName}</span>
            <span
              className="text-sky-700 hover:cursor-pointer hover:text-red-500"
              onClick={logout}
            >
              Logout
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-x-2 my-auto mr-6">
            <Link to="/signup" className=" text-sky-700 hover:text-red-500">
              Signup
            </Link>
            <Link to="/login" className="text-sky-700 hover:text-red-500">
              Login
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}
