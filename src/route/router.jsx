import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import AddMovie from "../Pages/AddMovie";
import AllMovies from "../Pages/AllMovies";
import MyFavourites from "../Pages/MyFavourites";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import FeaturedMovies from "../Components/FeaturedMovies";
import MovieDetails from "../Pages/MovieDetails";



const router = createBrowserRouter([
	{
		path:"/",
		element: <HomeLayout></HomeLayout>,
		children:[{
			path: "/addMovie",
		element: <AddMovie></AddMovie>
		},
		{
			path:'/',
			element: <Home></Home>

		},
		{
			path: "/allMovies",
			element: <AllMovies></AllMovies>
		},
		{
			path:"/myFavourites",
			element: <MyFavourites></MyFavourites>
		},
		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/featured-movies",
			element: <FeaturedMovies></FeaturedMovies>
		}
		,{
			path: "/movies/:id",
			element: <MovieDetails></MovieDetails>,
			loader: ({params}) => fetch(`http://localhost:3000/movies/${params.id}`)
		}

		]  

		
			

		
	},
	
	{
		path: '/signup',
		element: <Signup></Signup>
	},
	{
		path:'*',
		element: <NotFound></NotFound>
	}
	// {
	// 	path: "/addMovie",
	// 	element: <AddMovie></AddMovie>
	// }
  


]);

export default router;
