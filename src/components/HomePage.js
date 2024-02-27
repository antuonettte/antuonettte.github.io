import React from 'react';
import ProjectCard from './ProjectCard';

const HomePage = () => {
  return (
    <div>
      <h1>Testing pipeline with project cards!</h1>
      <p>Here are some of my projects:</p>
      {<ProjectCard title="test" description="test" link="test"/>}
    </div>
  );
};

export default HomePage;