import { useEffect, useState } from "react";


const UpcomingMovies = () => {
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/movies")
		.then(res => res.json())
		.then(data => {
			const currentYear = new Date(). getFullYear();
			const upcoming = data.filter(movie => parseInt(movie.releaseYear) > currentYear)
			setUpcomingMovies(upcoming);
		})
		
	},[])
	return (
		<div>
			 <section>
        <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMovies.map((movie) => (
            <div key={movie.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="text-gray-500">Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
		</div>
	);
};

export default UpcomingMovies;