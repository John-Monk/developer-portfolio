import React from "react"
import styles from "./Contact.module.css";
import {AiOutlineMail} from "react-icons/ai";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submitterName, setSubmitterName] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    console.log(submitSuccess)

    useEffect(() => {
      let timeout;

      timeout = setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }, [submitSuccess]);

    const handleSubmit = (e) => {
      e.preventDefault();

      const contactForm = e.target;
      const formData = new FormData(contactForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setSubmitSuccess(true);
          setSubmitterName(name);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => alert('Something went wrong.'));
    };


  return (
    <section className={`container ${styles.contact}`}>
        <h2 className={styles.title}>Get in touch</h2>
        <div className={styles.contact__container}>
                <p className={`${styles.submission__response} ${submitSuccess ? styles.submission__response__active : ''}`}>Thanks for reaching out{submitterName.split(' ')[0].length < 10 ? `, ${submitterName.split(' ')[0]}` : ''}! I'll get back with you shortly.</p>
                <form className={styles.form} onSubmit={handleSubmit} name="contact" method="POST" action="#contact" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <ul className={styles.list}>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input onChange={(e) => setName(e.target.value)} className={styles.input} id="name" name="name" type="text" value={name} required/>
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="email">E-Mail</label>
                            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} id="email" name="email" type="text" value={email} required/>
                        </li>
                        <li className={styles.list__item}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} className={`${styles.input} ${styles.message__input}`} name="message" rows="3" id="message" type="text" value={message} required/>
                        </li>
                    </ul>
                    <Button>Submit</Button>
                </form>
            <a className={styles.email} href="mailto:johnmonkdev@gmail.com"><AiOutlineMail />johnmonkdev@gmail.com</a>
        </div>
    </section>
  )
}
