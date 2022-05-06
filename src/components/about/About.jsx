import './about.css'
import about from '../../assets/about.svg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_text">
          <p>
            I am a Frontend Developer with a passion for making clean and
            responsive websites and web applications.
          </p>
          <p>
            Technology has always been a major interest in my life. Combining
            modern web technology with an attention to detail is the best way to
            guarantee a beautiful modern website.
          </p>
        </div>
        <div className="about_img">
          <img src={about} alt="about" className="" />
        </div>
      </div>
    </section>
  )
}

export default About
