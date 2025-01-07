import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white py-6 w-full px-4 mt-20 border-t-2 border-purple-500 border-opacity-60">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Animated Website Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left mb-4 md:mb-0"
        >
          <h2 className="text-2xl font-bold text-fuchsia-500">
            <Typewriter
              options={{
                strings: ["Arabian Movies", "Explore World Movies"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-300">Explore world movies</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex space-x-4"
        >
          <a
            href="https://www.facebook.com/shawonctg22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/shahab-uddin24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/SHAHAB_UDDIN_24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/shahab-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/shahab-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>

      {/* Footer Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mt-4 text-sm text-gray-400"
      >
        &copy; 2024 Arabic Movies. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
