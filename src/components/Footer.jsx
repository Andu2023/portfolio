import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full bg-sky-900 text-white"
    >
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-sky-700">
        {/* Developer Info */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-2xl font-semibold">Andualem Assefa</p>
          <p className="text-sm text-gray-300">Senior Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Andu2023"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition-all duration-300 text-gray-300 hover:text-white"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/andualem-assefa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition-all duration-300 text-gray-300 hover:text-white"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="mailto:andy2023user@gmail.com"
            className="hover:scale-110 transform transition-all duration-300 text-gray-300 hover:text-white"
          >
            <FaEnvelope size={26} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-3 text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-medium">Andualem Assefa</span>. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
