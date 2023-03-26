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
import ProjectCard from './ProjectCard';
import restaurantProject from '../public/restaurant.webp';
import linkGeneratorApp from '../public/link-generator-app.webp';

export default function Portfolio() {
  return (
    <section className={`container ${styles.portfolio}`}>
        <div className={`${styles.section__container}`}>
            <section className="skills">
                <h2 className={styles.title}>My Skills</h2>
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
                <h2 className={styles.title}>Recent Work</h2>
                    {/* <ul className={styles.project__list}>
                        <li className={styles.project__item}><ProjectCard image={restaurantProject} live={'https://incredible-medovik-5ae8d9.netlify.app/'} code={'https://github.com/John-Monk/restaurant-landing'}/></li>
                        <li className={styles.project__item}><ProjectCard image={linkGeneratorApp} live={'https://main--deft-dasik-802c2c.netlify.app/'} code={'https://github.com/John-Monk/link-page-generator'}/></li>
                        <li className={styles.project__item}><Image /></li>
                        <li className={styles.project__item}><Image /></li>
                    </ul> */}
            </section>
        </div>
    </section>
  )
}
