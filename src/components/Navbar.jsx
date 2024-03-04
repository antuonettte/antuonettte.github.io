import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <NavLink to='/' className="navlink">
            <p>AT</p>
        </NavLink>
        <NavLink to='/' className="navlink">
            <p>Projects</p>
        </NavLink>
    </header>
  )
}

export default Navbar