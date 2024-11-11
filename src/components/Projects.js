import React, { useState } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Project 1',
      description: 'This is a description of Project 1.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Project 2',
      description: 'This is a description of Project 2.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Project 3',
      description: 'This is a description of Project 3.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Project 4',
      description: 'This is a description of Project 4.',
    },
  ];

  // Function to open the bottom bar with project details
  const openDetails = (project) => {
    setOpenProject(project);
    gsap.to('.bottom-bar', {
      height: '80%',
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  // Function to close the bottom bar
  const closeDetails = () => {
    gsap.to('.bottom-bar', {
      height: '0%',
      duration: 0.8,
      ease: 'power3.in',
    });
    setOpenProject(null);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto py-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-shrink-0 w-60 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openDetails(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {openProject && (
        <div className="bottom-bar fixed bottom-0 left-0 w-full bg-white shadow-xl overflow-auto">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">{openProject.title}</h2>
            <button
              onClick={closeDetails}
              className="text-xl font-bold text-gray-700 hover:text-gray-500"
            >
              &times;
            </button>
          </div>
          <div className="p-4 text-sm">
            <p>{openProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
