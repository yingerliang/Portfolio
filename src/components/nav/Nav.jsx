import { React, useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCode } from 'react-icons/bs'
import { BiBook } from 'react-icons/bi'
import { BiMessageDetail } from 'react-icons/bi'

const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActive('#skills')}
        className={active === '#skills' ? 'active' : ''}
      >
        <BsCode />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav
