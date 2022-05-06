import './skills.css'
import img from '../../assets/code.svg'
import { FaMousePointer } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skills_container">
        <div className="skills">
          <div className="skills_image">
            <img src={img} alt="Skill" className="skill_image" />
          </div>
        </div>

        <div className="skills_content">
          <div className="skills_cards">
            <article className="skills_card">
              <h5>
                <FaMousePointer className="skills_icon" /> Developer Skills
              </h5>
              <small>
                A great knowledge of HTML / CSS, Javascript and React.js. I make
                responsive applications with Bootstrap with interactive UI's
                designs.
              </small>
            </article>
            <article className="skills_card">
              <h5>
                <MdDesignServices className="skills_icon" /> UI Design
              </h5>
              <small>
                A love for design and a good eye for creativity. I have
                proficiency in wireframing, color theory and visual
                communication.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
