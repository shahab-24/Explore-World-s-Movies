import { useState } from "react";
import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import TopRatedMovies from "../Components/TopRatedMovies";
import UpcomingMovies from "../Components/UpcomingMovies";


const Home = () => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		console.log('toggle')

		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme); 
		document.documentElement.setAttribute("data-theme", newTheme); 
	  };
	return (
		<div>
			<div className="text-end">
			<input onClick={toggleTheme} type="checkbox" className="toggle" defaultChecked />
			</div>
			<div>
			<Banner></Banner>
			</div>
			<div>
				<FeaturedMovies></FeaturedMovies>
			</div>

			<div>
				
				<TopRatedMovies></TopRatedMovies>
				
			</div>
			<div>
				<UpcomingMovies></UpcomingMovies>
			</div>
		</div>
	);
};

export default Home;