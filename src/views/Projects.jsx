// src/ProjectPage.js

import React, { useRef } from 'react';
import './ProjectPage.css';
import { Canvas, useFrame } from '@react-three/fiber';

const RotatingSphere = () => {
  const sphereRef = useRef();
  
  useFrame(() => {
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

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
              <RotatingSphere />
            </Canvas>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
