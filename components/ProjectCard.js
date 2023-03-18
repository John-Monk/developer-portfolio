import React from 'react';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

export default function ProjectCard({image, live, code}) {
  return (
    <section className={styles.section}>
        <Image src={image} className={styles.image}/>
        <div className={styles.links__container}>
            <a className={styles.link} target="_blank" href={live}>Live</a>
            <a className={styles.link} target="_blank" href={code}>Code</a>
        </div>
    </section>
  )
}
