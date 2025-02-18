import React from 'react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <div className="mywork overflow-x-hidden p-10">
      <div className="mywork-title">
        <p>My Work</p>
        <h2>Projects.</h2>
      </div>
      <div className=" mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.image}
            alt={`Project ${index + 1}`}
            className="w-128 h-40 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
