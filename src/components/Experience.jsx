import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="bg-[#1d1836] text-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-700 w-[90%] md:w-[70%] flex flex-col md:flex-row items-start md:items-center"
  >
    {/* Left Side: Title & Date */}
    <div className="w-full md:w-1/3 text-left">
      <h3 className="text-lg md:text-xl font-bold">{experience.title}</h3>
      <p className="text-secondary text-sm md:text-base">{experience.date}</p>
    </div>

    {/* Right Side: Description */}
    <div className="w-full md:w-2/3 text-left ">
      <ul className="mt-2 md:mt-0 list-disc md:list-none ml-5 md:ml-0 space-y-1 text-sm">
        {experience.points.map((point, index) => (
          <li key={index} className="text-gray-300">{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <div className="">
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
