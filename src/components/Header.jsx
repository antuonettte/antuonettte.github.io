import React, { useState } from 'react'

function Header() {

    // State to manage the visibility of the mobile navigation menu
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Function to toggle the visibility of the mobile navigation menu
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.toggle('open');
    };

  return (
    <header>
                {/* Desktop navigation menu */}
                <nav className="desktop-menu">
                    {/* Your navigation links here */}
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </nav>

                {/* Mobile navigation menu (hamburger menu) */}
                <div className="mobile-menu">
                    <label className='menu-toggle' >
                        <input type='checkbox' onClick={toggleMobileMenu} />
                    </label>
                    {/* Conditional rendering of mobile menu */}
                    {showMobileMenu && (
                        <nav className={`mobile-sidebar ${showMobileMenu ? 'active' : ''}`}>
                            <a className='mobile-link' href="/">Home</a>
                            <a className='mobile-link' href="/projects">Projects</a>
                            <a className='mobile-link' href="/contact">Contact</a>
                        </nav>
                    )}
                </div>
            </header>
  )
}

export default Header