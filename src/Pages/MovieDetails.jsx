import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MovieDetails = () => {
	const {user} = useContext(AuthContext)
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null); // State to store movie details
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`) // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Movie deleted successfully!");
          navigate("/allMovies"); // Redirect to the All Movies page
        }
      })
      .catch((error) => console.error("Error deleting movie:", error));
  };

  const handleAddToFavorites = () => {
	const favoriteMovie = {
		email: user.email, // Replace with dynamic user email
		poster: movie.poster,
		title: movie.title,
		genre: movie.genre,
		duration: movie.duration,
		releaseYear: movie.releaseYear,
		rating: movie.rating,
		summary: movie.summary,
	  };
	fetch(`http://localhost:3000/favouriteMovies`, {
		method: "POST",
		headers: {
			"content-type" : "application/json"
		},
		body: JSON.stringify(favoriteMovie)
	  })
	  .then(res => res.json())
	  .then(data => setMovie(data))
    alert("Movie added to favorites!");
  };

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="card w-full lg:w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{movie.title}</h2>
          <p>
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {movie.duration} min
          </p>
          <p>
            <span className="font-semibold">Release Year:</span>{" "}
            {movie.releaseYear}
          </p>
          <p>
            <span className="font-semibold">Rating:</span>{" "}
            <span className="text-yellow-500 font-semibold">
              {movie.rating}⭐
            </span>
          </p>
          <p className="mt-4">{movie.summary}</p>
          <div className="card-actions justify-between mt-4">
            <button
              className="btn btn-error btn-outline"
              onClick={handleDelete}
            >
              Delete
            </button>
            <Link to={`/updateMovie/${id}`}>
            <button className="btn btn-outline">
              Update Movie
            </button>
            </Link>
            <button
              className="btn btn-success btn-outline"
              onClick={handleAddToFavorites}
            >
              Add to Favorite
            </button>
          </div>
          <button
            className="btn btn-secondary mt-4"
            onClick={() => navigate(location.state?.from || "/allMovies")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
