import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://explore-world-s-movies-server.onrender.com/movies")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.filter((movie) => movie.rating >= 4).slice(0, 8); // Fetching top 8 for a balanced layout
        setTopRatedMovies(topRated);
        setLoading(false); // Stop loading after fetching data
      });

    AOS.init({
      once: true, // Animation occurs only once when scrolling
    });
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 text-white">
      <section className="container mx-auto mb-12">
        <h2 className="md:text-4xl text-3xl font-bold mb-10 text-center text-fuchsia-500">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="card bg-white text-black rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="animate-pulse">
                      <div className="h-[200px] bg-gray-300"></div>
                      <div className="p-4">
                        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))
            : topRatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="card bg-white text-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                >
                  <figure>
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-[200px] object-cover"
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-fuchsia-600">
                      {movie.title}
                    </h3>
                    <p className="text-yellow-500 font-semibold">
                      Rating: {movie.rating}⭐
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default TopRatedMovies;
