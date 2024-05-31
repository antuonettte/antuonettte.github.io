// src/ProjectPage.js

import React from 'react';
import '../css/Projects.css';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Projects = ({ projects }) => {
  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <div className="project-section" key={index}>
          <h2>{project.title}</h2>
          <div className="project-content">
            <div className="project-info">
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
          <div className="project-3d">
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Box>
                <meshStandardMaterial attach="material" color="orange" />
              </Box>
            </Canvas>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
