import React, { useState } from 'react'
import '../css/contact.css'
import {CgPhone} from 'react-icons/cg'
import {SiMinutemailer} from 'react-icons/si'
import {MdMyLocation} from 'react-icons/md'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'


const Contact = () => {

  const [message, setMessage] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_18lhzen', 'template_kjnsf2g', e.target, 'yJGlixgZ5bG6Dq89q')
      .then((res) => {
        console.log(res.status);
        setMessage(true)
      }, (err) => {
        console.log(err)
      })

      e.target.reset();
  }

  return (
    <section className="contact" id='contact-section'>
        <section className="sec-1">
            <h2>Send Message</h2>
            {message  && <span className="msg">Message Sent Successfully.<br/>Check Your Email.</span>}
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name='name'/><br/>
                <input type="text" placeholder="Email Address" name='email'/><br/>
                <textarea cols={20} rows={10} placeholder='Message' name='message'/><br/>
                <button>Send</button>
            </form>
        </section>
        <section className="sec-2">
          <ul className="contact-info">
            <li><CgPhone/> <span>+92 304-6578361</span></li>
            <li><SiMinutemailer/> <span>solutionz.hits@gmail.com</span></li>
            <li><MdMyLocation/> <span>Ali town, Faisalabad, Punjab, Pakistan.</span></li>
          </ul>
        </section>
        <section className="sec-3">
        <h3>Useful Links</h3>
        <ul className="useful-links">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Portfolio</Link></li>
          <li><Link to="#">Projects</Link></li>
        </ul>
        </section>
    </section>
  )
}

export default Contact