import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const pages = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <div className='header-container'>
      <h1 className = 'header-title'><Link to="/" className="hover-underline-logo">Raízes da Terra</Link></h1>
      {/* <img src={logo} alt="Logo" /> */}

      <nav className='header-nav'>

        {pages.map((page, index) => (
          <Link key={index} to={page.path} className="hover-underline">
            {page.name}
          </Link>
        ))}

      </nav>
    </div>
  )
}

export default Header