import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import "aos/dist/aos.css";
import AOS from "aos";
import ReactStars from "react-rating-stars-component";

const AddMovie = () => {
  const { user } = useContext(AuthContext);

  const [movie, setMovie] = useState({
    poster: "",
    title: "",
    genre: [],
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  const [showGenreDropdown, setShowGenreDropdown] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    const selectedGenres = movie.genre;

    if (checked) {
      setMovie({ ...movie, genre: [...selectedGenres, value] });
    } else {
      setMovie({
        ...movie,
        genre: selectedGenres.filter((genre) => genre !== value),
      });
    }
  };

  const handleRating = (newRating) => {
    setMovie({ ...movie, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieUser = { ...movie, email: user?.email };

    if (!movie.poster.startsWith("http")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Poster URL",
        text: "Poster must be a valid URL starting with http.",
      });
      return;
    }

    fetch("https://explore-world-s-movies-server.onrender.com/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Movie Added",
            text: "The movie was added successfully!",
          });
          setMovie({
            poster: "",
            title: "",
            genre: [],
            duration: "",
            releaseYear: "",
            rating: 0,
            summary: "",
          });
        }
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-800 py-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg bg-opacity-30">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Add a New Movie
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Poster URL */}
          <div data-aos="fade-right">
            <label className="block mb-2 font-medium">Poster URL</label>
            <input
              type="text"
              name="poster"
              placeholder="Enter poster URL"
              value={movie.poster}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Movie Title */}
          <div data-aos="fade-left">
            <label className="block mb-2 font-medium">Movie Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter movie title"
              value={movie.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Genre */}
          <div className="mb-4 relative">
            <label className="block mb-2 font-medium">Genre</label>
            <button
              type="button"
              onClick={() => setShowGenreDropdown(!showGenreDropdown)}
              className="w-full p-3 border rounded bg-gray-100"
            >
              Select Genre
            </button>
            {showGenreDropdown && (
              <div className="absolute z-10 bg-white border rounded mt-2 w-full">
                {[
                  "Action",
                  "Drama",
                  "Comedy",
                  "Horror",
                  "Romance",
                  "Thriller",
                  "History",
                  "Mystery",
                ].map((genre) => (
                  <label key={genre} className="block px-4 py-2">
                    <input
                      type="checkbox"
                      value={genre}
                      onChange={handleGenreChange}
                      className="mr-2"
                    />
                    {genre}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Duration */}
          <div data-aos="fade-left">
            <label className="block mb-2 font-medium">
              Duration (in minutes)
            </label>
            <input
              type="number"
              name="duration"
              placeholder="Enter duration"
              value={movie.duration}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Release Year */}
          <div data-aos="fade-right" className="">
            <label className="block mb-2 font-medium">Release Year</label>
            <select
              name="releaseYear"
              value={movie.releaseYear}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>

          <div data-aos="fade-left">
            <label className="block mb-2 font-medium">Rating</label>
            <ReactStars
              count={10}
              onChange={handleRating}
              size={30}
              activeColor="#ffd700"
              isHalf={true}
            />
          </div>

          {/* Summary */}
          <div data-aos="fade-right">
            <label className="block mb-2 font-medium">Summary</label>
            <textarea
              name="summary"
              placeholder="Write a short summary"
              value={movie.summary}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div data-aos="fade-up" className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
