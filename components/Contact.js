import React from 'react'
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className="contact">
        <h2 className="title">Get in touch</h2>
        <div className="contact__container">
            <form action="">
                <ul>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" />
                    </li>
                    <li>
                        <label htmlFor="email">E-Mail</label>
                        <input id='email' type="text" />
                    </li>
                    <li>
                        <label htmlFor="message">Message</label>
                        <input id='message' type="text" />
                    </li>
                </ul>
                <button>Submit</button>
            </form>
            <a href="#">johntmonk1@gmail.com</a>
        </div>
    </section>
  )
}
