import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        REBECCA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/yingerliang">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/rebecca-l-626185130/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rebecca Liang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
