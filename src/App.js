import React, { Suspense } from 'react';
import './css/HomePage.css'; // Import CSS file for homepage styling
import './css/background.css';
import './css/canvas.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

import MyCanvas from './canvas/ui/MyCanvas';

const App = () => {
  return (
    <div>
      <div className="canvas-container">
      <Suspense fallback={null}>

        <MyCanvas/>
      </Suspense>

      </div>
      <div className="homepage-container">
        <Header />
        <HomePage />
      </div>
    </div>
  );
};


export default App;