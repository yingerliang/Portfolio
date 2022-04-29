import { React, useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { BsCodeSlash } from 'react-icons/bs'
import { VscFileSubmodule } from 'react-icons/vsc'
import { HiOutlineMail } from 'react-icons/hi'

const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive('#home')}
        className={active === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#skills"
        onClick={() => setActive('#skills')}
        className={active === '#skills' ? 'active' : ''}
      >
        <BsCodeSlash />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}
      >
        <VscFileSubmodule />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <BsPersonCircle />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <HiOutlineMail />
      </a>
    </nav>
  )
}

export default Nav
