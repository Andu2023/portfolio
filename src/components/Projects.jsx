import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { styles } from '../styles';
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
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 w-full md:w-[500px] hover:shadow-2xl"
      >
        {/* Image with click to zoom */}
        <div
          className="w-full h-[200px] mb-4 cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <h3 className="text-gray-900 font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-gray-600 text-[14px]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Zoom Modal */}
     <AnimatePresence>
  {isZoomed && (
    <motion.div
      className="fixed inset-0 bg-gray-50 bg-opacity-80 z-50 overflow-auto cursor-zoom-out"
      onClick={() => setIsZoomed(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.img
          src={image}
          alt={name}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="max-w-full max-h-[70vh] rounded-xl shadow-2xl object-contain"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </>
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

      <div className="mt-10 flex flex-wrap gap-12 px-4 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
