import React, { useState } from 'react';
import styles from './Gallery.module.css';

import ApexPlumbing  from '../snippets/ApexPlumbing';
import BloomStudio   from '../snippets/BloomStudio';
import EmberAndOak   from '../snippets/EmberAndOak';
import KestrelRealty from '../snippets/KestrelRealty';
import SynkAnalytics from '../snippets/SynkAnalytics';
import DrElainePark  from '../snippets/DrElainePark';

/* ─────────────────────────────────────────
   SVG wireframe thumbnails — one per project
   Each is a miniaturised "screenshot" of
   the site's visual identity.
───────────────────────────────────────── */

const ApexThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <rect width="320" height="200" fill="#1a2e4a"/>
    <rect width="320" height="34" fill="#13233a"/>
    <rect x="12" y="10" width="80" height="14" rx="3" fill="#f59e0b" opacity="0.9"/>
    <rect x="200" y="12" width="32" height="10" rx="2" fill="white" opacity="0.2"/>
    <rect x="240" y="12" width="32" height="10" rx="2" fill="white" opacity="0.2"/>
    <rect x="280" y="12" width="28" height="10" rx="2" fill="white" opacity="0.2"/>
    <rect x="12" y="50" width="130" height="14" rx="2" fill="white" opacity="0.9"/>
    <rect x="12" y="70" width="160" height="10" rx="2" fill="white" opacity="0.5"/>
    <rect x="12" y="84" width="140" height="10" rx="2" fill="white" opacity="0.35"/>
    <rect x="12" y="102" width="80" height="26" rx="4" fill="#f59e0b"/>
    <rect x="12" y="136" width="60" height="8" rx="2" fill="white" opacity="0.25"/>
    <rect x="80" y="136" width="72" height="8" rx="2" fill="white" opacity="0.25"/>
    <rect x="160" y="136" width="72" height="8" rx="2" fill="white" opacity="0.25"/>
    <rect x="8" y="154" width="96" height="40" rx="4" fill="white" opacity="0.08"/>
    <rect x="112" y="154" width="96" height="40" rx="4" fill="white" opacity="0.08"/>
    <rect x="216" y="154" width="96" height="40" rx="4" fill="white" opacity="0.08"/>
    <rect x="16" y="160" width="18" height="12" rx="2" fill="#f59e0b" opacity="0.6"/>
    <rect x="16" y="176" width="60" height="6" rx="1" fill="white" opacity="0.3"/>
    <rect x="120" y="160" width="18" height="12" rx="2" fill="#f59e0b" opacity="0.6"/>
    <rect x="120" y="176" width="60" height="6" rx="1" fill="white" opacity="0.3"/>
    <rect x="224" y="160" width="18" height="12" rx="2" fill="#f59e0b" opacity="0.6"/>
    <rect x="224" y="176" width="60" height="6" rx="1" fill="white" opacity="0.3"/>
  </svg>
);

const BloomThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <rect width="320" height="200" fill="#fdf8f5"/>
    <rect width="320" height="32" fill="#fdf8f5"/>
    <rect x="0" y="32" width="320" height="0.5" fill="#e8ddd6"/>
    <rect x="120" y="10" width="80" height="12" rx="2" fill="#5c3d2e" opacity="0.7"/>
    <rect x="210" y="12" width="28" height="8" rx="2" fill="#8c6a58" opacity="0.4"/>
    <rect x="245" y="12" width="32" height="8" rx="2" fill="#8c6a58" opacity="0.4"/>
    <rect x="284" y="12" width="24" height="8" rx="2" fill="#8c6a58" opacity="0.4"/>
    <rect x="0" y="33" width="150" height="110" fill="#d4977a"/>
    <circle cx="140" cy="50" r="35" fill="white" opacity="0.12"/>
    <circle cx="30" cy="120" r="25" fill="white" opacity="0.08"/>
    <rect x="162" y="50" width="16" height="6" rx="1" fill="#b8715a"/>
    <rect x="162" y="62" width="130" height="12" rx="2" fill="#3d2319" opacity="0.85"/>
    <rect x="162" y="78" width="140" height="8" rx="2" fill="#7a5a4a" opacity="0.5"/>
    <rect x="162" y="90" width="120" height="8" rx="2" fill="#7a5a4a" opacity="0.4"/>
    <rect x="162" y="108" width="64" height="22" rx="2" fill="#5c3d2e"/>
    <rect x="0" y="143" width="320" height="0.5" fill="#e8ddd6"/>
    <rect x="8" y="151" width="94" height="44" rx="3" fill="#f9e4d4"/>
    <rect x="113" y="151" width="94" height="44" rx="3" fill="#d4e8d4"/>
    <rect x="218" y="151" width="94" height="44" rx="3" fill="#d4d4e8"/>
    <rect x="8" y="166" width="50" height="6" rx="1" fill="#3d2319" opacity="0.5"/>
    <rect x="8" y="176" width="36" height="5" rx="1" fill="#b8715a" opacity="0.6"/>
    <rect x="113" y="166" width="50" height="6" rx="1" fill="#3d2319" opacity="0.5"/>
    <rect x="113" y="176" width="36" height="5" rx="1" fill="#b8715a" opacity="0.6"/>
    <rect x="218" y="166" width="60" height="6" rx="1" fill="#3d2319" opacity="0.5"/>
    <rect x="218" y="176" width="36" height="5" rx="1" fill="#b8715a" opacity="0.6"/>
  </svg>
);

const EmberThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <defs>
      <radialGradient id="eg" cx="70%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#d4a853" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#d4a853" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="320" height="200" fill="#0f0d0b"/>
    <rect width="320" height="32" fill="#0f0d0b"/>
    <rect x="0" y="32" width="320" height="0.5" fill="white" opacity="0.08"/>
    <rect x="12" y="11" width="72" height="10" rx="2" fill="#d4a853" opacity="0.85"/>
    <rect x="170" y="12" width="30" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="208" y="12" width="44" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="260" y="12" width="28" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="254" y="9" width="58" height="14" rx="2" fill="#d4a853"/>
    <rect x="0" y="33" width="320" height="110" fill="#1a1209"/>
    <rect x="0" y="33" width="320" height="110" fill="url(#eg)"/>
    <rect x="12" y="46" width="100" height="7" rx="1" fill="#d4a853" opacity="0.6"/>
    <rect x="12" y="58" width="160" height="14" rx="2" fill="white" opacity="0.88"/>
    <rect x="12" y="76" width="180" height="8" rx="2" fill="white" opacity="0.4"/>
    <rect x="12" y="88" width="150" height="8" rx="2" fill="white" opacity="0.3"/>
    <rect x="12" y="104" width="70" height="22" rx="2" fill="#d4a853"/>
    <rect x="90" y="104" width="66" height="22" rx="2" fill="none" stroke="#d4a853" strokeWidth="0.5" opacity="0.5"/>
    <rect x="0" y="143" width="320" height="0.5" fill="white" opacity="0.07"/>
    <rect x="80" y="143" width="0.5" height="57" fill="white" opacity="0.07"/>
    <rect x="160" y="143" width="0.5" height="57" fill="white" opacity="0.07"/>
    <rect x="240" y="143" width="0.5" height="57" fill="white" opacity="0.07"/>
    {[10,90,170,250].map((x, i) => (
      <g key={x}>
        <rect x={x} y={152} width={40} height={5} rx="1" fill="#d4a853" opacity="0.6"/>
        <rect x={x} y={161} width={64} height={7} rx="1" fill="white" opacity="0.6"/>
        <rect x={x} y={172} width={56} height={5} rx="1" fill="white" opacity="0.25"/>
        <rect x={x} y={181} width={24} height={5} rx="1" fill="#d4a853" opacity="0.5"/>
      </g>
    ))}
  </svg>
);

const KestrelThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <rect width="320" height="200" fill="#f4f7f9"/>
    <rect width="320" height="34" fill="white"/>
    <rect x="0" y="34" width="320" height="0.5" fill="#e2eaf0"/>
    <rect x="12" y="11" width="14" height="12" rx="2" fill="#0d5c8a"/>
    <rect x="30" y="13" width="60" height="8" rx="2" fill="#0d2d42" opacity="0.7"/>
    <rect x="190" y="13" width="24" height="8" rx="2" fill="#5a7a90" opacity="0.5"/>
    <rect x="222" y="13" width="24" height="8" rx="2" fill="#5a7a90" opacity="0.5"/>
    <rect x="254" y="13" width="26" height="8" rx="2" fill="#5a7a90" opacity="0.5"/>
    <rect x="286" y="10" width="24" height="14" rx="3" fill="#0d5c8a"/>
    <rect x="0" y="35" width="320" height="70" fill="white"/>
    <rect x="0" y="105" width="320" height="0.5" fill="#e2eaf0"/>
    <rect x="12" y="46" width="130" height="10" rx="2" fill="#0d2d42" opacity="0.75"/>
    <rect x="12" y="62" width="230" height="24" rx="4" fill="#f4f7f9" stroke="#c8dae5" strokeWidth="0.5"/>
    <rect x="248" y="62" width="58" height="24" rx="4" fill="#0d5c8a"/>
    <rect x="12" y="92" width="42" height="10" rx="10" fill="#e8f0f5"/>
    <rect x="60" y="92" width="36" height="10" rx="10" fill="#e8f0f5"/>
    <rect x="102" y="92" width="60" height="10" rx="10" fill="#e8f0f5"/>
    <rect x="168" y="92" width="66" height="10" rx="10" fill="#e8f0f5"/>
    <rect x="8" y="112" width="96" height="82" rx="5" fill="white" stroke="#e2eaf0" strokeWidth="0.5"/>
    <rect x="8" y="112" width="96" height="44" rx="5" fill="#c8dae5"/>
    <rect x="8" y="150" width="96" height="6" rx="1" fill="white"/>
    <rect x="14" y="162" width="60" height="8" rx="1" fill="#0d2d42" opacity="0.7"/>
    <rect x="14" y="174" width="80" height="6" rx="1" fill="#5a7a90" opacity="0.5"/>
    <rect x="14" y="184" width="70" height="5" rx="1" fill="#7a96a8" opacity="0.4"/>
    <rect x="112" y="112" width="96" height="82" rx="5" fill="white" stroke="#e2eaf0" strokeWidth="0.5"/>
    <rect x="112" y="112" width="96" height="44" rx="5" fill="#c8d5e5"/>
    <rect x="112" y="150" width="96" height="6" rx="1" fill="white"/>
    <rect x="118" y="162" width="60" height="8" rx="1" fill="#0d2d42" opacity="0.7"/>
    <rect x="118" y="174" width="80" height="6" rx="1" fill="#5a7a90" opacity="0.5"/>
    <rect x="118" y="184" width="70" height="5" rx="1" fill="#7a96a8" opacity="0.4"/>
    <rect x="216" y="112" width="96" height="82" rx="5" fill="white" stroke="#e2eaf0" strokeWidth="0.5"/>
    <rect x="216" y="112" width="96" height="44" rx="5" fill="#d5c8e5"/>
    <rect x="216" y="150" width="96" height="6" rx="1" fill="white"/>
    <rect x="222" y="162" width="60" height="8" rx="1" fill="#0d2d42" opacity="0.7"/>
    <rect x="222" y="174" width="80" height="6" rx="1" fill="#5a7a90" opacity="0.5"/>
    <rect x="222" y="184" width="70" height="5" rx="1" fill="#7a96a8" opacity="0.4"/>
  </svg>
);

const SynkThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <rect width="320" height="200" fill="#0d0f14"/>
    <rect width="320" height="32" fill="#0d0f14"/>
    <rect x="0" y="32" width="320" height="0.5" fill="white" opacity="0.06"/>
    <rect x="12" y="11" width="12" height="12" rx="3" fill="#6366f1"/>
    <rect x="28" y="13" width="30" height="8" rx="2" fill="white" opacity="0.7"/>
    <rect x="110" y="13" width="36" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="154" y="13" width="30" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="192" y="13" width="24" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="224" y="13" width="24" height="8" rx="2" fill="white" opacity="0.2"/>
    <rect x="272" y="9" width="38" height="14" rx="4" fill="#6366f1"/>
    <rect x="80" y="44" width="160" height="10" rx="10" fill="#6366f1" opacity="0.2"/>
    <rect x="85" y="46" width="150" height="6" rx="3" fill="#818cf8" opacity="0.6"/>
    <rect x="40" y="62" width="240" height="14" rx="2" fill="white" opacity="0.85"/>
    <rect x="60" y="80" width="200" height="8" rx="2" fill="white" opacity="0.4"/>
    <rect x="80" y="92" width="160" height="8" rx="2" fill="white" opacity="0.3"/>
    <rect x="96" y="108" width="56" height="20" rx="4" fill="#6366f1"/>
    <rect x="160" y="108" width="64" height="20" rx="4" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
    <rect x="16" y="138" width="288" height="56" rx="6" fill="#161820"/>
    <rect x="24" y="146" width="62" height="40" rx="4" fill="#1e2130"/>
    <rect x="94" y="146" width="62" height="40" rx="4" fill="#1e2130"/>
    <rect x="164" y="146" width="62" height="40" rx="4" fill="#1e2130"/>
    <rect x="234" y="146" width="62" height="40" rx="4" fill="#1e2130"/>
    {[24, 94, 164, 234].map((x, i) => (
      <g key={x}>
        <rect x={x + 6} y={150} width={50} height={5} rx="1" fill="white" opacity="0.15"/>
        <rect x={x + 6} y={160} width={[30, 38, 24, 34][i]} height={9} rx="1" fill="white" opacity="0.7"/>
        <rect x={x + 6} y={173} width={28} height={5} rx="1" fill={i === 2 ? '#f87171' : '#34d399'} opacity="0.6"/>
      </g>
    ))}
  </svg>
);

const ParkThumb = () => (
  <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" className={styles.thumb}>
    <rect width="320" height="200" fill="#fafaf8"/>
    <rect x="12" y="11" width="90" height="10" rx="2" fill="#2c2c28" opacity="0.7"/>
    <rect x="190" y="13" width="30" height="7" rx="2" fill="#8a8a7a" opacity="0.4"/>
    <rect x="228" y="13" width="36" height="7" rx="2" fill="#8a8a7a" opacity="0.4"/>
    <rect x="272" y="13" width="38" height="7" rx="2" fill="#8a8a7a" opacity="0.4"/>
    <rect x="0" y="30" width="320" height="0.5" fill="#e8e8e0"/>
    <rect x="160" y="30" width="0.5" height="131" fill="#e8e8e0"/>
    <rect x="12" y="42" width="100" height="6" rx="1" fill="#8a8a7a" opacity="0.5"/>
    <rect x="12" y="55" width="140" height="12" rx="2" fill="#1c1c18" opacity="0.8"/>
    <rect x="12" y="71" width="130" height="12" rx="2" fill="#1c1c18" opacity="0.7"/>
    <rect x="12" y="90" width="140" height="7" rx="1" fill="#6a6a5a" opacity="0.45"/>
    <rect x="12" y="101" width="120" height="7" rx="1" fill="#6a6a5a" opacity="0.35"/>
    <rect x="12" y="116" width="48" height="12" rx="2" fill="#f0f0e8"/>
    <rect x="66" y="116" width="58" height="12" rx="2" fill="#f0f0e8"/>
    <rect x="130" y="116" width="22" height="12" rx="2" fill="#f0f0e8"/>
    <rect x="12" y="136" width="82" height="22" rx="2" fill="#2c2c28"/>
    <rect x="160" y="30" width="160" height="131" fill="#e8e8de"/>
    <ellipse cx="240" cy="161" rx="52" ry="60" fill="#a8a89a"/>
    <rect x="0" y="161" width="320" height="0.5" fill="#e8e8e0"/>
    <rect x="107" y="161" width="0.5" height="39" fill="#e8e8e0"/>
    <rect x="214" y="161" width="0.5" height="39" fill="#e8e8e0"/>
    {[10, 117, 224].map((x) => (
      <g key={x}>
        <rect x={x} y={169} width={44} height={5} rx="1" fill="#8a8a7a" opacity="0.4"/>
        <rect x={x} y={178} width={88} height={6} rx="1" fill="#2c2c28" opacity="0.6"/>
        <rect x={x} y={188} width={24} height={5} rx="1" fill="#a8a89a" opacity="0.5"/>
      </g>
    ))}
  </svg>
);

