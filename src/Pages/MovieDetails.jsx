import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {
	const{ id} = useParams();
	console.log(id)
	const loadedMovie = useLoaderData();
	console.log(loadedMovie)
	// const [singleMovie, setSingleMovie] = useState(loadedMovie)
	return (
		<div>
			<h3>movie {loadedMovie.title}</h3>
		</div>
	);
};

export default MovieDetails;