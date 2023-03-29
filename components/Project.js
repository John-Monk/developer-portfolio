import React from 'react';
import styles from './Project.module.css';
import Image from 'next/image';

export default function Project({title, description, live, code, image}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{description}</p>
      <div className={styles.link__container}>
        <a className={styles.link} href={live} target='_blank'>Live</a>
        <a className={styles.link} href={code} target='_blank'>Code</a>
      </div>
      <Image className={styles.image} src={image} />
    </div>
  )
}
