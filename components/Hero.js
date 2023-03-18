import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css';
import headshot from '../public/headshot.jpg';
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai';

export default function Hero({pageLoad}) {
  return (
    <section className={`container ${styles.hero} ${pageLoad ? styles.hero__active : ''}`}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm John</h1>
            <p className={styles.blurb}>
            I'm a full-stack software engineer ready to turn your ideas into code. 
            Whether it's a static site for your business or a full stack web app for your next big idea, I'm ready to help make it a reality.
            </p>
                <ul className={styles.social__media__list}>
                    <li className={styles.list__item}><a className={styles.icon} target="_blank" href="https://www.linkedin.com/in/john-monk/"><AiFillLinkedin /></a></li>
                    <li className={styles.list__item}><a className={styles.icon} target="_blank" href="https://github.com/John-Monk"><AiFillGithub /></a></li>
                    <li className={styles.list__item}><a className={styles.icon} target="_blank" href="https://twitter.com/_JohnMonk"><AiOutlineTwitter /></a></li>
                </ul>
            </div>
            <div className="image">
              <div className={styles.headshot__container}>
                  <Image loading='eager' className={styles.headshot} src={headshot} alt='portrait of John Monk'/>
              </div>
            </div>
    </section>
  )
}
