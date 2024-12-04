import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleDetails = (id) => {
    navigate(`/movies/${id}`); // Navigate to movie details page
  };

  return (
    <div className="w-11/12 mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="card shadow-lg p-4 bg-white hover:shadow-2xl transition-all"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p className="text-sm text-gray-600">
              Genre: <span className="text-gray-800">{movie.genre}</span>
            </p>
            <p className="text-sm text-gray-600">
              Duration: <span className="text-gray-800">{movie.duration}</span>
            </p>
            <p className="text-sm text-gray-600">
              Release Year: <span className="text-gray-800">{movie.releaseYear}</span>
            </p>
            <p className="text-sm text-gray-600">
              Rating: <span className="text-gray-800">{movie.rating}</span>
            </p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => handleDetails(movie._id)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/movies")}
        >
          See All Movies
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovies;
