import React from 'react'
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={`container ${styles.contact}`}>
        <h2 className={styles.title}>Get in touch</h2>
        <div className={styles.contact__container}>
                <form className={styles.form} action="">
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input className={styles.input} id='name' type="text" />
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="email">E-Mail</label>
                            <input className={styles.input} id='email' type="text" />
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea className={`${styles.input} ${styles.message__input}`} rows='3' id='message' type='text' />
                        </li>
                    </ul>
                    <button className={styles.button}>Submit</button>
                </form>
            <a className={styles.email} href="#">johntmonk1@gmail.com</a>
        </div>
    </section>
  )
}
