import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://explore-world-s-movies-server.onrender.com/allMovies")
      .then((res) => res.json())
      .then((data) => {
        console.log("allmovies", data);
        setMovies(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filteredMovies = useMemo(() => {
    let sortedMovies = [...movies];

    // Apply sorting based on the selected option
    if (sortOption === "rating") {
      sortedMovies.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "releaseYear") {
      sortedMovies.sort((a, b) => b.releaseYear - a.releaseYear);
    } else if (sortOption === "title") {
      sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Filter movies by search text
    return sortedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText)
    );
  }, [movies, searchText, sortOption]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-6 text-fuchsia-600">
        All Movies
      </h2>

      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Search Input */}
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search movies by title..."
          className="w-full text-fuchsia-600 sm:w-1/2 p-2 border rounded shadow-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />

        {/* Sort Dropdown */}

        <select
          value={sortOption}
          onChange={handleSort}
          className="w-full bg-white sm:w-1/4 p-2 border rounded shadow-md text-fuchsia-600 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          <option value="">Sort By</option>
          <option value="rating">Rating (High to Low)</option>
          <option value="releaseYear">Release Year (Newest to Oldest)</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array(15)
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
        ) : filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie._id}
              className="bg-white rounded shadow-lg p-4 h-full"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[200px] object-cover rounded mb-4"
              />
              <h3 className="text-xl text-fuchsia-600 font-semibold mb-2">
                {movie.title}
              </h3>
              <p className="text-gray-600 mb-1">Genre: {movie.genre}</p>
              <p className="text-gray-600 mb-1">
                Duration: {movie.duration} min
              </p>
              <p className="text-gray-600 mb-1">
                Release Year: {movie.releaseYear}
              </p>
              <p className="text-yellow-500 font-semibold mb-2">
                Rating: {movie.rating}⭐
              </p>
              <div className="mt-auto">
                <button
                  className="mt-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-4 py-2 rounded w-full hover:bg-blue-600"
                  onClick={() => navigate(`/movies/${movie._id}`)}
                >
                  See Details
                </button>
              </div>
              {/* <div>
                  <button
                     className="mt-3 sm:mt-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-3 sm:px-4 py-2 rounded w-full hover:bg-blue-600"
                    onClick={() => navigate(`/movies/${movie._id}`)}
                  >
                    See Details
                  </button>
                </div> */}
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
