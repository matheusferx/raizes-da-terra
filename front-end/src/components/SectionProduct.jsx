import React from 'react'
import { Link } from 'react-router-dom'

const SectionProduct = ({ id, title, description, price, image, category }) => {
  return (
    <Link to={`/produtos/${id}`} className='card-base'>
      <div>
        <img className='card-base-image' src={image} alt={title}/> 
        <h3 className='card-base-title'>{title}</h3>
        <p className='card-base-description'>{description}</p>
        <span className='card-base-category card-base-category-bold'>categoria: {category} &nbsp; R$ {price}</span>
      </div>
    </Link>
  )
}

export default SectionProduct