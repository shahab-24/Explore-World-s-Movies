import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import TopRatedMovies from "../Components/TopRatedMovies";
import UpcomingMovies from "../Components/UpcomingMovies";
import Genre from "../Components/Genre";
import NewsLetterSection from "../Components/NewsLetterSection";
import BlogSection from "../Components/BlogSection";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [loadingFeatured, setLoadingFeatured] = useState(true); 
  const [loadingTopRated, setLoadingTopRated] = useState(true); 
  const [loadingUpcoming, setLoadingUpcoming] = useState(true); 

  const toggleTheme = () => {
    console.log("toggle");

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    
    const fetchData = async () => {

      setTimeout(() => {
        setLoadingFeatured(false); 
      }, 2000);

     
      setTimeout(() => {
        setLoadingTopRated(false); 
      }, 3000);

     
      setTimeout(() => {
        setLoadingUpcoming(false); 
      }, 4000);
    };

    fetchData();
  }, []);

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure className="w-full h-72 skeleton bg-gray-300"></figure>
          <div className="card-body">
            <div className="skeleton w-full h-6 bg-gray-300 mb-2"></div>
            <div className="skeleton w-1/2 h-4 bg-gray-300 mb-2"></div>
            <div className="skeleton w-1/4 h-4 bg-gray-300 mb-2"></div>
            <div className="skeleton w-1/4 h-4 bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="text-end my-2">
        <input onClick={toggleTheme} type="checkbox" className="toggle" defaultChecked />
      </div>
      <h1 className="text-3xl font-bold text-center mb-6 text-fuchsia-700">Welcome to Movie Portal</h1>
	  <Banner></Banner>

      <div>
        {loadingFeatured ? (
          <SkeletonLoader /> 
        ) : (
          <FeaturedMovies />
        )}
      </div>

      <div>
        {loadingTopRated ? (
          <SkeletonLoader /> 
        ) : (
          <TopRatedMovies />
        )}
      </div>

      <div>
        {loadingUpcoming ? (
          <SkeletonLoader /> 
        ) : (
          <UpcomingMovies />
        )}
      </div>

      <Genre></Genre>
      <BlogSection></BlogSection>
      <NewsLetterSection></NewsLetterSection>
    </div>
    
  );
};

export default Home;
