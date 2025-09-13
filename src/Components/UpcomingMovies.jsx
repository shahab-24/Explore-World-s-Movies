import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetch("https://explore-world-s-movies-server.onrender.com/allMovies")
      .then((res) => res.json())
      .then((data) => {
        const currentYear = new Date().getFullYear();
        const upcoming = data.filter(
          (movie) => parseInt(movie.releaseYear) > currentYear
        );
        setUpcomingMovies(upcoming);
      });

    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      <section className="mb-12">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 text-center text-fuchsia-700">
          Upcoming Movies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMovies.length > 0 ? (
            upcomingMovies.map((movie, index) => (
              <div
                key={movie._id}
                className="bg-white rounded shadow-lg p-4 animate__animated"
                data-aos={
                  index % 3 === 0
                    ? "fade-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-easing="ease-out-cubic"
                style={{
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-[200px] object-cover rounded mb-4"
                />

                <h3 className="text-xl font-semibold mb-2 text-fuchsia-600">
                  {movie.title}
                </h3>
                <p className="text-gray-600 mb-1">{movie.genre}</p>
                <p className="text-gray-600 mb-1">{movie.releaseYear}</p>
                <p className="text-yellow-500 font-semibold mb-2">
                  {movie.rating}⭐
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-fuchsia-700">
              No upcoming movies till now.....
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingMovies;
