import React from 'react'
import './Portfolio.css'
import {data } from './portfoliodata'




function Portfolio() {
  return (
    <section id='portfolio'>
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
            {
               data.map(({id,image,title,github})=>{
                return(
                    
                    <article key={id} className='portfolio_item'>
                        <div className="portfolio_item-image">
                    <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className='btn btn-primary'>Buy Online</a>
                
                </div>
                        
                   </article  >
                
                )
               })
               

            }
        </div>


        

    </section>
  )
}

export default Portfolio