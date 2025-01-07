import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      title: "Top 10 Must-Watch Movies of 2025",
      description:
        "Discover the most anticipated movies of 2025 that are guaranteed to blow your mind.",
      image: "https://i.ibb.co.com/hDHSQFy/DALL-E-2025-01-07-08-05-10-A-visually-stunning-digital-artwork-of-a-futuristic-movie-theater-with-gl.webp",
    },
    {
      title: "The Evolution of Sci-Fi Movies",
      description:
        "Explore how sci-fi movies have changed over the decades, from classics to modern masterpieces.",
      image: "https://i.ibb.co.com/4Fj5V4D/DALL-E-2025-01-07-08-07-14-A-visually-captivating-artwork-depicting-the-evolution-of-sci-fi-movies-s.webp",
    },
    {
      title: "Behind the Scenes: Hollywood Secrets",
      description:
        "Dive into the fascinating world of movie-making with exclusive behind-the-scenes stories.",
      image: "https://i.ibb.co.com/b1qd1H7/DALL-E-2025-01-07-08-08-17-A-behind-the-scenes-look-at-a-Hollywood-movie-production-showcasing-direc.webp",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-fuchsia-700">Movie Insights & Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
