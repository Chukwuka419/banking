import React from 'react'
import "../Style/section.css"
import Btn from "../Contents/Btn"
import Right from "../Image/0_3.png"

const Section = () => {
  return (
    <div className="section_wrapper">
    <div className="section_row">
    <div className="section_column">
 <div className="img_section">
 <img src={Right}alt="" />
 </div>
    </div>

    <div className="section_column">
   <div className="inner">
   <h1 > Hi, Am Stanley Cool</h1>
   <h2>Web Development</h2>
   <p>
   Web development has emerged as an essential and rapidly evolving field, revolutionizing the way we interact, communicate, and conduct business in the digital age. From simple static web pages to complex dynamic applications, web development encompasses a broad range of technologies and skills that enable the creation and maintenance of websites and web-based systems. In this article, we will explore the world of web development, its significance in today's digital landscape, and the key elements involved in building captivating and functional web experiences</p>
   <Btn/>
   </div>

   
    </div>

    
    </div>
    </div>
  )
}

export default Section;