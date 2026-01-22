import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/new.png";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-base sm:text-lg font-semibold hover:opacity-60 transition-opacity duration-300 flex items-center gap-1"
          >
            <span className="hidden sm:inline">simran awasthi</span>
            <span className="sm:hidden">simran</span>
            <img
              src={logoImage}
              alt="logo"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium">
            <Link
              to="/"
              className="relative inline-block text-gray-800 px-3 py-1 rounded-md"
              style={
                location.pathname === "/"
                  ? {
                      background:
                        "linear-gradient(to right, rgba(216, 180, 254, 0.3), rgba(251, 207, 232, 0.3))",
                    }
                  : {}
              }
            >
              work
            </Link>

            <span className="text-gray-800">/</span>

            <Link
              to="/about"
              className="relative inline-block text-gray-800 px-3 py-1 rounded-md"
              style={
                location.pathname === "/about"
                  ? {
                      background:
                        "linear-gradient(to right, rgba(216, 180, 254, 0.3), rgba(251, 207, 232, 0.3))",
                    }
                  : {}
              }
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
