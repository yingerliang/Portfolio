import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/yingerliang" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rebecca-l-626185130/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  )
}

export default HSocials
