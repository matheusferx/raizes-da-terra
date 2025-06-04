import React from 'react'
import { Link } from 'react-router-dom'

const SectionHome = ({ title, description, image, category }) => {
  return (
    <Link to={`/produtos?category=${category}`} className='card-base-link'>
      <div className='card-base'>
        <img src={image} alt={title} className='card-base-image-home'/> 
        <h3 className='card-base-title'>{title}</h3>
        <p className='card-base-description'>{description}</p>
      </div>
    </Link>
  )
}

export default SectionHome