import React from 'react'
import './blog.css'
import {Article} from '../../components'
import img10 from '../../assets/blog01.png'
import img11 from '../../assets/blog02.png'
import img12 from '../../assets/blog03.png'
import img13 from '../../assets/blog04.png'
import img14 from '../../assets/blog05.png'

function Blog() {
  return (
    <>
    <div className='blog'>
       <div className='blog-head'>
        <h1> We are blogging about it.</h1>
       </div>
       <div className='blog-container'>
          <div className='blog-container-groupA'>
           <Article imgUrl={img10} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
          </div>
          <div className='blog-container-groupB'>
          <Article imgUrl={img11} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
          <Article imgUrl={img12} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
          <Article imgUrl={img13} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
          <Article imgUrl={img14} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
          </div>
       </div>
    </div>
    </>
  )
}

export default Blog
