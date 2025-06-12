import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences, education } from "../constants"; 
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (

  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-80 md:w-96 bg-white text-gray-800 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-start justify-between transition-transform"
  >
    <div>
      <h3 className="text-lg font-semibold">{experience.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{experience.date}</p>
    </div>
    <ul className="list-disc list-inside space-y-2 text-sm">
      {experience.points.map((point, i) => (
        <li key={i} className="text-gray-700">
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

// ✅ Add this EducationCard component
const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-80 md:w-96 bg-white text-gray-800 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-start justify-between transition-transform"
  >
    <div>
      <h3 className="text-lg font-semibold">{edu.university}</h3>
      <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
    </div>
    <p className="text-sm text-gray-700 mt-2">{edu.field}</p>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-4 md:px-20">
      
       <div className="w-full max-w-6xl flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Resume</h2>
        <a
          href="/Andualem assefa_Resume.pdf"
          download="Andualem assefa_Resume.pdf"
          className="bg-sky-900 text-white text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-sky-800 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
      
      {/* Card Container */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl w-full"
      >
        
        {/* Experience Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Experience</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </div>

        {/* Education Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Education</h2>
        <div className="flex  justify-center gap-10">
          {education.map((edu, index) => (
            <EducationCard key={index} index={index} edu={edu} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
