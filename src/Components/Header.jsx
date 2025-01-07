import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Typewriter from "typewriter-effect"; // Import Typewriter
import { motion } from "framer-motion";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allMovies" activeClassName="active">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addMovie" activeClassName="active">
              Add Movie
            </NavLink>
          </li>
          <li>
            <NavLink to="/favouriteMovies" activeClassName="active">
              My Favourites
            </NavLink>
          </li>
        </>
      )}
      {!user && (
        <li>
          <NavLink to="/signup" activeClassName="active">
            Register
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar  bg-gradient-to-r from-indigo-900 via-purple-800 to-black top-0 z-50 shadow-lg fixed w-full">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow-md bg-fuchsia-600"
            >
              {links}
            </ul>
          </div>

          {/* Typewriter Animated Website Name */}
          <div className="text-white opacity-90 text-xl md:text-2xl font-bold font-playfair">
            {/* <Typewriter
              options={{
                strings: ["AraBIan Movies"], // Text to type
                autoStart: true,
                loop: true, // Continuous looping
                delay: 100, // Typing speed
                deleteSpeed: 50, // Speed when deleting
              }}
            /> */}
                <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left mb-4 md:mb-0"
        >
          <h2 className="text-2xl font-bold text-fuchsia-500">
            <Typewriter
              options={{
                strings: ["Arabian Movies", "Explore World Movies"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          
        </motion.div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-semibold">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {user && user?.email ? (
            <div
              className="flex items-center gap-2 sm:gap-4"
              title={user.displayName || "User"}
            >
              <div className="relative group">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400"
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User"
                />
                {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded hidden group-hover:block">
                  {user.displayName}
                </span> */}
              </div>
              <button
                onClick={userLogOut}
                className="btn btn-outline  bg-gradient-to-r from-indigo-900 via-purple-800  text-white   font-medium hover:bg-cyan-500 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-outline text-white font-medium hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
