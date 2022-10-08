import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {BiMessageAlt} from 'react-icons/bi'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
         <a  href='#'  onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><ImBooks/></a>
        <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageAlt/></a>

    </nav>
  )
}

export default Nav