/* ─────────────────────────────────────────
   Projects array
───────────────────────────────────────── */
const projects = [
  {
    id: 'apex',
    title: 'Apex Plumbing Co.',
    description: 'Local service business — full site + booking form',
    tag: 'Local Service',
    thumb: ApexThumb,
    span: 2,
    component: ApexPlumbing,
  },
  {
    id: 'bloom',
    title: 'Bloom Studio',
    description: 'Floral shop with online ordering',
    tag: 'E-Commerce',
    thumb: BloomThumb,
    span: 1,
    component: BloomStudio,
  },
  {
    id: 'park',
    title: 'Dr. Elaine Park',
    description: 'Consultant portfolio + speaking page',
    tag: 'Portfolio',
    thumb: ParkThumb,
    span: 1,
    component: DrElainePark,
  },
  {
    id: 'ember',
    title: 'Ember & Oak',
    description: 'Restaurant with menu + reservations',
    tag: 'Restaurant',
    thumb: EmberThumb,
    span: 2,
    component: EmberAndOak,
  },
  {
    id: 'kestrel',
    title: 'Kestrel Realty',
    description: 'Real estate lead capture page',
    tag: 'Real Estate',
    thumb: KestrelThumb,
    span: 1,
    component: KestrelRealty,
  },
  {
    id: 'synk',
    title: 'Synk Analytics',
    description: 'Marketing site for B2B SaaS startup',
    tag: 'SaaS',
    thumb: SynkThumb,
    span: 1,
    component: SynkAnalytics,
  },
];

/* ─────────────────────────────────────────
   Modal
───────────────────────────────────────── */
function Modal({ project, onClose }) {
  const Preview = project.component;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <div className={styles.modalTitle}>{project.title}</div>
            <div className={styles.modalDesc}>{project.description}</div>
          </div>
          <button className={styles.modalClose} onClick={onClose}>✕</button>
        </div>
        <div className={styles.modalBody}>
          <Preview />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Gallery page
───────────────────────────────────────── */
export default function Gallery({ onNavigate }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={`section ${styles.headerSection}`}>
        <div className="section-label">// work</div>
        <h2>Projects &amp;<br />case studies.</h2>
        <p className={styles.sub}>
          A selection of recent builds — from local service businesses to
          professional portfolios. Click any card to preview.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => {
          const Thumb = p.thumb;
          return (
            <div
              key={p.id}
              className={`${styles.item} ${p.span === 2 ? styles.span2 : ''}`}
              onClick={() => setActiveProject(p)}
            >
              <div className={styles.thumbWrap}>
                <Thumb />
              </div>

              {/* hover overlay */}
              <div className={styles.overlay}>
                <div className={styles.overlayInner}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={styles.overlayIcon}>
                    <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 11h6M11 8l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Preview site</span>
                </div>
              </div>

              {/* bottom info bar */}
              <div className={styles.infoBar}>
                <div className={styles.infoLeft}>
                  <div className={styles.infoTitle}>{p.title}</div>
                  <div className={styles.infoDesc}>{p.description}</div>
                </div>
                <span className={styles.tag}>{p.tag}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.cta}>
        <p>
          Want to see more?{' '}
          <a onClick={() => onNavigate('contact')}>Get in touch →</a>
        </p>
      </div>

      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
