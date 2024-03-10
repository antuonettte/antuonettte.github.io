import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import './css/App.css'
import Projects from './views/Projects'

const App = () => {
  return (
    <main className='main'>
      <Router>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} className="home"/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App