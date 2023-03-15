import React from 'react'
import styles from './Contact.module.css';
import {AiOutlineMail} from 'react-icons/ai';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formSubmit = (e) => {
        // e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };


  return (
    <section className={`container ${styles.contact}`}>
        <h2 className={styles.title}>Get in touch</h2>
        <div className={styles.contact__container}>
                <form className={styles.form} name="contact" method="POST" action="#contact" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input onChange={(e) => setName(e.target.value)} className={styles.input} id='name' type="text" value={name}/>
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="email">E-Mail</label>
                            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id='email' type="text" value={email}/>
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} className={`${styles.input} ${styles.message__input}`} rows='3' id='message' type='text' value={message}/>
                        </li>
                    </ul>
                    <button className={styles.button}>Submit</button>
                </form>
            <a className={styles.email} href="mailto:johntmonk1@gmail.com"><AiOutlineMail />johntmonk1@gmail.com</a>
        </div>
    </section>
  )
}
