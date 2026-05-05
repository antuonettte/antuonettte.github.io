import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const pages = ['home', 'about', 'gallery', 'contact'];
const labels = { home: 'Home', about: 'About', gallery: 'Work', contact: 'Contact' };

export default function Navbar({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoMark} />
          TURNER<span className={styles.dot}>.</span>TECH
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {pages.map((page) => (
            <li key={page}>
              <a
                className={activePage === page ? styles.active : ''}
                onClick={() => handleNavigate(page)}
              >
                {labels[page]}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className={styles.navCta} onClick={() => handleNavigate('contact')}>
          Get a Quote
        </button>

        {/* Hamburger button — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {pages.map((page) => (
            <li key={page}>
              <a
                className={activePage === page ? styles.drawerActive : ''}
                onClick={() => handleNavigate(page)}
              >
                {/* <span className={styles.drawerNum}>
                  {String(pages.indexOf(page) + 1).padStart(2, '0')}
                </span> */}
                {labels[page]}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.drawerCta}
          onClick={() => handleNavigate('contact')}
        >
          Get a Quote →
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
