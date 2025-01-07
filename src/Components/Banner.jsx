import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import "animate.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Drama",
    release_year: 2019,
    rating: "PG-13",
    duration: "181 min",
    img: "https://www.themoviedb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    release_year: 2008,
    rating: "PG-13",
    duration: "152 min",
    img: "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];
const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate()
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Slide changes every 5 seconds
      return () => clearInterval(interval);
    }, []);
  
    const getSlideStyles = (index) => {
      const totalSlides = slides.length;
      const position = (index - currentIndex + totalSlides) % totalSlides;
  
      if (position === 0) return "z-10 opacity-100 scale-100"; // Active slide
      if (position === 1) return "z-0 opacity-50 scale-95"; // Next slide
      return "hidden"; // Other slides
    };
  
    return (
      <div className="relative w-full h-[70vh] overflow-hidden">
        {/* Cinematic Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${getSlideStyles(
              index
            )}`}
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="w-full h-full aspect-[16/9] overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {getSlideStyles(index).includes("opacity-100") && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6 py-10">
                <h1 className="text-5xl font-bold animate__animated animate__fadeInDown mb-4 text-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg animate__animated animate__fadeInUp text-shadow-md">
                  {slide.genre} | {slide.release_year} | {slide.duration}
                </p>
                <button  onClick={() => navigate("/allMovies")} className="mt-6 px-8 py-3 bg-red-600 rounded-full text-lg font-semibold hover:bg-red-700 transition ease-in-out duration-300">
                  Explore Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  export default Banner;