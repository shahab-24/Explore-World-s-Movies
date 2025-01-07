const NewsLetterSection = () => {
    return (
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 text-fuchsia-700">Stay Updated!</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter and never miss out on the latest movies, reviews, and news.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full sm:w-auto focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-500 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default NewsLetterSection;
  