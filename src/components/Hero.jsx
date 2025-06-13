import { styles } from '../styles';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center text-center pt-32`}>
        
        {/* Heading with Star Decoration */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Hi, I'm Andualem Assefa</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
            <FaStar className="text-yellow-500 text-xl" />
            <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 space-y-2 text-gray-700 text-lg sm:text-xl leading-relaxed"
        >
          <p className="tracking-wide">Full Stack Software Developer Building efficient and user-friendly </p>
          <p className="tracking-wide"> Applications Using a range of modern technologies</p>
          
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6"
        >
          <a
            href="/Andualem assefa_Resume.pdf"
            download="Andualem assefa_Resume.pdf"
            className="rounded-full text-white bg-sky-900 hover:bg-sky-800 px-6 py-3 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
