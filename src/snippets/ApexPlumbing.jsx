import React from 'react';
import styles from './ApexPlumbing.module.css';

export default function ApexPlumbing() {
  const services = [
    {
      title: 'Drain Cleaning',
      desc: 'Clogged drains cleared fast with professional-grade equipment.',
    },
    {
      title: 'Water Heaters',
      desc: 'Installation, repair, and replacement for all major brands.',
    },
    {
      title: 'Leak Detection',
      desc: 'Find and fix hidden leaks before they become costly damage.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Nav */}
      <div className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon} />
          Apex Plumbing Co.
        </div>
        <div className={styles.navLinks}>
          {['Services', 'About', 'Reviews', 'Contact'].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h3>Fast, Reliable Plumbing<br />for Atlanta Homeowners</h3>
          <p>
            Licensed &amp; insured. Same-day service available. Over 500 five-star
            reviews across the metro area.
          </p>
          <button className={styles.btn}>Get a Free Estimate</button>
          <div className={styles.trust}>
            <span className={styles.trustItem}>★ 4.9 Rating</span>
            <span className={styles.trustItem}>✓ Licensed &amp; Insured</span>
            <span className={styles.trustItem}>✓ Same-Day Available</span>
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div className={styles.cards}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.cardIcon} />
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
