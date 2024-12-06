// FeaturedMovies.jsx
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/movies") // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-white rounded shadow-lg p-4">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[200px] object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-600 mb-1">Genre: {movie.genre}</p>
            <p className="text-gray-600 mb-1">Duration: {movie.duration} min</p>
            <p className="text-gray-600 mb-1">Release Year: {movie.releaseYear}</p>
            <p className="text-yellow-500 font-semibold">Rating: {movie.rating}⭐</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              onClick={() => navigate(`/movies/${movie._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          onClick={() => navigate("/allMovies")}
        >
          See All Movies
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovies;
