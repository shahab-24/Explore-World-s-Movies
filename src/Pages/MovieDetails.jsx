import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`https://explore-world-movies-server.vercel.app/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://explore-world-movies-server.vercel.app/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The movie has been deleted.", "success");
              navigate("/allMovies");
            }
          })
          .catch((error) => {
            Swal.fire("Error", "There was an error deleting the movie.", "error");
            console.error("Error deleting movie:", error);
          });
      }
    });
  };

  const handleAddToFavorites = () => {
    const favoriteMovie = {
      email: user.email,
      poster: movie.poster,
      title: movie.title,
      genre: movie.genre,
      duration: movie.duration,
      releaseYear: movie.releaseYear,
      rating: movie.rating,
      summary: movie.summary,
    };
    fetch(`https://explore-world-movies-server.vercel.app/favouriteMovies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Added!", "Movie added to favorites!", "success");
        setMovie(data);
      })
      .catch((error) => {
        Swal.fire("Error", "There was an error adding to favorites.", "error");
        console.error("Error adding movie to favorites:", error);
      });
  };

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card w-full lg:w-1/2 mx-auto bg-base-100 shadow-xl">
          <figure className="skeleton bg-gray-300 w-full h-72"></figure>
          <div className="card-body">
            <h2 className="skeleton w-1/2 h-6 bg-gray-300"></h2>
            <p className="skeleton w-1/4 h-4 bg-gray-300"></p>
            <p className="skeleton w-1/4 h-4 bg-gray-300"></p>
            <p className="skeleton w-1/4 h-4 bg-gray-300"></p>
            <p className="skeleton w-1/4 h-4 bg-gray-300"></p>
            <p className="skeleton w-full h-12 bg-gray-300"></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-blue-50">
      <div className="card w-full lg:w-1/2 mx-auto bg-base-100 shadow-xl">
        <figure>
          {!imageLoaded && (
            <div className="skeleton bg-gray-300 w-full h-72"></div>
          )}
          <img
            src={movie.poster}
            alt={movie.title}
            className={`w-full h-72 object-cover ${imageLoaded ? "" : "hidden"}`}
            onLoad={handleImageLoad}
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-fuchsia-600 text-2xl font-bold">
            {movie.title || <div className="skeleton w-1/2 h-6 bg-gray-300"></div>}
          </h2>
          <p>
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {movie.duration} min
          </p>
          <p>
            <span className="font-semibold">Release Year:</span> {movie.releaseYear}
          </p>
          <p>
            <span className="font-semibold">Rating:</span>
            <span className="text-yellow-500 font-semibold"> {movie.rating}⭐</span>
          </p>
          <p className="mt-4">{movie.summary}</p>

          <div className="card-actions mt-6 flex flex-col sm:flex-row sm:justify-evenly gap-4 md:flex-row md:gap-2">
            <button
              className="btn btn-error bg-red-600 btn-outline w-full md:w-auto"
              onClick={handleDelete}
            >
              Delete
            </button>
            <Link to={`/updateMovie/${id}`} className="w-full md:w-auto">
              <button className="btn btn-outline w-full">Update Movie</button>
            </Link>
            <button
              className="btn btn-success btn-outline w-full md:w-auto"
              onClick={handleAddToFavorites}
            >
              Add to Favorite
            </button>
          </div>
          <button
            className="mt-6 bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-4 py-2 rounded w-full hover:bg-blue-600"
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
