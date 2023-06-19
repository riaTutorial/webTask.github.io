import React from 'react'
import './footer.css'
import img1 from '../../assets/logo.svg';

export default function Footer() {
  return (
   <>
   <div className='footer'>
      <div className='footer-heading'>
        <h1>Do you want to step into the future before others</h1>
      </div>
      <div>
        <button type='button' className='btn'>Request Early Access</button>
      </div>
      <div className='footer-container'>
        <div className='footer-container-part'>
        <img src={img1} alt='logo' width="100px" height="100px"/>
        {/* <h1>GPT-3</h1> */}
        <p>Note that the development build is not optimized</p>
        </div>
        <div className='footer-container-part'>
          <h3>Links</h3>
          <ul className='ulist'>
            <li><a href='#overons'>Overons</a></li>
            <li><a href='#sc'>Social Media</a></li>
            <li><a href='#counter'>Counters</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-container-part'>
        <h3>Company</h3>
          <ul className='ulist'>
            <li><a href='#overons'>Terms & Conditions</a></li>
            <li><a href='#sc'>Privacy & Policy</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-container-part'>
        <h3>Get in touch</h3>
          <p className='margin'>CrecherWood K12 Lauson Street, Rmania</p>
          <p>080-135248</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p><sup>c</sup> 2021 GPT-3. All rights reserved.</p>
      </div>
   </div>
   </>
  )
}
