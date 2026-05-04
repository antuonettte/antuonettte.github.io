import React from 'react';
import styles from './Gallery.module.css';

// ── Update these with your real projects ──
const projects = [
  {
    id: 1,
    title: 'Apex Plumbing Co.',
    description: 'Local service business — full site + booking form',
    tag: 'Web Design',
    colorClass: 'g1',
    span: 2,
  },
  {
    id: 2,
    title: 'Bloom Studio',
    description: 'Floral shop with online ordering',
    tag: 'E-Commerce',
    colorClass: 'g2',
    span: 1,
  },
  {
    id: 3,
    title: 'Dr. Elaine Park',
    description: 'Consultant portfolio + speaking page',
    tag: 'Portfolio',
    colorClass: 'g3',
    span: 1,
  },
  {
    id: 4,
    title: 'Ember & Oak',
    description: 'Restaurant with menu + reservations',
    tag: 'Restaurant',
    colorClass: 'g4',
    span: 2,
  },
  {
    id: 5,
    title: 'Kestrel Realty',
    description: 'Real estate lead capture page',
    tag: 'Landing Page',
    colorClass: 'g5',
    span: 1,
  },
  {
    id: 6,
    title: 'Synk Analytics',
    description: 'Marketing site for B2B SaaS startup',
    tag: 'SaaS',
    colorClass: 'g6',
    span: 1,
  },
];

export default function Gallery({ onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <div className={`section ${styles.headerSection}`}>
        <div className="section-label">// work</div>
        <h2>
          Projects &amp;<br />
          case studies.
        </h2>
        <p className={styles.sub}>
          A selection of recent builds — from local service businesses to professional portfolios.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div
            key={p.id}
            className={`${styles.item} ${styles[p.colorClass]} ${p.span === 2 ? styles.span2 : ''}`}
          >
            <div className={styles.bg} />
            <span className={styles.tag}>{p.tag}</span>
            <div className={styles.info}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p>
          Want to see more?{' '}
          <a onClick={() => onNavigate('contact')}>Get in touch →</a>
        </p>
      </div>
    </div>
  );
}
