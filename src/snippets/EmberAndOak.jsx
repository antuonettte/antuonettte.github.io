import React from 'react';
import styles from './EmberAndOak.module.css';

const menuItems = [
  {
    category: 'Starters',
    dish: 'Smoked Bone Marrow',
    desc: 'Herb gremolata, sourdough crostini',
    price: '$18',
  },
  {
    category: 'Mains',
    dish: 'Oak-Fired Ribeye',
    desc: '28-day dry-aged, chimichurri',
    price: '$68',
  },
  {
    category: 'Mains',
    dish: 'Halibut en Papillote',
    desc: 'Saffron beurre blanc, micro herbs',
    price: '$52',
  },
  {
    category: 'Desserts',
    dish: 'Burnt Honey Tart',
    desc: 'Lavender cream, candied walnut',
    price: '$16',
  },
];

export default function EmberAndOak() {
  return (
    <div className={styles.wrapper}>
      {/* Nav */}
      <div className={styles.nav}>
        <div className={styles.logo}>Ember &amp; Oak</div>
        <div className={styles.navRight}>
          {['Menu', 'Private Dining', 'About'].map((l) => (
            <span key={l}>{l}</span>
          ))}
          <div className={styles.reserveBtn}>Reserve a Table</div>
        </div>
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.heroContent}>
          <div className={styles.tag}>Wood-fired · Buckhead, Atlanta</div>
          <h3>Where fire meets<br />fine dining.</h3>
          <p>
            Modern American cuisine crafted around an open wood-fire hearth.
            A dining experience that lingers.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.btnGold}>Reserve Now</button>
            <button className={styles.btnGhost}>View Menu</button>
          </div>
        </div>
      </div>

      {/* Menu strip */}
      <div className={styles.menuStrip}>
        {menuItems.map((item) => (
          <div key={item.dish} className={styles.menuItem}>
            <div className={styles.menuCat}>{item.category}</div>
            <div className={styles.menuDish}>{item.dish}</div>
            <div className={styles.menuDesc}>{item.desc}</div>
            <div className={styles.menuPrice}>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
