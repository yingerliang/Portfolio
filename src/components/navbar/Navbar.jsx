import './navbar.css'
import { React, useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        Rebecca
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#home" onClick={closeMobileMenu} className="nav-links">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" onClick={closeMobileMenu} className="nav-links">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" onClick={closeMobileMenu} className="nav-links">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" onClick={closeMobileMenu} className="nav-links">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={closeMobileMenu} className="nav-links">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
