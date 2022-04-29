import './portfolio.css'
import weatherapp from '../../assets/weatherapp.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: weatherapp,
      title: 'React Weather App',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
    {
      id: 2,
      image: weatherapp,
      title: 'React Weather App',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
    {
      id: 3,
      image: weatherapp,
      title: 'React Weather App',
      github: 'https://github.com/yingerliang/react-weather-app',
      demo: 'https://react-weather-app-becca.netlify.app/',
    },
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live Demo
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
