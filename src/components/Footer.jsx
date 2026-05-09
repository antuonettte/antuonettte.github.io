import React from 'react';
import styles from './Footer.module.css';

const pages = ['home', 'about', 'gallery', 'contact'];
const labels = { home: 'Home', about: 'About', gallery: 'Work', contact: 'Contact' };

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © {year} Turner Technologies · Alpharetta, GA
      </div>

      <ul className={styles.links}>
        {pages.map((page) => (
          <li key={page}>
            <a onClick={() => onNavigate(page)}>{labels[page]}</a>
          </li>
        ))}
      </ul>

      <div className={styles.legal}>
        <a onClick={() => onNavigate('privacy')}>Privacy Policy</a>
      </div>
    </footer>
  );
}
