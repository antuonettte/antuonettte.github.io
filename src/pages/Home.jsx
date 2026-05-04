import React from 'react';
import styles from './Home.module.css';

const services = [
  {
    icon: '{ }',
    title: 'Custom Development',
    description:
      'Hand-coded sites built with modern frameworks — React, Next.js, or clean HTML/CSS. No bloated page builders.',
  },
  {
    icon: '//',
    title: 'Business Websites',
    description:
      'Landing pages, portfolios, and multi-page sites tailored to convert visitors into customers.',
  },
  {
    icon: '≈',
    title: 'Ongoing Support',
    description:
      'Monthly retainer plans for updates, performance monitoring, and keeping your site sharp.',
  },
];

const stats = [
  { value: '100%', label: 'Custom built' },
  { value: '<3s', label: 'Load time target' },
  { value: '4+', label: 'Years engineering' },
];

export default function Home({ onNavigate }) {
  return (
    <div className={styles.wrapper}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroGlow2} />

        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Available for new projects</div>

          <h1 className={styles.heroTitle}>
            Engineering<br />
            websites that<br />
            <span>actually work.</span>
          </h1>

          <p className={styles.heroSub}>
            Turner Technologies builds fast, modern websites for small businesses —
            crafted by a software engineer who understands both the code and the craft.
          </p>

          <div className={styles.heroActions}>
            <button className="btn-primary" onClick={() => onNavigate('contact')}>
              Start a Project
            </button>
            <button className="btn-ghost" onClick={() => onNavigate('gallery')}>
              View Work
            </button>
          </div>

          <div className={styles.heroStats}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <div className={styles.servicesStrip}>
        {services.map((s) => (
          <div key={s.title} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
