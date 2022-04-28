import './portfolio.css'
import weatherapp from '../../assets/weatherapp.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={weatherapp} alt="Weather App" />
          </div>

          <h3>React Weather App</h3>
          <a
            href="https://github.com/yingerliang/react-weather-app"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://react-weather-app-becca.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={weatherapp} alt="Weather App" />
          </div>

          <h3>React Weather App</h3>
          <a
            href="https://github.com/yingerliang/react-weather-app"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://react-weather-app-becca.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={weatherapp} alt="Weather App" />
          </div>

          <h3>React Weather App</h3>
          <a
            href="https://github.com/yingerliang/react-weather-app"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://react-weather-app-becca.netlify.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
