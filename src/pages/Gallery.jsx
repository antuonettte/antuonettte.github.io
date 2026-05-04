import React, { useState } from 'react';
import styles from './Gallery.module.css';

import ApexPlumbing   from '../snippets/ApexPlumbing';
import BloomStudio    from '../snippets/BloomStudio';
import EmberAndOak    from '../snippets/EmberAndOak';
import KestrelRealty  from '../snippets/KestrelRealty';
import SynkAnalytics  from '../snippets/SynkAnalytics';
import DrElainePark   from '../snippets/DrElainePark';

// ── Update this array to add / reorder projects ──
const projects = [
  {
    id: 'apex',
    title: 'Apex Plumbing Co.',
    description: 'Local service business — full site + booking form',
    tag: 'Local Service',
    colorClass: 'g1',
    span: 2,
    component: ApexPlumbing,
  },
  {
    id: 'bloom',
    title: 'Bloom Studio',
    description: 'Floral shop with online ordering',
    tag: 'E-Commerce',
    colorClass: 'g2',
    span: 1,
    component: BloomStudio,
  },
  {
    id: 'park',
    title: 'Dr. Elaine Park',
    description: 'Consultant portfolio + speaking page',
    tag: 'Portfolio',
    colorClass: 'g3',
    span: 1,
    component: DrElainePark,
  },
  {
    id: 'ember',
    title: 'Ember & Oak',
    description: 'Restaurant with menu + reservations',
    tag: 'Restaurant',
    colorClass: 'g4',
    span: 2,
    component: EmberAndOak,
  },
  {
    id: 'kestrel',
    title: 'Kestrel Realty',
    description: 'Real estate lead capture page',
    tag: 'Real Estate',
    colorClass: 'g5',
    span: 1,
    component: KestrelRealty,
  },
  {
    id: 'synk',
    title: 'Synk Analytics',
    description: 'Marketing site for B2B SaaS startup',
    tag: 'SaaS',
    colorClass: 'g6',
    span: 1,
    component: SynkAnalytics,
  },
];

function Modal({ project, onClose }) {
  const Preview = project.component;

  // Close on backdrop click
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

export default function Gallery({ onNavigate }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={`section ${styles.headerSection}`}>
        <div className="section-label">// work</div>
        <h2>
          Projects &amp;<br />
          case studies.
        </h2>
        <p className={styles.sub}>
          A selection of recent builds — from local service businesses to
          professional portfolios. Click any card to preview.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {projects.map((p) => (
          <div
            key={p.id}
            className={`${styles.item} ${styles[p.colorClass]} ${
              p.span === 2 ? styles.span2 : ''
            }`}
            onClick={() => setActiveProject(p)}
          >
            <div className={styles.bg} />
            <span className={styles.tag}>{p.tag}</span>
            <div className={styles.previewHint}>Click to preview</div>
            <div className={styles.info}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className={styles.cta}>
        <p>
          Want to see more?{' '}
          <a onClick={() => onNavigate('contact')}>Get in touch →</a>
        </p>
      </div>

      {/* Modal */}
      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}
