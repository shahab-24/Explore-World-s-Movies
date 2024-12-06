

const UpdateMovies = () => {
	const {} = 

	const handleUpdateMovies = (e) => {
		e.preventDefault();

	}
	return (
		<div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
		  <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
			Add a New Movie
		  </h2>
		  <form onSubmit={handleUpdateMovies}>
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
			  onChange={handleGenreChange}
			  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
			  <option value="">Select Genre</option>
			  <option value="Comedy">Comedy</option>
			  <option value="Drama">Drama</option>
			  <option value="Horror">Horror</option>
			  <option value="Action">Action</option>
			  <option value="Romance">Romance</option>
			  <option value="History">History</option>
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
			  <option value="2015">2015</option>
			  <option value="2014">2014</option>
			  <option value="2010">2010</option>
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

export default UpdateMovies;