import './header.css'
import CTA from './CTA'
import logo from '../../assets/computer.svg'
import HSocials from './HSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <div className="header_content">
          <h5>Hello, I'm</h5>
          <h1>Rebecca</h1>
          <h5>Frontend Developer based in New Zealand</h5>
          <CTA />
        </div>

        <div className="header_logo">
          <img src={logo} alt="Header" className="logo" />
        </div>
        <HSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
