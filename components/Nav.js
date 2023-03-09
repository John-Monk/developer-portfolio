import React from 'react'
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
          <ul className={styles.item__list}>
              <li className={styles.list__item}><a className={styles.item} href="#">Home</a></li>
              <li className={`${styles.list__item} ${styles.active}`}><a className={styles.item} href="#">Portfolio</a></li>
              <li className={styles.list__item}><a className={styles.item} href="#">Contact</a></li>
          </ul>
    </nav>
  )
}
