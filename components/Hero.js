import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css';
import headshot from '../public/headshot.jpg';
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai';

export default function Hero() {
  return (
    <section className="hero">
        <div className="container">
            <h1>Hi, I'm John</h1>
            <p className="blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus laudantium assumenda voluptatem? Magni error iure reiciendis sed exercitationem nulla, fugiat possimus porro ex sint!</p>
                <ul className="social__media">
                    <li><a className='icon' href="#"><AiFillLinkedin /></a></li>
                    <li><a className='icon' href="#"><AiFillGithub /></a></li>
                    <li><a className='icon' href="#"><AiOutlineTwitter /></a></li>
                </ul>
                <div className="headshot">
                    <Image src={headshot}/>
                </div>
        </div>
    </section>
  )
}
