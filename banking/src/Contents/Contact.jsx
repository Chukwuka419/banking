import React, { useState } from 'react'

import "../Style/contact.css"

const Contact = () => {

  const [name,setName] =useState ('')
  const [email, setEmail] =useState ('')
  const [location, setLocation] =useState ('')
  const [number, setNumber] =useState ('')
  const [message, setMessage] =useState ('')

  
  // sendEmail function
  function SendEmail(e){
    e.preventDefault();
    e.target.reset();


//     emailjs
//     .sendFrom(
// "service_ey9o75u",
// "template_r0i12hi",
// e.target

//     )

    
  }


  return (
    <div className='contact_wrapper'>
    <h2 className="heading">Contact , <span> Me!</span></h2>

    <form onSubmit={SendEmail}>
    <div className="input_box">
    <div className="input_contact">
    <label htmlFor="Full Name"> 
    <input type="text"  placeholder='Full Name' id='name' name='Full Name ' value={name} 
    onChange={e => setName(e.target.value)}/>
    </label>
    
    <label htmlFor="Full Name"> 
    <input type="text"  placeholder='Email Address' id='email' name='Email Address ' value={email} 
    onChange={e => setEmail(e.target.value)}/>
    </label>
    </div>
    </div>


    <div className="input_box">
    <div className="input_contact">
    <label htmlFor="Full Name"> 
    <input type="text"  placeholder='Location' id='location' location='Location ' value={location} 
    onChange={e => setLocation(e.target.value)}/>
    </label>
    
    <label htmlFor="Full Name"> 
    <input type="text"  placeholder='Number' id='name' number='Namber ' value={number} 
    onChange={e => setNumber(e.target.value)}/>
    </label>
    </div>
    </div>

    <div className="textarea_contact">
    <label htmlFor="Full Name"> 
    <textarea name="" id="Message" cols="30" rows="10" placeholder='Your Message' message='massage' value={message} 
    onChange={e => setMessage(e.target.value)}></textarea>
    </label>
    </div>
    <div className="btn_contact">
    <button type='Submit' className='btn'><a href="">Submit</a></button>
    </div>
    </form>
      
    </div>
  )
}

export default Contact;
