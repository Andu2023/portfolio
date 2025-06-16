import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { frameworks, languages, tools } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

// Icons from react-icons
import { FaLayerGroup, FaCode, FaTools } from 'react-icons/fa';

const sectionIcons = {
  Frameworks: <FaLayerGroup className="text-teal-600 w-6 h-6 mr-2" />,
  Languages: <FaCode className="text-blue-600 w-6 h-6 mr-2" />,
  'Tools & Skills': <FaTools className="text-green-600 w-6 h-6 mr-2" />,
};

const TechSection = ({ title, items }) => (
  <div className="mb-12 w-full">
    <motion.div
      variants={textVariant()}
      className="flex items-center mb-6"
    >
      {sectionIcons[title]}
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-start gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="w-24 h-24 flex flex-col items-center justify-center bg-[#f9f9f9] p-3 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-12 h-12 object-contain mb-1"
          />
          <p className="text-xs text-center text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className="w-full flex justify-center items-center mt-6 px-4 pt-6 md:px-20 pb-4">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl w-full"
      >
        <TechSection title="Frameworks" items={frameworks} />
        <TechSection title="Languages" items={languages} />
        <TechSection title="Tools & Skills" items={tools} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
