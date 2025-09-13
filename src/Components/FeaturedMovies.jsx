import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://explore-world-s-movies-server-production.up.railway.app/movies"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-fuchsia-700 font-bold text-center mb-6 sm:mb-8 md:mb-10">
          Featured Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[200px] sm:h-[250px] object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-lg font-bold mb-1 sm:mb-2 text-fuchsia-600">
                  {movie.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-1">
                  {movie.genre}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mb-1">
                  {movie.duration} min
                </p>
                <p className="text-gray-700 text-sm sm:text-base mb-1">
                  {movie.releaseYear}
                </p>
                <p className="text-yellow-500 font-bold text-sm sm:text-base">
                  {movie.rating}⭐
                </p>
                <button
                  className="mt-3 sm:mt-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-3 sm:px-4 py-2 rounded w-full hover:bg-blue-600"
                  onClick={() => navigate(`/movies/${movie._id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <button
            className="bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600"
            onClick={() => navigate("/allMovies")}
          >
            See All Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovies;
