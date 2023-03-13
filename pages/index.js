import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('');
  const [pageLoad, setPageLoad] = useState(false);
  const [navLoad, setNavLoad] = useState(false);

  console.log(currentSection)
    
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(heroRef.current);
    observer.observe(portfolioRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.unobserve(heroRef.current);
      observer.unobserve(portfolioRef.current);
      observer.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    let timeout1, timeout2
    // timeout1 = setTimeout(() => {
    //   setPageLoad(true);
    //   setNavLoad(true);
    // });

    setPageLoad(true);
    setNavLoad(true);

    timeout2 = setTimeout(() => {
      setNavLoad(false);
    }, 2000)

    return () => {
      // clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <>
      <Head>
        <title>johnmonk.dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
              <a className={`${styles.logo} ${pageLoad ? styles.logo__load : ''}`} href="https://johnmonk.dev/">johnmonk.dev</a>
              <Nav currentSection={currentSection} pageLoad={pageLoad} navLoad={navLoad}/>
            </div>
        </header>
        <div id='hero' ref={heroRef}><Hero pageLoad={pageLoad}/></div>
        <div id='portfolio' ref={portfolioRef}><Portfolio /></div>
        <div id='contact' ref={contactRef}><Contact /></div>
    </>
  )
}
