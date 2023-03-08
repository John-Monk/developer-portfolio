import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css';
import headshot from '../public/headshot.jpg';
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai';

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm John</h1>
            <p className={styles.blurb}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Odit ducimus laudantium assumenda voluptatem?</p>
                <ul className={styles.social__media}>
                    <li><a className={styles.icon} href="#"><AiFillLinkedin /></a></li>
                    <li><a className={styles.icon} href="#"><AiFillGithub /></a></li>
                    <li><a className={styles.icon} href="#"><AiOutlineTwitter /></a></li>
                </ul>
            </div>
            <div className={styles.headshot__container}>
                <Image className={styles.headshot} src={headshot}/>
            </div>
    </section>
  )
}
