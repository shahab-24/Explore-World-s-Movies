import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const FavouriteMovies = () => {
	const {user} = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/favouriteMovies/${user?.email}`) // Replace with dynamic email
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching favorite movies:", error));
  }, [user?.email]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
              <p>Duration: {movie.duration} min</p>
              <p>Release Year: {movie.releaseYear}</p>
              <p className="text-yellow-500">Rating: {movie.rating}⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteMovies;
