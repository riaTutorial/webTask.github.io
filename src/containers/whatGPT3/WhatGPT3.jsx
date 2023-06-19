import React from 'react'
import './whatGPT3.css'
import {data} from './data'


function WhatGPT3() {
  return (
   <>
   <div className='whatgpt' id='wgpt3'>
    <div className='whatgpt-feature'>
      <div className='whatgpt-feature-title'>
        <div className='underline'></div>
        <h1>What is GPT-3</h1>
      </div>
      <div className='whatgpt-feature-text'>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis, est necessitatibus delectus ipsum numquam libero veritatis suscipit vel expedita, in</p>
      </div>
    </div>
    <div className='whatgpt-head'>
       <h2>The possibilities are beyond your imagination</h2>
       <p>Explore The Library</p>
    </div>
    <div className='whatgpt-body'>
        {
            data.map((file)=>
            {
                return(
                    <div className='whatgpt-body-part'>
                        <div className='underline2'></div>
                      <h2>{file.title}</h2>
                      <p>{file.text}</p>
                    </div>
                )
            })
        }
      
    </div>
   </div>
   </>
  )
}
export default WhatGPT3
