import React from 'react'
import "../Style/about.css"
import Pic from "../Image/IMG-20220912-WA0146.jpg"
import Btn from "../Contents/Btn"


const About = ({}) => {
  
  return (
    <div className='about_wrapper'>
    <div className="title_wrapper">
    <h1>About <span>Me</span></h1>
    <h2>Frontend Developer</h2>
    <div className="about_img">
    <img src={Pic} alt="" />
    <span className='circle_spin_about'></span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, magni? Illum, culpa architecto?  Facere id voluptatum  <br /> minima magnam   repudiandae? Nulla nobis facilis vel, ea distinctio quasi exercitationem reiciendis deleniti voluptate!</p>
      <Btn />
    
    </div>
    
    </div>
  )
}

export default About;