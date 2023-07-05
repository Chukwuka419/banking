import React from 'react'
import "../Style/work.css"

const Work = () => {
  return (
    <div className='Skills_wrapper' id='Skills_wrapper'>
    <h2 className="heading">My <span>Skills</span></h2>

    <div className="skills_row">
    <div className="skills_column">
    <h3 className="title">Coding Skills</h3>

    <div className="skills_box">
    <div className="skills_content">
    <div className="progress">
    <h3>HTML <span> 100%</span></h3>
    <div className="bar"><span></span></div>
    
    </div>
    <div className="progress">
    <h3>CSS <span> 100%</span></h3>
    <div className="bar"><span></span></div>
    
    </div><div className="progress">
    <h3>JavaScript <span> 50%</span></h3>
    <div className="bar"><span></span></div>
    
    </div><div className="progress">
    <h3>Reactjs <span> 60%</span></h3>
    <div className="bar"><span></span></div>
    
    </div>
    </div>
    </div>
    </div>
    
    <div className="skills_change">
    <h3 className="writing">Professional Skills</h3>

    <div className="skills_change_box">
    <div className="skills_change_content">
    <div className="Stanley6">
    <h3>Web Devoloperment <span> 80%</span></h3>
    <div className="bar"><span></span></div>
    
    </div>
    <div className="Stanley6">
    <h3>photography <span> 20%</span></h3>
    <div className="bar"><span></span></div>
    
    </div><div className="Stanley6">
    <h3>Video Edting <span> 20%</span></h3>
    <div className="bar"><span></span></div>
    
    </div><div className="Stanley6">
    <h3>Basketball <span> 70%</span></h3>
    <div className="bar"><span></span></div>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    

    </div>
  )
}

export default Work;