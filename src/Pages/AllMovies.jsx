
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://explore-world-movies-server.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => {
        console.log("allmovies", data)
        
        setMovies(data);  
        setIsLoading(false);  
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);



  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText)
    );
  }, [movies, searchText]);



  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Movies</h2>

      <div className="mb-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search movies by title..."
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array(15)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded shadow-lg p-4 skeleton animate-pulse"
                >
                  <div className="skeleton h-[200px] mb-4" />
                  <div className="skeleton h-6 mb-2" />
                  <div className="skeleton h-4 mb-2" />
                  <div className="skeleton h-4 mb-2" />
                  <div className="skeleton h-4 mb-4" />
                  <div className="skeleton h-4 mb-2" />
                </div>
              ))
          : filteredMovies.length > 0
          ? filteredMovies.map((movie) => (
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
                <p className="text-yellow-500 font-semibold mb-2">
                  Rating: {movie.rating}⭐
                </p>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center border-2 w-full"
                    onClick={() => navigate(`/movies/${movie._id}`)}
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))
          : <p>No movies found.</p>}
      </div>
    </div>
  );
};

export default AllMovies;
