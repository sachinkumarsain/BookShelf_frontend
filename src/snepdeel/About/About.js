import React from 'react'
// import AboutImage from './AboutImage-2.jpg'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='about'>
        <div className="banner">
          <div className='bannerContent'>
          <h1>BookShelf</h1>
          <p>The right book in the right hands at the right time
            can change the world.The right book in the right hands at the right time
            can change the world.</p>
          {/* <img src={AboutImage}/> */}
          <Link to="">LEARN MORE ABOUT US</Link>
          </div>
          {/* <section>
          <div className='box'>

          </div>
          </section> */}
        </div>
      </div>
    </>
  )
}

export default About