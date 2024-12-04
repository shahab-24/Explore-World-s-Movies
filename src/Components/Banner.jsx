import { useState, useEffect } from "react";
import "aos/dist/aos.css";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg md:text-2xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Banner;
