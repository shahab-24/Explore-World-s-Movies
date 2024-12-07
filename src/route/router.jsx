import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import AddMovie from "../Pages/AddMovie";
import AllMovies from "../Pages/AllMovies";

import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import FeaturedMovies from "../Components/FeaturedMovies";
import MovieDetails from "../Pages/MovieDetails";
import FavouriteMovies from "../Pages/FavouriteMovies";

import UpdateMovie from "../Components/UpdateMovie";
import PrivateRoute from "../Components/PrivateRoute";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/addMovie",
        element: (
          <PrivateRoute>
            {" "}
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/favouriteMovies",
        element: (
          <PrivateRoute>
            <FavouriteMovies></FavouriteMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/featured-movies",
        element: <FeaturedMovies></FeaturedMovies>,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(
            `https://explore-world-movies-server.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "/updateMovie/:id",
        element: <UpdateMovie></UpdateMovie>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound></NotFound>,
  },
  // {
  // 	path: "/addMovie",
  // 	element: <AddMovie></AddMovie>
  // }
]);

export default router;
