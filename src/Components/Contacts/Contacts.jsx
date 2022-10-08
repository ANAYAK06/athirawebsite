import React from 'react'
import './Contacts.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contacts() {
    const form = useRef();
  const sendEmail = (e)=> {
    e.preventDefault();
    
    emailjs.sendForm('service_ut9n93h', 'template_bunryvn', form.current, 'EOHq_MFlfcVPWYSAJ')
    e.target.reset()
    
  }
 
  return (
    <section id='contacts'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineMailOutline className='contact_option-icon' />
              <h4>Email</h4>
              <h5>athiraammu9295@gmail.com</h5>
              <a href="mailto:athiraammu@gmail.com" target="_blank" rel="noreferrer">Send Message</a>

            </article>
            <article className="contact_option">
            <RiMessengerLine  className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Athira</h5>
              <a href="https://m.me/athiravk" target="_blank" rel="noreferrer">Send Message</a>

            </article>
            <article className="contact_option">
              <BsWhatsapp className='contact_option-icon' />
              <h4>WhatsApp</h4>
              <h5>+91 9400-318-326</h5>
              <a href="https://api.whatsapp.com/send?phone=919400318326" target="_blank" rel="noreferrer">Send Message</a>

            </article>
          </div>
          {/* end contacts option*/}
          <form ref={form} onSubmit = {sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>

          </form>
        </div>



    </section>
  )
}

export default Contacts