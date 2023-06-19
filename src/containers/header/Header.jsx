import React from 'react'
import './header.css'
import img2 from '../../assets/people.png'
import img3 from '../../assets/ai.png'

function Header() {
  return (
    <>
    <div className='header' id='home'>
        <div className='header-body'>
         <h1>
         Let's Build Something amazing with GPT-3 OpenAI
         </h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus maiores pariatur nesciunt laboriosam eius, illo voluptatem quaerat veritatis </p>
        <div className='header-box'>
         <input type='email' name='' placeholder='Your Email'/>
         <button type='button'>get Started</button>
        </div>
        <div className='header-image'>
         <img src={img2} alt='people'/>
         <p>1000 people requested access a visit in last 24 months</p>
        </div>
        </div>
        <div className='header-secondImg'>
         <img src={img3} alt='ai'/>
        </div>
    </div>
    </>
  )
}

export default Header
