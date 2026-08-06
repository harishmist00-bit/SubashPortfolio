import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center text-sm text-white">
          <Link
            to="/"
            className="hover:underline font-medium transition duration-200"
          >
            Home
          </Link>

          <span className="mx-2">{">"}</span>

          <span className="font-semibold">{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;