import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]); // State to store movies
  const navigate = useNavigate(); // To navigate to the details page

  // Fetch all movies from the backend
  useEffect(() => {
    fetch("http://localhost:3000/movies") // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Movies</h2>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-white rounded shadow-lg p-4">
            {/* Movie Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[200px] object-cover rounded mb-4"
            />
            {/* Movie Info */}
            <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
            <p className="text-gray-600 mb-1">Genre: {movie.genre}</p>
            <p className="text-gray-600 mb-1">Duration: {movie.duration} min</p>
            <p className="text-gray-600 mb-1">
              Release Year: {movie.releaseYear}
            </p>
            <p className="text-yellow-500 font-semibold mb-2">
              Rating: {movie.rating}⭐
            </p>
            {/* See Details Button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate(`/movies/${movie._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
