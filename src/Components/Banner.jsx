import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import "animate.css";

const slides = [
  {
    id: 1,
    title: "Discover Amazing Movies",
    subtitle: "Explore the world of cinema with the best-rated movies.",
    img: "https://i.ibb.co.com/gPTHcBH/2.jpg",
  },
  {
    id: 2,
    title: "Stream Anytime, Anywhere",
    subtitle: "Your favorite movies, now at your fingertips.",
    img: "https://i.ibb.co.com/fFLZXzq/stream.webp",
  },
  {
    id: 3,
    title: "Join the Movie Lovers Community",
    subtitle: "Rate and review movies with fellow enthusiasts.",
    img: "https://i.ibb.co.com/pQggzBJ/love.jpg",
  },
  {
    id: 4,
    title: "Experience Blockbuster Hits",
    subtitle: "Catch the latest and greatest in the movie industry.",
    img: "https://i.ibb.co.com/vPrFh7Q/5.jpg",
  },
  {
    id: 5,
    title: "Award-Winning Masterpieces",
    subtitle: "Watch critically acclaimed films from around the world.",
    img: "https://i.ibb.co.com/fx4nSpf/dirilis.jpg",
  },
  {
    id: 6,
    title: "Unleash Your Imagination",
    subtitle: "Dive into movies that inspire and entertain.",
    img: "https://i.ibb.co.com/dPGGtV3/imagination.jpg",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const totalSlides = slides.length;
    const position = (index - currentIndex + totalSlides) % totalSlides;

    if (position === 0) return "left-slide fade-out"; 
    if (position === 1) return "center-slide zoom-in floating"; 
    if (position === 2) return "right-slide fade-out"; 
    return "hidden-slide"; 
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden flex justify-center items-center">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute transition-all duration-700 ease-in-out ${getPositionClass(
            index
          )}`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="object-cover rounded-lg shadow-lg w-[500px] h-[800px]"
          />
          {getPositionClass(index).includes("center-slide") && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
                {slide.title}
              </h1>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Banner;
