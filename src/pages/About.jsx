import React from 'react';
import styles from './About.module.css';

const skills = [
  'React / Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'REST APIs', 'AWS / Cloud', 'CI/CD',
  'Tailwind CSS', 'Performance', 'Git / GitHub', 'Accessibility',
];

const badges = [
  'Full-Stack', 'React / Next.js', 'Node.js', 'UI/UX', 'SEO', 'Atlanta, GA',
];

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className="section">
        <div className="section-label">// about</div>
        <h2>
          Software engineer.<br />
          Now building for you.
        </h2>

        <div className={styles.aboutGrid}>
          {/* Left: bio */}
          <div className={styles.aboutText}>
            <p>
              Turner Technologies was founded on a simple premise: small businesses deserve
              websites built to the same standard as enterprise software — performant,
              accessible, and built to last.
            </p>
            <p>
              With a background spanning full-stack development, system architecture, and
              UI engineering, I bring a depth of technical knowledge that most web design
              shops simply don't have. That means cleaner code, faster sites, and fewer
              surprises.
            </p>
            <p>
              Every project is a direct collaboration — no account managers, no juniors
              handing off work. You work directly with me from discovery to launch.
            </p>
            <div className={styles.badges}>
              {badges.map((b) => (
                <span key={b} className={styles.badge}>{b}</span>
              ))}
            </div>
          </div>

          {/* Right: skills + approach */}
          <div>
            <div className={styles.skillsLabel}>// technical expertise</div>
            <div className={styles.skillsGrid}>
              {skills.map((s) => (
                <div key={s} className={styles.skillTag}>{s}</div>
              ))}
            </div>

            <div className={styles.approachBox}>
              <div className={styles.skillsLabel}>// approach</div>
              <p>
                Performance-first. Every site is optimized for Core Web Vitals,
                mobile-responsive by default, and built so you can manage it without
                touching code — if you want to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
