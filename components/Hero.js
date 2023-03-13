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
            <p className={styles.blurb}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae, 
            obcaecati aliquam reiciendis provident non nam officiis quia, odit deleniti similique soluta, voluptatum accusantium iusto.</p>
                <ul className={styles.social__media}>
                    <li><a className={styles.icon} href="#"><AiFillLinkedin /></a></li>
                    <li><a className={styles.icon} href="#"><AiFillGithub /></a></li>
                    <li><a className={styles.icon} href="#"><AiOutlineTwitter /></a></li>
                </ul>
            </div>
            <div className="image">
              <div className={styles.headshot__container}>
                  <Image className={styles.headshot} src={headshot}/>
              </div>
            </div>
    </section>
  )
}
