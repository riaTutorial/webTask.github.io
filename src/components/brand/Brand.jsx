import React from 'react'
import './brand.css'
import{img4,img5,img6,img7,img8} from './import'

function Brand() {
  return (
    <>
    <div className='brand'>
       <div className='brand-body'>
         <div>
            <img src={img4} alt='google'/>
         </div>
         <div>
            <img src={img5} alt='slack'/>
         </div>
         <div>
            <img src={img6} alt='atlas'/>
         </div>
         <div>
            <img src={img7} alt='dropbox'/>
         </div>
         <div>
            <img src={img8} alt='shopify'/>
         </div>
       </div>
    </div>
    </>
  )
}

export default Brand
