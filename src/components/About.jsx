import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 px-4 md:px-20">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-white p-10 rounded-2xl shadow-lg border border-gray-700 max-w-6xl w-full"
      >
        {/* Title */}
        <motion.div
          variants={textVariant()}
          className="text-center flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">ABOUT ME.</h2>

          {/* Decorative line with star */}
          <div className="flex items-center gap-4 mt-4">
            <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
            <FaStar className="text-yellow-500 text-xl" />
            <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
          </div>
        </motion.div>

        {/* Paragraphs */}
        <div className="t-10 flex flex-col sm:flex-row sm:gap-10 gap-6 sm:flex-wrap sm:justify-center px-4">
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="text-gray-800 text-[17px] leading-[30px] max-w-[500px] flex-1 font-serif"
          >
           
           I am a passionate and results-driven Full Stack Developer with a strong foundation in both front-end and back-end technologies. I thrive on solving complex problems, building scalable applications, and transforming innovative ideas into impactful digital solutions. With a commitment to continuous learning and clean code practices, I strive to create efficient, user-friendly, and high-performance software that makes a differencein  in .NET Core, Django, Angular, React, and cloud technologies.

          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className="text-gray-800 text-[17px] leading-[30px] max-w-[500px] flex-1 font-serif"
          >
           My portfolio highlights a diverse range of projects that reflect my ability to manage both front-end and back-end development effectively. Each project showcases my problem-solving skills, attention to detail, and commitment to delivering high-quality solutions. I'm always eager to learn new technologies and embrace new challenges that push me to grow as a developer.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
