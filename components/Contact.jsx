import React from 'react'
import ContactImage from "./About_Images/ContactImage.jpg"
const Contact = () => {
  return (
    <div className='contact_page'>
    <h1 style={{
      textAlign: "center",
      margin: "3rem 0 4rem 0",
      textDecoration: "underline green 0.25rem",
      textUnderlinePosition: "under",
    }}>Contact Us</h1>

    <div className="contact_layout">
          <div style={{display:"flex", justifyContent:"center"}}>
            <form action="" style={{border:"2px solid lightgrey", padding:"2rem 3rem", borderRadius:"1rem"}}>
              
             <label htmlFor="text"><h1>Name</h1></label>
             <input type="text" name='text' id='text' placeholder=' Name' style={{padding:"2px", borderRadius:"0.2rem"}} required/><br /><br />
             <label htmlFor="num"><h1>Mobile</h1></label>
             <input type="text" name="num" id="num" pattern="[1-9]{1}[0-9]{9}" style={{padding:"2px", borderRadius:"0.2rem"}} placeholder='Phone' required/><br /><br />
             <label htmlFor="Email"><h1>Email</h1></label>
             <input type="email" name="Email" id="Email" style={{padding:"2px", borderRadius:"0.2rem"}}  required/><br /><br />
              <h1>Message</h1>
             <textarea name="" id="" cols="30" rows="10" placeholder=' Message' style={{padding:"2px", borderRadius:"0.2rem"}}></textarea><br />
             <div style={{display:"flex",justifyContent:"center", margin:"2rem"}}>
             <button type="submit" style={{padding:"2px"}}>Submit</button></div>
             </form>
          </div>
    </div>

    </div>
  )
}

export default Contact