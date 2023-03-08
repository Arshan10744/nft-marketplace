import React from 'react'
import InfoSection from '../InfoSection'
import NavigationBar from '../NavBar/NavigationBar'
import "./About.css";

const About = () => {
  return (
    <div>
        
        <NavigationBar />
        <h1 className='absolute-Center about-heading heading-gradient'>ABOUT US</h1>
        <p className='about-desc absolute-Center'>Providing A Platform to Experience Most Trending And Extraordinary NFTs.</p>
        <InfoSection />
    </div>
  )
}

export default About