import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams(); // Movie ID from URL
  const navigate = useNavigate();
  const location = useLocation();
  const {movie} = location.state || {}

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch movie data and pre-fill form
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`) // Fetch movie by ID
      .then((res) => res.json())
      .then((data) => {
        // Set default values in the form
        setValue("poster", data.poster);
        setValue("title", data.title);
        setValue("genre", data.genre);
        setValue("duration", data.duration);
        setValue("releaseYear", data.releaseYear);
        setValue("rating", data.rating);
        setValue("summary", data.summary);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [id, setValue]);

  // Handle form submission
  const onSubmit = (data) => {
	console.log('hello')
    fetch(`http://localhost:3000/updateMovie/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
		console.log(result)
        if (result.modifiedCount > 0) {
          alert("Movie updated successfully!");
        //   navigate(`/movies/${id}`); // Redirect to movie details page
		  navigate(`/movies/${id}`, { state: { movie: data } });
        }
      })
      .catch((error) => console.error("Error updating movie:", error));
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Update Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        {/* Movie Poster */}
        <label className="block mb-2">Poster URL</label>
        <input
          type="text"
          {...register("poster", { required: "Poster URL is required" })}
          className="w-full p-2 border mb-4"
        />
        {errors.poster && <p className="text-red-500">{errors.poster.message}</p>}

        {/* Movie Title */}
        <label className="block mb-2">Movie Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required", minLength: 2 })}
          className="w-full p-2 border mb-4"
        />
        {errors.title && (
          <p className="text-red-500">Title must be at least 2 characters long</p>
        )}

        {/* Genre */}
        <label className="block mb-2">Genre</label>
        <select
          {...register("genre", { required: "Please select a genre" })}
          className="w-full p-2 border mb-4"
        >
          <option value="">Select Genre</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>
        {errors.genre && <p className="text-red-500">{errors.genre.message}</p>}

        {/* Duration */}
        <label className="block mb-2">Duration (in minutes)</label>
        <input
          type="number"
          {...register("duration", {
            required: "Duration is required",
            min: 60,
          })}
          className="w-full p-2 border mb-4"
        />
        {errors.duration && (
          <p className="text-red-500">Duration must be at least 60 minutes</p>
        )}

        {/* Release Year */}
        <label className="block mb-2">Release Year</label>
        <select
          {...register("releaseYear", { required: "Please select a release year" })}
          className="w-full p-2 border mb-4"
        >
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
        {errors.releaseYear && <p className="text-red-500">{errors.releaseYear.message}</p>}

        {/* Rating */}
        <label className="block mb-2">Rating</label>
        <input
          type="number"
          {...register("rating", {
            required: "Rating is required",
            min: 0.5,
            max: 5,
          })}
          className="w-full p-2 border mb-4"
        />
        {errors.rating && (
          <p className="text-red-500">Rating must be between 0.5 and 5</p>
        )}

        {/* Summary */}
        <label className="block mb-2">Summary</label>
        <textarea
          {...register("summary", {
            required: "Summary is required",
            minLength: 10,
          })}
          className="w-full p-2 border mb-4"
        ></textarea>
        {errors.summary && (
          <p className="text-red-500">Summary must be at least 10 characters</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;
