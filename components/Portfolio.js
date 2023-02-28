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

export default function Portfolio() {
  return (
    <section className="portfolio">
        <div className="container">
            <section className="skills">
                <h2 className="title">Skills</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section className="projects">
                <h2 className="title">Projects</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div>
    </section>
  )
}
