import React from 'react';
import styles from './Carousel.module.css';
import Project from './Project';
import linkGenerator from '../public/link-generator-app.webp';
import restaurant from '../public/restaurant.webp';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import { BsArrowLeftSquareFill as LeftArrow, BsArrowRightSquareFill as RightArrow, BsPauseCircle as Pause, BsPlayCircle as Play} from 'react-icons/bs';
import Image from 'next/image';

import { useState, useEffect } from 'react';

const projectData = [
  {
    title: 'Link Page Generator Web App',
    // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet provident perspiciatis voluptates suscipit, aspernatur fuga voluptas?',
    live: 'https://main--deft-dasik-802c2c.netlify.app/',
    code: 'https://github.com/John-Monk/link-page-generator',
    image: linkGenerator,
  },
  {
    title: 'Restaurant Landing Page',
    // description: 'This is a link generator I made',
    live: 'https://incredible-medovik-5ae8d9.netlify.app/',
    code: 'https://github.com/John-Monk/restaurant-landing',
    image: restaurant,
  },
];

export default function Carousel() {
  return (
    <div>Carousel</div>
  )
}
