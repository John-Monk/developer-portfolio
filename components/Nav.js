import React from 'react'
import styles from './Nav.module.css';

export default function Nav({currentSection}) {
  return (
    <nav className={styles.nav}>
          <ul className={styles.item__list}>
              <li className={`${styles.list__item} ${currentSection === 'hero' ? styles.active : ''}`}><a className={styles.item} href="#">Home</a></li>
              <li className={`${styles.list__item} ${currentSection === 'portfolio' ? styles.active : ''}`}><a className={styles.item} href="#portfolio">Portfolio</a></li>
              <li className={`${styles.list__item} ${currentSection === 'contact' ? styles.active : ''}`}><a className={styles.item} href="#contact">Contact</a></li>
          </ul>
    </nav>
  )
}
