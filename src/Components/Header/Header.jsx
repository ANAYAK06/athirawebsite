import React from 'react'
import './Header.css'
import me from '../../assets/profile.png'
import CTA from './CTA'


function Header() {
  return (
    <header>
         <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>Athira V K</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-items">Writer</div>
                        <div className="i-title-items">Poet</div>
                        <div className="i-title-items">Content Writer</div>
                    </div>

                </div>
                <p className="i-desc">
                Hailing from Pattambi, Palakkad district did her Under Graduation and Post Graduation in English Language and Literature from two educational institutions that comes under Calicut University.
                </p>
                <CTA />
            </div>
            
             
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={me} alt="" className="i-img" />
        </div>
    </div>

    </header>
  )
}

export default Header