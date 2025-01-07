import { FaFilm, FaListAlt, FaUser, FaInfoCircle, FaShareAlt } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaFilm size={50} className="text-blue-500 group-hover:scale-125 transition-transform duration-300" />,
      title: "Extensive Movie Database",
      description: "Explore a vast collection of movies across genres, languages, and eras.",
    },
    {
      icon: <FaListAlt size={50} className="text-green-500 group-hover:scale-125 transition-transform duration-300" />,
      title: "Custom Movie List",
      description: "Create and manage your personalized list of favorite movies effortlessly.",
    },
    {
      icon: <FaUser size={50} className="text-purple-500 group-hover:scale-125 transition-transform duration-300" />,
      title: "User-Friendly Interface",
      description: "Navigate our platform with ease and enjoy a seamless experience.",
    },
    {
      icon: <FaInfoCircle size={50} className="text-yellow-500 group-hover:scale-125 transition-transform duration-300" />,
      title: "Detailed Movie Info",
      description: "Access detailed information about movies, including ratings and release dates.",
    },
    {
      icon: <FaShareAlt size={50} className="text-red-500 group-hover:scale-125 transition-transform duration-300" />,
      title: "Community Sharing",
      description: "Share your movie recommendations with friends and fellow enthusiasts.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-10">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-700">About Our Website</h2>
        <p className="mb-8 text-lg text-gray-600">
          Welcome to our Movie Portal! Here you can explore, add, and update movies. Our aim is to create an easy-to-use platform for movie enthusiasts to manage their favorite movies. Enjoy exploring the best movies here!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 group hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-transparent hover:border-blue-500"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
