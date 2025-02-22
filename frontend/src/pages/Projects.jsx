import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const mockData = [
    { 
      id: 1,
      name: 'Project 1',
      description: 'First project',
      status: 'active'
    },
    { 
      id: 2,
      name: 'Project 2',
      description: 'Second project',
      status: 'inactive'
    }
  ];

  useEffect(() => {
    console.log('Projects loaded:', mockData);
  }, [mockData]);

  return (
    <div className="projects-container">
      {mockData.map(project => (
        <div className="project-card" key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span className={`status ${project.status}`}>{project.status}</span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
