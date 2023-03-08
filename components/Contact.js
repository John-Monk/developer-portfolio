import React from 'react'
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
        <div className="container">
            <h2 className="title">Get in touch</h2>
            <div className={styles.contact__container}>
                <form className={styles.form} action="">
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input className={styles.input} id='name' type="text" />
                        </li>
                        <li>
                            <label className={styles.label} htmlFor="email">E-Mail</label>
                            <input className={styles.input} id='email' type="text" />
                        </li>
                        <li>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <input className={styles.input} id='message' type="text" />
                        </li>
                    </ul>
                    <button className={styles.button}>Submit</button>
                </form>
                <a className={styles.email} href="#">johntmonk1@gmail.com</a>
            </div>
        </div>
    </section>
  )
}
