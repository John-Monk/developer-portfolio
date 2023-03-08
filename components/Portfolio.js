import React from 'react'
import styles from './Portfolio.module.css';
import css from '../public/css.svg';
import express from '../public/express.svg';
import git from '../public/git.svg';
import html from '../public/html.svg';
import javascript from '../public/javascript.svg';
import mongodb from '../public/mongodb.svg';
import nextjs from '../public/nextjs.svg';
import nodejs from '../public/nodejs.svg';
import sass from '../public/sass.svg';
import reactjs from '../public/reactjs.svg';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <section className="portfolio">
        <div className={`container ${styles.section__container}`}>
            <section className="skills">
                <h2 className={styles.title}>Skills</h2>
                    <ul className={styles.skill__list}>
                        <li className={styles.skill__item}><Image className={styles.skill} src={html} alt='HTML logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={css} alt='CSS logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={javascript} alt='JavaScript logo' /></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={git} alt='GIT logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={sass} alt='SASS logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={reactjs} alt='Reactjs logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={nextjs} alt='Nextjs logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={express} alt='Express logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={nodejs} alt='Nodejs logo'/></li>
                        <li className={styles.skill__item}><Image className={styles.skill} src={mongodb} alt='MongoDB logo'/></li>
                    </ul>
            </section>
            <section className="projects">
                <h2 className={styles.title}>Projects</h2>
                    <ul className={styles.project__list}>
                        <li className={styles.project__item}><Image /></li>
                        <li className={styles.project__item}><Image /></li>
                        <li className={styles.project__item}><Image /></li>
                    </ul>
            </section>
        </div>
    </section>
  )
}
