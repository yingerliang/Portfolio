import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_9bh9ixp',
      'template_getr5gn',
      form.current,
      '9-UnW_YJ_7fWCNBI1',
    )

    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>beccaliang8@gmail.com</h5>
            <a
              href="mailto:beccaliang8@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaLinkedinIn className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Rebecca Liang</h5>
            <a
              href="https://www.linkedin.com/in/rebecca-l-626185130/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <input type="email" name="email" placeholder="Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
