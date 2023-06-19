import React from 'react'
import './feature.css'
import {data1} from './FeatureData'

export default function Feature() {
  return (
    <>
    <div className='feature' id='features'>
       <div className='feature-heading'>
         <h1>
         The Future is Now and you Just Need To Realize It. Step into Future
          Today & Make It Happen
         </h1>
         <p>Request Early Access to Get Started</p>
       </div>
       <div className='feature-container'>
          {data1.map((file)=>{
            return(
                <div className='feature-container-part'>
                <h2>{file.title}</h2>
                <p>{file.text}</p>
                </div>
            )
          })}
       </div>
    </div>
    </>
  )
}
