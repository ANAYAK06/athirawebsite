import React from 'react'
import './About.css'
import {SiBookstack} from 'react-icons/si'
import {FaUsers} from 'react-icons/fa'
import {FaPenNib} from 'react-icons/fa'
import ME from '../../assets/abt2.JPG'

function About() {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="">
            <img src={ME} alt="" className='about_me-image' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about-card'>
            <SiBookstack className='about_icon ' />
              <h5> Books Published</h5>
              
              <small> 5+ Books</small>
              
            </article>
            <article className='about-card'>
            <FaUsers className='about_icon ' />
              <h5>Clients</h5>
              
              <small> 200+ World wide </small>
              
            </article>
            <article className='about-card'>
            <FaPenNib className='about_icon ' />
              <h5>Content Writing</h5>
              
              <small> 5 + Years</small>
              
            </article>

          </div>
          <p>
          Athira V K, hailing from Pattambi, Palakkad district did her Under Graduation and Post Graduation in English Language and Literature from two educational institutions that comes under Calicut University. She has been penning down in various social media platforms for more than few years now and has to her credit varoous accounts in yourquote, blogspot, wordpress, Instagram, facebook and other online publishing site. She has written five books that got published from Notionpress publications and educreations as well. Dreaming to accomplish her career in writing, She is currently working as a content writer at Matglobers

          </p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About