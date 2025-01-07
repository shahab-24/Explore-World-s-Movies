import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const FavouriteMovies = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://explore-world-movies-server.vercel.app/favouriteMovies/${user?.email}`)
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
        fetch(`https://explore-world-movies-server.vercel.app/favouriteMovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete the movie");
            }
            return res.json();
          })
          .then(() => {
            const remainingMovies = movies.filter((movie) => movie._id !== id);
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
    <div
      className="container mx-auto text-fuchsia-600 py-8 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598899134739-fb134e5589e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')" }}
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-fuchsia-700">Favourite Movies</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 border">Poster</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Genre</th>
              <th className="px-4 py-2 border">Duration</th>
              <th className="px-4 py-2 border">Release Year</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="px-4 py-2 border">
                    <div className="w-24 h-32 bg-gray-300 rounded-md"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-32"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-20"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-16"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-24"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-12"></div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="h-6 bg-gray-300 rounded-md w-16"></div>
                  </td>
                </tr>
              ))
            ) : movies.length > 0 ? (
              movies.map((movie) => (
                <tr key={movie._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-24 h-24 object-cover rounded-md border border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-2 border font-bold">{movie.title}</td>
                  <td className="px-4 py-2 border">{movie.genre}</td>
                  <td className="px-4 py-2 border">{movie.duration} min</td>
                  <td className="px-4 py-2 border">{movie.releaseYear}</td>
                  <td className="px-4 py-2 border text-yellow-500">{movie.rating}⭐</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 flex items-center justify-center"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 border">No favorite movies found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouriteMovies;
