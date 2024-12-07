

const NotFound = () => {
	return (
		<div
			className="h-screen flex flex-col justify-center items-center bg-cover bg-center"
			style={{
				backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,city,landscape)',
			}}
		>
			<div className="text-center text-white p-6 bg-opacity-70 rounded-lg">
				<h3 className="text-4xl font-bold mb-4">Oops! Page Not Found</h3>
				<p className="text-xl mb-4">It seems like the page you are looking for does not exist.</p>
				<button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700">
					Go Back Home
				</button>
			</div>
		</div>
	);
};

export default NotFound;
