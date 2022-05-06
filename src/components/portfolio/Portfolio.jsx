import './portfolio.css'
import weatherapp from '../../assets/weatherapp.png'
import { BsGithub } from 'react-icons/bs'
import { BsGlobe } from 'react-icons/bs'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: weatherapp,
      title: 'React Weather App',
      description:
        'A weather app built with HTML, CSS and React. Uses an API to pull in live weather data from your current location or searchable location.',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
    {
      id: 2,
      image: weatherapp,
      title: 'React Weather App',
      description:
        'A weather app built with HTML, CSS and React. Uses an API to pull in live weather data from your current location or searchable location.',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
    {
      id: 3,
      image: weatherapp,
      title: 'React Weather App',
      description:
        'A weather app built with HTML, CSS and React. Uses an API to pull in live weather data from your current location or searchable location.',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className="portfolio_description">{description}</p>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  <BsGlobe />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
