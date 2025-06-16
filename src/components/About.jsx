import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full flex justify-center items-center mt-6 px-4 md:px-20">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-white p-10 rounded-2xl shadow-lg border max-w-6xl w-full"
      >
        {/* Title */}
        <motion.div
          variants={textVariant()}
          className="text-center flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-sky-950">ABOUT <span className=''>ME</span>.</h2>

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
            className="text-gray-900 text-[17px] leading-[30px] max-w-[500px] flex-1 font-sans"
          >
             I'm a passionate Full Stack Develope with 3+ years of experience building scalable, high-performance web applications using .NET Core, Django, React, Angular, and cloud platforms. Passionate about clean code, solving complex problems, and delivering user-friendly digital solutions that make an impact.
  

          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className="text-gray-900 text-[17px] leading-[30px] max-w-[500px] flex-1 font-serif"
          >
           My portfolio showcases diverse projects that highlight my full-stack expertise, problem-solving mindset, and dedication to quality. I’m always eager to learn, adapt, and take on new challenges that fuel my growth as a developer.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
