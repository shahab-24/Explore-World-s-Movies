import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const FavouriteMovies = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://explore-world-movies-server.vercel.app/favouriteMovies/${user?.email}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch movies");
          }
          return res.json();
        })
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching favorite movies:", error);
          setLoading(false);

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "There was an error fetching your favorite movies. Please try again later.",
          });
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Not logged in",
        text: "You need to log in to view your favorite movies.",
      });
    }
  }, [user?.email]);


  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://explore-world-movies-server.vercel.app/favouriteMovies/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete the movie");
            }
            return res.json();
          })
          .then(() => {
            const remainingMovies = movies.filter((movie) => movie._id !== id)
            console.log(remainingMovies)
            setMovies(remainingMovies);
            Swal.fire("Deleted!", "The movie has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting movie:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete the movie. Please try again later.",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Favourite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="w-full h-72 skeleton bg-gray-300"></figure>
              <div className="card-body">
                <div className="skeleton w-full h-6 bg-gray-300 mb-2"></div>
                <div className="skeleton w-1/2 h-4 bg-gray-300 mb-2"></div>
                <div className="skeleton w-1/4 h-4 bg-gray-300 mb-2"></div>
                <div className="skeleton w-1/4 h-4 bg-gray-300"></div>
              </div>
            </div>
          ))
        ) : (
          movies.map((movie) => (
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
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavouriteMovies;
