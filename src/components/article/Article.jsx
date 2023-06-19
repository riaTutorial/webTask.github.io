import React from 'react'
import './article.css'

 function Article({imgUrl,imgDate,title}) {
  return (
    <div className='article'>
      <div className='article-image'>
        <img src={imgUrl} alt='blog'/>
      </div>
      <div className='article-container'>
        <div>
       <p>{imgDate}</p>
       <h3>{title}</h3>
       </div>
       <p>Read full article</p>
      </div>  
    </div>
  )
}

export default Article
