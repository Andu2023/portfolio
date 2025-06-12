import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaStar } from 'react-icons/fa';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 w-full md:w-[300px] hover:shadow-2xl"
    >
      <div className='w-full h-[200px] mb-4'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <h3 className='text-gray-900 font-bold text-[20px]'>{name}</h3>
      <p className='mt-2 text-gray-600 text-[14px]'>{description}</p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="text-center flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-bold text-gray-900">PROJECTS.</h2>

        {/* Decorative line with star */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
          <FaStar className="text-yellow-500 text-xl" />
          <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>

      {/* Cards container */}
      <div className='mt-10 flex flex-wrap gap-12 px-4 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
