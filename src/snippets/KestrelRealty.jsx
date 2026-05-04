import React from 'react';
import styles from './KestrelRealty.module.css';

const listings = [
  {
    price: '$549,000',
    address: '412 Elmwood Dr, Decatur',
    beds: '3 bd',
    baths: '2 ba',
    sqft: '1,820 sqft',
    colorClass: 'kc1',
  },
  {
    price: '$679,000',
    address: '88 Ponce Highland Ave',
    beds: '4 bd',
    baths: '3 ba',
    sqft: '2,340 sqft',
    colorClass: 'kc2',
  },
  {
    price: '$428,000',
    address: '29 Grant Park Circle',
    beds: '2 bd',
    baths: '2 ba',
    sqft: '1,180 sqft',
    colorClass: 'kc3',
  },
];

const filters = ['For Sale', '2+ Beds', '$400k – $800k', 'Intown Atlanta'];

export default function KestrelRealty() {
  return (
    <div className={styles.wrapper}>
      {/* Nav */}
      <div className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoMark} />
          <div className={styles.logoText}>Kestrel Realty</div>
        </div>
        <div className={styles.navRight}>
          {['Buy', 'Sell', 'Agents'].map((l) => (
            <span key={l}>{l}</span>
          ))}
          <div className={styles.cta}>List Your Home</div>
        </div>
      </div>

      {/* Search */}
      <div className={styles.search}>
        <h3>Find your next home in Atlanta</h3>
        <div className={styles.searchBar}>
          <div className={styles.input}>
            Search by neighborhood, zip, or address...
          </div>
          <button className={styles.searchBtn}>Search</button>
        </div>
        <div className={styles.filters}>
          {filters.map((f) => (
            <div key={f} className={styles.filter}>{f}</div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className={styles.listings}>
        {listings.map((l) => (
          <div key={l.address} className={styles.card}>
            <div className={`${styles.cardImg} ${styles[l.colorClass]}`} />
            <div className={styles.cardBody}>
              <div className={styles.price}>{l.price}</div>
              <div className={styles.address}>{l.address}</div>
              <div className={styles.specs}>
                <span>{l.beds}</span>
                <span>{l.baths}</span>
                <span>{l.sqft}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
