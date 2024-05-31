import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { GlobalStateProvider } from './state'
import Navbar from './components/Navbar'
import Home from './views/Home'
import './css/App.css'
import Projects from './views/Projects'

const projects = [
  {
    title: "Car APP",
    description: "This is the description for Project 1.",
    image: "link_to_image1.jpg",
    github: "https://github.com/user/project1",
  },
  {
    title: "Project 2",
    description: "This is the description for Project 2.",
    image: "link_to_image2.jpg",
    github: "https://github.com/user/project2",
  },
  // Add more projects as needed
];


const App = () => {



  return (
    <GlobalStateProvider >
      <main className='main'>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path='/' element={<Home />} className="home" /> */}
            <Route path='/' element={<Projects projects={projects} />} />
          </Routes>
        </Router>
      </main>
    </GlobalStateProvider>
  )
}


export default App