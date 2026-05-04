import React from 'react';
import styles from './Navbar.module.css';

const pages = ['home', 'about', 'gallery', 'contact'];
const labels = { home: 'Home', about: 'About', gallery: 'Work', contact: 'Contact' };

export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoMark} />
        TURNER<span className={styles.dot}>.</span>TECH
      </div>

      <ul className={styles.navLinks}>
        {pages.map((page) => (
          <li key={page}>
            <a
              className={activePage === page ? styles.active : ''}
              onClick={() => onNavigate(page)}
            >
              {labels[page]}
            </a>
          </li>
        ))}
      </ul>

      <button className={styles.navCta} onClick={() => onNavigate('contact')}>
        Get a Quote
      </button>
    </nav>
  );
}
