import { motion } from "framer-motion";
import { useState } from "react";

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = [
    {
      genre: "Action",
      movies: [
        {
          title: "Mad Max: Fury Road",
          image: "https://i.ibb.co.com/YNh3rX8/mad.jpg", // Replace with your generated image URL
        },
        {
          title: "John Wick",
          image: "https://i.ibb.co.com/vHcw0D7/jhon.jpg", // Replace with your generated image URL
        },
        {
          title: "The Dark Knight",
          image: "https://i.ibb.co.com/zZ0xDJm/dark.jpg", // Replace with your generated image URL
        },
        {
          title: "Gladiator",
          image: "https://i.ibb.co.com/Q6wRd5p/galde.jpg", // Replace with your generated image URL
        },
      ],
    },
    {
      genre: "Comedy",
      movies: [
        {
          title: "The Hangover",
          image: "https://i.ibb.co.com/xJ6h2Yc/hang.jpg", // Replace with your generated image URL
        },
        {
          title: "Superbad",
          image: "https://i.ibb.co.com/YdQ9Pxr/super.jpg", // Replace with your generated image URL
        },
        {
          title: "Step Brothers",
          image: "https://i.ibb.co.com/C0h2Vgn/step.jpg", // Replace with your generated image URL
        },
        {
          title: "Mean Girls",
          image: "https://i.ibb.co.com/QmqsjJH/mean.jpg", // Replace with your generated image URL
        },
      ],
    },
    {
      genre: "Sci-Fi",
      movies: [
        {
          title: "Interstellar",
          image: "https://i.ibb.co.com/DgrPTcL/install.jpg", // Replace with your generated image URL
        },
        {
          title: "Blade Runner 2049",
          image: "https://i.ibb.co.com/XSVmRJy/blade.jpg", // Replace with your generated image URL
        },
        {
          title: "Dune",
          image: "https://i.ibb.co.com/1zQ75jm/dune.jpg", // Replace with your generated image URL
        },
        {
          title: "The Matrix",
          image: "https://i.ibb.co.com/fqsrLYL/matris.jpg", // Replace with your generated image URL
        },
      ],
    },
  ];

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre === "All"
    ? genres.flatMap((genre) => genre.movies)
    : genres.find((g) => g.genre === selectedGenre)?.movies || [];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-fuchsia-700 text-4xl font-semibold my-4">Categories</h2>
        {/* Genre Buttons */}
        <div className="mb-8">
          <button
            className={`px-4 py-2 rounded-lg mx-2 ${
              selectedGenre === "All" ? "text-white bg-fuchsia-600" : "bg-cyan-400 text-black"
            }`}
            onClick={() => setSelectedGenre("All")}
          >
            All
          </button>
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg mx-2 ${
                selectedGenre === genre.genre ? "text-white bg-fuchsia-600" : "bg-cyan-400 text-black"
              }`}
              onClick={() => setSelectedGenre(genre.genre)}
            >
              {genre.genre}
            </button>
          ))}
        </div>

        {/* Movie Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {filteredMovies.map((movie, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-fuchsia-700">{movie.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Genre;
