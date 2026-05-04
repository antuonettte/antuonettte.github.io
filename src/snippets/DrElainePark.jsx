import React from 'react';
import styles from './DrElainePark.module.css';

const tags = ['Leadership', 'Team dynamics', 'Org design', 'Culture'];

const talks = [
  {
    venue: 'TEDx Atlanta',
    title: 'Why psychological safety is a business imperative',
    year: '2024',
  },
  {
    venue: 'SHRM Annual',
    title: 'Redesigning feedback for the modern workplace',
    year: '2024',
  },
  {
    venue: 'HBR Live',
    title: 'The hidden cost of always-on culture',
    year: '2023',
  },
];

export default function DrElainePark() {
  return (
    <div className={styles.wrapper}>
      {/* Nav */}
      <div className={styles.nav}>
        <div className={styles.logo}>Dr. Elaine Park</div>
        <div className={styles.navRight}>
          {['Writing', 'Speaking', 'Consulting'].map((l) => (
            <span key={l}>{l}</span>
          ))}
          <div className={styles.contactBtn}>Get in touch</div>
        </div>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>
            Organizational Psychologist &amp; Speaker
          </div>
          <h3>
            Helping teams work<br />with clarity and trust.
          </h3>
          <p>
            Keynote speaker, executive coach, and author of{' '}
            <em>The Architecture of Trust</em>. Based in Atlanta, working globally.
          </p>
          <div className={styles.tags}>
            {tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <a className={styles.btn}>Book a keynote</a>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.avatarBg} />
          <div className={styles.avatarCircle} />
        </div>
      </div>

      {/* Speaking */}
      <div className={styles.speaking}>
        {talks.map((t) => (
          <div key={t.title} className={styles.talk}>
            <div className={styles.talkVenue}>{t.venue}</div>
            <div className={styles.talkTitle}>{t.title}</div>
            <div className={styles.talkYear}>{t.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
