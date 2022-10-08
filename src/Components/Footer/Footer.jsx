import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

function Footer() {
  return (
    <footer id='footer'>
        <a href="#logo" className='footer_logo'>AVK</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
        <div className="footer_socials">
            <a href="http://facebook.com"><FaFacebookF/></a>
            <a href="http://instagram.com"><FiInstagram/></a>
            <a href="http://twitter.com"><FiTwitter/></a>

        </div>
        <div className="footer_copyright">
            <small>&copy; yenkye all rights reserved</small>
        </div>

    </footer>
  )
}

export default Footer