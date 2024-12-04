import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2"; // Import SweetAlert2
import { AuthContext } from "../Provider/AuthProvider";

const AddMovie = () => {
	const {user, setUser} = useContext(AuthContext);
  const [movie, setMovie] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  // Handle rating
  const handleRating = (rate) => {
    setMovie({ ...movie, rating: rate });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!movie.poster.startsWith("http")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Poster URL",
        text: "Poster must be a valid URL starting with http.",
      });
      return;
    }
    if (movie.title.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Invalid Title",
        text: "Title must have at least 2 characters.",
      });
      return;
    }
    if (!movie.genre) {
      Swal.fire({
        icon: "error",
        title: "Genre Required",
        text: "Please select a genre.",
      });
      return;
    }
    if (movie.duration < 60) {
      Swal.fire({
        icon: "error",
        title: "Invalid Duration",
        text: "Duration must be at least 60 minutes.",
      });
      return;
    }
    if (!movie.releaseYear) {
      Swal.fire({
        icon: "error",
        title: "Release Year Required",
        text: "Please select a release year.",
      });
      return;
    }
    if (movie.rating <= 0) {
      Swal.fire({
        icon: "error",
        title: "Rating Required",
        text: "Please provide a rating.",
      });
      return;
    }
    if (movie.summary.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Summary",
        text: "Summary must have at least 10 characters.",
      });
      return;
    }

    // Submit data to server
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
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
            genre: "",
            duration: "",
            releaseYear: "",
            rating: 0,
            summary: "",
          }); 
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Add a New Movie
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Poster URL */}
        <label className="block mb-2 font-medium">Poster URL</label>
        <input
          type="text"
          name="poster"
          placeholder="Enter poster URL"
          value={movie.poster}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Movie Title */}
        <label className="block mb-2 font-medium">Movie Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter movie title"
          value={movie.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Genre */}
        <label className="block mb-2 font-medium">Genre</label>
        <select
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Genre</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>

        {/* Duration */}
        <label className="block mb-2 font-medium">Duration (in minutes)</label>
        <input
          type="number"
          name="duration"
          placeholder="Enter duration"
          value={movie.duration}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Release Year */}
        <label className="block mb-2 font-medium">Release Year</label>
        <select
          name="releaseYear"
          value={movie.releaseYear}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        {/* Rating */}
        
        <label className="block mb-2 font-medium">Rating</label>
        <div className="flex items-center mb-4">
          <Rating
            onClick={handleRating}
            ratingValue={movie.rating}
            size={25}
            className="inline-block"
          />
        </div>

        {/* Summary */}
        <label className="block mb-2 font-medium">Summary</label>
        <textarea
          name="summary"
          placeholder="Write a short summary"
          value={movie.summary}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
