import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { movie } = location.state || {};
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://explore-world-s-movies-server.onrender.com/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setValue("poster", data.poster);
        setValue("title", data.title);
        setValue("genre", data.genre);
        setValue("duration", data.duration);
        setValue("releaseYear", data.releaseYear);
        setValue("rating", data.rating);
        setValue("summary", data.summary);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching movie data:", error);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    fetch(
      `https://explore-world-s-movies-server-production.up.railway.app/updateMovie/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Movie updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/movies/${id}`, { state: { movie: data } });
        }
      })
      .catch((error) => console.error("Error updating movie:", error));
  };

  const showError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: message,
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-12 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-12 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-12 bg-gray-300 rounded-md w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container mx-auto py-8 flex justify-center items-center w-full"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1667538960183-82690c60a2a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmludGFnZSUyMG1vdmllcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D')", // Replace with a real movie poster
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        animation: "fadeIn 2s ease-in-out",
      }}
    >
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-lg opacity-90 backdrop-blur-md animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 animate__animated animate__fadeIn animate__delay-1s">
          Update Movie
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 animate__animated animate__fadeIn animate__delay-2s text-fuchsia-600 "
        >
          <div>
            <label className="block mb-2 text-lg text-gray-700">
              Poster URL
            </label>
            <input
              type="text"
              {...register("poster", {
                required: {
                  value: true,
                  message: "Poster URL is required",
                },
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.poster && showError(errors.poster.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">
              Movie Title
            </label>
            <input
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
                minLength: {
                  value: 2,
                  message: "Title must be at least 2 characters long",
                },
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && showError(errors.title.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">Genre</label>
            <select
              {...register("genre", { required: "Please select a genre" })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Genre</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Romance">Romance</option>
            </select>
            {errors.genre && showError(errors.genre.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">
              Duration (in minutes)
            </label>
            <input
              type="number"
              {...register("duration", {
                required: {
                  value: true,
                  message: "Duration is required",
                },
                min: {
                  value: 60,
                  message: "Duration must be at least 60 minutes",
                },
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.duration && showError(errors.duration.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">
              Release Year
            </label>
            <select
              {...register("releaseYear", {
                required: "Please select a release year",
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            {errors.releaseYear && showError(errors.releaseYear.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">Rating</label>
            <input
              type="number"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is required",
                },
                min: {
                  value: 0.5,
                  message: "Rating must be between 0.5 and 5",
                },
                max: {
                  value: 5,
                  message: "Rating must be between 0.5 and 5",
                },
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.rating && showError(errors.rating.message)}
          </div>

          <div>
            <label className="block mb-2 text-lg text-gray-700">Summary</label>
            <textarea
              {...register("summary", {
                required: {
                  value: true,
                  message: "Summary is required",
                },
                minLength: {
                  value: 10,
                  message: "Summary must be at least 10 characters",
                },
              })}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.summary && showError(errors.summary.message)}
          </div>

          <div>
            <button
              type="submit"
              className="mt-3 sm:mt-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-3 sm:px-4 py-2 rounded w-full hover:bg-blue-600 ease-in-out transition duration-300 "
            >
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
