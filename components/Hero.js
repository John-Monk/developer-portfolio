import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css';
import headshot from '../public/headshot.jpg';
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai';

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={`container ${styles.content}`}>
            <h1 className={styles.title}>Hi, I'm John</h1>
            <p className={styles.blurb}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus laudantium assumenda voluptatem? Magni error iure reiciendis sed exercitationem nulla, fugiat possimus porro ex sint!</p>
                <ul className={styles.social__media}>
                    <li><a className={styles.icon} href="#"><AiFillLinkedin size='30px' /></a></li>
                    <li><a className={styles.icon} href="#"><AiFillGithub size='30px' /></a></li>
                    <li><a className={styles.icon} href="#"><AiOutlineTwitter size='30px' /></a></li>
                </ul>
                <div className={styles.headshot__container}>
                    <Image className={styles.headshot} src={headshot}/>
                </div>
        </div>
    </section>
  )
}
