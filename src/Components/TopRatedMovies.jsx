import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetch("https://explore-world-movies-server.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.filter((movie) => movie.rating >= 4).slice(0, 5);
        setTopRatedMovies(topRated);
      });
    
    AOS.init({
      once: false, 
    });
  }, []);

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRatedMovies.map((movie) => (
            <div
              key={movie.id}
              className="card bg-base-100 shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="800" 
              data-aos-easing="ease-in-out" 
            >
              <figure>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="text-yellow-500">Rating: {movie.rating}⭐</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopRatedMovies;
