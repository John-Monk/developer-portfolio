import React from 'react';
import styles from './Carousel.module.css';
import Project from './Project';
import linkGenerator from '../public/link-generator-app.webp';
import restaurant from '../public/restaurant.webp';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftSquareFill as LeftArrow, BsArrowRightSquareFill as RightArrow, BsPauseCircle as Pause, BsPlayCircle as Play} from 'react-icons/bs';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import Image from 'next/image';

import { useState, useEffect } from 'react';

const projectData = [
  {
    title: 'Link Page Generator',
    description: 'A user friendly web app for generating HTML and CSS markup for self hosting link pages',
    live: 'https://main--deft-dasik-802c2c.netlify.app/',
    code: 'https://github.com/John-Monk/link-page-generator',
    image: linkGenerator,
  },
  {
    title: 'Restaurant Landing Page',
    description: 'Fully responsive restaurant landing page built with NextJS',
    live: 'https://incredible-medovik-5ae8d9.netlify.app/',
    code: 'https://github.com/John-Monk/restaurant-landing',
    image: restaurant,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState(projectData);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    if(!mouseOver){
      const intervalId = setInterval(() => {
        setCurrentIndex(prev =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
    }, 4000);
  
      return () => clearInterval(intervalId);
    }
  }, [projects.length, mouseOver]);

  const back = () => {
    setCurrentIndex((prev) => prev === 0 ? projectData.length - 1 : prev - 1);
  };

  const forward = () => {
    setCurrentIndex((prev) => prev === projectData.length - 1 ? 0 : prev + 1);
  };

  const handleMouseEnter = () => {
    setMouseOver(true)
  }

  const handleMouseLeave = () => {
    setMouseOver(false)
  }

  return (
    <section 
      className={styles.container}     
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className={styles.button__container}>
        <button onClick={back} className={styles.button}>
          {/* <LeftArrow /> */}
          <IoIosArrowBack />
        </button>
        <button onClick={forward} className={styles.button}>
          {/* <RightArrow /> */}
          <IoIosArrowForward />
        </button>
        {mouseOver && <Pause className={styles.mouseover__status}/> }
      </div>
      <div className={styles.project__container}>
        {projects.map(({ title, description, live, code, image }, index) => {
          return (
              <div className={`${styles.project} ${index === currentIndex ? styles.current : ''}`}
              >
                <Project 
                  title={title} 
                  description={description}
                  live={live}
                  code={code}
                  image={image} />
              </div>
          );
        })}
      </div>
    </section>
  );
}
