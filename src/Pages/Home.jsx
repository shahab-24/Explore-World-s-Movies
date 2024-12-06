import { useState } from "react";
import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";


const Home = () => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		console.log('toggle')
		// If the theme is light, change to dark, and vice versa
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme); // Update state
		document.documentElement.setAttribute("data-theme", newTheme); // Set HTML attribute for DaisyUI
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
		</div>
	);
};

export default Home;